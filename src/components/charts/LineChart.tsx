import React from "react";
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface LineChartProps {
    data: any;
    options: any;
}

const LineChart: React.FC<LineChartProps> = ({data, options}) => {
    return <Line data={data} options={options}/>;
};

export default LineChart;
