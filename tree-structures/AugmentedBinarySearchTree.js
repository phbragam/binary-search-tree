const Node = require('./Node');

class AugmentedBinarySearchTree {

    constructor() {
        this.root = null;
    }

    // Método para inserir um valor na árvore
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
        else {
            console.log(`${newNode.value} value already exists on the tree and will be ignored`);
            return;
        }
    }

    // Método para buscar um valor na árvore
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    printTree(s) {
        if (s == 1) console.log(this.generateTreeString(this.root));
        else if (s == 2) this.printNode(this.root, '');
    }

    generateTreeString(node) {
        if (node === null) {
            return '';
        }

        let str = '';
        str += node.value;

        if (node.left !== null || node.right !== null) {
            str += ' (';
            str += this.generateTreeString(node.left);
            str += ') (';
            str += this.generateTreeString(node.right);
            str += ')';
        }

        return str;
    }

    printNode(node, indent) {
        if (node === null) {
            return;
        }

        console.log(indent + node.value + '--------------');

        const newIndent = indent + ' '.repeat(7);
        this.printNode(node.left, newIndent);
        this.printNode(node.right, newIndent);
    }

    // Método para remover um valor da árvore
    remove(value) {
        if (!this.search(value)) {
            console.log(`${value} value do not exists on the tree and wont be removed`);
            return;
        }
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.value) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.value) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                node.parent = node;
                return node;
            }

            if (node.right === null) {
                node = node.left;
                node.parent = node;
                return node;
            }

            const minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.removeNode(node.right, minNode.value);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    nthElement(n) {
        let count = 0;
        let stack = [];
        let currentNode = this.root;

        while (currentNode || stack.length > 0) {
            if (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                currentNode = stack.pop();
                count++;

                if (count === n) {
                    return currentNode.value;
                }

                currentNode = currentNode.right;
            }
        }

        // Caso não encontre o elemento na posição desejada
        return null;
    }

}

module.exports = AugmentedBinarySearchTree;