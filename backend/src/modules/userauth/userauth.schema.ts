import { kMaxLength } from "buffer";

export const user_signup = {
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

export const user_signin = {
	type: 'object',
	required: ['username', 'password'],
	properties: {
		username: {type: "string", maxLength: 25},
		password: { type: 'string', minLength: 8 },
    	twoFA : {type: "number"}
	},
	additionalProperties: false,
};

export const user_Verify2fa = {
	type: 'object',
	required: ['twofa', 'username', 'password'],
	properties: {
		twofa: {type: 'number'},
		username: {type: 'string'},
		password: {type: 'string'}
	},
	additionalProperties: false,
};
