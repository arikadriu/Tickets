import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ticket-edit-panel',
  templateUrl: './ticket-edit-panel.component.html',
  styleUrls: ['./ticket-edit-panel.component.scss'],
})
export class TicketEditPanelComponent implements OnInit {
  ticketForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ticketForm = this.formBuilder.group({
      status: ['Unpaid', Validators.required],
      assignee: ['', Validators.required],
      coOwner: ['', Validators.required],
      importance: ['', Validators.required],
      customer: ['', Validators.required],
      invoiceId: ['', Validators.required],
    });
  }
}
