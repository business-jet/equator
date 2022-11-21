from db.database import Base
from sqlalchemy import Column, Integer, String, DateTime, ARRAY
from datetime import datetime


class ArticleDB(Base):
    __tablename__ = "articles"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    preview = Column(String)
    text = Column(String)
    score = Column(Integer, index=True)
    date = Column(DateTime, index=True, default=datetime.utcnow)
    picture_urls = Column(ARRAY(String))
