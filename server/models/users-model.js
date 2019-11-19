module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        }//,

        // fave_character: {
        //     type: DataTypes.STRING,
        // }
    }, {timestamps: false});
}