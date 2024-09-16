import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();

  // output function is the same as output decorator, and doesn't create any kind of signal
  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.id);
  }
}
