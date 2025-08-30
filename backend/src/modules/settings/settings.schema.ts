

export const profile_setting = {
	type: 'object',
	required: ['username', 'first_name', 'family_name', 'Language', 'image_url', 'cover_url'],
	properties: {
		first_name: { type: 'string', maxLength: 25, minLength: 1, pattern: '^[A-Za-z]+(?: [A-Za-z]+)*$', errorMessage: "First name must not be empty and contain only letters " },
		family_name: { type: 'string', maxLength: 25, minLength: 1, pattern: '^[A-Za-z]+(?: [A-Za-z]+)*$', errorMessage: "Family name  must not be empty and contain only letters" },
		username: { type: 'string', maxLength: 25, minLength: 2, errorMessage: "Username should not be empty or have fewer than two characters" },
		Language: { type: 'string', enum: ['ar', 'en', 'fr'] },
		image_url: { type: 'string' },
		cover_url: { type: 'string' }
	},
	additionalProperties: false,
};

export const game_setting = {
	type: 'object',
	required: ['ball_color', 'paddle_color', 'table_color'],
	properties: {
		ball_color: { type: 'string' },
		paddle_color: { type: 'string' },
		table_color: { type: 'string' }
	},
	additionalProperties: false,
};

export const security_settings = {
	type: 'object',
	properties: {
		oldpassowrd: { type: 'string', minLength: 8, errorMessage: "Password must be at least 8 characters" },
		password: { type: 'string', minLength: 8, errorMessage: "Password must be at least 8 characters" },
		confirmpassword: { type: 'string' },
		twoFA: { type: 'boolean' },
	},
	additionalProperties: false,
}
