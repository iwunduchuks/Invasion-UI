import Button from "./Button";

export default {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: {
    },
  };
  
  export const Active = {
    args: {
        name: 'Label',
    },
  };

