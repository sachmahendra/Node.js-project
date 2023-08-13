const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse incoming request bodies
app.use(bodyParser.json());

// Endpoint for updating chart data
app.post('/chart-data', (req, res) => {
    const selectedDate = req.body.selectedDate;

    // Process the selected date and update the chart data
    const updatedData = updateChartData(selectedDate);

    res.json(updatedData);
});

function updateChartData(selectedDate) {
    // Example data
    const data = [3, 9, 12, 15, 18, 21];

    // Update chart data with the selected date
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'New Color'];
    const datasets = [{
        label: '# of Votes',
        data: [...data, Math.floor(Math.random() * data.length)],
        borderWidth: 1
    }];

    return { labels, datasets };
}

// Start the server
app.listen(3000, () => {
    console.log('API server listening on port 3000');
});