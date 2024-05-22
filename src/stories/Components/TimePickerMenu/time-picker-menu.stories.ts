import { Meta, StoryObj, moduleMetadata, applicationConfig,  } from '@storybook/angular/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { TimePickerMenuComponent } from 'src/app/shared/components/time-picker-menu/time-picker-menu.component';
import { StoriesModule } from 'src/stories/Stories.module';

export default {
  title: 'Components/TimePickerMenu',
  component: TimePickerMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [StoriesModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  controls: {
    expanded: false
  },
  argTypes: {
    intervalChanged: {
      action: 'intervalChanged'
    },
    initialInterval: {
      type: 'function'
    },
    updateInterval: {
      type: 'function'
    },
    scrollbarRange: {
      type: 'function'
    },
  }
} as Meta;

export const TimePicker: StoryObj<TimePickerMenuComponent> = {};
