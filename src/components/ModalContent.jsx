import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
with:"50%",
height:"70%",
margin:"50px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function ModalContent({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}