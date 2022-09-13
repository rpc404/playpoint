## TLDR; Node.js Authentication. 

In this public template, DX includes all the usages that a normal but yet 🔐 modules must 🚀. In case we 👀 something you surely can 🤌 issue [under feature request](https://github.com/theboringschool/NodeJS-Auth/issues/new/choose).

### Modules Included
* **Registration**
  * User Verification 🪪
    * `Joi` used for input validation. 🧪
    * User duplication resolved using middleware. 👯‍♂️
    * `MailTrap` & `Nodemailer` used to send verification 🔑 📨.
* **New User Verification**
  * **Token Verification** 📌: First get user's authentic verification token from DB then check `token provided by user`, `token from DB` & check the ⌛️. Though, expired user's are removed on fixed ⏱ using `node-cron`.