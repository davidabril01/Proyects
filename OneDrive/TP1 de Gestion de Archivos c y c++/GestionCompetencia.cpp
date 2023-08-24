#include <iostream>
#include <fstream>

using namespace std;
struct datos{
	int nro;
	int centro;
	int medio;
	int errado;
	char provincia[12];
};

void carga(datos competidor){
	cout<<"\n Ingrese el numero de competidor :";
	cin>>competidor.nro;
	cout<<"\n Ingrese cantidad de tiros al centro del competidor "<<competidor.nro<<" :";
	cin>>competidor.centro;
	cout<<"\n Ingrese cantidad de tiros al medio del competidor "<<competidor.nro<<" :";
	cin>>competidor.medio;
	cout<<"\n Ingrese cantidad de tiros errados del competidor "<<competidor.nro<<" :";
	cin>>competidor.errado;
	cout<<"\n Ingrese la provincia de origen del competidor "<<competidor.nro<<" :";
	cin>>competidor.provincia;
	FILE *arch;
	arch=fopen("datos.dat","a");
	fwrite(&competidor, sizeof(datos), 1,arch);
	fclose(arch);
}


int main(){
	datos competidor;
	char condicion;
	FILE *arch;
	arch=fopen("datos.dat","wb");
	fclose(arch);
	for(int i=0; i<10; i++){
		carga(competidor);
		cout<<"Quiere ingresar otro competidor? s/n ";
		cin>>condicion;
		if(condicion=='n'){
			i=10;
		}
	}
}



