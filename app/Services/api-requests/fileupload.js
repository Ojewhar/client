import axios from "axios";
import { accessToken } from "../access-token/access_token";
import { BASE_URL } from "../config/url-manager";

// Create a new brnad
export const SingleFileUpload = async (formData) => {
  const token = accessToken();

  if (token !== null || token !== undefined || token) {
    const result = await axios.post(
      `${BASE_URL}/api/upload/createBrand`,
      formData,
      {
        headers: {
          access_token: token,
        },
      }
    );
    return result;
  }
};
// upload multiple images
export const uploadMultipleFiles = async (uploadImages) => {
  const formData = new FormData();
  for (let i = 0; i < uploadImages.length; i++) {
    formData.append(`multiplefile`, uploadImages[i]);
  }
  const token = accessToken();
  if (token !== null || token !== undefined || token) {
    const response = await axios.post(
      `${BASE_URL}/api/fileupload/multipleUploads`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          access_token: token, // Include your authorization header
        },
      }
    );
    const images = response.data.uploads.map((image) => image.filename);
    const featureImg = images[0];
    return {
      featureImg: featureImg,
      images: images,
    };
  }
};
