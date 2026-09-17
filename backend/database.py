import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


db_url = os.getenv("DATABASE_URL")

if not db_url:
    raise RuntimeError("DATABASE_URL environment variable is not set")

engine = create_engine(db_url)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)