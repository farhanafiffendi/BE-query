// Import db connection and QueryTypes from sequelize
const db = require("../database/connection");
const { QueryTypes } = require("sequelize");

// Function addUsers for insert user data to database
exports.addUsers = async (req, res) => {
    try {
        const { email, password, name, status } = req.body;

        const query = `INSERT INTO users (email,password,name) VALUES ('${email}','${password}','${name}')`;

        await db.sequelize.query(query);

        res.send({
            status: "success",
            message: "Add user finished",
            query,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller get Users here ...
exports.getUsers = async (req, res) => {
    try {
        const query = "SELECT * FROM users";
        const data = await db.sequelize.query(query, { type: QueryTypes.SELECT });

        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller get User by received id here ...
exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await db.sequelize.query(
            `SELECT * FROM users WHERE id = ${id}`,
            { type: QueryTypes.SELECT }
        );

        res.send({
            status: "success",
            data,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller update User here ...
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { email, password, name } = req.body;

        const query = `UPDATE users 
                        SET email = '${email}', password = '${password}', name = '${name}'
                        WHERE id = ${id}`;

        await db.sequelize.query(query);

        res.send({
            status: "success",
            message: `Update user id: ${id} finished`,
            data: req.body,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};


// Create controller delete User here ...
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const query = `DELETE FROM users WHERE id = ${id}`;

        await db.sequelize.query(query);

        res.send({
            status: "success",
            message: `Delete user id: ${id} finished`,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};