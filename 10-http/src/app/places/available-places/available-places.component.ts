import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places', {
        observe: 'response'
      }) // when we add this property, we change the response as *data* to a response as *object*, which can have body, headers, etc.
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log(response.body?.places);
        },
      });
  }
}
