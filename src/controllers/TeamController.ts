import { Request, Response } from "express";
import { logger } from "../logger";
import { Team } from "../models/Team";
import { CompanyService } from "../services/CompanyService";

const companyService = new CompanyService()
export class TeamController {

    public async createTeam(request: Request, response: Response) {
        try {
            const companyId = request.params.companyId
            const requestBody = request.body
            if (!companyId) return response.status(400).send({ status: "Failed", success: false, message: "Provide companyId" });
            const company = await companyService.findById(companyId);
            if (!company) return response.status(400).send({ status: "Failed", success: false, message: "Provide Valid companyId" });

            const team = new Team()
            team.company = company;
            team.teamLeadName = requestBody.teamLeadName;
            await team.save();

            return response.status(200).send({ status: "OK", success: true, message: 'Successfully created Team' });
        } catch (error) {
            logger.log({ level: 'error', message: 'error in TeamController ', error: JSON.stringify(error) })
            return response.status(500).send({ status: "Failed", success: false, message: "Internal Server error" });
        }
    }

    public async getAllTeams(request: Request, response: Response) {
        try {
            const companies = await companyService.getAllWithTeams();
            if (!companies || companies.length == 0) return response.status(404).send({ status: "Failed", success: false, message: "No companies available" });
            return response.status(200).send({ status: "OK", success: true, data: companies });
        } catch (error) {
            logger.log({ level: 'error', message: 'error in TeamController ', error: JSON.stringify(error) })
            return response.status(500).send({ status: "Failed", success: false, message: "Internal Server error" });
        }

    }
}