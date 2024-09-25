// utils/fileReader.js
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

async function readFileContent(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    throw new Error(`No se pudo leer el archivo: ${error.message}`);
  }
}

module.exports = { readFileContent };
