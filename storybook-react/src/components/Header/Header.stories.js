import { fn } from "storybook/test";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Header",
  },
};