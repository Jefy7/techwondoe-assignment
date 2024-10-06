import { createLogger, transports, format } from "winston";

export const logger = createLogger({
    transports: [new transports.Console()],
    format: format.combine(
      format.colorize(),
      format.splat(),
      format.timestamp(),
      format.printf(({ timestamp, level, ...args }) => {
        return `[${timestamp}] ${level}: ${JSON.stringify(args)}`;
      })
    ),
  });