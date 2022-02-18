import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ReqResDurationMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    console.log('Middleware called');
    const startDate = new Date();
    res.on('finish', () => {
      const endDate = new Date();
      const duration = +endDate - +startDate;
      if (duration > 10) {
        console.log('Request Response duration: ', duration);
      } else {
        console.log('duration ok', duration);
      }
    });
    next();
  }
}
