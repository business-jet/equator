from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from schemas import Pic, TopPics



app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get('/')
async def root():
    return {'message': 'Hello, world!'}


@app.get('/top_pics', response_model=TopPics)
async def top_pics():
    top_pics = [
        {'author': 'Nikita', 'filename': 'file1'},
        {'author': 'Denis', 'filename': 'file22'},
        {'author': 'Misha', 'filename': 'file333'},
    ]
    return TopPics(top_pics=top_pics)


def run():
    uvicorn.run('main:app', port=8000, host='0.0.0.0', reload=True)


if __name__ == '__main__':
    run()
