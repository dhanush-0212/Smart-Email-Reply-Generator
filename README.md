# Smart Email Reply Generator

**Smart Email Reply Generator** is an AI-powered Chrome extension designed to enhance your Gmail experience by generating intelligent, context-aware reply suggestions. At its core, the system leverages **Spring AI** to integrate with Grok AI, delivering real-time response generation via a seamless "AI-Reply" button embedded within Gmail.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
  - [1. Backend Setup (Spring Boot + Spring AI)](#1-backend-setup-spring-boot--spring-ai)
  - [2. Frontend Setup (React + Vite)](#2-frontend-setup-react--vite)
  - [3. Browser Extension Setup](#3-browser-extension-setup)
- [Usage](#usage)
- [Contributors](#contributors)
- [Screenshots](#screenshots)

---

## Features

- 🧠 **AI-Generated Email Replies** using Grok AI via Spring AI
- ✨ Adds an **"AI-Reply" button** beside Gmail's native "Send" button
- 🧩 Chrome extension that runs directly within Gmail
- ⚙️ Spring Boot backend processes and relays email content
- ⚡ React + Vite frontend (for development or standalone interface)

---

## Architecture
Smart-Email-Reply-Generator

- ├── email-EXT/  Chrome Extension for Gmail
- ├── email-frontend/  React + Vite Frontend App
- ├── email/  Spring Boot Backend (with Spring AI & Grok API)


---

## Installation

### 1. Backend Setup (Spring Boot + Spring AI)

Ensure you have Java 17+ and Maven installed.

```bash
cd email
./mvnw spring-boot:run
```

- ⚠️ You must set your Grok AI API key in the application properties or environment.
- spring.ai.grok.api-key=your_grok_api_key

### 2. Frontend Setup (React + Vite)

```bash
cd email-frontend
npm install
npm run dev
```

### 3. Browser Extension Setup

Open Chrome and go to chrome://extensions/

Enable Developer Mode

Click Load unpacked and select the email-EXT folder

Visit Gmail – the AI-Reply button will now appear beside the "Send" button

---

## Usage

- Open Gmail and read or compose an email.

- Click the new AI-Reply button to generate a smart reply based on email context.

- Review, edit (if needed), and click "Send".

- Or use frontend for generating replies 

- Copy paste the original email and select tone then hit enter

---

## Contributors
- @dhanush-0212

---

## Screenshots

![UI](https://github.com/user-attachments/assets/6bd668cf-e687-4427-888c-e561d7a94ce3)
![Screenshot 2025-06-13 215628](https://github.com/user-attachments/assets/92d1b5e8-34a8-4b15-a73f-a544770e8be3)
![Screenshot 2025-06-13 215748](https://github.com/user-attachments/assets/7b608a47-ff8d-4cad-9d63-6551f2a1f626)
![Screenshot 2025-06-13 215955](https://github.com/user-attachments/assets/9aaf1d9b-7603-4fc5-9414-8edfcaaa034e)
