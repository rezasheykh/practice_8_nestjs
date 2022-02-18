import { NotifyService } from './notify.service';
export declare class NotifyController {
    private readonly notifyService;
    constructor(notifyService: NotifyService);
    create(price: any, category: any): string;
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
