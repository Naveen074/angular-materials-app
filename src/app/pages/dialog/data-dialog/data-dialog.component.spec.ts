import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDialogComponent } from './data-dialog.component';

describe('DataDialogComponent', () => {
  let component: DataDialogComponent;
  let fixture: ComponentFixture<DataDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDialogComponent]
    });
    fixture = TestBed.createComponent(DataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
