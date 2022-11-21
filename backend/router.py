from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import schemas, common
from db.database import SessionLocal, engine
from db import models, services


models.Base.metadata.create_all(bind=engine)

router = APIRouter()


def get_db():
    _db = SessionLocal()
    try:
        yield _db
    finally:
        _db.close()


@router.get('/')
async def root():
    return {'message': 'Hello, world!'}


@router.get('/top_pics', response_model=schemas.TopPics)
async def top_pics():
    top_pics = common.getTopPics()
    return schemas.TopPics(top_pics=top_pics)


@router.get('/articles', response_model=List[schemas.Article])
async def articles(db: Session = Depends(get_db)):
    return await services.get_articles(db=db)


@router.post('/add_article', response_model=schemas.Article)
async def add_article(article: schemas.Article, db: Session = Depends(get_db)):
    return await services.add_article(article=article, db=db)


