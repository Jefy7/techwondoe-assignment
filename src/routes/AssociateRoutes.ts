import express from 'express'
import { CompanyController } from '../controllers/CompanyController';
import { jwtAssociateMiddleware } from '../middlewares/Auth';
import { requiredScopes } from 'express-oauth2-jwt-bearer';
import { TeamController } from '../controllers/TeamController';
const associateRouter = express.Router();
const companyController = new CompanyController()
const teamController = new TeamController()


associateRouter.post('/company', jwtAssociateMiddleware(), requiredScopes('write'), (req, res) => { companyController.createCompany(req, res) });
associateRouter.get('/company/:companyId', jwtAssociateMiddleware(), requiredScopes('read'), (req, res) => { companyController.getCompany(req, res) });
associateRouter.get('/company', jwtAssociateMiddleware(), requiredScopes('read'), (req, res) => { companyController.searchCompany(req, res) });

associateRouter.post('/teams/:companyId', jwtAssociateMiddleware(), requiredScopes('write'), (req, res) => { teamController.createTeam(req, res) });
associateRouter.get('/teams', jwtAssociateMiddleware(), requiredScopes('read'), (req, res) => { teamController.getAllTeams(req, res) });

export default associateRouter;