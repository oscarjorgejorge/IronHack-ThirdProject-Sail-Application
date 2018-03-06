import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittripPageComponent } from './edittrip-page.component';

describe('EdittripPageComponent', () => {
  let component: EdittripPageComponent;
  let fixture: ComponentFixture<EdittripPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittripPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
