const server = require('./src/app.js')
const {conn} = require('./src/db.js')
const cors = require('cors');

server.use(cors({
    origin: 'https://amoremiotest.vercel.app', // reemplazá con tu dominio de Vercel
    credentials: true
  }));

conn.sync({ force:false}).then(()=>{
    server.listen(3004,()=>{
        console.log('%s listening at 3004')
    });
});