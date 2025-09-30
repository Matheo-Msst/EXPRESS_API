# 🚀 Projet d'Apprentissage Docker avec Express.js & Docker Compose

Ce projet est une base simple pour apprendre à utiliser **Docker** et **Docker Compose** en conteneurisant une application **Node.js (Express.js)** avec **nodemon** pour le rechargement automatique.

---

## 📁 Structure du projet


```
├── docker-compose.yaml
├── dockerfile
├── package.json
├── README.md
└── src
    └── app.js
```

---

## ⚙️ Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nodemon](https://nodemon.io/) (pour recharger le serveur automatiquement en développement)

---

## 🚧 Prérequis

Assurez-vous d’avoir les outils suivants installés :

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## ▶️ Lancer le projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/Matheo-Msst/EXPRESS_API.git
cd ./EXPRESS_API.git
```
### 2. Démarrer l'application avec Docker Compose
```
docker-compose up --build
```
### Cela va :

    - Construire l'image Docker avec le Dockerfile
    - Lancer le conteneur avec nodemon pour un rechargement automatique à chaque modification du code
    - Exposer l’application sur le port 3000

## 🌐 Accéder à l'application

### Une fois le conteneur lancé, accédez à l'application dans votre navigateur :
http://localhost:1616
