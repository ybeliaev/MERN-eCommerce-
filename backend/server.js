// const express = require('express')
// const dotenv = require('dotenv')
// const products = require('./data/products')

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
// import products from '../backend/data/products.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

// app.use((req, res, next) => {
//     console.log(req.originalUrl) // /api/products if request for all products
//     next()
// })

app.get('/', (req, res) => {
    res.send('API is running!..')
})

app.use('/api/products', productRoutes)

app.use((req, res, next) => {
    const error = new Error(`NOT FOUND - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})

const PORT = process.env.PORT || 5555

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
            .yellow.bold
    )
)
