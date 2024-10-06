import { Request, Response } from "express";
import { logger } from "../logger";
import { CompanyService } from "../services/CompanyService";


const companyService = new CompanyService();

export class CompanyController {

    public async createCompany(request: Request, response: Response) {
        try {
            const requestBody = request.body
            if (!requestBody) return response.status(400).send({ status: "Failed", success: false, message: "Provide Valid data" });
            const company = await companyService.create(requestBody);
            return response.status(200).send({ status: "OK", success: true, message: 'Successfully created Company', data: company.uuid });
        } catch (error) {
            logger.log({ level: 'error', message: 'error in CompanyController ', error: JSON.stringify(error) })
            return response.status(500).send({ status: "Failed", success: false, message: "Internal Server error" });
        }
    }



    public async getCompany(request: Request, response: Response) {
        try {
            const companyId = request.params.companyId;
            if (!companyId) return response.status(400).send({ status: "Failed", success: false, message: "Provide companyId" });
            const company = await companyService.findById(companyId);
            if (!company) return response.status(400).send({ status: "Failed", success: false, message: "Provide Valid companyId" });
            return response.status(200).send({ status: "OK", success: true, data: company });
        } catch (error) {
            logger.log({ level: 'error', message: 'error in CompanyController ', error: JSON.stringify(error) })
            return response.status(500).send({ status: "Failed", success: false, message: "Internal Server error" });
        }
    }

    public async searchCompany(request: Request, response: Response) {
        try {
            const name = request.query.name as string;
            if (!name || name == '') return response.status(400).send({ status: "Failed", success: false, message: "Provide Valid company name" });
            const companies = await companyService.searchByName(name);
            if (!companies || companies.length == 0) return response.status(404).send({ status: "Failed", success: false, message: "No companies available for the given name" });

            return response.status(200).send({ status: "OK", success: true, data: companies });
        } catch (error) {
            logger.log({ level: 'error', message: 'error in CompanyController ', error: JSON.stringify(error) })
            return response.status(500).send({ status: "Failed", success: false, message: "Internal Server error" });
        }
    }



}