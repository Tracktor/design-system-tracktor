import { Stack, TextField } from "@mui/material";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Autocomplete from "./Autocomplete";

const topFilms = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Autocomplete
      {...args}
      disablePortal
      id="combo-box-demo"
      options={topFilms}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie (small)" />}
      size="small"
    />
    <Autocomplete
      {...args}
      disablePortal
      id="combo-box-demo"
      options={topFilms}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie (medium)" />}
    />
  </Stack>
);

export const ComboBox = Template.bind({});
ComboBox.args = {};

export default {
  component: Autocomplete,
  title: "Components/Inputs/Autocomplete",
} as ComponentMeta<typeof Autocomplete>;
