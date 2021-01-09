import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  animations: [
    trigger('showHideOverlay', [
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      state(
        'hide',
        style({
          opacity: 0,
        }),
      ),
      transition('show <=> hide', [animate('300ms linear')]),
    ]),
    trigger('openCloseSidebar', [
      state(
        'open',
        style({
          transform: 'translateX(0px)',
        }),
      ),
      state(
        'close',
        style({
          transform: 'translateX(-120%)',
        }),
      ),
      transition('open <=> close', [animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')]),
    ]),
  ],
})
export class LayoutComponent {
  isOpenedSidebar$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  openSidebar(): void {
    this.isOpenedSidebar$$.next(true);
  }

  closeSidebar(): void {
    this.isOpenedSidebar$$.next(false);
  }
}
