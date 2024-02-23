"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "@/components/Footer";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { Navbar } from "@/components/Navbar";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const HandletoSignUp = async () => {
    try {
      const api = "http://localhost:8000/sign";
      const res = await axios.post(api, {
        username: username,
        email: email,
        phone: phone,
        password: password,
      });
      console.log(res);
    } catch (err) {
      console.log(err, "axios error");
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Stack sx={{ alignItems: "center", marginY: 10, gap: 1 }}>
        <Typography fontSize={30} fontWeight={50}>
          Бүртгүүлэх
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: 384 }}>
          <label className="mb-2" htmlFor="">
            Нэр
          </label>
          <TextField
            id="outlined-basic"
            label="Нэрээ оруулна уу"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: 384 }}>
          <label className="mb-2" htmlFor="">
            Имэйл
          </label>
          <TextField
            id="outlined-basic"
            label="И-мэйл хаягаа оруулна уу"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: 384 }}>
          <label className="mb-2" htmlFor="">
            Нууц үг
          </label>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үгээ оруулна уу
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Нууц үгээ оруулна уу"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
        </Box>
        <FormControlLabel
          required
          control={<Checkbox />}
          sx={{ marginTop: 4 }}
          label="Үйлчилгээний нөхцөл зөвшөөрөх"
        />
        <Button
          size="medium"
          sx={{
            color: "black",
            width: 384,
            padding: 2,
            borderColor: "#18BA51",
            border: "1px solid green",
          }}
          onClick={HandletoSignUp}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "screen",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box sx={{ fontSize: 25, fontWeight: "semibold" }}>Нэвтрэх</Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                width: 384,
              }}
            >
              <label htmlFor="">Нэр</label>
              <TextField
                id="outlined-basic"
                label="И-мэйл хаягаа оруулна уу"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
                width: 384,
              }}
            >
              <label htmlFor="">Нууц үг</label>
              <FormControl variant="outlined" sx={{ width: 384 }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Нууц үгээ оруулна уу
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Нууц үг"
                />
                <Button
                  size="small"
                  sx={{
                    display: "flex",
                    color: "black",
                    justifyContent: "end",
                    width: 145,
                    bgcolor: "#EEEFF2",
                  }}
                >
                  Нууц үг сэргээх
                </Button>
              </FormControl>
            </Box>
            <Button
              size="medium"
              sx={{
                color: "black",
                width: 384,
                padding: 2,
                backgroundColor: "#EEEFF2",
              }}
            >
              Нэвтрэх
            </Button>
            <Box>Эсвэл</Box>
            <Button
              size="medium"
              sx={{
                color: "black",
                width: 384,
                padding: 2,
                borderColor: "#18BA51",
                border: "1px solid green",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Footer />
    </Stack>
  );
}
