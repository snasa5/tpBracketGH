
import winston from 'winston';

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({ handleExceptions: true })
  ],
});

export function logError(err: any, context?: string) {
  logger.error({ message: err?.message || String(err), stack: err?.stack, context });
}
