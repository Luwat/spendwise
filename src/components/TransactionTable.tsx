import { Box, Heading, Stack, Table } from "@chakra-ui/react";
import React from "react";

const TransactionTable = () => {
  return (
    <Box>
      <Heading as="h2">Overview</Heading>
      <Stack>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader>Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {transactions.map((transaction) => (
              <Table.Row key={transaction.id}>
                <Table.Cell>{transaction.date}</Table.Cell>
                <Table.Cell>{transaction.description}</Table.Cell>
                <Table.Cell>{transaction.category}</Table.Cell>
                <Table.Cell>{transaction.amount}</Table.Cell>
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
      amount: 3500
    },
    {
      id: 2,
      date: "2025-02-09",
      description: "Domain name renewal",
      category: "Tech",
      amount: 12000
    },
    {
      id: 3,
      date: "2025-02-08",
      description: "Office chair purchase",
      category: "Office",
      amount: 45000
    },
    {
      id: 4,
      date: "2025-02-07",
      description: "Internet subscription",
      category: "Utility",
      amount: 10000
    },
    {
      id: 5,
      date: "2025-02-06",
      description: "Coffee and snacks",
      category: "Meal",
      amount: 2000
    },
    {
      id: 6,
      date: "2025-02-05",
      description: "External SSD for backups",
      category: "Tech",
      amount: 35000
    },
    {
      id: 7,
      date: "2025-02-04",
      description: "Printing paper",
      category: "Office",
      amount: 5500
    },
    {
      id: 8,
      date: "2025-02-03",
      description: "Ride to client’s office",
      category: "Transport",
      amount: 8000
    },
    {
      id: 9,
      date: "2025-02-02",
      description: "Subscription for software",
      category: "Tech",
      amount: 18500
    },
    {
      id: 10,
      date: "2025-02-01",
      description: "Monthly electricity bill",
      category: "Utility",
      amount: 25000
    }
  ];
  
export default TransactionTable;
