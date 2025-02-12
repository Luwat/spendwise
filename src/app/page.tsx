import Header from "@/components/Header";
import TransactionTable from "@/components/TransactionTable";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as={"section"} bg="#122121" minHeight="vh" overflow="hidden">
      <Header />
      <TransactionTable />
    </Box>
  );
}
