# Proyecto de Ventas David

Este proyecto es una aplicación de ventas simple desarrollada con React. Permite agregar productos, ver detalles de los productos y visualizar gráficas de ganancias mensuales. La navegación entre las distintas páginas de productos se realiza mediante `react-router-dom`.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación de dependencias

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

En caso de que las dependencias no se instalen correctamente con el comando anterior, puedes instalar las bibliotecas necesarias manualmente:

### Librerías necesarias

- **React**:

  ```bash
   npm install react react-dom
  ```

- **React Router DOM**: 

  ```bash
   npm install react-router-dom
  ```

- **React Scripts**: 

  ```bash
   npm install react-scripts
  ```

## Uso

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo ejecutando:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador en la dirección `http://localhost:3000`.

## Estructura del proyecto

- **`index.js`**: Punto de entrada de la aplicación. Renderiza el componente principal `App`.
- **`App.js`**: Componente raíz que gestiona las rutas principales usando `react-router-dom`.
- Componentes:
  - `PagePrincipal.js`: Página principal que muestra el título y los botones de productos.
  - `ModalArtefact.js`: Modal para agregar nuevos productos.
  - `ButtonsContainer.js`: Contenedor que gestiona los botones de productos, permitiendo agregar y eliminar.
  - `Button.js`: Componente que representa cada botón de producto.
  - `ProductPage.js`: Página dinámica que muestra las ganancias mensuales de cada producto.

## Importante

Recuerda que el proyecto no incluye la carpeta `node_modules` ni el archivo `package-lock.json` en el archivo `.zip`. Al descargar el archivo y descomprimirlo, asegúrate de instalar las dependencias antes de ejecutar la aplicación.

## Notas adicionales

- Este proyecto utiliza `localStorage` y `sessionStorage` para almacenar los datos de los productos y las ganancias mensuales respectivamente.
- Para modificar los estilos, puedes editar los archivos CSS correspondientes en la carpeta `components`.
