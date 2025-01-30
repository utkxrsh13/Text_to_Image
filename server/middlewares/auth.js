import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res
      .status(400)
      .json({ success: false, message: "Not Authorizeddd. Login again" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      res
        .status(400)
        .json({ success: false, message: "Not Authorizedd. Login again" });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default userAuth;