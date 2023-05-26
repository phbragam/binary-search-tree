const AugmentedBinarySearchTree = require('./tree-structures/AugmentedBinarySearchTree');

// Criando uma nova instância da árvore
const tree = new AugmentedBinarySearchTree();

// Inserindo valores na árvore
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);
// tree.insert(13);

// console.log(tree.search(6).value);
tree.printTree(2);

tree.insert(7);
tree.remove(39);

tree.printTree(2);
tree.insert(40);
tree.printTree(2);