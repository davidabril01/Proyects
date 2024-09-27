#include <iostream>
#include <vector>
#include "graphAnaliser.cpp"

using namespace std;

int main() {



    graphAnaliser grafo({
        {0, 1, 0, 4, 0, 0, 0, 0, 0},
        {1, 0, 2, 0, 2, 0, 0, 0, 0},
        {0, 2, 0, 0, 0, 1, 0, 0, 0},
        {4, 0, 0, 0, 5, 0, 2, 0, 0},
        {0, 2, 0, 5, 0, 3, 0, 2, 0},
        {0, 0, 1, 0, 3, 0, 0, 3, 4},
        {0, 0, 0, 2, 0, 0, 0, 2, 0},
        {0, 0, 0, 0, 2, 3, 2, 0, 4},
        {0, 0, 0, 0, 0, 4, 0, 4, 0},
        });
        grafo.findMinimumSpanningTreeKruskal();
        grafo.dijkstra(3, 7);
        return 0;
}