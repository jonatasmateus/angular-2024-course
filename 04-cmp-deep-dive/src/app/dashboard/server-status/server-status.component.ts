import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; // Literal Values in use
  private interval?: ReturnType<typeof setInterval>; // Store the interval property ID

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
