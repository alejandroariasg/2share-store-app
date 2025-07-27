# 🛒 2Share Store Web Application

This is a full-stack web application that allows users to:
- Register and log in
- View a list of available products
- Add or remove products from their personal shopping list
- Tag a product (like placing it in the shopping cart)
- Untag a product (like returning it to the shelf)
- Logout of the app
---

## 🚀 Technologies Used

### Backend (Java Spring Boot)
- Java 17
- Spring Boot 3.x
- Spring Security (session-based authentication)
- Spring Data JPA + Hibernate
- MySQL 8.x
- Maven
- Lombok

### Frontend (React + Vite)
- Node
- React
- Vite
- Axios
- Bootstrap 5

---

## 🧩 Required Versions

| Component       | Required Version            |
|------------------|-----------------------------|
| Java             | 17 or higher                |
| Node.js          | 22.x or higher              |
| NPM              | 9.x or higher               |
| MySQL            | 8.x                         |
| Maven            | 3.8 or higher               |
| Spring Boot      | 3.x                         |
| Vite             | ^4.0                        |


---

## 📥 Clone the Project

First, clone the project from GitHub. It contains two main folders: `store` (backend) and `client` (frontend).

```bash
git clone https://github.com/alejandroariasg/2share-store-app.git
cd 2share-store-app
```
---

## 🗄 Directory structure
2chre-sotore-app/
├── store-backend/      # Spring Boot backend
└── store-frontend/     # React frontend
└── bd/                 # Script .sql
└── MER.jpef/           # Entity relationship model
---
## 📦 Project Structure
### Backend (/store-backend)

store-backend/
├── src/
│   ├── main/
│   │   ├── java/com/example/store/
│   │   │   ├── config
│   │   │   ├── controller/
│   │   │   ├── dto/
│   │   │   ├── entity/
│   │   │   ├── repository/
│   │   │   ├── security/
│   │   │   └── service/
│   │   └── resources/
│   │       └── application.properties
├── pom.xml

### Frontend (/store-frontend)

store-frontend/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── App.jsx
├── index.html
├── vite.config.js
├── package.json

---
## 🚀 Deployment Instructions

### 1️⃣ Backend Deployment (Spring Boot + MySQL)
#### ✅ Prerequisites

##### Ensure MySQL is running
 - Ensure MySQL is running
 - Create a database named shoppingdb (or modify it in application.properties):

```bash
CREATE DATABASE shoppingdb;
```
#####  ✅ Configure application.properties
######  Located at store/src/main/resources/application.properties:

```bash
server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/shoppingdb?useSSL=false&serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password

# JPA config
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Prevents Spring Security default login
spring.security.user.name=
spring.security.user.password=
```
#####  ✅ Run the backend
######  Located at store/src/main/resources/application.properties:

``` bash
cd store-backend
./mvnw spring-boot:run
```
---
###  2️⃣ Frontend Deployment (React + Vite)
#####  ✅ Install dependencies
``` bash
cd store-fronend
npm install
```
##### ✅  Run in development mode
``` bash
npm run dev
```
---

> Note: `Frontend runs on http://localhost:5173 and communicates with the backend on http://localhost:8081.

### 🧪 How to Test the Application
1. Visit http://localhost:5173
2. Register a new user
3. Login with your credentials
4. Go to the /products page to view available products
5. Click "Add to list" to add products to your shopping list
6. Visit the /list page:
    - See products in cards   
    - Tag/untag them to simulate adding to/removing from cart
    - Remove them from the list
7. Log out using the Logout button
8. Try accessing /list again — you will be redirected to /login

---
### ✅ Application Status
- ✅ Full user flow implemented (register, login, list, tag, untag, delete)
- ✅ Secure backend with session-based authentication
- ✅ React UI with Bootstrap
- ✅ Responsive and user-friendly design
- ✅ Proper error and access handling
