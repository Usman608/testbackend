const { v4: uuidv4 } = require("uuid");
const Appointments = (sequelize, DataTypes) => {
  const model = sequelize.define(
    "Appointments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
      },
      personName: {
        type:DataTypes.STRING,

      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME, 
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME, 
        allowNull: false,
      },
    },
    {
        associate: (models) => {
            model.belongsTo(models.User, {
                foreignKey: {
                  name: "userId",
                },
              }); 
        }
    }
  );
  return model;
};

module.exports = Appointments;
