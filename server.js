const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors package

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Define a route to fetch data from the public API
app.get("/api/users", async (req, res) => {
  try {
    // Make a GET request to the public API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // Assuming the API returns JSON data
    const apiData = response.data;

    // Format and transform the data as needed
    const formattedData = apiData.map((item) => ({
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      address: {
        street: item.address.street,
        suite: item.address.suite,
        city: item.address.city,
        zipcode: item.address.zipcode,
        geo: {
          lat: item.address.geo.lat,
          lng: item.address.geo.lng,
        },
      },
      phone: item.phone,
      website: item.website,
      company: {
        name: item.company.name,
        catchPhrase: item.company.catchPhrase,
        bs: item.company.bs,
      },
    }));

    // Send the formatted data as JSON to the frontend
    res.json(formattedData);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
