import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleService } from '../../services/title.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
})
export class ButtonsPageContainerComponent {
  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Buttons');
  }
}
