Executar o seguinte script no Postgres:

CREATE DATABASE crud_user;

Adiocinar arquivo .env na raiz do backend

TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = {db_username}
TYPEORM_PASSWORD = {password}
TYPEORM_DATABASE = crud_user
TYPEORM_PORT = {db_port}
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_ENTITIES = src/entities/*.ts
TYPEORM_ENTITIES_DIR = src/entities

Executar script yarn migrate no projeto backend

Executar script yarn dev no projeto backend para subir backend

Executar script yarn start no projeto frontend para subir frontend
