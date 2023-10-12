import React from "react";
import Modal from "@mui/material/Modal";
import { Button, CardContent, Typography } from "@mui/material";
import "./DetailedViewStyle.css";

function DetailedView({ item, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} className="modals">
      <CardContent className="contents" style={{ fontWeight: "bold" }}>
        <div className="column">
          <Typography style={{ fontWeight: "bolder" }}>Username</Typography>
          <Typography>{item.username}</Typography>

          <Typography style={{ fontWeight: "bolder" }}>Email</Typography>
          <Typography>{item.email}</Typography>

          <Typography style={{ fontWeight: "bolder" }}>
            Contact Person
          </Typography>
          <Typography>{item.phone}</Typography>
          <Typography style={{ fontWeight: "bolder" }}>Address</Typography>
          <Typography>
            {item.address.street}, {item.address.suite}, {item.address.zipcode}
          </Typography>

          <Typography style={{ fontWeight: "bolder" }}>Phone</Typography>
          <Typography>{item.phone}</Typography>

          <Typography style={{ fontWeight: "bolder" }}>Company</Typography>
          <Typography>
            {item.company.name},{item.address.geo.lat}
          </Typography>

          <Typography style={{ fontWeight: "bolder" }}>Website</Typography>
          <Typography>{item.website}</Typography>
        </div>
        <Button variant="contained" onClick={onClose} className="button">
          Close
        </Button>
      </CardContent>
    </Modal>
  );
}

export default DetailedView;
