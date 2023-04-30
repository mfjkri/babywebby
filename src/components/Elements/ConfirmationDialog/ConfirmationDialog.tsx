import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useDisclosure } from "hooks/useDisclosure";

/*
Adds a trigger button that upon trigger will present user with a Dialog, with 
possible actions of Confirm and Cancel.

Attributes:
  - triggerButton: React.ReactElement
    Button to trigger / open the Dialog
  
  - confirmButton: React.ReactElement
    Button to confirm / complete the Dialog
  
  - title: string
    Title of the Dialog
  
  - body: string | undefined
    Body of the Dialog. Defaults to an empty body "".

  - cancelButtonText: string | undefined
    Text displayed on the Cancel Dialog button. Defaults to "Cancel".

  - cancelButtonColor: colors | undefined
    Color of the Cancel Dialog button. Defaults to "blue".
  
  - icon: "danger" | "info" | ""
    Whether to add an Icon to the Dialog. Defaults to no icon.

  - isDone: boolean | undefined
    Whether the Dialog is completed. Defaults to false.
  
  - ALL OTHER NATIVE DIALOG PROPS
*/

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  confirmButton: React.ReactElement;
  title: string;
  body?: string;
  cancelButtonText?: string;
  isDone?: boolean;
};

export const ConfirmationDialog = ({
  triggerButton,
  confirmButton,
  title,
  body = "",
  cancelButtonText = "Cancel",
  isDone = false,
}: ConfirmationDialogProps) => {
  const { close, open, isOpen } = useDisclosure();

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  const trigger = React.cloneElement(triggerButton, {
    onClick: open,
  });

  return (
    <React.Fragment>
      {trigger}
      <Dialog
        open={isOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>{cancelButtonText}</Button>
          <Button onClick={close} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
