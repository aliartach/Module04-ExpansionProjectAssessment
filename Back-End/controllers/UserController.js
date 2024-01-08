import bcrypt from 'bcrypt';
import User from "../models/usermodel.js"

export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use!' })
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match!' });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: 'User created successfully!', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Logged in successfully!', user: user.id })

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};