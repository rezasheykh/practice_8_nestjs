"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppKeyDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_app_key_dto_1 = require("./create-app-key.dto");
class UpdateAppKeyDto extends (0, mapped_types_1.PartialType)(create_app_key_dto_1.CreateAppKeyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAppKeyDto = UpdateAppKeyDto;
//# sourceMappingURL=update-app-key.dto.js.map