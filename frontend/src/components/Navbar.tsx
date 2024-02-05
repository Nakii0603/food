import React from "react";
import { PineSvg } from "./Svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormDialog from "../app/login/page";
import { Input } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="flex justify-between w-[1440px] mx-auto">
      <div className="flex gap-[30px] items-center">
        <PineSvg />
        <p>НҮҮР</p>
        <p className="text-[#18BA51]">ХООЛНЫ ЦЭС</p>
        <p>ХҮРГЭЛТИЙН БҮС</p>
      </div>
      <div className="flex gap-[40px]">
        <div className="flex items-center">
          <SearchIcon />
          <Input type="text" className="rounded-2xl" placeholder="Хайх" />
        </div>
        <div className="flex gap-[40px]">
          <div className="flex  gap-3 items-center">
            <ShoppingBasketIcon />
            <p>Сагс</p>
          </div>
          <div className="flex gap-3 items-center">
            <AccountCircleIcon />
            <FormDialog />
          </div>
        </div>
      </div>
    </div>
  );
};
