#include <iostream>
#include <sstream>
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

    if (ch != '#')
    {
        node->ch = ch;
    }
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
void decode(Node *root, int &index, string str)
{
    if (root == nullptr)
    {
        return;
    }

    // encontrado un nodo hoja
    if (isLeaf(root))
    {
        cout << root->ch;
        return;
    }

    index++;

    if (str[index] == '0')
    {
        decode(root->left, index, str);
    }
    else
    {
        decode(root->right, index, str);
    }
}

void decodeHuffmanTree(string str, priority_queue<Node *, vector<Node *>, comp> &pq)
{

    Node *root = pq.top();
    if (isLeaf(root))
    {
        // Caso especial: Para entradas como a, aa, aaa, etc.
        while (root->freq--)
        {
            cout << root->ch;
        }
    }
    else
    {
        // Atraviesa el árbol Huffman de nuevo y esta vez,
        // decodifica la string codificada
        int index = -1;
        while (index < (int)str.size() - 1)
        {
            decode(root, index, str);
        }
    }
}

int main()
{
    string input;
    getline(cin, input);
    cout << input << endl;
    string cola;
    getline(cin, cola);
    cout << cola << endl;

    string cola_copy = cola;

    // Crear una nueva cola de prioridad para reconstruir 'pq'

    priority_queue<Node *, vector<Node *>, comp> pq;

    pq.push(getNode('#', stoi(cola), nullptr, nullptr));

    size_t pos = 0;

    cout << "\nThe decoded string is:\n";
    decodeHuffmanTree(input, pq);

    return 0;
}
