"use client";
//import React from "react";
import { useState } from "react";
import axios from "axios";
export default function signUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const HandletoSignUp = async () => {
    try {
      //const url = "http://localhost:8000/signUp";
      await axios.post("http://localhost:8000/signUp", {
        username: name,
        email: email,
        address: address,
        password: password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border-2"
        type="text"
        placeholder="Нэрээ оруулна уу"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="border-2"
        type="text"
        placeholder="И-мэйл хаягаа оруулна уу"
      />
      <input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className="border-2"
        type="text"
        placeholder="Та хаягаа оруулна уу"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="border-2"
        type="text"
        placeholder="Нууц үгээ оруулна уу"
      />
      <button
        onClick={() => HandletoSignUp()}
        className="w-10 h-20 bg-black"
      ></button>
    </div>
  );
}
