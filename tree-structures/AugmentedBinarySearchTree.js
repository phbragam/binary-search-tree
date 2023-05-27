const Node = require('./Node');

class AugmentedBinarySearchTree {

    constructor() {
        this.root = null;
    }

    // Inserts a node in the Tree
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

    // Search node in the Tree
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

    // Remove node from tree
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

        // n bigger then tree
        return null;
    }

    position(x) {
        let position = 0;
        let stack = [];
        let currentNode = this.root;

        while (currentNode || stack.length > 0) {
            if (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                currentNode = stack.pop();
                position++;

                if (currentNode.value === x) {
                    return position;
                }

                currentNode = currentNode.right;
            }
        }

        // not found
        return null;
    }

    median() {
        const elements = this.inOrderTraversal(this.root);
        const total = elements.length;
        const medianIndex = total % 2 === 0 ? total / 2 - 1 : Math.floor(total / 2);

        return elements[medianIndex];
    }

    inOrderTraversal(node) {
        if (node === null) {
            return [];
        }

        const leftElements = this.inOrderTraversal(node.left);
        const rightElements = this.inOrderTraversal(node.right);

        return [...leftElements, node.value, ...rightElements];
    }

    average(x) {
        const sum = this.calculateSum(x);
        const count = this.calculateCount(x);

        if (count === 0) {
            return 0; // Avoid division by zero
        }

        return sum / count;
    }

    calculateSum(node) {
        if (node === null) {
            return 0;
        }

        const leftSum = this.calculateSum(node.left);
        const rightSum = this.calculateSum(node.right);

        return node.value + leftSum + rightSum;
    }

    calculateCount(node) {
        if (node === null) {
            return 0;
        }

        const leftCount = this.calculateCount(node.left);
        const rightCount = this.calculateCount(node.right);

        return 1 + leftCount + rightCount;
    }

    isFull() {
        return this.isFullBinaryTree(this.root);
    }

    isFullBinaryTree(node) {
        if (node === null) {
            return true; // An empty tree is considered a full binary tree
        }

        if ((node.left === null && node.right !== null) || (node.left !== null && node.right === null)) {
            return false; // One child exists while the other doesn't
        }

        const isLeftFull = this.isFullBinaryTree(node.left);
        const isRightFull = this.isFullBinaryTree(node.right);

        return isLeftFull && isRightFull;
    }

    isComplete() {
        return this.isCompleteBinaryTree(this.root);
    }

    isCompleteBinaryTree(node) {
        if (node === null) {
            return true; // An empty tree is considered a complete binary tree
        }

        let hasNoChild = false;
        const queue = [node];

        while (queue.length > 0) {
            const currNode = queue.shift();

            if (hasNoChild && (currNode.left !== null || currNode.right !== null)) {
                return false; // Nodes should not have children after a node without children
            }

            if (currNode.left === null) {
                hasNoChild = true;
            } else {
                queue.push(currNode.left);
            }

            if (currNode.right === null) {
                hasNoChild = true;
            } else {
                queue.push(currNode.right);
            }
        }

        return true;
    }

    preOrder() {
        return this.preOrderTraversal(this.root);
    }

    preOrderTraversal(node) {
        if (node === null) {
            return '';
        }

        let result = '';

        result += node.value + ' '; // Append the value of the current node

        result += this.preOrderTraversal(node.left); // Traverse the left subtree

        result += this.preOrderTraversal(node.right); // Traverse the right subtree

        return result;
    }

    processCommands(commands) {

        for (const c of commands) {
            let [command, parameter] = c.split(' ');

            command = command.replace(/\s/g, '');

            switch (command) {
                case 'ENESIMO':
                    if (parameter !== undefined) {
                        const n = parseInt(parameter, 10);
                        console.log(`ENESIMO ${this.nthElement(n)}`);
                    }
                    break;

                case 'POSICAO':
                    if (parameter !== undefined) {
                        const pos = parseInt(parameter, 10);
                        console.log(`POSICAO ${this.position(pos)}`);
                    }
                    break;

                case 'MEDIANA':
                    console.log(`MEDIANA ${this.median()}`);
                    break;

                case 'CHEIA':
                    console.log(`CHEIA ${this.isFull()}`);
                    break;

                case 'COMPLETA':
                    console.log(`COMPLETA ${this.isComplete()}`);
                    break;

                case 'IMPRIMA':
                    if (parameter !== undefined) {
                        const s = parseInt(parameter, 10);
                        this.printTree(s);
                    }
                    break;

                case 'REMOVA':
                    if (parameter !== undefined) {
                        const value = parseInt(parameter, 10);
                        this.remove(value);
                    }
                    break;

                default:
                    console.log('Invalid command:', command);
                    break;
            }
        }
    }

}

module.exports = AugmentedBinarySearchTree;