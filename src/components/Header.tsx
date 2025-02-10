"use client";

import { BellIcon, HelpIcon, SpendwiseIcon } from "@/icons/Icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box as={"header"} w="vw" bg="gray.800" px="8" py="4" color="white" borderBottom={"1px #fff solid"}>
      <Flex justify={"space-between"}>
        <HStack>
          <Icon as={SpendwiseIcon} />{" "}
          <Text ml="4" fontWeight="bolder" fontSize="2xl">
            Spendwise
          </Text>
        </HStack>
        <HStack as="section" spaceX="5">
          <HStack as={"ul"} listStyle={"none"} spaceX={"5"} align={"center"}>
          <li>
            <Link href={"#"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"#"}>Transactions</Link>
          </li>
          <li>
            <Link href={"#"}>Invoices</Link>
          </li>
          <li>
            <Link href={"#"}>Recurring</Link>
          </li>
          <li>
            <Link href={"#"}>Receipts</Link>
          </li>
          <li>
            <Link href={"#"}>Reports</Link>
          </li>
          </HStack>
          <HStack>
            <Button bg={"#12EDD6"} color="black" p={"4"} fontWeight={"bolder"} rounded="xl">Transactions</Button>
            <IconButton bg={"#244745"} rounded="xl"><BellIcon /></IconButton>
            <IconButton bg={"#244745"} rounded="xl"><HelpIcon /></IconButton>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
