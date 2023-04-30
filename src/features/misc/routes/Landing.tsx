import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

import { store } from "stores/store";
import { addNotification } from "components/Notifications";

import { Head } from "components/Head";
import { Footer } from "components/Layout";
import logo from "assets/logo.svg";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Head description="Welcome to Webby" />
      <div className="h-[100vh] flex items-center text-secondary">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Webby</span>
          </h2>
          <img className="w-full my-3" src={logo} alt="react" />

          <p>Welcome to Webby. Please login or register to continue.</p>
          <div className="mt-8 flex justify-center">
            <Button
              className="w-1/3"
              onClick={() => navigate("/auth/login")}
              startIcon={
                <ArrowTopRightOnSquareIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              }
            >
              Login
            </Button>
            <Button
              className="ml-3 w-1/3"
              onClick={() => {
                store.dispatch(
                  addNotification({
                    severity: "error",
                    variant: "standard",
                    title: "Success",
                    message: "Deleted your comment!",
                  })
                );
                // navigate("/auth/register");
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
