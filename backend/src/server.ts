import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request, response) => {
    const {
        name,
        latitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);
});

app.listen(3333);