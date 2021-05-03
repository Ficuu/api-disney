# API disney

Proyecto de personajes de Disney aplicado en el desafio de Node Js de la plataforma Alkemy 

### Instalación 🔧


Clonamos el repositorio e instalamos las librerias:

```
npm i bcryptjs cors dotenv express helmet jsonwebtoken mongoose morgan @babel/cli @babel/core @babel/node @babel/preset-env
```

Añadimos el .json que se encuentra en el directorio raiz a Postman.


## Pre-requisitos 📋

⚠️ Contar con MongoDB instalado de manera local y Nodemon de manera global.

Para poder comenzar a utilizar la API: 

```
npm run dev
```

Esto lo que hara es que comencemos a utilizar en modo de desarrollo.

## Ejecutando las pruebas ⚙️

Una vez realizado los pasos anteriores, nos dirigimos a Postman

### Crear usuarios

En la carpeta de ruta ya almacenada -> Auth -> POST /SignUp -> Body y en Raw copiamos esto:

```
{
  "username": "any",
  "email": "any@gmail.com",
  "password": "password",
  "roles": ["admin"]
}
```
Sino asignamos "roles", por defecto se creara el rol "user"


````
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGY0MTZhZjUw
N2U3MmEzODViZTU1NiIsImlhdCI6MTYyMDAwMTEzMCwiZXhwIjoxNjIwMDg3NTMwfQ.ul
kZekplunRwRgjwgDttPDsw_9GxE73uHuLPRJq4f2Q"
````
 
 
Este token funcionara al momento de crear, actualizar o eliminar peliculas o personajes mientras ese usuario tenga el rol de "admin". Su plazo de vencimiento es de 24 horas.
 
## Crear peliculas o series

En la carpeta de ruta ya almacenada -> Films -> POST /films -> Headers -> asignar las claves (Key) de la imagen y en values (de x-access-token) pegar el token asignado.

![image](https://user-images.githubusercontent.com/49505462/116836113-b7fca300-ab9b-11eb-941a-e1ba060db4f9.png)



En Body -> Raw ingresamos, por ejemplo:
 
 
```
{
  "title": "Frozen II",
  "img": "https://anyimage.jpg",
}
```

Luego de que enviemos esa peticion, nos devolvera el objeto almacenado en la base de datos.

## Crear personajes

Es el mismo proceso que el de crear peliculas. Asignamos las mismas claves y valores en Headers.

En Body -> Raw ingresamos, por ejemplo:
 
 
```
{
  "name": "Elsa",
  "age": 25,
  "weight": 55,
  "img": "https://anyimage.jpg",
  "history": "anyHistory",
  film: "Frozen II"
}
```
 
Luego de que enviemos esa peticion, nos devolvera el objeto almacenado en la base de datos con el ID del film que esta almacenado en la collection 'films'. Caso contrario devuelve null.

El servidor envia como respuesta los datos almacenados:

```
{
    "film": [
        "608f4175f507e72a385be557"
    ],
    "_id": "608f4187f507e72a385be558",
    "name": "Elsa",
    "age": 25,
    "weight": 60,
    "img": "https://anyimage.jpg",
    "history": "sdas",
    "createdAt": "2021-05-03T00:19:19.127Z",
    "updatedAt": "2021-05-03T00:19:19.127Z"
}
```

### Actualizar o eliminar personajes o peliculas

Solo basta con ingresar en Headers de la misma manera las claves y valores al momento de crear un personaje o una pelicula

En la ruta de Films -> PUT /films/:filmsId en la direccion URL le pasamos el Id de nuestro objeto

![image](https://user-images.githubusercontent.com/49505462/116836830-6efa1e00-ab9e-11eb-826e-9f8c42a6f4c3.png)

En Body -> Raw solo ingresamos los valores de nuestro objeto a modificar 

```
{
    "title": "Frozen I"
}
```
Solo con eso actualizamos el nombre de dicha pelicula

Para eliminar realizamos las mismas acciones pero solo indicando en nuestra URL el id del objeto:

![image](https://user-images.githubusercontent.com/49505462/116836894-bda7b800-ab9e-11eb-85ab-c5d713cdd88d.png)

Nos devuelve un estado 204 despues de eliminar ese objeto.


### Traducir codigo a produccion con Babel

```
npm run build
```



Muchas gracias por utilizar la API ❤ Atte: Facu.
