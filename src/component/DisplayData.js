import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import DetailedView from "./DetailedView"; // Import the DetailedView component

function DisplayData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    // Replace this with your API endpoint
    fetch("http://localhost:3000/api/users/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderData = data
    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    .map((item) => (
      <Grid item key={item.id} xs={12} style={{ background: "lightgrey" }}>
        <Card
          style={{
            marginBottom: "20px",
            backgroundColor: "white",
            color: "black",
            transition: "all 0.3s ease-in-out",
            borderRadius: "60px",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column", // Display content in a column on small screens
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Name
              </Typography>
              <Typography>{item.name}</Typography>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Username
              </Typography>
              <Typography>{item.username}</Typography>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <Typography>{item.email}</Typography>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Phone No.
              </Typography>
              <Typography>{item.phone}</Typography>
            </div>
            <Button
              variant="outlined"
              onClick={() => handleViewDetails(item)}
              style={{
                transform: "scale(1)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ));

  return (
    <div className="content">
      <h2 className="title">API CALLS</h2>
      <Grid container spacing={2}>
        {renderData}
      </Grid>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={page}
        onChange={(event, newPage) => setPage(newPage)}
        color="primary"
      />

      {selectedItem && (
        <DetailedView
          item={selectedItem}
          open={!!selectedItem}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default DisplayData;
