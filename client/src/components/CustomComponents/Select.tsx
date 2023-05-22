import { createStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(() =>
  createStyles({
    input: {
      width: 200,
      borderRadius: 4,
      border: "2px solid var(--color)",
      fontSize: 20,
      padding: "10px 26px 10px 12px",
    },
  })
)(InputBase);
export enum Regions {
  North = 1,
  Central,
  South,
}

export const RegionList = ({ click }: any) => (
  <Select onClick={click} input={<BootstrapInput />}>
    <MenuItem value={Regions.North}>צפון</MenuItem>
    <MenuItem value={Regions.Central}>מרכז</MenuItem>
    <MenuItem value={Regions.South}>דרום</MenuItem>
  </Select>
);
