'use client';

import { data, options } from "@/data/constant";
import { Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement)

const TransactionChart = () => {
  return (
    <Box bg="#11261F" p={6} rounded="lg" shadow="md">
      <Text fontSize="lg" fontWeight="bold" color="white">Spending Trends</Text>
      <Box bg="rgba(255, 255, 255, 0.05)" p={4} mt={2} rounded="md">
        <Text fontSize="sm" mb={2} color="white">Spending over time</Text>
        <Line data={data} options={options}/>
      </Box>
    </Box>
  );
};

export default TransactionChart;
