import 'reflect-metadata';
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { logger } from './logger';
import { AppDataSource } from './typerorm';
import associateRouter from './routes/AssociateRoutes';
import adminRouter from './routes/AdminRoutes';

const app = express();
const PORT = process.env.PORT;

async function start() {
    try {
        await AppDataSource.initialize();

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(cors())
        app.use('/api/v1/admin', adminRouter);
        app.use('/api/v1/associate', associateRouter);

        app.listen(PORT, () => {
            logger.log({ level: "info", message: `App Listening on Port ${PORT}` });
        });
    }
    catch (error) {
        logger.log({ level: "error", message: `Something went wrong `, error: JSON.stringify(error) });
    }

}

start()

export default app;