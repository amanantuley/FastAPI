from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine




db_url = "postgresql://postgres:aman@localhost:5432/inventory_management"

engine = create_engine(db_url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False , bind=engine)

