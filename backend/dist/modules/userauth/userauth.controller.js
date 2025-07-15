"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_Signin = handle_Signin;
exports.handel_verifytwofa = handel_verifytwofa;
exports.handle_googlesign = handle_googlesign;
const userauth_services_1 = require("./userauth.services");
const userauth_utils_1 = require("../../utils/userauth.utils");
async function handle_Signin(fastify, request, reply, user) {
    const userinfo = await (0, userauth_utils_1.getuser)(fastify, user.username);
    if (!userinfo)
        return reply.code(400).send('User not found !');
    else if (userinfo.password != user.password)
        return reply.code(400).send('invalid password !');
    if (userinfo?.twoFA) {
        await (0, userauth_services_1.sendemail)(fastify, userinfo);
        return reply.code(201).send({ "message": `send 2FA to ${userinfo.email}`, "login ": "false" });
    }
    await (0, userauth_services_1.generateAccessToken)(fastify, reply, userinfo);
    await (0, userauth_services_1.generateRefreshToken)(fastify, reply, userinfo.username);
    return reply.code(200).send({ "message": 'done !', "login": "true" });
}
async function handel_verifytwofa(fastify, request, reply) {
    const { username, twofa } = request.body;
    const userinfo = await (0, userauth_utils_1.getuser)(fastify, username);
    if (userinfo === null)
        return reply.code(400).send({ "message ": "user not found" });
    else {
        if (userinfo?.twoFA_code !== twofa) {
            return reply.code(400).send({ "message": "your 2fa code not correct try again !" });
        }
        else {
            await (0, userauth_services_1.generateAccessToken)(fastify, reply, userinfo);
            await (0, userauth_services_1.generateRefreshToken)(fastify, reply, userinfo.username);
            return reply.code(200).send({ "message": `hello mr.${userinfo.username}`, "login ": "true" });
        }
    }
}
async function handle_googlesign(fastify, request, reply) {
    const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    const data = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
            Authorization: `Bearer ${token.token.access_token}`
        }
    });
    const userInfo = await data.json();
    const username = (0, userauth_services_1.generateusername)(userInfo.email);
    const user = await (0, userauth_utils_1.getuser)(fastify, username);
    if (user && user.password)
        return reply.code(400).send({ "message ": " invalid email", "login": "false" });
    else if (!user) {
        const newuser = { username: username, email: userInfo.email, family_name: userInfo.family_name, first_name: userInfo.given_name, image_url: userInfo.picture };
        await (0, userauth_utils_1.addNewUser)(fastify, newuser);
        return reply.code(201).send({ "message ": `welcom mr.${username}`, "login": "true" });
    }
    return reply.send({ "message ": `welcom back mr.${username}`, "login": "true" });
}
