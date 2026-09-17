
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
````

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Axios
* CSS
* Lucide React

### Backend

* Python
* FastAPI
* Uvicorn
* Pydantic
* SQLAlchemy

### Database

* PostgreSQL
* Psycopg2

### Deployment

* Vercel — Frontend
* Render — Backend
* Render PostgreSQL — Database

---

## 📁 Project Structure

```text
FastAPI/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── database_models.py
│   ├── models.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── header.js
│   │   │   └── footer.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── TaglineSection.js
│   │   └── TaglineSection.css
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## 🔄 CRUD Operations

ORVANTA provides complete product CRUD operations through the FastAPI backend.

| Operation        | Method   | Endpoint        |
| ---------------- | -------- | --------------- |
| Create Product   | `POST`   | `/product`      |
| Get All Products | `GET`    | `/product`      |
| Get Product      | `GET`    | `/product/{id}` |
| Update Product   | `PUT`    | `/product/{id}` |
| Delete Product   | `DELETE` | `/product/{id}` |

---

## 📡 API Endpoints

### Get All Products

```http
GET /product
```

### Get Product by ID

```http
GET /product/{id}
```

### Add Product

```http
POST /product
```

Example request:

```json
{
  "id": 101,
  "name": "Wireless Headphones",
  "description": "Bluetooth headphones",
  "price": 1999,
  "quantity": 25
}
```

### Update Product

```http
PUT /product/{id}
```

### Delete Product

```http
DELETE /product/{id}
```

---

## ⚙️ Local Installation

### 1. Clone the Repository

```bash
git clone https://github.com/amanantuley/FastAPI.git
```

```bash
cd FastAPI
```

---

# 🐍 Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

### Windows

```powershell
python -m venv venv
```

Activate it:

```powershell
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 🗄️ PostgreSQL Configuration

Create a PostgreSQL database named:

```text
inventory_management
```

Create a `.env` file inside the `backend` directory:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/inventory_management
```

Replace `YOUR_PASSWORD` with your local PostgreSQL password.

> Never commit `.env` files or database credentials to GitHub.

---

## ▶️ Run Backend

From the `backend` directory:

```bash
uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

---

# ⚛️ Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create:

```text
frontend/.env
```

Add:

```env
REACT_APP_API_URL=http://localhost:8000
```

Start the React application:

```bash
npm start
```

Frontend:

```text
http://localhost:3000
```

---

# 🌐 Production Deployment

## Frontend

The React frontend is deployed on **Vercel**.

Production environment variable:

```env
REACT_APP_API_URL=https://fastapi-1cmf.onrender.com
```

## Backend

The FastAPI backend is deployed on **Render**.

Production start command:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Database

The production PostgreSQL database is hosted on **Render PostgreSQL**.

The database connection is provided through:

```env
DATABASE_URL=<production-database-url>
```

Database credentials are stored as environment variables and are not included in the source code.

---

## 🔐 CORS

The FastAPI backend is configured to allow communication from the React frontend.

Example:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://orvanta-five.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

This allows the deployed frontend to communicate with the deployed API.

---

## 🔄 Application Flow

### Adding a Product

```text
User
 ↓
React Form
 ↓
Axios
 ↓
POST /product
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
PostgreSQL
 ↓
Success Response
 ↓
React UI
```

### Viewing Products

```text
React
 ↓
GET /product
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
PostgreSQL
 ↓
JSON Response
 ↓
React
```

### Updating a Product

```text
React
 ↓
PUT /product/{id}
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
PostgreSQL
```

### Deleting a Product

```text
React
 ↓
DELETE /product/{id}
 ↓
FastAPI
 ↓
SQLAlchemy
 ↓
PostgreSQL
```

---

## 🧪 Testing

The backend API can be tested using:

* FastAPI Swagger UI
* Postman
* Browser
* React frontend
* PostgreSQL queries

### Swagger

[https://fastapi-1cmf.onrender.com/docs](https://fastapi-1cmf.onrender.com/docs)

---

## 📊 Inventory Calculation

The application calculates inventory value using:

```text
Inventory Value = Product Price × Product Quantity
```

For multiple products:

```text
Total Inventory Value
=
Σ (Price × Quantity)
```

---

## 🔒 Security Practices

* Database credentials are stored in environment variables.
* `.env` files are excluded using `.gitignore`.
* Production database credentials are not stored in source code.
* CORS is configured for the deployed frontend.
* API communication uses HTTPS in production.

---

## 🚀 Future Improvements

* User authentication
* Role-based access control
* Product categories
* Search and filtering
* Pagination
* Low-stock alerts
* Inventory history
* Supplier management
* Sales management
* Advanced analytics
* Automated testing
* Docker support
* CI/CD with GitHub Actions

---

## 📚 Learning Outcomes

This project provided practical experience with:

* Full-stack web development
* React
* Python
* FastAPI
* REST APIs
* CRUD operations
* SQLAlchemy ORM
* PostgreSQL
* Axios
* CORS
* Environment variables
* API testing
* Cloud deployment
* Frontend-backend integration
* Production database connectivity

---

## 👨‍💻 Author

### Aman Antuley

Computer Engineering Student | Software Developer

* GitHub: [https://github.com/amanantuley](https://github.com/amanantuley)
* Repository: [https://github.com/amanantuley/FastAPI](https://github.com/amanantuley/FastAPI)

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐.

---

**ORVANTA — Inventory operations, clearly managed.**
