const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.get('/api/user', (req, res) => {
    res.send("hello world!");
});

// app.get('/api/user1', (req, res) => {
//     res.send("hello world!");
// });
app.listen(8000, () => {
    console.log('listening on port', 8000);
});

