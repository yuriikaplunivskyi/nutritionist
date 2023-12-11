const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises'); // File system module for promise-based file operations
const app = express();
const port = 3001;

app.use(bodyParser.json());

const dataFilePath = 'data.json';

let serviceData;

try {
  serviceData = require(`./${dataFilePath}`);
} catch (error) {
  serviceData = [{
    title: 'Разова консультація',
    id: 1,
    content: '... your content here ...',
    passing: [...],
    prices: [...],
    warnings: [...],
    path: "service_consultation",
    icon: "./img/services/consultation.svg"
  }];
}

// Endpoint to get service data
app.get('/api/serviceData', (req, res) => {
  res.json(serviceData);
});

// Endpoint to update service data
app.post('/api/serviceData', async (req, res) => {
  const newData = req.body;
  serviceData = newData;

  // Save the updated data to the file
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2));
    res.json({ message: 'Service data updated successfully.' });
  } catch (error) {
    console.error('Error writing to data file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
