import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      // Use emailjs or your preferred email sending method
      // For example, using emailjs-com library
      await emailjs.sendForm(
        "service_e7x6us8",
        "template_dyl9sqs",
        formData,
        "uePmIk3tIB3yDmmZ1"
      );

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
