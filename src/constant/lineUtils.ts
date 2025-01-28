import {theme} from "@chakra-ui/react";

const colorPalette = [
    theme.colors.red[200],
    theme.colors.blue[300],
    theme.colors.pink[300],
];

const createGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 50, 0, 350);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    return gradient;
};

const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: "Final",
            data: [
                10, 70, 50, 90, 100,
            ],
            borderColor: colorPalette[2],
            backgroundColor: (ctx: {
                chart: { ctx: CanvasRenderingContext2D }
            }) => createGradient(ctx.chart.ctx, colorPalette[2]),
            fill: true,
            tension: 0,
        },
        {
            label: "Draft",
            data: [
                50, 100, 130, 120, 210,
            ],
            borderColor: colorPalette[1],
            backgroundColor: (ctx: {
                chart: { ctx: CanvasRenderingContext2D }
            }) => createGradient(ctx.chart.ctx, colorPalette[1]),
            fill: true,
            tension: 0,
        },
        {
            label: "Living",
            data: [
                100, 150, 190, 200, 350,
            ],
            borderColor: colorPalette[0],
            backgroundColor: (ctx: {
                chart: { ctx: CanvasRenderingContext2D }
            }) => createGradient(ctx.chart.ctx, colorPalette[0]),
            fill: true,
            tension: 0,
        },
    ],
};

const lineOptions = {
    responsive: true,
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            stacked: false,
            beginAtZero: true,
            grid: {
                color: "rgba(200, 200, 200, 0.2)",
            },
        },
    },
};
export const lineCardData = [
    {
        heading: "Meta EIPs",
        tag: 36,
        description: "Meta EIPs describe changes to the EIP process, or other non-optional changes.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Core EIPs",
        tag: 45,
        description: "Core EIPs describe changes to the Ethereum protocol.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Networking EIPs",
        tag: 24,
        description: "Networking EIPs focus on protocol-level improvements for communication.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "ERCs",
        tag: 486,
        description: "ERCs describe application-level standards for the Ethereum ecosystem.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Interface EIPs",
        tag: 21,
        description: "Interface EIPs provide standards for client interaction and APIs.",
        data: lineData,
        options: lineOptions
    },
    {
        heading: "Interface EIPs",
        tag: 12,
        description: "Interface EIPs describe changes to the Ethereum client API.",
        data: lineData,
        options: lineOptions
    }
];