import { Stack } from "@mui/material";
import * as React from "react";
import { Box, Input } from "@mui/material";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

let data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qi4Hce6GFKvwr2JWLWcs7c-IZVXb69fPg-tr9~NJ3C0NOBHNZI~0A9wEwsChG4lLJFUnZBq8FIX5KyJnQeGdJxeS4xRxPYDGvRbmRwGuXLFuycL9ePu2GZLs7~RuWcv5ztWntYY-p1VEjEGhPz8TEqO7PTcsNkg3s2HTlLmfcgDcu4p4tHif2g~d61F~40h0zGqTaN6OSgW63rYowpnPKO6fhmVIWBuRZjiDNAoPF7jZ~oeXObWvXoAMpfoOzu8ZMf~U3djy22Utg~fjp0RXQefsOIRQSf7ns0523dbTkYESDPokTJf~S-Ad8uuRi6rIqd1NhFHky-i4ARkMqGppWg__",
    title: "Main pizza",
    price: "38400$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LXY9dSrzGcm1QxlNHlqqo~CGwnu0n-T~iaN6wIRb8NLLxwB32yXU4S7vJpXVuW3MnVR5N3xppYXh7SKmNQNJA827q~Smi4xVKb-DH3m9HK2pwYYwCjUQ5wlra2xBNTXAJuyTkTQkI1BxO9f0uxCT00cYoltYBLjzBYst46zoYgJUUVx0IBfgZQ1maM1n64bxWsrp2EyO62jRxiZ~dSgKx9K9kzisP66FRNVIsT6~jN33QpL9QDghrS7gRY3VT5VGMaeqlJqbd7BJ24dDIgl4~nUQbYu8KEhjnSQRtKuirYnicjHwMnX~DQtBfbP8NGJHKqjTCueDnB9av1vgl~dKEA__",
    title: "Main pizza",
    price: "38400$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTYGXkdrBGE~om1HZ2Bo7yJU1lzitXIddPJ6wM56sVkdEwH8CxhYOBN-uNGjfMgzRW11AWFiKLlgRrttYbEcjjn-IeI7gg1Y0uiSKlpidpSIpgu4kDf82u-3QUuVGDWG1MgbmGjp~em45L0gQisu38m7ir8fII5qPgOEnVtE-rvB5zQcvPrZRgL6vz0wcH~kwMnN6Z6d7rQCfqkgZLyiYB7lRo4GEKSESa-BHe3YptjmvGJCIaJNHskU0GXzuZf-4v48Te~NjBC0Clg03itgYUuwlvG8YKaeBgfl6KZKqUqgZ0Q3Z9oh0uOAe6V2KEzHY8atiy5LxqalO~LUMwB2Kg__",
    title: "Main pizza",
    price: "38400$",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0765/ebe5/ba234ec6e3de87f32b816439af24885e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocMwmyGKkZNciQy5wCsyOIcxBhx2jP0hseCRQBUmZzyQvffYtLX5v31DS2t0fq8Br4H9LCwHi94W6B2pi0NtsLqA2d0P8DHK1G3Mvk56nCuGehk6v8SpVjJM4i3s4icA0zQHb7wiZUWPrrUJFvRoD1JE5w3YbAdcLCEZImkIUKxtIlxsT6O4B4f-0oGBaf8SNjAatljGBkJSorJ4b691o60BeAOCn0INCvbwOnb4A-KfKm4FXZfsBezCDdz6Znl9LQAFmFzRPleXAM2PLYef1nOgPYveurjlXOddTrxWb2kDOqxNegzl7qNxONkId08T5Sufygcs-dCrGb7cfp6mig__",
    title: "Main pizza",
    price: "38400$",
  },
];
export const Home = () => {
  return (
    <Stack>
      <Box sx={{ display: "flex", gap: "24px" }}>
        {data.map((e) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={{overflow:'hidden'}} >
              <img src={e.img} alt="" className="w-[282px] h-[200px] scale-[1.3] " />
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
