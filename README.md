# 🎬 Movie Theater Seat Booking System

A full-stack web application for booking movie theater seats with real-time seat selection, pricing tiers, and booking management.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1.5-green)
![Java](https://img.shields.io/badge/Java-17-orange)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)
![Material-UI](https://img.shields.io/badge/Material--UI-5.15.4-blueviolet)

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [How to Use](#-how-to-use)
- [Assignment Requirements](#-assignment-requirements)
- [Installation Guide](#-installation-guide)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🎫 60-Seat Theater Layout**: 6 rows × 10 columns visual grid
- **💰 Three Pricing Tiers**: 
  - Silver (Rows 1-2): $100 per seat
  - Gold (Rows 3-4): $150 per seat  
  - Platinum (Rows 5-6): $200 per seat
- **🎨 Visual Seat Selection**: Color-coded seats with real-time status
- **⚡ Real-time Updates**: Dynamic price calculation and seat availability
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **🛒 Smart Validation**: Maximum 6 seats per booking with error handling
- **🔄 Reset Functionality**: Easily reset theater or clear selections
- **🔔 User Feedback**: Success/error messages for all actions

## 🏗️ Tech Stack

### **Frontend**
- **React 18** with Hooks and Functional Components
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - Component library for consistent UI
- **Axios** - HTTP client for API requests
- **CSS-in-JS** - Styled components with Emotion

### **Backend**
- **Spring Boot 3.1.5** - Java framework for REST APIs
- **Java 17** - Programming language
- **Maven** - Dependency management
- **RESTful API** - Clean API design with JSON responses
- **CORS Enabled** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Java 17+
- Maven 3.6+

### 1. Clone the Repository
```bash
git clone https://github.com/srikanth-997/movie-theater-booking-system.git
cd movie-theater-booking-system
