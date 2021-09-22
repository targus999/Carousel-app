import React from 'react';
import Typography from "@material-ui/core/Typography";
import { FixedSizeList } from "react-window";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  }

const Files = () => {
    return (
        <div>
            <Typography variant="h6">Files</Typography>
                  <FixedSizeList
                    height={300}
                    width={200}
                    itemSize={46}
                    itemCount={10}
                  >
                    {renderRow}
                  </FixedSizeList>
        </div>
    )
}
export default Files;