import { AppKeyService } from './app-key.service';
import { CreateAppKeyDto } from './dto/create-app-key.dto';
import { UpdateAppKeyDto } from './dto/update-app-key.dto';
export declare class AppKeyController {
    private readonly appKeyService;
    constructor(appKeyService: AppKeyService);
    create(createAppKeyDto: CreateAppKeyDto): string;
    findAll(): string;
    update(id: string, updateAppKeyDto: UpdateAppKeyDto): string;
    remove(id: string): string;
}
