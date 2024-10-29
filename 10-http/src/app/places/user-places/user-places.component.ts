import { Component, inject, signal } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);

  ngOnInit() {
    this.isFetching.set(true);
    this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((resData) => resData.places),
        catchError((err) => {
          console.log(err);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching the available places. Please try again later.'
              )
          )}
        ) // alt. to error property to the subscribe() method.
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error: (err: Error) => {
          this.error.set(err.message);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });
  }
}
