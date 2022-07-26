import {
  AppBar,
  Avatar,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import type { TransitionProps } from "@mui/material/transitions";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { forwardRef, ReactElement, Ref, useState } from "react";
import Dialog from "./Dialog";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const emails = ["username@gmail.com", "user02@gmail.com"];

// eslint-disable-next-line react/display-name
const TransitionSample = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
  ) => (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  )
);

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }} />
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItemButton>
        ))}
        <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItemButton>
      </List>
    </Dialog>
  );
};

const Template: ComponentStory<typeof Dialog> = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Stack>
  );
};

// eslint-disable-next-line react/prop-types
const AlertTemplate: ComponentStory<typeof Dialog> = ({ TransitionComponent, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={TransitionComponent || undefined}
      >
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

const FullScreenTemplate: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} TransitionComponent={TransitionSample}>
        <AppBar sx={{ position: "fixed" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              X
            </IconButton>
            <Typography sx={{ flex: 1, ml: 2 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Alert = AlertTemplate.bind({});
Alert.args = {};

export const AlertWithTransition = AlertTemplate.bind({});
AlertWithTransition.args = {
  TransitionComponent: TransitionSample,
};

export const FullScreen = FullScreenTemplate.bind({});
FullScreen.args = {
  fullScreen: true,
};

export default {
  component: Dialog,
  title: "Components/Feedback/Dialog",
} as ComponentMeta<typeof Dialog>;
