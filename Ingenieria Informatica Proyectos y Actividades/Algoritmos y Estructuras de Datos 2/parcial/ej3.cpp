#include <iostream>
#include <vector>
using namespace std;

class MatrizAdyacencia
{
private:
    vector<vector<bool>> matriz;

public:
    MatrizAdyacencia(vector<vector<bool>> matriz_) : matriz(matriz_)
    {
        imprimirMatriz();
    }

    bool tieneCicloDeLongitud3()
    {
        int n = matriz.size();

        // Verifica si hay un ciclo de longitud 3
        for (int i = 0; i < n; ++i)
        {
            for (int j = 0; j < n; ++j)
            {
                if (matriz[i][j])
                {
                    for (int k = 0; k < n; ++k)
                    {
                        if (matriz[j][k] && matriz[k][i])
                        {
                            return true; // Ciclo de longitud 3 encontrado
                        }
                    }
                }
            }
        }
        return false; // No se encontraron ciclos de longitud 3
    }

    int contarCaminosSimples(int inicio, int destino)
    {
        int numCaminos = 0;
        vector<bool> visitado(matriz.size(), false);

        contarCaminosRecursivo(inicio - 1, destino - 1, visitado, numCaminos);

        return numCaminos;
    }

private:
    void imprimirMatriz()
    {
        cout << "MATRIZ DE ADYACENCIA" << endl;
        for (const vector<bool> &fila : matriz)
        {
            cout << "|";
            bool primerElemento = true;
            for (bool elemento : fila)
            {
                if (!primerElemento)
                {
                    cout << "  ";
                }
                cout << elemento;
                primerElemento = false;
            }
            cout << "|" << endl;
        }
    }

    void contarCaminosRecursivo(int actual, int destino, vector<bool> &visitado, int &numCaminos)
    {
        if (actual == destino)
        {
            numCaminos++;
            return;
        }

        visitado[actual] = true;

        for (int i = 0; i < matriz.size(); ++i)
        {
            if (matriz[actual][i] && !visitado[i])
            {
                contarCaminosRecursivo(i, destino, visitado, numCaminos);
            }
        }

        visitado[actual] = false;
    }
};

int main()
{
    MatrizAdyacencia matriz({
        {0, 1, 1, 0, 0},
        {1, 0, 1, 0, 1},
        {1, 1, 0, 0, 0},
        {0, 0, 0, 0, 1},
        {0, 1, 0, 1, 0}
    });

    if (matriz.tieneCicloDeLongitud3())
    {
        cout << "El grafo tiene un ciclo de longitud 3." << endl;
    }
    else
    {
        cout << "El grafo no tiene ciclos de longitud 3." << endl;
    }

    int inicio = 1; // Vértice de inicio
    int destino = 4; // Vértice de destino

    int numCaminos = matriz.contarCaminosSimples(inicio, destino);

    cout << "Número de caminos simples entre el vértice " << inicio << " y el vértice " << destino << ": " << numCaminos << endl;

    return 0;
}

