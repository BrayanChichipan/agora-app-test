# AGORA APP
## Descripcion
Aplicaion web principal de [agora](https://master--agora-app-test.netlify.app/), cuenta con pagina principal y pagina del blog


## Tabla de Contenidos
- [AGORA APP](#agora-app)
  - [Descripcion](#descripcion)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Tecnologias](#tecnologias)
  - [Configuración Inicial](#configuración-inicial)
    - [Instalación de Dependencias](#instalación-de-dependencias)
    - [Variables de Entorno](#variables-de-entorno)
    - [Ejecutando la applicacion](#ejecutando-la-applicacion)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Practicas](#practicas)
    - [Responsive](#responsive)
    - [Reutilización](#reutilización)
    - [Optimización](#optimización)
    - [Tipado](#tipado)
  - [APP Desplegada](#app-desplegada)
    - [URL](#url)


## Tecnologias
  - React 18
  - Typescript
  - Axios
  - React Query
  - Sass

## Configuración Inicial

### Instalación de Dependencias
Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
yarn
```

### Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en un archivo .env.

```
VITE_AGORA_API=https://agora-back-test.onrender.com
```

### Ejecutando la applicacion
 ```
# development watch mode
$yarn dev

# build production
$yarn build
 ```

 ## Estructura del proyecto

```lua
src/
|-- components/
|   |-- common/
|   |-- layouts/
|   |-- ui/
|   |-- ui/
|-- apis/...
|-- assets/...
|-- config/...
|-- constants/...
|-- hooks/...
|-- interfaces/...
|-- pages/...
|   |-- blog/
|   |-- home/
|-- routes/...
|-- services/...
|-- services/...
|-- styles/...
|-- types/...
|-- utils/...
|-- mainfiles...

```

## Practicas

### Responsive
El proyecto es responsive gracias al uso de SASS y media queries, permitiendo que la interfaz de usuario se adapte a diferentes tamaños de pantalla y dispositivos.

### Reutilización
Se han creado componentes y funciones reutilizables, así como custom hooks, para facilitar el desarrollo y mantenimiento del código.

### Optimización
Se utiliza React Query para cachear las peticiones durante un tiempo definido, mejorando así la eficiencia y velocidad de la aplicación.

### Tipado
A lo largo de la aplicacion se utiliza *typescript* para reducir errores que podrian suceder, y para mantener la consistencia de tipos a lo largo de la app.

## APP Desplegada
La APP fue desplegada utilzando los servicios de **NETLIFY**

### URL
[agora app url](https://master--agora-app-test.netlify.app/)



