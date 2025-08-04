import axios from "axios";

export const uploadImages = async (uploadFile) => {

    let file = new FormData();
    file.append('file', uploadFile);
    file.append("upload_preset", "BookMyShow");
    file.append("cloude_name", "dcofssfxp")

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dcofssfxp/image/upload`, file)
    return res.data.secure_url
} 