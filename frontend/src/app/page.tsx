import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Card from "@/components/Cards";
import { Stack } from "@mui/material";
import MainHead from "@/components/MainHead";

export default function main() {
  return (
    <Stack>
      <Navbar />
      <Card />
    </Stack>
  );
}
