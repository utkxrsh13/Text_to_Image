import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const getImage = async (req, res) => {
  try {
    const { userId, prompt, style, negativePrompt } = req.body;
    const user = await userModel.findById(userId);
    
    if (!user || !prompt) {
      return res.status(400).json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    let finalPrompt = prompt;
    if (style) finalPrompt += `, style: ${style}`;
    if (negativePrompt) finalPrompt += `, avoid: ${negativePrompt}`;
    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    user.history.push({ prompt, imageUrl: resultImage, style });
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getUserHistory = async (req, res) => {
  try {
    const userId = req.userId; // Get userId from the authenticated middleware
    
    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      history: user.history.reverse(), // Show latest first
    });
  } catch (error) {
    console.error("Get history error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};