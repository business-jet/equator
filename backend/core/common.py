from os import walk
from .schemas import Pic


def getTopPics() -> list:
    path = 'pics/top/'
    pics = []
    for _, _, files in walk(path):
        for name in files:
            pics.append(Pic(author='AuthorName', url=path + name))

    return pics
