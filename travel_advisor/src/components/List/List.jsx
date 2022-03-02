import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurant, hotels & attactorions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">restaurants</MenuItem>
          <MenuItem value="hotels">hotels</MenuItem>
          <MenuItem value="attractions">attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
