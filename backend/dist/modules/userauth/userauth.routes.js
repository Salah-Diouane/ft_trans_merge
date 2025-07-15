"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSign = exports.RefreshToken = exports.Verify2fa = exports.Signin = exports.SignUp = void 0;
const userauth_schema_1 = require("./userauth.schema");
const userauth_utils_1 = require("../../utils/userauth.utils");
const userauth_controller_1 = require("./userauth.controller");
const userauth_services_1 = require("./userauth.services");
const SignUp = async (fastify) => {
    fastify.post('/signup', {
        schema: {
            body: userauth_schema_1.user_signup,
            response: {
                201: userauth_schema_1.user_signup,
            }
        }
    }, async (request, reply) => {
        const user = request.body;
        try {
            if (user.password != user.confirmpassword)
                throw ('the password  and confirm password are not the same !');
            else {
                await (0, userauth_utils_1.addNewUser)(fastify, user);
                reply.send('done !');
            }
        }
        catch (err) {
            reply.code(400).send(err);
        }
    });
};
exports.SignUp = SignUp;
const Signin = async (fastify) => {
    fastify.post('/signin', {
        schema: {
            body: userauth_schema_1.user_signin
        }
    }, async (request, reply) => {
        try {
            const user = request.body;
            await (0, userauth_controller_1.handle_Signin)(fastify, request, reply, user);
        }
        catch (err) {
            reply.code(400).send(err);
        }
    });
};
exports.Signin = Signin;
const Verify2fa = async (fastify) => {
    fastify.post('/verify2fa', {
        schema: {
            body: userauth_schema_1.user_Verify2fa
        }
    }, async (request, reply) => {
        try {
            await (0, userauth_controller_1.handel_verifytwofa)(fastify, request, reply);
        }
        catch (err) {
            reply.code(400).send(err);
        }
    });
};
exports.Verify2fa = Verify2fa;
const RefreshToken = async (fastify) => {
    fastify.post('/refreshtoken', async (request, reply) => {
        try {
            const refreshtoken = request.cookies.refreshtoken;
            console.log(refreshtoken);
            if (!refreshtoken) {
                return reply.code(400).send({
                    message: "Refresh token expired",
                    "refreshtoken": "false"
                });
            }
            const decoded = fastify.jwt.verify(refreshtoken);
            const user = await (0, userauth_utils_1.getuser)(fastify, decoded.username);
            if (!user) {
                return reply.code(404).send({ message: "User not found", "refreshtoken": "true" });
            }
            const accessToken = await (0, userauth_services_1.generateAccessToken)(fastify, reply, user);
            console.log("new token : ", accessToken);
            return reply.send({ accessToken });
        }
        catch (err) {
            return reply.code(400).send({ message: "Invalid refresh token", error: err, "refreshtoken ": "false" });
        }
    });
};
exports.RefreshToken = RefreshToken;
const GoogleSign = async (fastify) => {
    fastify.get('/google/callback', async (request, reply) => {
        try {
            await (0, userauth_controller_1.handle_googlesign)(fastify, request, reply);
        }
        catch (err) {
            reply.code(400).send(err);
        }
    });
};
exports.GoogleSign = GoogleSign;
