import transporter from "../config/emailConfig.js";

const sendContactUsEmail = async (req, res) => {

const { first, last, email, phone, description } = req.body;

  // Combine first and last name into fullname
  const fullname = `${first} ${last}`.trim();

  // Validate required fields
  if (!first || !last || !email || !phone || !description) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_SENDER,
    subject: `Contact Us Enquiry From ${fullname}`,
    html: `
      <h1>Contact Us Enquiry</h1>
      <p><strong>Full Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${phone}</p>
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

export default sendContactUsEmail;
