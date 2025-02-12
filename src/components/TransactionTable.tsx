"use client";

import { Box, Heading, Stack, Table } from "@chakra-ui/react";

const TransactionTable = () => {
  return (
  
    <Box spaceY="8" my="8" mx="auto" w="3/5">
      <Heading as="h1" fontSize="5xl" color="white" mb="16">
        Overview
      </Heading>
      <Stack>
          <Table.Root size="sm" variant="outline" pl="8" rounded="2xl">
            <Table.Header bg="#1A3330">
              <Table.Row>
                <Table.ColumnHeader color="white" pl="6">Date</Table.ColumnHeader>
                <Table.ColumnHeader color="white" pl="6">Description</Table.ColumnHeader>
                <Table.ColumnHeader color="white" pl="6">Category</Table.ColumnHeader>
                <Table.ColumnHeader color="white" pl="6">Amount</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {transactions.map((transaction) => (
                <Table.Row key={transaction.id}>
                  <Table.Cell pl="6" color="white">{transaction.date}</Table.Cell>
                  <Table.Cell pl="6" color="white">{transaction.description}</Table.Cell>
                  <Table.Cell pl="6" color="white">{transaction.category}</Table.Cell>
                  <Table.Cell pl="6" color="white">{transaction.amount}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
      </Stack>
    </Box>
  );
};

const transactions = [
  {
    id: 1,
    date: "2025-02-10",
    description: "Lunch at restaurant",
    category: "Meal",
    amount: 3500,
  },
  {
    id: 2,
    date: "2025-02-09",
    description: "Domain name renewal",
    category: "Tech",
    amount: 12000,
  },
  {
    id: 3,
    date: "2025-02-08",
    description: "Office chair purchase",
    category: "Office",
    amount: 45000,
  },
  {
    id: 4,
    date: "2025-02-07",
    description: "Internet subscription",
    category: "Utility",
    amount: 10000,
  },
  {
    id: 5,
    date: "2025-02-06",
    description: "Coffee and snacks",
    category: "Meal",
    amount: 2000,
  },
  {
    id: 6,
    date: "2025-02-05",
    description: "External SSD for backups",
    category: "Tech",
    amount: 35000,
  },
  {
    id: 7,
    date: "2025-02-04",
    description: "Printing paper",
    category: "Office",
    amount: 5500,
  },
  {
    id: 8,
    date: "2025-02-03",
    description: "Ride to client’s office",
    category: "Transport",
    amount: 8000,
  },
  {
    id: 9,
    date: "2025-02-02",
    description: "Subscription for software",
    category: "Tech",
    amount: 18500,
  },
  {
    id: 10,
    date: "2025-02-01",
    description: "Monthly electricity bill",
    category: "Utility",
    amount: 25000,
  },
];

export default TransactionTable;
