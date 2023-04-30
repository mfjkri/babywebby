export const API_URL =
  // If app is not in development, use development API instead of localhost
  process.env.REACT_APP_API_MOCKING === "true" &&
  process.env.NODE_ENV === "development"
    ? (process.env.REACT_APP_LOCAL_API_URL as string)
    : (process.env.REACT_APP_API_URL as string);

export const APP_VERSION = process.env.REACT_APP_VERSION as string;

export const QUERY_REFETCH_ON_WINDOW_FOCUS =
  process.env.REACT_APP_QUERY_REFETCH_ON_WINDOW_FOCUS === "true";
