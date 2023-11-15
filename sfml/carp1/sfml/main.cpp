#include <SFML/Graphics.hpp>
#include <iostream>
#include <vector>
#include <cmath>
#include "graphAnaliser.h"
using namespace std;

enum TipoGrafo
{
    NoDirigido,
    Dirigido
};

struct Nodo
{
    sf::CircleShape forma;
    sf::Color color;
    sf::Text etiqueta;
};

struct AristaDirigida
{
    sf::VertexArray linea;
    Nodo *nodoInicio;
    Nodo *nodoFin;
    sf::Text etiqueta;
};

struct AristaNoDirigida
{
    sf::VertexArray linea;
    Nodo *nodoInicio;
    Nodo *nodoFin;
};

TipoGrafo seleccionarTipoGrafo(sf::RenderWindow &ventana, sf::Font &fuente, bool &debeCerrar)
{
    sf::Text titulo;
    titulo.setFont(fuente);
    titulo.setString("Seleccione el tipo de grafo:");
    titulo.setCharacterSize(20);
    titulo.setFillColor(sf::Color::White);
    titulo.setPosition(10, 10);

    sf::Text textoNoDirigido;
    textoNoDirigido.setFont(fuente);
    textoNoDirigido.setString("Grafo No Dirigido (Presiona 'N')");
    textoNoDirigido.setCharacterSize(16);
    textoNoDirigido.setFillColor(sf::Color::White);
    textoNoDirigido.setPosition(10, 50);

    sf::Text textoDirigido;
    textoDirigido.setFont(fuente);
    textoDirigido.setString("Grafo Dirigido (Presiona 'D')");
    textoDirigido.setCharacterSize(16);
    textoDirigido.setFillColor(sf::Color::White);
    textoDirigido.setPosition(10, 80);

    while (ventana.isOpen())
    {
        sf::Event evento;
        while (ventana.pollEvent(evento))
        {
            if (evento.type == sf::Event::Closed)
            {
                ventana.close();
                debeCerrar = true;
                return TipoGrafo::Dirigido;
            }
            else if (evento.type == sf::Event::KeyPressed)
            {
                if (evento.key.code == sf::Keyboard::D)
                {
                    debeCerrar = false;
                    return TipoGrafo::Dirigido;
                }
                else if (evento.key.code == sf::Keyboard::N)
                {
                    debeCerrar = false;
                    return TipoGrafo::NoDirigido;
                }
            }
        }

        if (!ventana.isOpen())
        {
            debeCerrar = true;
            return TipoGrafo::Dirigido;
        }

        ventana.clear(sf::Color::Black);
        ventana.draw(titulo);
        ventana.draw(textoNoDirigido);
        ventana.draw(textoDirigido);
        ventana.display();
    }

    debeCerrar = true;
    return TipoGrafo::Dirigido;
}

