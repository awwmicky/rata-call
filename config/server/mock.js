/* FIXME: dynamic import, export does not work */
import data from './data'

export default () => {
  const mockData = [
    { "id": 1, "author": "typicode", "category": "json-server", "title": "static data server" },
    { "id": 2, "author": "typicode", "category": "mantine", "title": "ui library" },
    { "id": 3, "author": "typicode", "category": "vite", "title": "js bundler" }
  ]
  data.posts = mockData
  return data
}
