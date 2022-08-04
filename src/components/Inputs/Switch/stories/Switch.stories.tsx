import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";

const Template: ComponentStory<typeof Switch> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch {...args} />
    <Switch disabled defaultChecked {...args} />
    <Switch disabled {...args} />
  </Stack>
);

const TemplateLabel: ComponentStory<typeof Switch> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  </Stack>
);

const TemplateColor: ComponentStory<typeof Switch> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Switch defaultChecked {...args} />
    <Switch defaultChecked color="secondary" {...args} />
    <Switch defaultChecked color="warning" {...args} />
    <Switch defaultChecked color="error" {...args} />
    <Switch defaultChecked color="info" {...args} />
    <Switch defaultChecked color="success" {...args} />
    <Switch defaultChecked color="default" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Label = TemplateLabel.bind({});
Label.args = {};

export const Color = TemplateColor.bind({});
Color.args = {};

export default {
  component: Switch,
  title: "Components/Inputs/Switch",
} as ComponentMeta<typeof Switch>;
