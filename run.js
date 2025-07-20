const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.text());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/save', (req, res) => {
  fs.writeFile('formdata.txt', req.body, (err) => {
    if (err) {
      console.error("File write error:", err);
      return res.status(500).send("Failed to save form data.");
    }

    exec('clinic.exe < formdata.txt', (error, stdout, stderr) => {
      if (error) {
        console.error("Error running clinic.exe:", error);
        return res.status(500).send("Failed to save appointment.");
      }

      console.log("C++ Output:", stdout);
      res.status(200).type('text/plain').send("Appointment saved successfully.");
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
