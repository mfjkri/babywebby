import { Box, Snackbar, Stack } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks/typedRedux";

import { Notification } from "./Notification";
import { dismissNotification } from "./slice";

/*
Notifications component.
This component creates each Notification component and listens to 
notifications state in redux store.

This component should be added in the app providers (src/providers/)

Attributes:
  None
*/
export const Notifications = () => {
  const notifications = useAppSelector((state) => state.notifications.notifs);

  const dispatch = useAppDispatch();
  const dismiss = (id: number) => dispatch(dismissNotification(id));

  return (
    <Stack spacing={2}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ minWidth: "75vw" }}
      >
        <Box sx={{ width: "100%" }}>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              onDismiss={dismiss}
              {...notification}
            />
          ))}
        </Box>
      </Snackbar>
    </Stack>
  );
};

/*
Usage (adding notification)

import { addNotification } from "components/Notifications";
...
newNotification = {type: ..., title: ...,message: ...}


1) Within a React component:
  import { useAppDispatch } from "hooks/typedRedux";
  ...
  const dispatch = useAppDispatch();
  dispatch(addNotification(newNotification));


2) Outside of React a component:
  import {store} from "stores/store"; 
  ...
  store.dispatch(addNotification(newNotification);
*/
