import express from 'express'

import amorRoutes from './routes/amor.routes.js'


import './config.js'
const app=express()
app.use(express.json())

// end points Rutas
app.use('/api',amorRoutes)


//Manejo de errores cuando la ruta no es encontrada
app.use((req,res,next)=>{
    res.status(400).json({
        message:"Ruta no encontrada... Verificar!"
    })
})

export default app;