# 📦 ORVANTA — Inventory Management System

A full-stack inventory management system built with **React, FastAPI, SQLAlchemy, and PostgreSQL**. ORVANTA provides a simple and modern interface for managing products, inventory quantities, pricing, and CRUD operations.

## 🌐 Live Demo

- **Frontend:** https://orvanta-five.vercel.app
- **Backend API:** https://fastapi-1cmf.onrender.com
- **API Documentation:** https://fastapi-1cmf.onrender.com/docs

---

## ✨ Features

- 📦 Add new products
- 📋 View all products
- 🔍 View individual product details
- ✏️ Update existing products
- 🗑️ Delete products
- 💰 Track product prices
- 📊 Track inventory quantities
- 🗄️ Persistent PostgreSQL database
- 🔗 RESTful FastAPI backend
- ⚡ React frontend with Axios
- 🌐 Production deployment
- 🔐 Environment-based database configuration
- 🔄 Frontend–backend communication using REST APIs

---

## 🏗️ Architecture

```text
                    ORVANTA
                       │
                       ▼
              ┌─────────────────┐
              │ React Frontend  │
              │     Vercel      │
              └────────┬────────┘
                       │
                     Axios
                       │
                     HTTPS
                       │
                       ▼
              ┌─────────────────┐
              │ FastAPI Backend │
              │     Render      │
              └────────┬────────┘
                       │
                   SQLAlchemy
                       │
                       ▼
              ┌─────────────────┐
              │   PostgreSQL    │
              │     Render      │
              └─────────────────┘
