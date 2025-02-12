export const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Spending Over Time",
        data: [80, 50, 70, 60, 40, 90, 75], // Sample data
        borderColor: "#A4F4C6",
        backgroundColor: "rgba(164, 244, 198, 0.1)",
        tension: 0.4, // Smooth curve
        borderWidth: 2,
        pointRadius: 0, // Hide points
      },
    ],
  };

  export const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#A4F4C6" },
      },
      y: { display: false },
    },
  };