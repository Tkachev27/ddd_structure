import { Meta, StoryObj, moduleMetadata, applicationConfig,  } from '@storybook/angular/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { ErrorDialogData, ShowErrorDialogComponent } from 'src/app/shared/dialogs/show-error-dialog/show-error-dialog.component';
import { AnswerType } from 'src/app/shared/services/interfaces';
import { StoriesModule } from 'src/stories/Stories.module';

@Component({
  selector: 'app-launch-dialog',
  template: `
    <app-mat-button
      label="Open dialog"
      color="primary"
      (action)="openDialog()">
    </app-mat-button>
  `
})
class LaunchDialogComponent {
  @Input() data: ErrorDialogData;

  constructor(private _dialog: MatDialog) {}

  openDialog(): void {
    this._dialog.open(ShowErrorDialogComponent, {
      data: this.data,
      width: '500px',
      restoreFocus: false
    });
  }
}

export default {
  title: 'Components/Dialog',
  component: LaunchDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [StoriesModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
} as Meta;

export const ErrorDialog: StoryObj<LaunchDialogComponent> = {
  args: {
    data: {
      title: 'createGroupFail',
      backendAnswer: {
        answer: AnswerType.UNKNOWN_ERROR,
        message: 'Can not create group',
        errors: [
          {
            domain: 'device-manager',
            reason: 'Group with name=123 and parentGroupId=1 already exists',
            message: 'Can not create group',
            location: 'BlockingCoroutine',
            locationType: 'Class',
            extendedHelp: 'Please enter another name for group',
            format: 'unknown'
          }
        ]
      },
    }
  }
};
