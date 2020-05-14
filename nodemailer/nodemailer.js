const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
	{
		host: 'smtp.gmail.com',
		port: 587, 
		secure: false,
		auth : {
			user: 'sp.tadeush@gmail.com',
			pass: 'tigiran43roza'
		}
	},
	{
		from: 'sp.tadeush@gmail.com',
	}
);

const mailer = (message) => {
	transporter.sendMail(message, (err, info) => {
		if(err) return console.log(err);
		console.log('Email sent', info);
	})
}

module.exports = mailer;