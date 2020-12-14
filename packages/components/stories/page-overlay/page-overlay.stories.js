import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Basic from './stories/basic';
import notes from './README.md';

const stories = storiesOf('Design System|Content/PageOverlay', module);

stories.addDecorator(withKnobs).addDecorator(withInfo);

stories.add('Basic usage', Basic, { notes });
