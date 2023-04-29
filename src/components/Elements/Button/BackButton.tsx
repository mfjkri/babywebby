import { useNavigate } from "react-router-dom";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

export type BackButtonProps = {
  text?: string;
};

export const BackButton = ({ text = "Go back" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      startIcon={<ArrowBack />}
      onClick={() => navigate(-1)}
    >
      {text}
    </Button>
  );
};
