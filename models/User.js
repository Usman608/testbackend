const { v4: uuidv4 } = require("uuid");
const User = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
    },
    {
        associate:(models)=>{
           model.hasMany(models.Appointments, {
             foreignKey:{ 
               name:'userId'
             }, 
            });
              
        }
    }
  );
  return model;
};
module.exports = User;
