import { Button } from "@mui/material";
import { ConfirmationDialog } from "./ConfirmationDialog";

/*
Specific use case of ConfirmationDialog with preset title and body
for discarding changes.

Attributes:
  - onDiscard: function [() => void]
    Callback called after confirming the dialog.
*/

export type DiscardConfirmationDialogProps = {
  onDiscard: () => void;
};

export const DiscardConfirmationDialog = ({
  onDiscard,
}: DiscardConfirmationDialogProps) => {
  return (
    <ConfirmationDialog
      title="Discard changes"
      body="Are you sure you want to discard your changes?"
      triggerButton={<Button variant="contained">Discard Changes</Button>}
      confirmButton={
        <Button variant="contained" onClick={onDiscard}>
          Discard
        </Button>
      }
    />
  );
};
