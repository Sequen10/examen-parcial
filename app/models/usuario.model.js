
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        clave: {
            type: Sequelize.INTEGER
        },
        fecha_creacion: {
            type: Sequelize.DATE
        },

    });
    return Usuario;
};