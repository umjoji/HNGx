// HNGx Stage one with Express

const express = require('express');
const app = express();
const url = require('url');
const port = process.env.PORT || 3000;

// API route
app.get('/api', (req, res) => {
  // Extract query parameters
  const queryData = url.parse(req.url, true).query;
  const slackName = queryData.slack_name;
  const track = queryData.track;

  // Get current day and format
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Create a new Date object representing the current time
  const now = new Date();

  // Extract the individual components (year, month, day, hour, minute, second)
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  // Format the date and time as "YYYY-MM-DDTHH:mm:ssZ"
  const formattedTime = `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;

  // console.log(formattedTime); // Output: "2023-08-21T15:04:05Z"


  // Construct Github URLS
  const githubUsername = 'umjoji';
  const githubRepo = 'HNGx';
  const githubFileName = 'app.js';
  const githubFileUrl = `https://github.com/${githubUsername}/${githubRepo}/blob/main/${githubFileName}`;
  const githubRepoUrl = `https://github.com/${githubUsername}/${githubRepo}`;

  // Construct response
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: formattedTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send response
  res.json(response);
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
