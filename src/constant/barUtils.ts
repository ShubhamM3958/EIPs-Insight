export const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Final",
            data: [12, 19, 10, 15, 7],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Living",
            data: [8, 15, 20, 10, 12],
            backgroundColor: "rgba(153, 102, 255, 0.5)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Withdrawn",
            data: [5, 10, 15, 20, 25],
            backgroundColor: "rgba(255, 159, 64, 0.5)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {
            label: "Stagnant",
            data: [7, 9, 12, 14, 16],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
    ],
};

export const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            beginAtZero: true,
        },
    },
};
export const barCardData = [
    {
        heading: "Draft",
        tag: 214,
        description: "Draft EIPs are proposals still under initial consideration and open for feedback.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Review",
        tag: 45,
        description: "EIPs in the Review stage are being actively discussed and evaluated by the community.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Last Call",
        tag: 24,
        description: "Last Call EIPs are nearing finalization, with a short period for final community comments.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Final",
        tag: 15,
        description: "Final EIPs have been formally accepted and implemented as part of the Ethereum protocol.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Withdrawn",
        tag: 50,
        description: "Withdrawn EIPs have been removed from consideration by the author or due to lack of support.",
        data: barData,
        options: barOptions
    },
    {
        heading: "Stagnant",
        tag: 12,
        description: "Stagnant EIPs are inactive and have not progressed for a prolonged period.",
        data: barData,
        options: barOptions
    }
];