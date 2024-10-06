import express from 'express'
import { CompanyController } from '../controllers/CompanyController';
import { jwtAdminMiddleware } from '../middlewares/Auth';
import { requiredScopes } from 'express-oauth2-jwt-bearer';
import { TeamController } from '../controllers/TeamController';
const adminRouter = express.Router();
const companyController = new CompanyController()
const teamController = new TeamController()


adminRouter.post('/company', jwtAdminMiddleware(), requiredScopes('write'), (req, res) => {
    companyController.createCompany(req, res)
});
adminRouter.get('/company/:companyId', jwtAdminMiddleware(), requiredScopes('read'), (req, res) => { companyController.getCompany(req, res) });
adminRouter.get('/company', jwtAdminMiddleware(), requiredScopes('read'), (req, res) => { companyController.searchCompany(req, res) });

adminRouter.post('/teams/:companyId', jwtAdminMiddleware(), requiredScopes('write'), (req, res) => { teamController.createTeam(req, res) });
adminRouter.get('/teams', jwtAdminMiddleware(), requiredScopes('read'), (req, res) => { teamController.getAllTeams(req, res) });

export default adminRouter;