
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.all('/iclock/cdata', (req, res) => {
    console.log("ZKTeco Request:", req.method, req.query, req.body);
    res.send("OK");
});

app.get('/', (req, res) => {
    res.send("ZKTeco Server is Running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
