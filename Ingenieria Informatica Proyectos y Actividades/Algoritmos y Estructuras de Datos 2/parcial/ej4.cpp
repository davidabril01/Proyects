#include <iostream>
#include <vector>
#include <set>
using namespace std;

class matrizAdyacencia
{
private:
    vector<vector<bool>> adjacencyMatrix;
    int numVertices;

    bool hasCycleUtil(int v, vector<bool> &visited, int parent, set<int> &cycleVertices)
    {
        visited[v] = true;
        cycleVertices.insert(v);

        for (int i = 0; i < numVertices; i++)
        {
            if (adjacencyMatrix[v][i])
            {
                if (!visited[i])
                {
                    if (hasCycleUtil(i, visited, v, cycleVertices))
                        return true;
                }
                else if (i != parent && cycleVertices.find(i) != cycleVertices.end())
                {
                    // Ciclo encontrado, imprimir los vértices en el ciclo con desplazamiento
                    cout << "Ciclo encontrado: ";
                    for (int vertex : cycleVertices)
                    {
                        cout << vertex + 1 << " "; // Añadir 1 al índice para el desplazamiento
                    }
                    cout << i + 1 << endl; // Añadir 1 al índice para el desplazamiento
                    return true;
                }
            }
        }
        
        cycleVertices.erase(v); // Eliminar el vértice del conjunto de vértices en el ciclo
        return false;
    }

public:
    matrizAdyacencia(vector<vector<bool>> adjacencyMatrix_)
    {
        adjacencyMatrix = adjacencyMatrix_;
        numVertices = adjacencyMatrix.size();
        cout << "MATRIZ DE ADYACENCIA" << endl;
        for (const vector<bool> &row : adjacencyMatrix)
        {
            cout << "|";
            for (bool element : row)
            {
                cout << " " << element;
            }
            cout << " |" << endl;
        }
    }

    void findCycles()
    {
        vector<bool> visited(numVertices, false);

        for (int i = 0; i < numVertices; i++)
        {
            if (!visited[i])
            {
                set<int> cycleVertices;
                if (hasCycleUtil(i, visited, -1, cycleVertices))
                    return; // Terminar la búsqueda después del primer ciclo
            }
        }
        
        cout << "No se encontraron ciclos." << endl;
    }
};

int main()
{
    matrizAdyacencia Matriz1({
        {0, 1, 0, 1, 0, 0},
        {1, 0, 1, 0, 0, 0},
        {0, 1, 0, 1, 0, 0},
        {1, 0, 1, 0, 0, 0},
        {0, 0, 0, 0, 0, 1},
        {0, 0, 0, 0, 1, 0}
    });

    Matriz1.findCycles();

    return 0;
}
