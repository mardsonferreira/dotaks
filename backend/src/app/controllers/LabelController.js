import * as Yup from 'yup';

import User from '../models/User';
import Label from '../models/Label';

class LabelController {

    async store(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Title field is required!' });
        }

        const { title } = req.body;

        const label = await Label.create({
            title,
            user_id: req.userId
        });

        return res.json(label);
    }

    async index(req, res) {
        const { id } = req.params;

        const label = await Label.findOne({
            where: { id: id, archive: false},
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'name']
                }
            ],
            attributes: ['id', 'title', 'archive'],
        });

        if (!label) {
            return res.status(401).json({ erro: 'Label not found' });
        }

        return res.json(label);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            title: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Title field is required!' });
        }

        const label = await Label.findByPk(req.params.id);

        if (!label) {
            return res.status(401).json({ erro: 'Label not found' });
        }

        const { id, title } = await label.update(req.body);

        return res.json({
            id,
            title,
        });
    }

    async delete(req, res) {
        const label = await Label.findByPk(req.params.id);

        if (!label) {
            return res.status(401).json({ erro: 'Label not found' });
        }

        label.archive = true

        label.save();

        return res.json(label);
    }

}

export default new LabelController();