import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Vicon from "../../assets/icons/v-icon.svg";
import Xicon from "../../assets/icons/x-icon.svg";

export const FullButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "var(--color)",
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "var(--hover-button)",
  },
}));
export const FullButtonWithV = ({ content, click }: any) => {
  return (
    <FullButton onClick={click}>
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

export const BorderButtonWithX = ({ content, click }: any) => {
  return (
    <BorderButton onClick={click}>
      <img src={Xicon} />
      {content}
    </BorderButton>
  );
};
