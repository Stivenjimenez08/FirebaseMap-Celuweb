
# React Map-Firebase     

Esta es una aplicación desarrollada con React en conjunto con Firebase. Firebase se utilizó para el proceso de autenticación del usuario, lo cual abarca los apartados de registro, inicio de sesión, verificación de sesión y cierre de sesión. Además, tambien se empleo Firebase para el apartado de actualización de datos del usuario.

Asimismo, se utilizó React en el desarrollo de la aplicación, que incluye un componente para el registro del usuario, otro componente para el inicio de sesión y un tercer componente que contiene todas las vistas (otros componentes) que deseamos mostrar. Estas vistas incluyen:

Un mapa interactivo centralizado en la ciudad de Medellín, que también muestra la división política de la ciudad.
Una sección que permite al usuario visualizar sus datos y cambiar su nombre y foto de perfil.

## Despliegue del proyecto 

Para poder visualizar y ejecutar el proyecto en tu máquina, debes realizar el siguiente proceso: 

1. Abre tu símbolo de sistema (cmd) o la terminal de tu preferencia y copia la siguiente línea:
   ```git clone https://github.com/Stivenjimenez08/FirebaseMap-Celuweb.git ```
   
2. Ingresa al directorio donde clonaste el proyecto
   ``` cd "Nombre del directorio" ```

3. Instala todas las dependencias para ejecutar la aplicación sin ningún problema
   ```npm install```

4. Una vez instaladas las dependencias, ejecuta la aplicación
   ```npm run dev```

# Dependencias Utilizadas

``` "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.15.1",
    "@mui/material": "^5.15.1",
    "@reduxjs/toolkit": "^2.0.1",
    "firebase": "^10.7.1",
    "leaflet": "^1.9.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.2.1",
    "react-redux": "^9.0.4",
    "react-router-dom": "^6.21.0",
    "sweetalert2": "^11.10.2"
  
