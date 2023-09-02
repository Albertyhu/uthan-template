import nodemailer from 'nodemailer';

async function post({ params, request }) {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    const transporter = nodemailer.createTransport({
      host: ({}).SMTP_HOST,
      port: ({}).SMTP_PORT * 1,
      secure: true,
      auth: {
        user: ({}).SMTP_USERNAME,
        pass: ({}).SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3"
      }
    });
    const mailOptions = {
      from: email,
      to: "hualbert.y@gmail.com",
      subject: `${subject}`,
      text: `Hello, someone has sent you a new message through your website: 

 email: ${email} 

 ${message}`
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log("error: ", error);
        return new Response(JSON.stringify({ error }), { status: 404 });
      }
    });
    return new Response(JSON.stringify({ message: "success" }), { status: 200 });
  } catch (error) {
    console.log("error : ", error);
    return new Response(JSON.stringify({ error }), { status: 404 });
  }
}

export { post };
