require('dotenv').config();

const getSMTPConfig = (email) => {
    const domain = email.split('@')[1];

    switch(domain) {
        case 'gmail.com':
            return {
                user: process.env.GMAIL_USER,
                password: process.env.GMAIL_PASS,
                host: process.env.GMAIL_HOST,
                port: Number(process.env.GMAIL_PORT),
                ssl: false
            };
        default:
            throw new Error('Unsupported email domain');
    }
};

module.exports = getSMTPConfig;
