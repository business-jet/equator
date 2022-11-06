import uvicorn


def run():
    uvicorn.run('app:app', port=8000, host='0.0.0.0', reload=True)


if __name__ == '__main__':
    run()
