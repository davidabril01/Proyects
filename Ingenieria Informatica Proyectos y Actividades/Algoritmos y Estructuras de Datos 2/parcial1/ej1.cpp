#include <iostream>
#include <vector>
#include <list>

using namespace std;

class GrafoListaAdyacencia {
public:
    GrafoListaAdyacencia(list<list<int>> lista_adyacencia) : lista_adyacencia_(lista_adyacencia) {}

    void dibujarGrafo() {
        int i = 0;
        for (const list<int>& vecinos : lista_adyacencia_) {
            cout << "Vertice " << i << ":" << endl;
            for (const int& vecino : vecinos) {
                cout << "  " << vecino << " -| ";
            }
            cout << endl;
            ++i;
        }
    }

private:
    list<list<int>> lista_adyacencia_;
};

class GrafoMatrizAdyacencia {
public:
    GrafoMatrizAdyacencia(vector<vector<int>> matriz_adyacencia) : matriz_adyacencia_(matriz_adyacencia) {}

    void dibujarGrafo() {
        for (int i = 0; i < matriz_adyacencia_.size(); ++i) {
            cout << "Vertice " << i << ":" << endl;
            for (int j = 0; j < matriz_adyacencia_[i].size(); ++j) {
                if (matriz_adyacencia_[i][j] == 1) {
                    cout << "  " << j << " -| ";
                }
            }
            cout << endl;
        }
    }

private:
    vector<vector<int>> matriz_adyacencia_;
};

int main() {
    list<list<int>> lista_adyacencia = {
        {1, 2}, // Vértice 0
        {0, 2, 4}, // Vértice 1
        {0, 1}, // Vértice 2
        {4}, // Vértice 3
        {1, 3}
    };

    GrafoListaAdyacencia grafoLista(lista_adyacencia);

    cout << "Grafo usando Lista de Adyacencia:" << endl;
    grafoLista.dibujarGrafo();

    vector<vector<int>> matriz_adyacencia = {
        {0, 1, 1, 0},
        {1, 0, 1, 1},
        {1, 1, 0, 1},
        {0, 1, 1, 0}
    };

    GrafoMatrizAdyacencia grafoMatriz(matriz_adyacencia);

    cout << "Grafo usando Matriz de Adyacencia:" << endl;
    grafoMatriz.dibujarGrafo();

    return 0;
}