#include <SFML/Graphics.hpp>
#include <iostream>
#include <vector>

// Estructura para representar un nodo del grafo
struct Node {
    int id;
    float x, y;

    Node(int id, float x, float y) : id(id), x(x), y(y) {}
};

// Función para dibujar un nodo en la ventana
void drawNode(sf::RenderWindow& window, const Node& node) {
    sf::CircleShape circle(20); // Crear un círculo para representar el nodo
    circle.setPosition(node.x - 20, node.y - 20);
    circle.setFillColor(sf::Color::Blue);

    // Dibujar el círculo en la ventana
    window.draw(circle);

    // Dibujar el número de nodo dentro del círculo
    sf::Font font;
    if (font.loadFromFile("arial.ttf")) {
        sf::Text text(std::to_string(node.id), font);
        text.setCharacterSize(20);
        text.setPosition(node.x - 5, node.y - 5);
        text.setFillColor(sf::Color::White);

        // Dibujar el número en la ventana
        window.draw(text);
    }
}

// Función para dibujar una arista entre dos nodos
void drawEdge(sf::RenderWindow& window, const Node& node1, const Node& node2) {
    sf::Vertex line[] = {
        sf::Vertex(sf::Vector2f(node1.x, node1.y), sf::Color::Red),
        sf::Vertex(sf::Vector2f(node2.x, node2.y), sf::Color::Red)
    };

    // Dibujar la arista en la ventana
    window.draw(line, 2, sf::Lines);
}

int main() {
    // Crear una ventana de SFML
    sf::RenderWindow window(sf::VideoMode(800, 600), "Grafo");

    // Crear algunos nodos para el grafo
    Node node1(1, 100, 100);
    Node node2(2, 200, 200);
    Node node3(3, 300, 100);

    // Loop principal
    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        // Borrar la ventana
        window.clear(sf::Color::White);

        // Dibujar los nodos y las aristas
        drawEdge(window, node1, node2);
        drawEdge(window, node2, node3);
        drawEdge(window, node1, node3);
        drawNode(window, node1);
        drawNode(window, node2);
        drawNode(window, node3);

        // Mostrar la ventana
        window.display();
    }

    return 0;
}
