"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi_dev'),
            user: env('DATABASE_USERNAME', 'strapi_user'),
            password: env('DATABASE_PASSWORD', 'password'),
            ssl: env.bool('DATABASE_SSL', false), // Ensure this is set to false
        },
    },
});
