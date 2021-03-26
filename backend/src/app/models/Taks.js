import Sequelize, { Model } from 'sequelize'

class Task extends Model{
    static init (sequelize) {
        super.init (
            {
                description: Sequelize.STRING,
                color: Sequelize.STRING,
                archive: Sequelize.BOOLEAN,
            },
            {
                sequelize
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Task;
