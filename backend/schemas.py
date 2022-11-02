from pydantic import BaseModel
from typing import List
from datetime import date


class Pic(BaseModel):
    author: str
    filename: str


class TopPics(BaseModel):
    top_pics: List[Pic]
