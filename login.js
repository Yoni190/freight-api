export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    let errors = {};
    if (!email) errors.email = "Email address is required field";
    if (!password) errors.password = "Password is required field";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: errors });
    }

    // Here you can add real login logic (check DB, etc.)
    // For now, just return success:
    return res.status(200).json({ message: "Login successful" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
