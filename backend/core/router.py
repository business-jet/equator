from fastapi import APIRouter
from .schemas import TopPics
from . import common


router = APIRouter()


@router.get('/')
async def root():
    return {'message': 'Hello, world!'}


@router.get('/top_pics', response_model=TopPics)
async def top_pics():
    top_pics = common.getTopPics()
    return TopPics(top_pics=top_pics)
