import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const FullButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#E554C2",
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "var(--hover-button)",
  },
}));

export const BorderButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#white",
  color: "black",
  fontWeight: "bold",
  border: "1px solid #ab4292",
  fontSize: "20px",

  "&:hover": {
    backgroundColor: "var(--hover-button)",
  },
}));
