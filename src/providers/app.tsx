import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "@mui/material";

import { Provider as ReduxProvider } from "react-redux";
import { queryClient } from "lib/react-query";
import { store } from "stores/store";
import storage from "utils/storage";

import { Spinner } from "components/Elements";
import { Notifications } from "components/Notifications";

const ErrorFallback = () => {
  React.useEffect(() => {
    storage.clearToken();
  }, []);

  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      {/* Create our Component tree of Providers and Routing */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== "production" && <ReactQueryDevtools />}
            <ReduxProvider store={store}>
              <Notifications />
              {/* <AuthProvider> */}
              <Router>{children}</Router>
              {/* </AuthProvider> */}
            </ReduxProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
