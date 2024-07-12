import { Injectable } from '@angular/core';


enum Status {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED'
}

interface Reservation {
  id?: number;
  startTime: string; // LocalDateTime is serialized as ISO string
  endTime: string; // LocalDateTime is serialized as ISO string
  meetLink: string;
  status: Status;
  student: { id: number; name?: string }; // Assuming User has at least an id and optionally a name
  teacher: { id: number; name?: string }; // Assuming User has at least an id and optionally a name
  course: { id: number; title?: string }; // Assuming Course has at least an id and optionally a title
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8089/reservations'; // Adjust the base URL as needed

  getAllReservations() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  getReservationById(id: Reservation) {
    return fetch(`${this.baseUrl}/${id}`).then(response => response.json());
  }

  createReservation(reservation: Reservation) {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    }).then(response => response.json());
  }

  updateReservation(id: number, reservationDetails: Reservation) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationDetails),
    }).then(response => response.json());
  }

  deleteReservation(id: Reservation) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => response.ok);
  }
}