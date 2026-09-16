from fastapi import FastAPI , Depends
from fastapi.middleware.cors import CORSMiddleware
from models import product
from database import SessionLocal , engine
import database_models
from sqlalchemy.orm import Session

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"]
)

database_models.Base.metadata.create_all(bind=engine)

products =[
    product(id= 1 ,name= "Aman" ,description= "budget phone " ,price = 99 ,quantity= 10),
    product(id= 2 ,name= "Aman" ,description= "budget phone " ,price = 999 ,quantity= 6),
    product(id= 3 ,name= "Aman" ,description= "budget phone " ,price = 99 ,quantity= 10),

]


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    db = SessionLocal()

    count = db.query(database_models.Product).count

    if count == 0:
        for product in products:
            db.add(database_models.Product(**product.model_dump()))
    
        db.commit()

init_db()




@app.get("/products")
def get_all_products(db : Session = Depends(get_db)):
    # Database connection
    # db = SessionLocal()
    # db.query()

    db_products = db.query(database_models.Product).all()
    return db_products




@app.get("/products/{id}")
def get_product_by_id(id:int , db: Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(database_models.Product.id == id).first()
    if db_product:
        return db_product

    return "product not found"


@app.post("/products")
def add_prodcut(product: product , db : Session = Depends(get_db)):
    db.add(database_models.Product(**product.model_dump()))
    db.commit()
    return product




@app.put("/products/{id}")
def update_product(id : int , product : product , db: Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(database_models.Product.id == id).first()
    if db_product:
        db_product.name = product.name
        db_product.description = product.description
        db_product.price = product.price
        db_product.quantity = product.quantity
        db.commit()
        return " Product Updated"
        
    else:
        return "No Product Found"


        
@app.delete("/products/{id}")
def delete_prodcut(id:int , db:Session = Depends(get_db)):
    db_product = db.query(database_models.Product).filter(database_models.Product.id == id).first()

    if db_product:
        db.delete(db_product)
        db.commit()

    else:
        return "Product Not found"


