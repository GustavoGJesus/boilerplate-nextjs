import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
};

export const Basic = () => <Main title={text('Title', 'Bolierplate')} />;
