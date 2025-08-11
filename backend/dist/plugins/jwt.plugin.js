"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const jwtplugin = (fastify) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('Missing JWT_SECRET environment variable');
    }
    fastify.register(jwt_1.default, { secret });
};
exports.default = (0, fastify_plugin_1.default)(jwtplugin);
