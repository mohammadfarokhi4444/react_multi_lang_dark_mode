import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  IconButton,
  Divider,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { storeData } from "../Utils/DB";

export default function TodoLists({ list, setList }) {
  const handleToggle = (index) => () => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
    storeData("todoList", { list: newList });
  };
  const handleDelete = (index) => () => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    storeData("todoList", { list: newList });
  };

  return (
    <List
      sx={{
        width: "100%",
        height: "60vh",
        overflow: "auto",
        bgcolor: "background.paper",
        borderRadius: "10px",
      }}
    >
      {list.map((el, index) => {
        const labelId = `checkbox-list-label-${el}`;
        return (
          <div key={index}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={handleDelete(index)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton  onClick={handleToggle(index)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={el.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": el.id }}
                    sx={{ color: "action.active" }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={el.value} />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ width: "95%", mx: "auto" }} />
          </div>
        );
      })}
    </List>
  );
}
