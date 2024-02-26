"use client";
import { Box, Dialog, Input, Stack } from "@mui/material";
import { PineSvg } from "./Svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handle = () => {
    router.push("Profile");
  };

  return (
    <Stack className="m-auto">
      <Box className="flex justify-between w-[1440px]">
        <Box className="flex gap-[30px] items-center">
          <PineSvg />
          <p>НҮҮР</p>
          <p className="text-[#18BA51]">ХООЛНЫ ЦЭС</p>
          <p>ХҮРГЭЛТИЙН БҮС</p>
        </Box>
        <Box className="flex gap-[40px]">
          <Box className="flex items-center">
            <SearchIcon />
            <Input type="text" className="rounded-2xl" placeholder="Хайх" />
          </Box>
          <Box className="flex gap-[40px]">
            <Box className="flex  gap-3 items-center">
              <ShoppingBasketIcon />
              <p>Сагс</p>
            </Box>
            <Box onClick={handle} className="flex gap-3 items-center">
              <PersonIcon />
              <p>Профайл</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
export {Navbar}