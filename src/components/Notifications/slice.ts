import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export type Notif = {
  id: number;
  severity: "info" | "warning" | "success" | "error";
  variant?: "filled" | "outlined" | "standard";
  message: string;
  title?: string;
  ttl?: number;
};

type NotificationsStateProps = {
  notifs: Notif[];
  currId: number;
};

const initState: NotificationsStateProps = { notifs: [], currId: 0 };

const notificationSlice = createSlice({
  name: "notifications",
  initialState: initState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notif, "id">>) => {
      state.notifs.push({ id: state.currId, ...action.payload });
      state.currId += 1;
    },
    dismissNotification: (state, action: PayloadAction<number>) => {
      state.notifs = state.notifs.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotification, dismissNotification } =
  notificationSlice.actions;
export const notificationsReducer = notificationSlice.reducer;
