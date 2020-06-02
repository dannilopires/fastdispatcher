import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBgComponent } from './section-bg.component';

describe('SectionBgComponent', () => {
  let component: SectionBgComponent;
  let fixture: ComponentFixture<SectionBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
