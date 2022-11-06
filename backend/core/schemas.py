from pydantic import BaseModel
from typing import List


class Pic(BaseModel):
    author: str
    url: str


class TopPics(BaseModel):
    top_pics: List[Pic]


class User(BaseModel):
    id: int
    nickname: str
    firstname: str
    lastname: str
    pics: List[Pic]
