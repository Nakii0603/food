"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const HandletoSignUp = async () => {
    try {
      await axios.post("http://localhost:8000/signUp", {
        username: name,
        email: email,
        address: address,
        password: password,
      });
    } catch (err) {
      console.log(err, "axios");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  p-[32px] gap-12 box-border">
        <h1 className="text-[28px] text-center ">Бүртгүүлэх</h1>
        <div className="flex flex-col gap-[16px]">
          <div>
            <p className="mb-1">Нэр</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="px-[16px] py-[8px] w-[350px] box-border border-[1px] rounded-[4px] text-[#8B8E95] border-[#8B8E95] bg-[#ECEDF0]"
              type="text"
              placeholder="Нэрээ оруулна уу"
            />
          </div>
          <div>
            <p className="mb-1">И-мэйл</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="px-[16px] py-[8px] w-[350px] box-border border-[1px] rounded-[4px] text-[#8B8E95] border-[#8B8E95] bg-[#ECEDF0]"
              type="text"
              placeholder="И-мэйл хаягаа оруулна уу"
            />
          </div>
          <div>
            <p className="mb-1">Утас</p>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="px-[16px] py-[8px] w-[350px] box-border border-[1px] rounded-[4px] text-[#8B8E95] border-[#8B8E95] bg-[#ECEDF0]"
              type="text"
              placeholder="Та утасны дугаар оруулна уу"
            />
          </div>
          <div>
            <p className="mb-1">Нууц үг</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="px-[16px] py-[8px] w-[350px] box-border border-[1px] rounded-[4px] text-[#8B8E95] border-[#8B8E95] bg-[#ECEDF0]"
              type="text"
              placeholder="Нууц үгээ оруулна уу"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <input className="" type="checkbox" />
          </div>
          <button className="px-[16px] py-[8px] w-[350px]">
            Үйлчилгээний нөхцөл зөвшөөрөх
          </button>
        </div>
        <button
          onClick={HandletoSignUp}
          className="px-[16px] py-[8px] w-[350px]  text-black bg-[#EEEFF2]"
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
