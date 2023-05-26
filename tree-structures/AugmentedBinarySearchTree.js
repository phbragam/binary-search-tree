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
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
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
        if(s == 1) console.log(this.generateTreeString(this.root));
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
}

module.exports = AugmentedBinarySearchTree;