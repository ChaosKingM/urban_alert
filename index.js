require('dotenv').config();
// Tools
const express = require('express');
const mongoose = require('mongoose');
const {createClient}= require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase connection
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Succesful Connection'))
    .catch(err => console.error('Error MongoDB:', err))

// Route
app.get("/", async(req, res) => {
    // Supabase Healthceck
    const {data, error} = await supabase.from('profiles').select('*').limit(1); 

    res.json({
        message: 'Welcome to UrbanAlert API',
        database_nosql: mongoose.connection.readyState === 1 ? 'Connection ready' : 'Fail connection',
        supabase_auth: error ? `Error connection ${error.message}` : 'Online'
    });
});

app.listen(PORT, () => {
    console.log(`Port connection running in: http://localhost:${PORT}`)
});