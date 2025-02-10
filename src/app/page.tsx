import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as={"section"} bg="#122121" minHeight="vh">
      <Header />
    </Box>
  );
}
