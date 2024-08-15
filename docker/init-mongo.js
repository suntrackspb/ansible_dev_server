db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
);
db.createUser({
    user: process.env.DB_USER,
    pwd: process.env.DB_PASS,
    roles: ["readWrite"],
});