// app.js
const { readFileContent } = require('./utils/fileReader'); //Modulo export require propio
const { logInfo } = require('./utils/logger'); //Modulo export require propio

async function main() { //funcion Asincrona
  try {
    logInfo('Inicio del proceso');
    const fileContent = await readFileContent('./data.txt'); //await de funcion asincrona
    console.log(`Contenido del archivo: ${fileContent}`);
    logInfo('Proceso completado');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    // Este código siempre se ejecutará, sin importar si ocurrió un error o no
    logInfo('Fin del proceso');
  }
}

main();
