# 📌 ft_transcendence

---

## 🚀 Overview  

**ft_transcendence** is the final project of the **42 Network curriculum**, where we build a **full-stack real-time web application**.  
It’s a modern reinvention of the **classic Pong** game — featuring multiplayer gameplay, live chat, authentication, monitoring, and deployment.

> This project brings together backend APIs, real-time systems, authentication, frontend frameworks, containerization, and observability.

---

## ⚙️ Tech Stack  


| Layer           |             Technologies              |
|-----------------|---------------------------------------|
| **Frontend**    | React.js • TailwindCSS • TypeScript   |
| **Backend**     | Fastify.js • Socket.IO • JWT • OAuth2 |
| **Database**    | SQLite                                |
| **Deployment**  | Docker • Nginx • HTTPS                |
| **Monitoring**  | Prometheus • Grafana                  |


---

## ✨ Features  

### Backend (Fastify + Socket.IO)
- Fast, scalable backend with **Fastify**
- Real-time gameplay powered by **Socket.IO**
- Authentication using **JWT** and **Two-Factor Authentication (2FA)**
- **OAuth2** integration for Google login
- Modular, production-ready architecture (Docker + Nginx)

---

### User Management & Authentication
- User registration and profile management  
- Secure login via **JWT** and **OAuth2**  
- Optional **2FA** for enhanced security  
- Player statistics and match history tracking  
- Friend system and user blocking  
- Global leaderboard  

---

### Gameplay & Matchmaking

#### 🏓 Pong Game  
- Real-time Pong gameplay using **Socket.IO**
- Remote matchmaking and multiplayer support  
- Customizable gameplay  
- Smooth handling of lag and reconnections  
- **Tournament Mode** – organize multi-round competitions between players  

#### ❌⭕ Tic Tac Toe Game  
- Classic Tic Tac Toe implemented with **real-time multiplayer**  
- Play with random opponents  
- Simple, responsive design  

---

### Live Chat
- Real-time chat between players  
- Notifications for messages, friend requests, and matches  
- Option to block users  
- Send game or tournament invitations directly from chat  

---

### Database (SQLite)
- Lightweight, file-based database  
- Stores users, matches, chat, tournaments, and configurations  

---

### Frontend (React + TailwindCSS + TypeScript)
- Built with **React** and **TypeScript**
- Fully responsive design for desktop, tablet, and mobile  
- Real-time updates through **Socket.IO**
- Clean and maintainable architecture  

---

### Monitoring & Deployment
- **Prometheus** collects metrics from  
  - **Node Exporter** (system metrics: CPU, RAM, disk usage)  
  - **Nginx Exporter** (web server performance)  
- **Grafana** visualizes real-time dashboards for performance and health  
- **Alerting** via Prometheus for critical events (e.g., high CPU, low memory, downtime)  
- **Dockerized** for simple setup and deployment  
- **Nginx** provides HTTPS and reverse proxy configuration  

---

## 🏁 Conclusion  

**ft_transcendence** is a full-stack, real-time web platform combining gaming, authentication, and observability.  
Now featuring **Pong with Tournament mode** and **Tic Tac Toe multiplayer**, it showcases mastery in **real-time web technologies**, **system monitoring**, and **modern DevOps practices**.

Built with passion and precision. ❤️  
