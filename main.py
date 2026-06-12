from fastapi import FastAPI
from models import product

app = FastAPI()

@app.get("/") # home page
def greet():
    return {"message": "Hello Aman Antuley"}


product = [
    product(id = 1,name = "Laptop",price = 50000,quantity =  5),
    product(id = 2, name ="Mouse",price = 500, quantity = 50),
    product(id = 3, name = "Keyboard", price = 1000, quantity = 25)
]
@app.get("/products")
def products():
    return product

@app.get("/products/{id}")
def get_product_by_id(id : int):
    for p in product:
        if p.id == id:
            return p
        
    return "Product not found"
    
@app.post("/products")  
def add_product(product : products):
    product.append(product)
    return product
