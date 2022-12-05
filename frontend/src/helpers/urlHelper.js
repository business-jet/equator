const SERVER_URL = 'http://localhost:8000'
const PREFIX = 'api'

export const apiPath = (path, version = null) => {
    return `${SERVER_URL}/${PREFIX}/${version ? version + '/' : ''}${path}`
}
