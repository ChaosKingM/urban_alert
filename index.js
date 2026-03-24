require('dotenv').config();
// Fix: Node.js SRV DNS resolver fails on some Windows setups — force Google DNS
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
// Tools
const express = require('express');
// const { createClient } = require('@supabase/supabase-js');
const connectDB = require('./src/config/database');
const reportesRoutes = require('./src/routes/reportes');
const authRoutes = require('./src/routes/usuarios');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UrbanAlert API',
            version: '1.0.0',
            description: 'API para ella aplicación de alertas urbanas',
        }, 
        servers: [
            {
                url: `http://localhost:${PORT}`,
            }
        ]
    },
    apis: ['./index.js', './src/routes/*.js'], 
};

app.use(express.json());

connectDB();

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// DB Connection

/**
 * @openapi
 * /:
 *   get:
 *     tags:
 *       - System
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: A simple welcome message
 */
app.get("/", (req, res) => {
  res.status(200).send("Hey, You are in my backend!!!");
});


//Main route


app.use("/api/reportes", reportesRoutes);

app.use("/api/auth", authRoutes);


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