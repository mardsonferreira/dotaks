import * as Yup from 'yup';

import Task from '../models/Taks';
import User from '../models/User';

class TaskController {

    async store(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            color: Yup.string().min(7).max(7),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' });
        }

        const { description, color } = req.body;

        const task = await Task.create({
            description,
            color,
            user_id: req.userId
        });

        return res.json(task);
    }

    async index(req, res) {
        const { id } = req.params;

        const task = await Task.findOne({
            where: { id: id, archive: false},
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name']
                }
            ],
            attributes: ['id', 'description', 'color', 'archive'],
        });

        if (!task) {
            return res.status(401).json({ erro: 'Task not found' });
        }

        return res.json(task);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            color: Yup.string().min(7).max(7),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' });
        }

        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(401).json({ erro: 'Task not found' });
        }

        const { id, description, color } = await task.update(req.body);

        return res.json({
            id,
            description,
            color
        });
    }

    async delete(req, res) {
        const task = await Task.findByPk(req.params.id);

        if (!task) {
            return res.status(401).json({ erro: 'Task not found' });
        }

        task.archive = true

        task.save();

        return res.json(task);
    }

}

export default new TaskController();