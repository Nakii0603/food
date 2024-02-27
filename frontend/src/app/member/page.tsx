import { Stack } from "@mui/material";
import { Navbar } from "@/components/MemberNavbar";
import Card from "@/components/Cards";
import { Foodlist } from "@/components/FoodCards";

export default function main() {
  return (
    <Stack>
      <Navbar />
      <Card />
      <Foodlist/>
    </Stack>
  );
}
