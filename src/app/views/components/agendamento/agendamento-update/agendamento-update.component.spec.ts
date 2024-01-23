import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoUpdateComponent } from './agendamento-update.component';

describe('AgendamentoUpdateComponent', () => {
  let component: AgendamentoUpdateComponent;
  let fixture: ComponentFixture<AgendamentoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoUpdateComponent]
    });
    fixture = TestBed.createComponent(AgendamentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
