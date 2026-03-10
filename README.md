# UrbanAlert

UrbanAlert is a software developed to serve your community by allowing you to create a report as soon as possible (ASAP), with the purpose it being delivered to a dispatch and the dispatch sending a unit that can solve your issue in time. 


## Installation Guide

The first thing you need to do to work in this project is to clone this repository by HTTPS.

```console
https://github.com/<YourUsername>/urban_alert.git
```

Or with your SSH key.
```console
git@github.com:<YourUsername>/urban_alert.git
```
> IMPORTANT! <br> To clone this repository with your SSH key, you must first add your SSH  configuration from your local computer to GitHub. <br> Follow the instructions in [this video](https://www.youtube.com/watch?v=X40b9x9BFGo) to add your local SSH to GitHub.

Once you cloned this repository open the folder ***urban_alert*** with your favorite code editor such as VSCode.

### NPM Modules Installation

Once you reached this part and your code is open in your preffered code editor, navigate with your terminal the the main folder ***urban_alert***. It is possible the only command you must execute to reach there is:

```console
cd urban_alert
```

Once the tail of the location of your working directory in your teminal is equal or similar to this one: ***\urban_alert***. You must run the following command into the terminal to install all the NPM modules that are necessary for this code to work.

```console
npm install
```

After typing this command, you must wait for the installation to complete. Once the installation is complete you can continue to the next step.

### Environment Variables Configuration

Now that you installed the NPM modules, you must configure the Environment Variables for this code to work.

1. Copy the ***.env.template*** into a ***.env*** file by employing the next command.

Linux
```console
cp .env.template .env
```
Windows
```console
copy .env.template .env
```

2. A new file named ***.env*** should have been created, which contains the following content.

```.env
# Port where the express server runs
PORT=3000

# URL that establishes connection to DB
DB_URL=

# API key for supabase (WIP)
API_KEY=

# Secret API key for supabase (WIPs)
SECRET_TOKEN=
```

3. You must fill the variables depending on which database you are going to use, in this case for this project and this code, we did use MongoDB. It is important that you fill your MongoDB URL to allow this code, the final result should look like this:

```.env
# Port where the express server runs
PORT=3000

# URL that establishes connection to DB
DB_URL='mongodb+srv://<user>:<db_password>@<project_name>.<tu_cluster>.mongodb.net/?appName=SoftArch'

# API key for supabase (WIP)
API_KEY=

# Secret API key for supabase (WIPs)
SECRET_TOKEN=
```

4. Now you can run your server by typing the following command in your terminal.

```console
node index.js
```

> IMPORTANT! <br> To gather your MongoDB URL you must follow a sequence of steps. In [this video](https://www.youtube.com/shorts/pIHvoXkwmq4) shows you how to collect your URL in less than a minute.

## Technologies Used
These are the technologies that were employed for the development of this project

- **Node.js:** Is a JavaScript runtime environment that allows developers to execute JavaScript code outside the browser. It is highly versatile and can be used for both frontend and backend development, though it is primarily recognized as a backend technology.
- **Express:** Express.js is a minimal and flexible Node.js web application framework that simplifies building server-side applications and APIs.
- **MongoDB:** MongoDB is a document-oriented database designed for scalability, flexibility, and high performance. Unlike traditional relational databases, it stores data in JSON-like documents, making it schema-less and highly adaptable to changing data structures.
- **JWT:** JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- **Bcrypt:** Bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher. 

## Main Endpoints
These are the main endpoints that are used by this software.

### Auth
Endpoints related to the authorization of the user.

### Auth (`/api/auth`)

The base URL that is used in this project is `http://localhost:3000`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/getAllUsers` | Gets all the users stored in the database. |
| **POST** | `/createUser` | Registers a user into the database. |
| **POST** | `/loginUser` | Log the user into the platform. |
---

The endpoints that are posts require a body such as this:

```json
{
  "email": "ola@gmail.com",
  "password": "contrasena"
}
```

### Reports (`/api/reportes`)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/getAllReports` | Obtain all reports created in the database. |
| **POST** | `/createReports` | Create a report and store it into the database. |

The endpoints that are posts require a body such as this:

```json
{
  "titulo": "Choque en casa de vidal",
  "descripcion": "Chocaron la casa de vidal",
  "ubicacion": "Casa de vidal"
}
```