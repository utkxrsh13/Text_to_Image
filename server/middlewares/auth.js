import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login again" });
  }
  
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    
    if (tokenDecode.id) {
      req.userId = tokenDecode.id; // Set userId for both GET and POST requests
      req.body.userId = tokenDecode.id; // Keep this for POST requests compatibility
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login again" });
    }
    next();
  } catch (error) {
    console.log('Token verification error:', error.message);
    return res
      .status(401)
      .json({ success: false, message: "Invalid token. Login again" });
  }
};

export default userAuth;