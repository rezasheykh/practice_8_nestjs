"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const event_entity_1 = require("../../event/entities/event.entity");
const post_entity_1 = require("../../post/entities/post.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, posts: { required: true, type: () => [require("../../post/entities/post.entity").PostEntity] }, events: { required: true, type: () => [require("../../event/entities/event.entity").EventEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.PostEntity, (post) => post.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_entity_1.EventEntity, (event) => event.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "events", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map