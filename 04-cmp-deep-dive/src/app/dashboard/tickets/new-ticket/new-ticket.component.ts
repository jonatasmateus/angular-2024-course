import { Component, ElementRef, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string; text: string}>();

  onSubmit(title: string, text: string) {
    this.add.emit({ title: title, text: text });
    this.form().nativeElement.reset(); // nativeElement property is the way to have the same behavior as HTMLElement.
  }
}
