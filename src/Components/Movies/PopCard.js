import React from "react";
import "./PopularMovies.css";
import Modal from "@mui/material/Modal";
import Videos from "./Videos";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import emptyHeart from "../../assets/heart.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,

  backgroundColor: "transparent",
};
const PopCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
        onClick={handleOpen}
      >
        <div className="card pop">
          <img
            src={props.poster}
            className="card-img-top"
            style={{
              imageResolution: "inherit",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="card-body decorate">
            <img
              className="pop-info"
              style={{
                width: "20px",
                height: "20px",
                marginTop: "-138px",
                position: "absolute",
                marginLeft: "153px",
              }}
              src={emptyHeart}
            />

            <h5 className="card-title pop-info">{props.title}</h5>
            <Rating
              className="pop-info"
              name="read-only "
              value={props.vote_average}
              readOnly
            />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Videos id={props.id} />
            </Box>
          </Modal>
        </div>
      </button>
    </div>
  );
};

export default PopCard;