void ejecutarGrafoDirigido(sf::RenderWindow &ventanaGrafo, sf::Font &fuente)
{
    vector<Nodo> nodos;
    vector<AristaDirigida> aristasDirigidas;
    Nodo *nodoSeleccionado = nullptr;

    sf::Text textoExplicativo;
    textoExplicativo.setFont(fuente);
    textoExplicativo.setString("Crear nodo --> 1 clic derecho\n"
                               "Crear arista --> 1 clic izquierdo sobre el nodo origen y destino\n"
                               "Eliminar grafo --> X\n"
                               "Volver al men� --> Enter\n");
    textoExplicativo.setCharacterSize(16);
    textoExplicativo.setFillColor(sf::Color::White);
    textoExplicativo.setPosition(10, 10);

    while (ventanaGrafo.isOpen())
    {
        sf::Event evento;
        while (ventanaGrafo.pollEvent(evento))
        {
            if (evento.type == sf::Event::Closed)
                ventanaGrafo.close();
            else if (evento.type == sf::Event::MouseButtonPressed)
            {
                if (evento.mouseButton.button == sf::Mouse::Right)
                {
                    sf::Vector2f nuevaPosicionNodo(static_cast<float>(evento.mouseButton.x), static_cast<float>(evento.mouseButton.y));
                    bool nodoSuperpuesto = false;

                    for (const Nodo &nodoExistente : nodos)
                    {
                        float distancia = sqrt(pow(nuevaPosicionNodo.x - nodoExistente.forma.getPosition().x, 2) +
                                               pow(nuevaPosicionNodo.y - nodoExistente.forma.getPosition().y, 2));
                        if (distancia < nodoExistente.forma.getRadius() + 2 * 20.0f)
                        {
                            nodoSuperpuesto = true;
                            break;
                        }
                    }

                    if (!nodoSuperpuesto)
                    {
                        Nodo nuevoNodo;
                        nuevoNodo.forma.setRadius(20);
                        nuevoNodo.forma.setFillColor(sf::Color(rand() % 256, rand() % 256, rand() % 256));
                        nuevoNodo.forma.setPosition(nuevaPosicionNodo);
                        nuevoNodo.color = nuevoNodo.forma.getFillColor();

                        nuevoNodo.etiqueta.setFont(fuente);
                        nuevoNodo.etiqueta.setString(to_string(nodos.size()));
                        nuevoNodo.etiqueta.setCharacterSize(20);
                        nuevoNodo.etiqueta.setFillColor(sf::Color::Black);
                        sf::FloatRect rectTexto = nuevoNodo.etiqueta.getLocalBounds();
                        nuevoNodo.etiqueta.setOrigin(rectTexto.left + rectTexto.width / 2.0f, rectTexto.top + rectTexto.height / 2.0f);
                        nuevoNodo.etiqueta.setPosition(nuevoNodo.forma.getPosition() + sf::Vector2f(nuevoNodo.forma.getRadius(), nuevoNodo.forma.getRadius()));

                        nodos.push_back(nuevoNodo);
                    }
                }
                else if (evento.mouseButton.button == sf::Mouse::Left)
                {
                    sf::Vector2f posicionRaton(static_cast<float>(evento.mouseButton.x), static_cast<float>(evento.mouseButton.y));
                    bool clicEnNodo = false;

                    for (Nodo &nodo : nodos)
                    {
                        if (nodo.forma.getGlobalBounds().contains(posicionRaton))
                        {
                            if (nodoSeleccionado == nullptr)
                            {
                                nodoSeleccionado = &nodo;
                            }
                            else if (nodoSeleccionado != &nodo)
                            {
                                AristaDirigida nuevaArista;
                                sf::Vector2f inicioCentro = nodoSeleccionado->forma.getPosition() + sf::Vector2f(nodoSeleccionado->forma.getRadius(), nodoSeleccionado->forma.getRadius());
                                sf::Vector2f finCentro = nodo.forma.getPosition() + sf::Vector2f(nodo.forma.getRadius(), nodo.forma.getRadius());
                                nuevaArista.linea.setPrimitiveType(sf::Lines);
                                nuevaArista.linea.resize(2);
                                nuevaArista.linea[0] = sf::Vertex(inicioCentro, sf::Color::White);
                                nuevaArista.linea[1] = sf::Vertex(finCentro, sf::Color::White);
                                nuevaArista.nodoInicio = nodoSeleccionado;
                                nuevaArista.nodoFin = &nodo;

                                nuevaArista.etiqueta.setFont(fuente);
                                nuevaArista.etiqueta.setString(nodoSeleccionado->etiqueta.getString() + " -> " + nodo.etiqueta.getString());
                                nuevaArista.etiqueta.setCharacterSize(14);
                                nuevaArista.etiqueta.setFillColor(sf::Color::White);
                                nuevaArista.etiqueta.setPosition((inicioCentro + finCentro) / 2.0f);

                                aristasDirigidas.push_back(nuevaArista);
                                nodoSeleccionado = nullptr;
                            }
                            clicEnNodo = true;
                            break;
                        }
                    }
                }
            }
            else if (evento.type == sf::Event::KeyPressed)
            {
                if (evento.key.code == sf::Keyboard::X)
                {
                    aristasDirigidas.clear(); // Limpiar aristas
                    nodos.clear();            // Limpiar nodos
                    nodoSeleccionado = nullptr;
                }
                else if (evento.key.code == sf::Keyboard::Return)
                {
                    ventanaGrafo.close(); // Cerrar la ventana
                }
            }
        }

        ventanaGrafo.clear(sf::Color::Black);

        for (const AristaDirigida &arista : aristasDirigidas)
        {
            ventanaGrafo.draw(arista.linea);
            ventanaGrafo.draw(arista.etiqueta);
        }

        for (const Nodo &nodo : nodos)
        {
            ventanaGrafo.draw(nodo.forma);
            ventanaGrafo.draw(nodo.etiqueta);
        }

        ventanaGrafo.draw(textoExplicativo);

        ventanaGrafo.display();
    }
}

