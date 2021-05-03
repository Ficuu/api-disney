# API disney

Proyecto de personajes de Disney aplicado en el desafio de Node Js de la plataforma Alkemy 

### Instalación 🔧


Clonamos el repositorio e instalamos las librerias:

```
npm i bcryptjs cors dotenv express helmet jsonwebtoken mongoose morgan @babel/cli @babel/core @babel/node @babel/preset-env
```

Añadimos el .json que se encuentra en el directorio raiz a Postman


## Pre-requisitos 📋

⚠️ Contar con MongoDB instalado de manera local.

Para poder comenzar a utilizar la API: 

```
npm run dev
```

Esto lo que hara es que comencemos a utilizar en modo de desarrollo

y luego

```
npm run build
```
Si queremos traducir nuestro codigo a produccion

## Ejecutando las pruebas ⚙️

Luego de realizar esto, nos dirigimos a Postman

### Crear usuarios

En la carpeta de ruta ya almacenada -> Characters -> POST /SignUp -> Body y en Raw copiamos esto:

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

