import React from "react";
import { Bar } from "react-chartjs-2";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    ChartOptions,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: ChartData<'bar'>;
    options: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
    return <Bar data={data} options={options} />;
};

export default BarChart;
