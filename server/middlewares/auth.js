import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res
      .status(400)
      .json({ success: false, message: "Not Authorized. Login again" });
  }
  try {
    const tokecDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokecDecode.id) {
      req.body.userId = tokecDecode.id;
    } else {
      res
        .status(400)
        .json({ success: false, message: "Not Authorized. Login again" });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default userAuth;