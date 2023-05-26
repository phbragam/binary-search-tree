const AugmentedBinarySearchTree = require('./tree-structures/AugmentedBinarySearchTree');
const Utils = require('./utils');

// Criando uma nova instância da árvore
const tree = new AugmentedBinarySearchTree();

const valuesFile = process.argv[2]; // Get the filename from command-line argument
const values = Utils.readNumbersFromFile(valuesFile);

for(let v of values){
    tree.insert(v);
}

const commandsFile = process.argv[3];
let commands = Utils.readCommandsFromFile(commandsFile);
tree.processCommands(commands)
