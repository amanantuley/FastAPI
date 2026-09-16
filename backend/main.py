from fastapi import FastAPI
from models import product

app = FastAPI()


products =[
    product(id= 1 ,name= "Aman" ,description= "budget phone " ,price = 99 ,quantity= 10),
    product(id= 2 ,name= "Aman" ,description= "budget phone " ,price = 999 ,quantity= 6),
    product(id= 1 ,name= "Aman" ,description= "budget phone " ,price = 99 ,quantity= 10),

]

@app.get("/product")
def get_all_products():
    return products