# Frontend - Task Manager

Este proyecto es una aplicación web en **React** con **Material UI** que consume la API del backend (Laravel) para gestionar tareas.  
Permite crear, editar, eliminar, buscar y filtrar tareas por estado de completado.

---

## **Requisitos previos**

- Node.js >= 18
- npm >= 9
- Tener el backend corriendo (ver instrucciones en el README del backend)

---

## **Instalación y ejecución**

1. Clonar el repositorio:

   git clone [<URL_DEL_REPO>](https://github.com/DaviAgulham/tasks-frontend)
   cd tasks-frontend

2. Instalar dependencias:

    npm install

3. Configurar variables de entorno:

    Crear un archivo .env basado en .env.example:

    VITE_API_URL=http://localhost:8000/api

4. Levantar el proyecto:

    npm run dev


5. Abrir la aplicación:

    Abrir en el navegador: http://localhost:5173


## **Dependencias principales**

React

Vite

React Router DOM

Material UI

Axios

## **Notas**

El frontend no funcionará si el backend no está en ejecución.

Verifica que la variable VITE_API_URL apunte a la URL correcta del backend.
