"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqResDurationMiddleware = void 0;
const common_1 = require("@nestjs/common");
let ReqResDurationMiddleware = class ReqResDurationMiddleware {
    use(req, res, next) {
        console.log('Middleware called');
        const startDate = new Date();
        res.on('finish', () => {
            const endDate = new Date();
            const duration = +endDate - +startDate;
            if (duration > 10) {
                console.log('Request Response duration: ', duration);
            }
            else {
                console.log('duration ok', duration);
            }
        });
        next();
    }
};
ReqResDurationMiddleware = __decorate([
    (0, common_1.Injectable)()
], ReqResDurationMiddleware);
exports.ReqResDurationMiddleware = ReqResDurationMiddleware;
//# sourceMappingURL=req-res-duration.middleware.js.map