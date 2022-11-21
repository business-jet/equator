from pydantic import BaseModel
from typing import List
from datetime import datetime


class Pic(BaseModel):
    author: str
    url: str


class TopPics(BaseModel):
    top_pics: List[Pic]


class Article(BaseModel):
    id: int
    title: str
    preview: str
    text: str
    score: int
    date: datetime
    picture_urls: List[str]

    class Config:
        orm_mode = True
