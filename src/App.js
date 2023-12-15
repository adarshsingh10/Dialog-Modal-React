import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";  

const App = () => {
  const [open, setOpen] = useState(false);

  return <div>
    <Button onClick={() => setOpen(true)}>Open Dialog</Button>
    <Dialog hide open={open} onClose={() => setOpen(false)}>
      <DialogTitle>This is my Dialog</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A dialog is a popup windows which can ask user something like info or confirmation.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Agree</Button>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  </div>
};

export default App;
