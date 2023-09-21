#include <iostream>
#include <list>
using namespace std;

class listaAdyacencia
{
public:
    listaAdyacencia(list<list<int>> listOfLists)
    {
        cout << "LISTA DE ADYACENCIA" << endl;
        int i = 0;
        for (const list<int> &innerList : listOfLists)
        {
            i++;
            cout << i << "| -> ";

            bool firstElement = true;
            for (int element : innerList)
            {
                if (!firstElement)
                {
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
private:
    list<list<bool>> listOfLists;

public:
    matrizAdyacencia(list<list<bool>> listOfLists_)
    {
        listOfLists = listOfLists_;
        cout << "MATRIZ DE ADYACENCIA" << endl;
        for (const list<bool> &innerList : listOfLists)
        {
            cout << "|";
            bool firstElement = true;
            for (bool element : innerList)
            {
                if (!firstElement)
                {
                    cout << "  ";
                }
                cout << element;
                firstElement = false;
            }
            cout << "|" << endl;
        }
    }
    void matrixToList()
    {
        cout << "LISTA DE ADYACENCIA" << endl;
        int i = 0;
        for (const list<bool> &innerList : listOfLists)
        {
            i++;
            cout << i << "| ";
            bool firstElement = false;
            int a = 0;
            for (bool element : innerList)
            {
                a++;

                if (element == true)
                {
                    if (!firstElement)
                    {
                        cout << " -> ";
                    }
                    cout << a;
                    firstElement = false;
                }
            }
            cout << endl;
        }
    }
};

int main()
{
    matrizAdyacencia Matriz1({{0, 1, 1},
                              {1, 0, 0},
                              {1, 0, 0},
                              });
    Matriz1.matrixToList();
}