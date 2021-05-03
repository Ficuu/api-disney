# api-disney

Proyecto de personajes de Disney aplicado en el desafio de Node Js de la plataforma Alkemy 

## Prerequisitos 📋

Clonamos el repositorio e instalamos las librerias:

```
npm i bcryptjs cors dotenv express helmet jsonwebtoken mongoose morgan @babel/cli @babel/core @babel/node @babel/preset-env
```

Añadimos el .json que se encuentra

### Instalación 🔧

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

1) Para crear usuarios en la ruta de Postman -> Characters -> POST /SignUp -> Body -> Raw

```
{
  "username": "any",
  "email": "any@gmail.com",
  "password": "password"
}
```




