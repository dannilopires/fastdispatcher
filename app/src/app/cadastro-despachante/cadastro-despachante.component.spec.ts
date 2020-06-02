import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDespachanteComponent } from './cadastro-despachante.component';

describe('CadastroDespachanteComponent', () => {
  let component: CadastroDespachanteComponent;
  let fixture: ComponentFixture<CadastroDespachanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDespachanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDespachanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
