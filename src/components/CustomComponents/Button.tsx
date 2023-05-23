import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Vicon from "../../assets/icons/v-icon.svg";
import Xicon from "../../assets/icons/x-icon.svg";

export const FullButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "var(--color)",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  height: "30px",
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
  color: "var(--color)",
  fontWeight: "bold",
  border: "2px solid var(--color)",
  fontSize: "16px",
  height: "30px",

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
