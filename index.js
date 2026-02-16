require('dotenv').config();
// Tools
const express = require('express');
// const { createClient } = require('@supabase/supabase-js');
const connectDB = require('./src/config/database');
const reportesRoutes = require('./src/routes/reportes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

// DB Connection

//Main route
app.use("/api/reportes", reportesRoutes)

// Supabase connection
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

/* // Route
app.get("/", async(req, res) => {
    // Supabase Healthceck
    const {data, error} = await supabase.from('profiles').select('*').limit(1); 

    res.json({
        message: 'Welcome to UrbanAlert API',
        database_nosql: mongoose.connection.readyState === 1 ? 'Connection ready' : 'Fail connection',
        supabase_auth: error ? `Error connection ${error.message}` : 'Online'
    });
}); */

app.listen(PORT, () => {
    console.log(`Port connection running in: http://localhost:${PORT}`)
});