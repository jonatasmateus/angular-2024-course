import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // it's possible to select more than one type by comma
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
