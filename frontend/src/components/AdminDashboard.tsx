"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Stack } from "@mui/material";
import { v2 as cloudinary } from "cloudinary";

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload`;

interface Input {
  name: string;
  categoryName: string;
  ingredient: string;
  price: string;
  discount: string;
  image: any;
}

export default function AdminDashboard() {
  const [input, setInput] = useState<Input>({
    name: "",
    categoryName: "",
    ingredient: "",
    price: "",
    discount: "",
    image: "",
  });

  interface CloudinaryUploadWidgetInfo {
    secure_url: any;
  }
  return (
    <CldUploadWidget
      uploadPreset="uehrhnkw"
      onSuccess={(result, { widget }) => {
        setInput((prev) => ({ ...prev, image: result?.info?.secure_url }));
        widget.close();
      }}
    >
      {({ open }) => {
        return (
          <Stack>
            <CldUploadWidget uploadPreset="next_cloudnary_app">
              {({ open }) => {
                return <button onClick={() => open()}>Upload an Image</button>;
              }}
            </CldUploadWidget>
          </Stack>
        );
      }}
    </CldUploadWidget>
  );
}
