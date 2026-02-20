import {fn} from 'storybook/test'

import TextButton from './TextButton'

export default {
    tittle: "Components/TextButton",
    component:TextButton,
    argtypes:{
        label: {control: "text"}
    }
}

export const Default = {
args: {
      label:"storybook TextButton"
}
}