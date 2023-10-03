#include <iostream>
#include "monticulo.h"
using namespace std;

int main(){
    Monticulo Mont1;
    Mont1.Insertar(20);
    Mont1.Insertar(18);
    Mont1.Insertar(9);
    Mont1.Insertar(8);
    Mont1.Insertar(10);
    Mont1.Insertar(12);
    cout << Mont1.ExtraerMaximo() << endl;
    cout << Mont1.ExtraerMaximo() << endl;
    cout << Mont1.ExtraerMaximo() << endl;
    cout << Mont1.ExtraerMaximo() << endl;
    cout << Mont1.ExtraerMaximo() << endl;
    cout << Mont1.ExtraerMaximo() << endl;
    
}