import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Movies from "./Movies";
import Videos from "./Videos";

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

const Trailer = (props) => {
  let path = "http://image.tmdb.org/t/p/original";

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
        <Movies
          key={props.key}
          Like={props.Like}
          vote_average={props.vote_average}
          poster={path + props.poster}
          title={props.title}
          overview={props.overview}
        />
      </button>
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
  );
};

export default Trailer;