void ejecutarGrafoNoDirigido(sf::RenderWindow &ventanaGrafo, sf::Font &fuente)
{
    vector<Nodo> nodos;
    vector<AristaNoDirigida> aristasNoDirigidas;
    Nodo *nodoSeleccionado = nullptr;
    vector<vector<int>> Grafo;
    sf::Text textoExplicativo;
    textoExplicativo.setFont(fuente);
    textoExplicativo.setString("Crear nodo --> 1 clic derecho\n"
                               "Crear arista --> 1 clic izquierdo sobre los nodos a unir\n"
                               "Eliminar grafo --> X\n"
                               "Volver al men� --> Enter\n"
                               "Analizar Grafo --> Z\n");
    textoExplicativo.setCharacterSize(16);
    textoExplicativo.setFillColor(sf::Color::Black);
    textoExplicativo.setPosition(10, 10);

    while (ventanaGrafo.isOpen())
    {
        sf::Event evento;
        while (ventanaGrafo.pollEvent(evento))
        {
            if (evento.type == sf::Event::Closed)
                ventanaGrafo.close();
            else if (evento.type == sf::Event::MouseButtonPressed)
            {
                if (evento.mouseButton.button == sf::Mouse::Right)
                {
                    sf::Vector2f nuevaPosicionNodo(static_cast<float>(evento.mouseButton.x), static_cast<float>(evento.mouseButton.y));
                    bool solapamientoNodo = false;

                    for (const Nodo &nodoExistente : nodos)
                    {
                        float distancia = sqrt(pow(nuevaPosicionNodo.x - nodoExistente.forma.getPosition().x, 2) +
                                               pow(nuevaPosicionNodo.y - nodoExistente.forma.getPosition().y, 2));
                        if (distancia < nodoExistente.forma.getRadius() + 2 * 20.0f)
                        {
                            solapamientoNodo = true;
                            break;
                        }
                    }

                    if (!solapamientoNodo)
                    {
                        Nodo nuevoNodo;
                        nuevoNodo.forma.setRadius(20);
                        nuevoNodo.forma.setFillColor(sf::Color(rand() % 256, rand() % 256, rand() % 256));
                        nuevoNodo.forma.setPosition(nuevaPosicionNodo);
                        nuevoNodo.color = nuevoNodo.forma.getFillColor();

                        nuevoNodo.etiqueta.setFont(fuente);
                        nuevoNodo.etiqueta.setString(to_string(nodos.size()));

                        vector<int> nuevoVector(nodos.size() + 1);
                        Grafo.push_back(nuevoVector);
                        for (int i = 0; i < nodos.size(); i++)
                        {
                            Grafo[i].push_back(0);
                        }

                        nuevoNodo.etiqueta.setCharacterSize(20);
                        nuevoNodo.etiqueta.setFillColor(sf::Color::White);
                        sf::FloatRect rectanguloTexto = nuevoNodo.etiqueta.getLocalBounds();
                        nuevoNodo.etiqueta.setOrigin(rectanguloTexto.left + rectanguloTexto.width / 2.0f, rectanguloTexto.top + rectanguloTexto.height / 2.0f);
                        nuevoNodo.etiqueta.setPosition(nuevoNodo.forma.getPosition() + sf::Vector2f(nuevoNodo.forma.getRadius(), nuevoNodo.forma.getRadius()));

                        nodos.push_back(nuevoNodo);
                    }
                }
                else if (evento.mouseButton.button == sf::Mouse::Left)
                {
                    sf::Vector2f posicionMouse(static_cast<float>(evento.mouseButton.x), static_cast<float>(evento.mouseButton.y));
                    bool clicEnNodo = false;

                    for (Nodo &nodo : nodos)
                    {
                        if (nodo.forma.getGlobalBounds().contains(posicionMouse))
                        {

                            if (nodoSeleccionado == nullptr)
                            {
                                nodoSeleccionado = &nodo;
                            }
                            else if (nodoSeleccionado != &nodo)
                            {
                                AristaNoDirigida nuevaAristaNoDirigida;
                                sf::Vector2f centroInicio = nodoSeleccionado->forma.getPosition() + sf::Vector2f(nodoSeleccionado->forma.getRadius(), nodoSeleccionado->forma.getRadius());
                                sf::Vector2f centroFin = nodo.forma.getPosition() + sf::Vector2f(nodo.forma.getRadius(), nodo.forma.getRadius());
                                nuevaAristaNoDirigida.linea.setPrimitiveType(sf::Lines);
                                nuevaAristaNoDirigida.linea.resize(2);
                                nuevaAristaNoDirigida.linea[0] = sf::Vertex(centroInicio, sf::Color::Black);
                                nuevaAristaNoDirigida.linea[1] = sf::Vertex(centroFin, sf::Color::Black);

                                string a = nodoSeleccionado->etiqueta.getString();
                                int PrimerSeleccionado = stoi(a);

                                string b = nodo.etiqueta.getString();
                                int segundoSeleccionado = stoi(b);

                                Grafo[PrimerSeleccionado][segundoSeleccionado] = 1;
                                Grafo[segundoSeleccionado][PrimerSeleccionado] = 1;

                                nuevaAristaNoDirigida.nodoInicio = nodoSeleccionado;
                                nuevaAristaNoDirigida.nodoFin = &nodo;

                                aristasNoDirigidas.push_back(nuevaAristaNoDirigida);
                                nodoSeleccionado = nullptr;
                            }
                            clicEnNodo = true;
                            break;
                        }
                    }
                }
            }
            else if (evento.type == sf::Event::KeyPressed)
            {
                if (evento.key.code == sf::Keyboard::X)
                {
                    aristasNoDirigidas.clear(); // Limpiar aristas
                    nodos.clear();              // Limpiar nodos
                    nodoSeleccionado = nullptr;
                }
                else if (evento.key.code == sf::Keyboard::Z)
                {
                    graphAnaliser Analise(Grafo);

                    Analise.findCycles();
                    Analise.removeDuplicateCycles();
                    Analise.printCycles();
                    Analise.printMatrix();
                    Analise.findMinimumSpanningTreeKruskal();
                    Analise.matrixToList();
                }
                else if (evento.key.code == sf::Keyboard::Return)
                {
                    ventanaGrafo.close(); // Cerrar la ventana
                }
            }
        }

        ventanaGrafo.clear(sf::Color::White);

        for (const AristaNoDirigida &arista : aristasNoDirigidas)
        {
            sf::VertexArray linea(sf::Lines, 2);
            linea[0] = arista.linea[0];
            linea[1] = arista.linea[1];
            ventanaGrafo.draw(linea);
        }

        for (const Nodo &nodo : nodos)
        {
            ventanaGrafo.draw(nodo.forma);
            ventanaGrafo.draw(nodo.etiqueta);
        }

        int position = 15;

        ventanaGrafo.draw(textoExplicativo);

        ventanaGrafo.display();
    }
}

