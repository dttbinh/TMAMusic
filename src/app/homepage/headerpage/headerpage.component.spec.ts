import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageComponent } from './headerpage.component';

describe('HeaderPageComponent', () => {
  let component: HeaderPageComponent;
  let fixture: ComponentFixture<HeaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
