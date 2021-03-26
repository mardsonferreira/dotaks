import Sequelize, { Model } from 'sequelize'

class Label extends Model{
    static init (sequelize) {
        super.init (
            {
                title: Sequelize.STRING,
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

export default Label;
