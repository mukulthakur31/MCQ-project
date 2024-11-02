const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    console.log("entered");
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    console.log("Token:", token); // Log token

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded User:", decoded); // Log decoded user

        // Attach user information to the request object
        req.user = decoded
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Invalid token' });
    }
}

// Function to generate JWT token
const generateToken = (userData) => {
    // Generate a new JWT token using user data
    return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 30000 });
}

module.exports = { jwtAuthMiddleware, generateToken };
