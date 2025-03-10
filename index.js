require('dotenv').config();
const express = require('express');

// Create Express app
const app = express();
const port = process.env.PORT;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint for testing server
app.get('/', (req, res) => {
    res.send('Server berhasil berjalan! dan ini yang terbaru');
});

// Jalankan server Express
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});