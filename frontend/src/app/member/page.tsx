import { Stack } from "@mui/material";

import Card from "@/components/Cards";
import { Foodlist } from "../foodlist/page";
import { Navbar } from "@/components/MemberNavbar";

export default function main() {
  return (
    <Stack>
      <Navbar />
      <Card />
      <Foodlist />
    </Stack>
  );
}
