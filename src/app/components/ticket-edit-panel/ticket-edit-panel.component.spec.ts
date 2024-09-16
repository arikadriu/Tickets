import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditPanelComponent } from './ticket-edit-panel.component';

describe('TicketEditPanelComponent', () => {
  let component: TicketEditPanelComponent;
  let fixture: ComponentFixture<TicketEditPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketEditPanelComponent]
    });
    fixture = TestBed.createComponent(TicketEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
