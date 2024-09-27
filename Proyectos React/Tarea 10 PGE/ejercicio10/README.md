# Ejercicio 10 - Conversor de Unidades

Este proyecto es un conversor de unidades creado en React que permite convertir entre diferentes unidades de longitud como metros, kilómetros, centímetros, milímetros, pulgadas, pies y yardas. Utiliza la librería `convert-units` para manejar las conversiones de manera sencilla.

## Librerías utilizadas

- **React**: Librería para construir la interfaz de usuario.
- **convert-units**: Librería para realizar las conversiones entre unidades.
- **gh-pages**: Para desplegar la aplicación en GitHub Pages.

## Cómo utilizar el proyecto

### 1. Instalación de dependencias

Este proyecto requiere que se instalen las dependencias de Node.js. Dado que el archivo `node_modules` no está incluido en el repositorio, asegúrate de instalar las dependencias con el siguiente comando:

```bash
npm install
```

### 2. Solución de problemas con `npm install`

Si `npm install` no funciona correctamente o aparecen errores, puedes intentar reinstalar las dependencias manualmente eliminando el archivo `package-lock.json` y la carpeta `node_modules`, y luego ejecutar nuevamente el comando de instalación:

```bash
rm -rf node_modules package-lock.json
npm install
npm install convert-units
```

### 3. Uso de la aplicación

1. Ingrese el valor que desea convertir.
2. Seleccione la unidad de origen y la unidad de destino de las listas desplegables.
3. Presione el botón **Convertir!!** para ver el resultado de la conversión.

### 4. Contacto

Si tienes algún problema o sugerencia, no dudes en contactarme.

¡Gracias por usar este proyecto!

Este archivo proporciona las instrucciones necesarias para instalar las dependencias, solucionar problemas comunes y desplegar el proyecto en GitHub Pages. Además, incluye una breve explicación sobre cómo funciona la aplicación.
