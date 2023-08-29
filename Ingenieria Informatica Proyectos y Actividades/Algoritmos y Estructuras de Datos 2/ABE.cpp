#include <iostream>
#include <cmath>

using namespace std;

const int MAX_CITIES = 10;

// Estructura para representar una ciudad
struct City {
    int x, y;
};

// Función para calcular la distancia entre dos ciudades
double distance(const City& a, const City& b) {
    int dx = a.x - b.x;
    int dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
}

// Función para calcular la longitud de un recorrido dado
double tourLength(int tour[], const City cities[], int n) {
    double length = 0.0;
    for (int i = 0; i < n - 1; ++i) {
        length += distance(cities[tour[i]], cities[tour[i + 1]]);
    }
    length += distance(cities[tour[n - 1]], cities[tour[0]]); // Regreso a la ciudad de inicio
    return length;
}

// Función para generar la siguiente permutación de un arreglo
bool nextPermutation(int tour[], int n) {
    int i = n - 2;
    while (i >= 0 && tour[i] >= tour[i + 1]) {
        i--;
    }
    if (i < 0) {
        return false; // No hay más permutaciones
    }

    int j = n - 1;
    while (tour[j] <= tour[i]) {
        j--;
    }

    swap(tour[i], tour[j]);

    int left = i + 1;
    int right = n - 1;
    while (left < right) {
        swap(tour[left], tour[right]);
        left++;
        right--;
    }

    return true;
}

int main() {
    int n; // Número de ciudades
    cout << "Ingrese el número de ciudades: ";
    cin >> n;

    if (n > MAX_CITIES) {
        cout << "Número de ciudades demasiado grande. El límite es " << MAX_CITIES << endl;
        return 1;
    }

    City cities[MAX_CITIES];
    cout << "Ingrese las coordenadas de las ciudades (x y):" << endl;
    for (int i = 0; i < n; ++i) {
        cin >> cities[i].x >> cities[i].y;
    }

    int tour[MAX_CITIES];
    for (int i = 0; i < n; ++i) {
        tour[i] = i;
    }

    double shortestLength = HUGE_VAL;
    int shortestTour[MAX_CITIES];

    do {
        double length = tourLength(tour, cities, n);
        if (length < shortestLength) {
            shortestLength = length;
            for (int i = 0; i < n; ++i) {
                shortestTour[i] = tour[i];
            }
        }
    } while (nextPermutation(tour, n));

    cout << "El camino más corto es: ";
    for (int i = 0; i < n; ++i) {
        cout << shortestTour[i] << " ";
    }
    cout << endl;
    cout << "Longitud del camino más corto: " << shortestLength << endl;

    return 0;
}
