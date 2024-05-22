import { Meta, StoryObj, moduleMetadata, applicationConfig,  } from '@storybook/angular/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

import { IntervalSelectorComponent } from 'src/app/shared/components/interval-selector/interval-selector.component';
import { UPDATE_INTERVALS } from 'src/app/shared/services/interfaces';
import { StoriesModule } from 'src/stories/Stories.module';
import { TranslateService } from '@ngx-translate/core';

export default {
  title: 'Components/Selector',
  component: IntervalSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [StoriesModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
  argTypes: {
    intervalChanged: {
      action: 'intervalChanged'
    },
  }
} as Meta;

export const IntervalSelector: StoryObj<IntervalSelectorComponent> = {
  args: {
    updateIntervals: UPDATE_INTERVALS
  }
};
