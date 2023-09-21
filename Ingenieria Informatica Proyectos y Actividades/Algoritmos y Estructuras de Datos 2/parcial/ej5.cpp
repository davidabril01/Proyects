#include <iostream>
#include <vector>
#include <set>
#include <algorithm> // Para la función std::rotate
using namespace std;

class matrizAdyacencia
{
private:
    vector<vector<bool>> adjacencyMatrix;
    int numVertices;
    set<vector<int>> cycles; // Conjunto para almacenar ciclos únicos
    int long4 = 0, long3 = 0;

    void printCycle(const vector<int> &cycle)
    {
        cout << "Ciclo encontrado: ";
        for (int vertex : cycle)
        {
            cout << vertex + 1 << " "; // Añadir 1 al índice para el desplazamiento
        }
        cout << cycle[0] + 1 << endl; // Añadir 1 al índice para el desplazamiento
    }

    // Función para normalizar un ciclo
    vector<int> normalizeCycle(const vector<int> &cycle)
    {
        vector<int> normalized = cycle;
        auto min_element_it = min_element(normalized.begin(), normalized.end());
        rotate(normalized.begin(), min_element_it, normalized.end());
        return normalized;
    }

    void findCyclesUtil(int v, vector<bool> &visited, int parent, vector<int> &currentPath)
    {
        visited[v] = true;
        currentPath.push_back(v);

        for (int i = 0; i < numVertices; i++)
        {
            if (adjacencyMatrix[v][i])
            {
                if (!visited[i])
                {
                    findCyclesUtil(i, visited, v, currentPath);
                }
                else if (i != parent && currentPath.size() > 2)
                {
                    // Verificar si i ya está en currentPath
                    bool found = false;
                    for (int j = 0; j < currentPath.size(); j++)
                    {
                        if (currentPath[j] == i)
                        {
                            found = true;
                            break;
                        }
                    }
                    if (found)
                    {
                        // Ciclo encontrado, almacenar y mostrar si al menos un vértice es diferente al primero
                        vector<int> cycle;
                        for (int j = currentPath.size() - 1; j >= 0; j--)
                        {
                            cycle.push_back(currentPath[j]);
                            if (currentPath[j] == i)
                                break;
                        }

                        // Normalizar el ciclo antes de almacenarlo
                        vector<int> normalizedCycle = normalizeCycle(cycle);

                        // Verificar si el ciclo normalizado ya existe en el conjunto
                        if (cycles.find(normalizedCycle) == cycles.end() && normalizedCycle[0] != normalizedCycle[normalizedCycle.size() - 1])
                        {
                            cycles.insert(normalizedCycle); // Almacenar ciclo normalizado en el conjunto para evitar duplicados

                            // Mostrar ciclo
                            if (cycle.size() > 2)
                                printCycle(cycle);

                            if (cycle.size() == 3)
                                long3++;
                            if (cycle.size() == 4)
                                long4++;
                        }
                    }
                }
            }
        }

        visited[v] = false; // Marcar el vértice como no visitado para retroceder
        currentPath.pop_back();
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
                vector<int> currentPath;
                findCyclesUtil(i, visited, -1, currentPath);
            }
        }
        cout << "Ciclos de longitud 3: " << long3 << endl
             << "Ciclos de longitud 4: " << long4 << endl
             << "No se encontraron mas ciclos." << endl;
    }
};

int main()
{
    matrizAdyacencia Matriz1({{0, 0, 1, 1},
                              {0, 0, 1, 1},
                              {1, 1, 0, 1},
                              {1, 1, 1, 0}});

    Matriz1.findCycles();

    return 0;
}
