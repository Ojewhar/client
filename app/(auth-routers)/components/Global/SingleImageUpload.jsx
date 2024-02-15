import React, { useState } from "react";
import upimage from "@/public/images/brandDefaultImg.svg";
import noimage from "@/public/images/no-photo.svg";
import Image from "next/image";

const SingleImageUpload = ({ setImages, images, defaultImage, width }) => {
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };
  const handleResetImage = () => {
    setImages(null);
  };

  return (
    <div className="mt-3 w-full relative">
      {images ? (
        <>
          {Array.from(images).map((image, index) => (
            <Image
              key={index}
              src={URL.createObjectURL(image)}
              alt={`uploaded-image-${index}`}
              className="cursor-pointer mx-auto object-cover border rounded-xl"
              style={{ width: "200px", height: "200px" }}
            />
          ))}
          <Image
            src="/icons/IconeSupprimerPhoto.svg"
            onClick={handleResetImage}
            width={25}
            className="text-sm mt-2 cursor-pointer absolute top-0 right-1/4 "
          />
        </>
      ) : (
        <>
          <label className="text-sm" htmlFor="image">
            <Image
              width={width ? width : 200}
              height={width ? width : 200}
              src={defaultImage ? defaultImage : "/images/no-photo.svg"}
              alt="image"
              className="cursor-pointer mx-auto border object-cover rounded-xl"
            />
          </label>
          <input
            className="py-2 hidden w-full px-3 outline-none border-2 transition-all rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
            id="image"
            type="file"
            multiple
            accept=".jpg,.png"
            placeholder="image"
            onChange={handleImageChange}
          />
        </>
      )}
    </div>
  );
};

export default SingleImageUpload;
