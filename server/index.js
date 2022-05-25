const express = require('express');
const usersRouter = require('./routes/users');
const testApiRouter = require('./routes/testApi');

const InitializeExpressServer = (server) => {
    // Middleware
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));

    // Register routes
    server.use('/api/test', testApiRouter);
    server.use('/api/users', usersRouter);
};

module.exports = InitializeExpressServer;
