const confirmEmail = function (password, email) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ravindrafzb1270@gmail.com",
      pass: "vyefkonxckqrdthf",
    },
  });

  let mailOptions = {
    from: "ravindrafzb1270@gmail.com",
    to: email,
    subject: "Padhayi Confirmation Email",
    html:
      "<p> Hi User, <br> <br> Congrats You are successfully registered.This is your password:- <b>" +
      password +
      "</b> save for future</p>",
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
};