import React from "react";
import { PineSvg } from "./Svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
        <div className="flex border-2 rounded-2xl border-black">
          <SearchIcon />
          <input type="text" className="rounded-2xl" placeholder="Хайх" />
        </div>
        <div className="flex gap-[40px]">
          <div className="flex gap-3 items-center">
            <ShoppingBasketIcon />
            <p>Сагс</p>
          </div>
          <div className="flex gap-3 items-center">
            <AccountCircleIcon />
            <p>Нэвтрэх</p>
          </div>
        </div>
      </div>
    </div>
  );
};
