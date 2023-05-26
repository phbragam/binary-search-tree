# Augmented Binary Search Tree

This is an implementation of an Augmented Binary Search Tree in JavaScript.

## Usage

To run the code and test the augmented binary search tree implementation, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.

2. Clone this repository to your local machine or download the source code as a ZIP file.

3. Open a terminal or command prompt and navigate to the project's root directory.

4. Create a text file containing a sequence of numbers separated by spaces. Save this file with a `.txt` extension. Note down the path to this values file.

5. Create another text file containing the commands you want to execute, with each command on a separate line. Save this file with a `.txt` extension as well. Note down the path to this commands file.

6. In the terminal or command prompt, run the following command, replacing `/path-to-values-file.txt` with the actual path to your values file and `/path-to-commands-file.txt` with the actual path to your commands file:

   ```bash
   node index.js /path-to-values-file.txt /path-to-commands-file.txt

### Available Commands

The following commands are supported:

- `ENESIMO N`: Returns the Nth element of the tree's in-order traversal.
- `POSICAO N`: Returns the position of the element N in the tree's in-order traversal.
- `MEDIANA`: Returns the element that contains the median of the tree. If the tree has an even number of elements, the smaller of the two median elements is returned.
- `CHEIA`: Returns `true` if the tree is a full binary tree, and `false` otherwise.
- `COMPLETA`: Returns `true` if the tree is a complete binary tree, and `false` otherwise.
- `IMPRIMA S`: Prints the tree in the specified format (1 or 2)
- `REMOVA N`: Removes the element N from the tree.

Please note that the commands requiring a parameter (N or S) should be followed by a space and the respective value.