## TLDR; Node.js Authentication. 

In this public template, DX includes all the usages that a normal but yet ๐ modules must ๐. In case we ๐ something you surely can ๐ค issue [under feature request](https://github.com/theboringschool/NodeJS-Auth/issues/new/choose).

### Modules Included
* **Registration**
  * User Verification ๐ชช
    * `Joi` used for input validation. ๐งช
    * User duplication resolved using middleware. ๐ฏโโ๏ธ
    * `MailTrap` & `Nodemailer` used to send verification ๐ ๐จ.
* **New User Verification**
  * **Token Verification** ๐: First get user's authentic verification token from DB then check `token provided by user`, `token from DB` & check the โ๏ธ. Though, expired user's are removed on fixed โฑ using `node-cron`.