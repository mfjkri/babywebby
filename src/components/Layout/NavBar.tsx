import { IconButton, Tooltip } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Logout, Person } from "@mui/icons-material";
import { UseMutateAsyncFunction } from "react-query";

import { Link } from "components/Elements";
import logo from "assets/logo.svg";

type LogoutButtonProps = {
  logout: UseMutateAsyncFunction<any, any, void, any>;
  isLoggingOut: boolean;
};

const LogoutButton = ({ logout, isLoggingOut }: LogoutButtonProps) => {
  return (
    <LoadingButton
      variant="text"
      loading={isLoggingOut}
      endIcon={<Logout />}
      onClick={async () => {
        await logout();
      }}
    >
      Log out
    </LoadingButton>
  );
};

type UserProfileButtonProps = {
  id: number;
};

const UserProfileButton = ({ id }: UserProfileButtonProps) => {
  return (
    <Link to={`/users/${id}`}>
      <Tooltip title="View profile">
        <IconButton>
          <Person />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export const NavigationBar = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-primary fixed w-full z-20 top-0 left-0 border-b border-primary2">
      <div className="flex flex-row px-3">
        <Link to="/posts" className="flex items-center hover:opacity-60">
          <img src={logo} className="h-6 mr-2 sm:h-9" alt="Webby" />
          <span className="invisible md:visible self-center text-xl font-semibold whitespace-nowrap text-white">
            Webby
          </span>
        </Link>
        <div className="grow"></div>
        <div className="felx md:order-2 h-auto"></div>
      </div>
    </nav>
  );
};
