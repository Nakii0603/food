"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function FormDialog() {
  const router = useRouter();
  const apiUrl = "http://localhost:8000/user/";
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    router.push("/main")
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen}>Нэвтрэх</button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            padding: "32px",
          }}
        >
          <DialogTitle sx={{ alignSelf: "center", fontSize: "28px" }}>
            Нэвтрэх
          </DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Box sx={{ alignSelf: "center" }}>
              <DialogContentText>Имэйл</DialogContentText>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border-2 border-grey w-[390px] box-border px-2 py-2 "
                placeholder="Имэйл хаягаа оруулна уу"
                type="text"
              />
            </Box>
            <Box sx={{ alignSelf: "center" }}>
              <DialogContentText>Нууц үг</DialogContentText>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border-2 border-grey w-[390px] box-border px-2 py-2 "
                placeholder="Нууц үгээ оруулна уу"
                type="password"
              />
            </Box>
          </DialogContent>
          <DialogActions
            sx={{ alignSelf: "center", flexDirection: "column", gap: "32px" }}
          >
            <button
              className="w-[390px] bg-[#18BA51] text-white box-border px-2 py-2"
              type="submit"
            >
              Нэвтрэх
            </button>
            <div className="w-[390px] flex justify-center text-black box-border px-2 py-2">
              Эсвэл
            </div>
            <button
              className="w-[390px]  text-black box-border px-2 py-2"
              type="submit"
            >
              Бүртгүүлэх
            </button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
