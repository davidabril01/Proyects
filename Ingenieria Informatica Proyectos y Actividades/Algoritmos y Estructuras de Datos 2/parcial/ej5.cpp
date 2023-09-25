#include <iostream>
#include <vector>
#include "graphAnaliser.cpp"
using namespace std;

int main() {
    graphAnaliser Analise({
        {0, 0, 1, 1},
        {0, 0, 1, 1},
        {1, 1, 0, 1},
        {1, 1, 1, 0}
        });
    cout << "Ciclos encontrados:" << endl;

    Analise.findCycles();
    Analise.removeDuplicateCycles();
    Analise.printCycles();

    return 0;
}