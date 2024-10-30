import { U_Button } from '.';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';


export default {
  component: U_Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Default = {
  decorators: [(story)=> {
    return  ( 
    <Theme preset={presetGpnDefault}>
      {story()}
    </Theme>)
  }]
};
