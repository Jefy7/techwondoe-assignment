import { ILike } from "typeorm";
import { logger } from "../logger";
import { Company } from "../models/Company";

export class CompanyService {

    public async create(requestBody: any) {
        try {
            const company = new Company()
            company.name = requestBody.name.trim();
            company.ceo = requestBody.ceo;
            company.address = requestBody.address;
            company.inceptionDate = requestBody.inceptionDate;
            return await company.save();
        } catch (error) {
            logger.log({ level: 'error', message: 'Error occurred in CompanyService - create ', error: JSON.stringify(error) })
            throw error;
        }
    }

    public async findById(uuid: string) {
        try {
            return await Company.findOneBy({ uuid });
        } catch (error) {
            logger.log({ level: 'error', message: 'Error occurred in CompanyService - findById ', error: JSON.stringify(error) })
            throw error;
        }
    }

    public async searchByName(name: string) {
        try {
            return await Company.findBy({ name: ILike(`%${name}%`) });
        } catch (error) {
            logger.log({ level: 'error', message: 'Error occurred in CompanyService - searchByName ', error: JSON.stringify(error) })
            throw error;
        }
    }

    public async getAllWithTeams() {
        try {
            return await Company.find({ relations: ['teams'] });
        } catch (error) {
            logger.log({ level: 'error', message: 'Error occurred in CompanyService - getAllWithTeams ', error: JSON.stringify(error) })
            throw error;
        }
    }

}