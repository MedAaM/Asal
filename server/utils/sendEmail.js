const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: 'lazaro8@ethereal.email',
				pass: 'Xnn4WsvJcsb98Dypy9'
			}
		});

		await transporter.sendMail({
			from: "lazaro8@ethereal.email",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
