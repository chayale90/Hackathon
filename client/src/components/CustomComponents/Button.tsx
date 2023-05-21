import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Vicon from "../../assets/icons/v-icon.svg";
import Xicon from "../../assets/icons/x-icon.svg";

export const FullButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#E554C2",
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "var(--hover-button)",
  },
}));
export const FullButtonWithV = ({ content }: any) => {
  return (
    <FullButton>
      {content}
      <img src={Vicon} />
    </FullButton>
  );
};
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

export const BorderButtonWithX = ({ content }: any) => {
  return (
    <BorderButton>
      {content}
      <img src={Xicon} />
    </BorderButton>
  );
};
