# millonweb

Este proyecto es una aplicación web que sigue los principios de la arquitectura limpia (Clean Architecture). A continuación, se detallan las librerías utilizadas y su propósito:

## Librerías Utilizadas

- **React**: Utilizado para construir la interfaz de usuario de la aplicación.
- **zustand**: Utilizado para la gestión del estado global de la aplicación.
- **axios**: Utilizado para realizar solicitudes HTTP a la API.
- **react-intersection-observer**: Utilizado para detectar cuando un elemento es visible en la ventana gráfica, lo que permite implementar el scroll infinito.
- **lodash**: Utilizado para proporcionar utilidades adicionales para la manipulación de datos.

## Estructura del Proyecto

El proyecto está organizado siguiendo los principios de la arquitectura limpia, lo que significa que se divide en varias capas con responsabilidades específicas:

1. **Presentation**: Contiene los componentes de la interfaz de usuario y la lógica de presentación.

   - **Features**: Componentes principales de la aplicación, como `PropertyList` y `Filters`.
   - **Common**: Componentes reutilizables como `PropertyBox` y `SearchButton`.
   - **Hooks**: Custom hooks como `useProperty` para manejar la lógica de negocio en los componentes.

2. **Infrastructure**: Contiene la implementación de detalles técnicos como la comunicación con la API y la gestión del estado.

   - **Repositories**: Implementaciones de repositorios para interactuar con la API, como `propertyRepository`.
   - **Store**: Gestión del estado global utilizando `zustand`, como `propertyStore`.

3. **Domain**: (No mostrado en los fragmentos de código) Aquí se definirían las entidades y casos de uso de la aplicación.

## Funcionalidades Principales

- **Listado de Propiedades**: La aplicación permite listar propiedades con paginación y scroll infinito.
- **Filtrado de Propiedades**: Los usuarios pueden filtrar propiedades por nombre y rango de precios.
- **Gestión de Propiedades**: La aplicación permite crear, actualizar y eliminar propiedades a través de la API.

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio.
2. Instalar las dependencias utilizando `npm install`.
3. Ejecutar la aplicación en modo desarrollo utilizando `npm start`.
 
 
