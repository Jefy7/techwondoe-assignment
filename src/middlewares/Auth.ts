import { auth } from "express-oauth2-jwt-bearer";

export const jwtAdminMiddleware = () =>
    auth({
    audience: process.env.AUTH0_ADMIN_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
    tokenSigningAlg: "RS256",
  })

  export const jwtAssociateMiddleware = () =>
    auth({
        audience: process.env.AUTH0_ASSOCIATE_AUDIENCE,
        issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
        tokenSigningAlg: "RS256",
  })


  