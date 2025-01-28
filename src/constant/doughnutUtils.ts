import {TooltipItem} from "chart.js";

export const doughnutData = {
    labels: ["Sales", "Marketing", "Development", "Operations", "Support"],
    datasets: [
        {
            label: "Budget Allocation",
            data: [1200, 800, 2500, 1500, 400],
            backgroundColor: [
                "rgba(0, 123, 255, 0.7)",
                "rgba(40, 167, 69, 0.7)",
                "rgba(255, 99, 132, 0.7)",
                "rgba(23, 162, 184, 0.7)",
                "rgba(153, 102, 255, 0.7)",
            ],
            borderColor: [
                "rgba(0, 123, 255, 1)",
                "rgba(40, 167, 69, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(23, 162, 184, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 2,
            hoverOffset: 10,
        },
    ],
};

export const doughnutOptions = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: "#4A5568",
                font: {
                    size: 14,
                    family: "Inter, sans-serif",
                },
            },
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem: TooltipItem<'doughnut'>) {
                    const value = tooltipItem.raw as number;
                    return `${tooltipItem.label}: ${value.toLocaleString()}`;
                },
            },
        },
    },
};