int main()
{
    sf::RenderWindow ventanaMenu(sf::VideoMode(400, 300), "Men�");
    ventanaMenu.clear(sf::Color::Black);

    sf::Font fuente;
    if (!fuente.loadFromFile("arial.ttf"))
    {
        cerr << "Error al cargar la fuente" << endl;
        return 1;
    }

    bool cerrarMenu = false;
    bool volverAlMenu = false;

    while (!cerrarMenu)
    {
        TipoGrafo tipoGrafo = seleccionarTipoGrafo(ventanaMenu, fuente, cerrarMenu);

        // Cerrar la ventana del men� despu�s de obtener el tipo de grafo
        if (cerrarMenu)
        {
            break;
        }

        sf::RenderWindow ventanaGrafo;
        if (tipoGrafo == Dirigido)
        {
            ventanaGrafo.create(sf::VideoMode(800, 600), "Grafo Dirigido");
            ventanaGrafo.clear(sf::Color::Black);
            ejecutarGrafoDirigido(ventanaGrafo, fuente);
        }
        else if (tipoGrafo == NoDirigido)
        {
            ventanaGrafo.create(sf::VideoMode(800, 600), "Grafo No Dirigido");
            ventanaGrafo.clear(sf::Color::Black);
            ejecutarGrafoNoDirigido(ventanaGrafo, fuente);
        }

        // Pregunta al usuario si desea volver al men�
        sf::Text textoVolver;
        textoVolver.setFont(fuente);
        textoVolver.setString("Presiona Enter para volver al men�");
        textoVolver.setCharacterSize(16);
        textoVolver.setFillColor(sf::Color::White);
        textoVolver.setPosition(10, 10);

        ventanaGrafo.clear(sf::Color::Black);
        ventanaGrafo.draw(textoVolver);
        ventanaGrafo.display();

        sf::Event eventoVolver;
        while (ventanaGrafo.pollEvent(eventoVolver))
        {
            if (eventoVolver.type == sf::Event::KeyPressed && eventoVolver.key.code == sf::Keyboard::Return)
            {
                volverAlMenu = true;
                ventanaGrafo.close();
            }
            else if (eventoVolver.type == sf::Event::Closed)
            {
                volverAlMenu = false;
                cerrarMenu = true; // Cerrar la aplicaci�n si se cierra la ventana del grafo
                ventanaGrafo.close();
            }
        }

        if (volverAlMenu)
        {
            volverAlMenu = false;
        }
    }

    return 0;
}
