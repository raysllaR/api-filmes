const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Funcionando');
})

app.listen(3000, () => console.table({Server: {"Port": 3000}}))