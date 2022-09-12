const nodemailer = require("nodemailer");

module.exports = {
  sendMail: async (sender, recipient, subject, body) => {
    let transport = nodemailer.createTransport({
      /**
       * @documentatoin https://mailtrap.io/blog/sending-emails-with-nodemailer/
       */
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD,
      },
    });

    try {
      // send mail with defined transport object
      let info = await transport.sendMail({
        from: '"The Boring School 👻" <theboringschool.org@gmail.com>', // sender address
        to: "lex.world@protonmail.me", // list of receivers
        subject: "Verification Token", // Subject line
        // text: "Hello world?", // plain text body
        /**
         * @documentation To send a text formatted as HTML, no extra attributes are required,
         * just put your HTML body into the message with an html attribute. For advanced templates,
         * you can add attachments and embed images.
         */
        html: `Your Authentication Verification Token is <b>${token}</b>. Note: Do not share your verification token for security purposes.`, // html body
        /**
         * @documentation Attachment can be added in nodemailer mail but for
         * verification token we don't need to add attachments
         */
        // attachments: [
        //     {
        //       filename: 'mailtrap.png',
        //       path: __dirname + '/mailtrap.png',
        //       cid: 'uniq-mailtrap.png'
        //     }
        //   ]
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    } catch (error) {
      console.error(error);
    }
  },
};
