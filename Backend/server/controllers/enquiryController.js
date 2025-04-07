import transporter from "../config/emailConfig.js";

const sendEnquiryEmail = async (req, res) => {
  const { fullname, email, mobile, description } = req.body;
  console.log(req.body)

  if (!fullname || !email || !mobile || !description) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_SENDER,
    subject: `Enquiry From ${fullname}`,
    html: `
      <h1>Enquiry</h1>
      <p><strong>Full Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>Description:</strong> ${description}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};

export default sendEnquiryEmail;
