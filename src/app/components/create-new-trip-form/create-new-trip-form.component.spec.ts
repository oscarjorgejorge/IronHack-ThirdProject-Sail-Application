import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTripFormComponent } from './create-new-trip-form.component';

describe('CreateNewTripFormComponent', () => {
  let component: CreateNewTripFormComponent;
  let fixture: ComponentFixture<CreateNewTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
