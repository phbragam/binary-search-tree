const AugmentedBinarySearchTree = require('./tree-structures/AugmentedBinarySearchTree');
const Utils = require('./utils');

// Criando uma nova instância da árvore
const tree = new AugmentedBinarySearchTree();

const filename = process.argv[2]; // Get the filename from command-line argument
const numbers = Utils.readNumbersFromFile(filename);

for(let n of numbers){
    tree.insert(n);
}




console.log(numbers);

tree.printTree(2);

// Read txt to build the tree 

// Read the txt of commands

// Inserindo valores na árvore
// tree.insert(8);
// tree.insert(3);
// tree.insert(10);
// // tree.insert(9);
// tree.insert(1);
// tree.insert(6);
// tree.insert(14);
// tree.insert(4);
// tree.insert(7);
// tree.insert(13);
// // tree.insert(15);

// console.log(tree.search(6).value);
// tree.printTree(2);

// console.log(tree.nthElement(100));
// console.log(tree.position(13));

// console.log(tree.median());
// console.log(tree.average(tree.root));
// console.log(tree.isFull());
// console.log(tree.isComplete());
// console.log(tree.preOrder());

// tree.insert(7);
// tree.remove(39);

// tree.printTree(2);
// tree.insert(40);
// tree.printTree(2);