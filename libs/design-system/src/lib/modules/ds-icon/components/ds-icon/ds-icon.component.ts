import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

import { DsIconCategory } from '../../entities/ds-icon-category';
import { DsIconName } from '../../entities/ds-icon-name';
import { DsIconSvgClass } from '../../entities/ds-icon-svg-class';
import { DsIconService } from '../../services/ds-icon.service';

@Component({
  selector: 'ds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class DsIconComponent implements OnDestroy {
  @Input() set category(value: DsIconCategory | null) {
    if (value) {
      this.category$$.next(value);
    }
  }

  @Input() set name(value: DsIconName | null) {
    if (value) {
      this.name$$.next(value);
    }
  }

  @Input() set svgClass(value: DsIconSvgClass | null) {
    if (value) {
      this.svgClass$$.next(value);
    }
  }

  private category$$: ReplaySubject<DsIconCategory> = new ReplaySubject(1);
  private name$$: ReplaySubject<DsIconName> = new ReplaySubject(1);
  private svgClass$$: BehaviorSubject<DsIconSvgClass> = new BehaviorSubject<DsIconSvgClass>('');
  private destroy$$: Subject<void> = new Subject<void>();

  constructor(private dsIconService: DsIconService, private renderer: Renderer2, private elementRef: ElementRef) {
    this.render();
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  private render(): void {
    const iconString$: Observable<string> = combineLatest([this.category$$, this.name$$]).pipe(
      switchMap(
        ([category, name]: [DsIconCategory, DsIconName]): Observable<string | null> => {
          return this.dsIconService.getIcon(category, name);
        },
      ),
      filter((icon: string | null): icon is string => Boolean(icon)),
    );

    combineLatest([iconString$, this.svgClass$$])
      .pipe(takeUntil(this.destroy$$))
      .subscribe(([iconString, svgClass]: [string, DsIconSvgClass]): void => {
        let icon: SVGElement = this.svgElementFromString(iconString);
        icon = this.addClasses(icon, svgClass);
        this.renderer.appendChild(this.elementRef.nativeElement, icon);
      });
  }

  private svgElementFromString(str: string): SVGElement {
    const div: HTMLElement = this.renderer.createElement('DIV');

    this.renderer.setProperty(div, 'innerHTML', str);

    return div.querySelector('svg') as SVGElement;
  }

  private addClasses(svg: SVGElement, svgClass: DsIconSvgClass): SVGElement {
    const svgClassList: string[] =
      typeof svgClass === 'string'
        ? svgClass.split(' ').filter((klass: string): klass is string => Boolean(klass))
        : svgClass;

    svgClassList.forEach((klass: string): void => {
      this.renderer.addClass(svg, klass);
    });

    return svg;
  }
}
