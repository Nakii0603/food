"use client";
import * as React from "react";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

let data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__",
    title: "Mainsfd pizza",
    price: "38546300$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXY9dSrzGcm1QxlNHlqqo~CGwnu0n-T~iaN6wIRb8NLLxwB32yXU4S7vJpXVuW3MnVR5N3xppYXh7SKmNQNJA827q~Smi4xVKb-DH3m9HK2pwYYwCjUQ5wlra2xBNTXAJuyTkTQkI1BxO9f0uxCT00cYoltYBLjzBYst46zoYgJUUVx0IBfgZQ1maM1n64bxWsrp2EyO62jRxiZ~dSgKx9K9kzisP66FRNVIsT6~jN33QpL9QDghrS7gRY3VT5VGMaeqlJqbd7BJ24dDIgl4~nUQbYu8KEhjnSQRtKuirYnicjHwMnX~DQtBfbP8NGJHKqjTCueDnB9av1vgl~dKEA__",
    title: "Mainsadfhjbsa pizza",
    price: "400$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__",
    title: "Main adhafbgpizza",
    price: "456345400$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXY9dSrzGcm1QxlNHlqqo~CGwnu0n-T~iaN6wIRb8NLLxwB32yXU4S7vJpXVuW3MnVR5N3xppYXh7SKmNQNJA827q~Smi4xVKb-DH3m9HK2pwYYwCjUQ5wlra2xBNTXAJuyTkTQkI1BxO9f0uxCT00cYoltYBLjzBYst46zoYgJUUVx0IBfgZQ1maM1n64bxWsrp2EyO62jRxiZ~dSgKx9K9kzisP66FRNVIsT6~jN33QpL9QDghrS7gRY3VT5VGMaeqlJqbd7BJ24dDIgl4~nUQbYu8KEhjnSQRtKuirYnicjHwMnX~DQtBfbP8NGJHKqjTCueDnB9av1vgl~dKEA__",
    title: "Main dajg",
    price: "8400$",
  },
];

export const Foodlist = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var dataString = JSON.stringify(data);
  localStorage.setItem("data", dataString);
  console.log(dataString);

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        {data.map((e) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={{ overflow: "hidden" }}>
              <img
                src={e.img}
                alt=""
                className="w-[282px] h-[200px] scale-[1.3] "
              />
            </Box>
            <DialogTitle sx={{ padding: "0px" }} key={e.title}>
              {e.title}
            </DialogTitle>
            <DialogContentText>{e.price}</DialogContentText>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};
Foodlist();
