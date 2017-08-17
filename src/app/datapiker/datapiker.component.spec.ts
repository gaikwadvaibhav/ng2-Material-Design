import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapikerComponent } from './datapiker.component';

describe('DatapikerComponent', () => {
  let component: DatapikerComponent;
  let fixture: ComponentFixture<DatapikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
