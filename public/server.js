

const express = require('express');
const app = express();
const port = 5006; // Use a different, less common port

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
