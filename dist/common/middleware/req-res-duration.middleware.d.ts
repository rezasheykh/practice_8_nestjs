import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
export declare class ReqResDurationMiddleware implements NestMiddleware {
    use(req: any, res: Response, next: () => void): void;
}
