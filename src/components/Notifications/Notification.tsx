import { useEffect } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { Notif } from "./slice";

/*
Notification component. Not to be used directly.
*/

const default_ttl = {
  info: 2500,
  success: 1500,
  error: 3000,
  warning: 3000,
};

export type NotificationProps = Notif & {
  onDismiss: (id: number) => void;
};

export const Notification = ({
  id,
  severity,
  variant = "standard",
  title,
  message,
  ttl = default_ttl[severity],
  onDismiss,
}: NotificationProps) => {
  useEffect(() => {
    // setTimeout(() => ), ttl);
  }, [ttl]);

  return (
    <Alert
      severity={severity}
      variant={variant}
      onClose={() => onDismiss(id)}
      className="min-w-full mt-2"
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};
