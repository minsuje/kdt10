const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull : false
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull : false
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull : false
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull : false,
            },
        },{
            tableName: 'user3',
            timestamps: false
        }
    )
    return model
}
module.exports = User;