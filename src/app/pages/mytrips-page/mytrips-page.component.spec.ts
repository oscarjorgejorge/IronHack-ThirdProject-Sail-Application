import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripsPageComponent } from './mytrips-page.component';

describe('MytripsPageComponent', () => {
  let component: MytripsPageComponent;
  let fixture: ComponentFixture<MytripsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytripsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytripsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
