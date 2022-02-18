"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = void 0;
const common_1 = require("@nestjs/common");
exports.Domain = (0, common_1.createParamDecorator)((input, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const domain = req.headers['connection'];
    return domain ? domain : input;
});
//# sourceMappingURL=domain.decorator.js.map