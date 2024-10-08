# Karlshamn Energi Training Portal

## 📚 About

This repository contains the Karlshamn Energi Training Portal, a web-based application designed to provide essential safety and security training for employees and contractors. The portal offers training modules in both Swedish and English, ensuring comprehensive coverage for all personnel.

## 🌟 Features

- 🌐 Bilingual support (Swedish and English)
- 🖥️ Interactive training modules
- 📊 Progress tracking
- 🔒 Security-focused content
- 🎨 Responsive design for various devices

## 🛠️ Tech Stack

- **Styling**: Tailwind CSS
- **Server**: Node.js
- **Web Server**: Nginx (Dockerized)
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose
- PM2 (global installation)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/karlshamn-energi-training.git
   cd karlshamn-energi-training
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the Next.js application:
   ```bash
   npm run build
   ```

4. Start the application with PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

5. Build and start the Nginx Docker container:
   ```bash
   docker-compose up -d
   ```

## 📖 Usage

After installation, the application will be available at `http://localhost`. You'll see a landing page where you can choose between the Swedish and English versions of the training.

## 🔧 Configuration

- **Next.js**: Configuration can be modified in `next.config.js`
- **PM2**: Process management settings are in `ecosystem.config.js`
- **Nginx**: Server configuration is in `nginx.conf`
- **Docker**: Container settings are defined in `Dockerfile` and `docker-compose.yml`

## 🔄 Updating Content

To update the training content:

1. Modify the slide data in `data/slides-en.ts` or `data/slides-sv.ts`
2. Rebuild the Next.js application:
   ```bash
   npm run build
   ```
3. Restart the PM2 process:
   ```bash
   pm2 restart karlshamn-energi-training
   ```

## 📄 License

This project is proprietary and confidential. All rights reserved by Karlshamn Energi.
