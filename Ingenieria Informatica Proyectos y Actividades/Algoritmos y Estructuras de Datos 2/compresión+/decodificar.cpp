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
void decode(Node *root, int &index, string str, string &text)
{
    if (root == nullptr)
    {
        return;
    }

    // encontrado un nodo hoja
    if (isLeaf(root))
    {
        text += (root->ch);
        return;
    }

    index++;

    if (str[index] == '0')
    {
        decode(root->left, index, str, text);
    }
    else
    {
        decode(root->right, index, str, text);
    }
}

string decodeHuffmanTree(string str, priority_queue<Node *, vector<Node *>, comp> &pq)
{

    Node *root = pq.top();
    string text = "";
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
            decode(root, index, str, text);
        }
    }
    return text;
}

Node *DeserializeNode(const string &serialized)
{
    if (serialized.empty())
    {
        return nullptr;
    }

    char ch = serialized[0];
    cout<<ch<<" :";
    int freq = stoi(serialized.substr(1));
    cout<<freq<<endl;

    return getNode(ch, freq, nullptr, nullptr);
}

int main()
{
    string input;
    getline(cin, input);
    string serializedPriorityQueue;
    getline(cin, serializedPriorityQueue);
    cout << serializedPriorityQueue;
    priority_queue<Node*, vector<Node*>, comp> pq;
    size_t pos = 0;
    while (pos < serializedPriorityQueue.size()) {
        size_t nextSpace = serializedPriorityQueue.find(' ', pos);
        string serializedNode = serializedPriorityQueue.substr(pos, nextSpace - pos);
        Node *node = DeserializeNode(serializedNode);
        pq.push(node);
        pos = nextSpace + 1;
    }

    cout << "\nThe decoded string is:\n";
    cout << decodeHuffmanTree(input, pq);
    return 0;
}