const sgMail = require("@sendgrid/mail");


const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "okoyedennis7@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationMail = (email, name) => {
    sgMail.send({
      to: email,
      from: "okoyedennis7@gmail.com",
      subject: "Sending with SendGrid is Fun",
      text: `Goodbye ${name}. Is there anything we could have done to have kept you onboard?`,
    }); 
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationMail,
};
