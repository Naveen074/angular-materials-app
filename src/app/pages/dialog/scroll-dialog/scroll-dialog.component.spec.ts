import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDialogComponent } from './scroll-dialog.component';

describe('ScrollDialogComponent', () => {
  let component: ScrollDialogComponent;
  let fixture: ComponentFixture<ScrollDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollDialogComponent]
    });
    fixture = TestBed.createComponent(ScrollDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
