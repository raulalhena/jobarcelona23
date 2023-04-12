Registro de usuarios usando GitHub. Se han creado tres endpoints protegidos a través del acceso del login de Github con el cual se registran los usuario en la BBDD.

# Background

El proyecto se ha creado para la participación en el hackathon JoBarcelona 2023 según las especificaciones solicitadas.

# Usage

Para usarlo, es necesario realizar consultas a los endpoints descritos en la sección API para realizar la acción deseada a través del verbo HTTP: GET.

Se levanta el servidor Express, por defecto en el puerto 3000, para la exposición de la API, usando el ORM Sequelize junto a MySQL para la persistencia de datos.

Sequelize sincroniza y crea la tabla de 'users' acorde con el esquema del modelo User cada vez que se levanta el servidor.

Encontrarás el uso de importación de módulos de ES6, configurado en el package.json. Se ha realizado con JS funcional. El trabajo asíncrono se ha implementado con el uso de async/await para simplificar y conseguir una mayor legibilidad del código.

# API/Component

Se expone un endpoint /login para iniciar la autenticación de usuario a través del acceso de Github.

Se exponen en la API los siguientes endpoints:

Profile
Endpoint: /profile

    GET - facilita la información del usuario obtenida desde Github

        Recibe:
            Parametros:

        Devuelve: JSON

            code = Number (Código de estado HTML: 200 OK, 400 SOLICITUD INCORRECTA).

            user = Objeto con los datos del usuario:
                "userId": ,
                "login": "",
                "email": ,
                "githubId": "",
                "token": "",
                "createdAt": "",
                "updatedAt": ""

        Ejemplo:

        JSON:
        {
            "code": 200,
            "user": {
                "userId": 1,
                "login": "raulalhena",
                "email": null,
                "githubId": "38526688",
                "token": "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",
                "createdAt": "2023-04-12T18:42:12.000Z",
                "updatedAt": "2023-04-12T18:42:12.000Z"
            }
        }

        ERROR:
        {
            "code": 400,
            "message": "Error",
        }

Users
Endpoint: /users

    GET - Obtiene todos los usuarios de la base de datos:

        Recibe:
            Parametros:      

        Devuelve: JSON

            code = Number (Código de estado HTML: 200 OK, 400 SOLICITUD INCORRECTA).

            message = String - Mensaje de ticket/s encontrado/s o de error.

            users = Array con los usuarios obtenidos:
                "userId": ,
                "login": "",
                "email": ,
                "githubId": "",
                "token": "",
                "createdAt": "",
                "updatedAt": ""

            Ejemplo:

        JSON:
        {
            "code": 200,
            "users": [
                {
                    "userId": 1,
                    "login": "raulalhena",
                    "email": null,
                    "githubId": "38526688",
                    "token": "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",
                    "createdAt": "2023-04-12T19:28:20.000Z",
                    "updatedAt": "2023-04-12T19:28:20.000Z"
                }
            ]
        }

Star
Endpoint: /star

    GET - Otorga una estrella al repositorio indicado:

        Recibe:
            Parametros en URL (/api/star?repositoryOwner=[LOGIN PROPIETARIO]&repository=[NOMBRE REPOSITORIO]):
                - repositoryOwner
                - repository

        Devuelve: JSON

            code = Number (Código de estado HTML: 200 OK, 400 SOLICITUD INCORRECTA).

# Installation

Para el correcto funcionamiento se requiere de los siguientes tecnologías:

    NodeJS
    Express
    Sequelize
    MySQL
    Git

Para agilizar el desarrollo se ha utilizado el paquete nodemon que se encuentra en las dependencias de desarrollo del paquete package.json.

Para poder instalar todo lo necesario a excepción del servidor MySQL hay que seguir los siguientes pasos:

## Clonar repositorio

git clone https://github.com/raulalhena/jobarcelona23.git

## Instalación de paquetes

npm install

## Creación de archivo .env en el directorio raíz de la app

touch .env

## El archivo .env tendrá las siguientes variables:

    PORT = [PUERTO DEL SERVIDOR EXPRESS [3000]]
    HOST = [DIRECCION DEL SERVIDOR EXPRESS ["http://localhost"]]
    DB_NAME = [NOMBRE DE LA BASE DE DATOS]
    DB_USER = [NOMBRE DE USUARIO DE ACCESO A LA BASE DE DATOS]
    DB_PASSWD = [PASSWORD ACCES A LA BASE DE DATOS]
    DB_DIALECT = [LA BASE DE DATOS A USAR ["mysql"]]
    DB_HOST = [HOST QUE ALBERGA BBDD]
    CLIENT_ID = [ID DE LA APLICACION REGISTRADA EN GITHUB]
    CLIENT_SECRET = [SECRETO DE LA APLICACION REGISTRADA EN GITHUB]
    SESSION_SECRET = [SECRETO DE LA SESIÓN, CUALQUIER CADENA DE TEXTO]

## Ejecución del servidor para desarrollo con NODEMON:

npm run dev

## Ejecución del servidor para producción:

node app.js

# Stack

    NodeJS
    Express
    Sequelize
    MySQL

Contact info

Contactame a mi email: raul.alhena@gmail.com
License

GNU General Public License v3.0 GNU