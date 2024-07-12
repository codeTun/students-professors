import { Injectable } from '@angular/core';

type registerRequest = {
  username: string;
  email: string;
  password: string;
  role: string;
};

type loginRequest = {
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8089/api/auth'; // Adjust the base URL as needed

  constructor() {}

  async login(loginData: loginRequest): Promise<any> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  }
}
