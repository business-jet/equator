import uvicorn
from dotenv import load_dotenv


def run():
    load_dotenv()
    uvicorn.run('app:app', port=8000, host='0.0.0.0', reload=True)


if __name__ == '__main__':
    run()
