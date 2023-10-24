#include <iostream>
#include <string>
#include <queue>
#include <unordered_map>
using namespace std;

#define EMPTY_STRING ""

// Un nodo de árbol
struct Node
{
    char ch;
    int freq;
    Node *left, *right;
};

// Función para asignar un nuevo nodo de árbol
Node *getNode(char ch, int freq, Node *left, Node *right)
{
    Node *node = new Node();

    node->ch = ch;
    node->freq = freq;
    node->left = left;
    node->right = right;

    return node;
}

// Objeto de comparación que se usará para ordenar el heap
struct comp
{
    bool operator()(const Node *l, const Node *r) const
    {
        // el elemento de mayor prioridad tiene la menor frecuencia
        return l->freq > r->freq;
    }
};

// Función de utilidad para verificar si Huffman Tree contiene solo un solo nodo
bool isLeaf(Node *root)
{
    return root->left == nullptr && root->right == nullptr;
}
// Atraviesa el árbol de Huffman y almacena los códigos de Huffman en un mapa.
void encode(Node *root, string str, unordered_map<char, string> &huffmanCode)
{
    if (root == nullptr)
    {
        return;
    }

    // encontrado un nodo hoja
    if (isLeaf(root))
    {
        huffmanCode[root->ch] = (str != EMPTY_STRING) ? str : "1";
    }

    encode(root->left, str + "0", huffmanCode);
    encode(root->right, str + "1", huffmanCode);
}

// Atraviesa el árbol de Huffman y decodifica la string codificada

// Construye Huffman Tree y decodifica el texto de entrada dado
string encodeHuffmanTree(string text, priority_queue<Node *, vector<Node *>, comp> &pq)
{
    // caso base: string vacía
    if (text == EMPTY_STRING)
    {
        return ("");
    }

    // cuenta la frecuencia de aparición de cada personaje
    // y almacenarlo en un mapa
    unordered_map<char, int> freq;
    for (char ch : text)
    {
        freq[ch]++;
    }

    // Crea un nodo hoja para cada carácter y añádelo
    // a la cola de prioridad.
    for (auto pair : freq)
    {
        pq.push(getNode(pair.first, pair.second, nullptr, nullptr));
    }

    // hacer hasta que haya más de un nodo en la queue
    while (pq.size() != 1)
    {
        // Elimina los dos nodos de mayor prioridad
        // (la frecuencia más baja) de la queue

        Node *left = pq.top();
        pq.pop();
        Node *right = pq.top();
        pq.pop();

        // crea un nuevo nodo interno con estos dos nodos como hijos y
        // con una frecuencia igual a la suma de las frecuencias de los dos nodos.
        // Agregar el nuevo nodo a la cola de prioridad.

        int sum = left->freq + right->freq;
        pq.push(getNode('\0', sum, left, right));
    }

    // `root` almacena el puntero a la raíz de Huffman Tree
    Node *root = pq.top();

    // Atraviesa el árbol Huffman y almacena códigos Huffman
    // en un mapa. Además imprímelos
    unordered_map<char, string> huffmanCode;
    encode(root, EMPTY_STRING, huffmanCode);

    // Imprimir string codificada
    string str;
    for (char ch : text)
    {
        str += huffmanCode[ch];
    }

    return (str);
}

string SerializeNode(Node* node) {
    string serialized;
    if (isLeaf(node))
    {
        return 0;
    }else {
        serialized = node->ch;
        serialized += to_string(node->freq);
    }
    return serialized;
}

// Implementación del algoritmo de codificación de Huffman en C++
int main()
{
    string text = "Huffman coding is a data compression algorithm.";
    priority_queue<Node *, vector<Node *>, comp> pq;
    string code = encodeHuffmanTree(text, pq);
    cout << code << '\n';

    while (!pq.empty()) {
        Node* node = pq.top();
        string serialized = SerializeNode(node);
        cout << serialized << " ";
        pq.pop();
    }
    return 0;
}