from sqlalchemy.orm import Session
from . import models
import schemas


async def add_article(db: Session, article: schemas.Article):
    article = models.ArticleDB(**article.dict())
    article.text
    db.add(article)
    db.commit()
    db.refresh(article)
    return schemas.Article.from_orm(article)


async def get_articles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.ArticleDB).offset(skip).limit(limit).all()
