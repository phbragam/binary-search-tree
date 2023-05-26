const fs = require('fs');

methods = {}

methods.readNumbersFromFile = (filename) => {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const numbers = data.trim().split(' ').map(Number);
        return numbers;
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

methods.readCommandsFromFile = (filename) => {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const lines = data.trim().split('\n');
        return lines;
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
}

module.exports = methods;