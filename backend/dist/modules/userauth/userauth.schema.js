"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_Verify2fa = exports.user_signin = exports.user_signup = void 0;
exports.user_signup = {
    type: 'object',
    required: ['username', 'email', 'first_name', 'family_name', 'password', 'confirmpassword'],
    properties: {
        username: { type: 'string', maxLength: 25 },
        email: { type: 'string', maxLength: 254, format: 'email' },
        first_name: { type: 'string', maxLength: 25 },
        family_name: { type: 'string', maxLength: 25 },
        password: { type: 'string', minLength: 8 },
        confirmpassword: { type: 'string', minLength: 8 }
    },
    additionalProperties: false,
};
exports.user_signin = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: { type: "string", maxLength: 25 },
        password: { type: 'string', minLength: 8 },
        twoFA: { type: "number" }
    },
    additionalProperties: false,
};
exports.user_Verify2fa = {
    type: 'object',
    required: ['twofa', 'username', 'password'],
    properties: {
        twofa: { type: 'number' },
        username: { type: 'string' },
        password: { type: 'string' }
    },
    additionalProperties: false,
};
