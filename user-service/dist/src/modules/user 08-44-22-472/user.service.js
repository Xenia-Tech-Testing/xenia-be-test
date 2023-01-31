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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const googleapis_1 = require("googleapis");
const constants_config_1 = require("../../configs/constants.config");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        const clientID = constants_config_1.GOOGLE_OAUTH_CONFIG.CLIENT_ID;
        const clientSecret = constants_config_1.GOOGLE_OAUTH_CONFIG.SECRET;
        this.oauthClient = new googleapis_1.google.auth.OAuth2(clientID, clientSecret);
    }
    async login(accessToken) {
        try {
            const tokenInfo = await this.oauthClient.getTokenInfo(accessToken);
            const email = tokenInfo.email;
            const user = await this.userRepository.findOne({
                where: {
                    email: email,
                },
            });
            let payload;
            if (!user) {
                const userCreate = {
                    email: tokenInfo.email,
                };
                const newUser = await this.userRepository.save(userCreate);
                payload = {
                    sub: newUser.id,
                    email: newUser.email,
                };
            }
            else {
                payload = {
                    sub: user.id,
                    email: user.email,
                };
            }
            return {
                accessToken: this.jwtService.sign(payload),
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Token Invalid');
        }
    }
    getList(paginateParams) {
        const options = {};
        if (paginateParams.search) {
            options.where = {
                username: (0, typeorm_1.Like)(`%${paginateParams.search}%`),
            };
        }
        if (paginateParams.type) {
            options.where = Object.assign(Object.assign({}, options.where), { type: paginateParams.type });
        }
        return this.userRepository.findPaginate(paginateParams, options);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map