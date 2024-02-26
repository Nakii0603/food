import { Stack } from "@mui/material";
import Card from "@/components/Cards";
import { Navbar } from "@/components/MemberNavbar";
import { Foodlist } from "../foodlist/page";

export default function main() {
  return (
    <Stack>
      <Navbar />
      <Card />
      <Foodlist/>
    </Stack>
  );
}
