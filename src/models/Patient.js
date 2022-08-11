const sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    const Patient = sequelize.define('paciente', {
        patient_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id: {
            type: type.STRING(20),
            allowNull: false,
        },
        first_name: {
            type: type.STRING,
            allowNull: false,
        },
        last_name: {
            type: type.STRING,
            allowNull: false,
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        phone: {
            type: type.STRING(20),
            allowNull: false,
        }
    });
    return Patient;
};