import chart from 'chart.js'
// Get the context of the canvas element
const ctx = document.getElementById('salesChart').getContext('2d');

// Define the days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Generate random sales data for each day
const salesData = daysOfWeek.map(() => Math.floor(Math.random() * 100));

// Create the chart
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: daysOfWeek,
        datasets: [{
            label: 'Sales',
            data: salesData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Sales Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
function SSales() {

    return (

        <canvas id="salesChart"><chart /></canvas>
    )
}

export default SSales