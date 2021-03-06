module.exports = (Sequelize, sequelize) => {
    return sequelize.define('users',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            fullname: Sequelize.STRING,
            cache: {
                type: Sequelize.INTEGER,
                defaultValue: 100
            }
        });
};