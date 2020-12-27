import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', (): void => {
  beforeEach(
    async (): Promise<void> => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent],
      }).compileComponents();
    },
  );

  it('should create the app', (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'website'`, (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.title).toEqual('website');
  });

  it('should render title', (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: Element = fixture.nativeElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('website app is running!');
  });
});
