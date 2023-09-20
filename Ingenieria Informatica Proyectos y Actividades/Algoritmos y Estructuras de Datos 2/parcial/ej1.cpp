#include <iostream>
#include <list>
using namespace std;

class listaAdyacencia
{
public:
    listaAdyacencia(list<list<int>> listOfLists)
    {
        cout << "LISTA DE ADYACENCIA"<<endl;
        int i = 0;
        for (const list<int> &innerList : listOfLists)
        {
            i++;
            cout << i << "| -> ";
            
            bool firstElement = true;
            for (int element : innerList)
            {
                if (!firstElement) {
                    cout << " -> ";
                }
                cout << element;
                firstElement = false;
            }
            
            cout << endl;
        }
    }
};

class matrizAdyacencia
{
public:
    matrizAdyacencia(list<list<bool>> listOfLists)
    {
        cout << "MATRIZ DE ADYACENCIA"<<endl;
        for (const list<bool> &innerList : listOfLists)
        {
            cout << "|";
            bool firstElement = true;
            for (bool element : innerList)
            {
                if (!firstElement) {
                    cout << "  ";
                }
                cout << element;
                firstElement = false;
            }
            cout << "|" << endl;
        }
    }
};

int main()
{
    listaAdyacencia({{4, 2}, {1, 3}, {2, 4}, {3, 1}, {6}, {5}});
    matrizAdyacencia({
                    {0, 1, 0, 1, 0, 0},
                    {1, 0, 1, 0, 0, 0}, 
                    {0, 1, 0, 1, 0, 0}, 
                    {1, 0, 1, 0, 0, 0}, 
                    {0, 0, 0, 0, 0, 1},
                    {0, 0, 0, 0, 1, 0}
                    });
}