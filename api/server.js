const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/api/ltiSimulator/summary', (req, res) => {
    const db = router.db;
    const data = db.get('api.ltiSimulator.summary').value();
    res.json(data);
  });
  
server.get('/api/ltiSimulator/fullSimulationResult', (req, res) => {
    const db = router.db;
    const data = db.get('api.ltiSimulator.fullSimulationResult').value();
    res.json(data);
  });
  
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server
