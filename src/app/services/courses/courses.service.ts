import { Injectable } from '@angular/core';

type Course = {
  id?: number;
  title: string;
  description: string;
  teacherName: string;
  startTime: string; // LocalDateTime is serialized as ISO string
  endTime: string; // LocalDateTime is serialized as ISO string
  teacher?: { id: number; name?: string }; // Assuming User has at least an id and optionally a name
};
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = 'http://localhost:8089/courses'; // Adjust the base URL as needed

  constructor() {}

  async getAllCourses(): Promise<any[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return [];
    }
  }

  async getCourseById(id: number): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }

  async createCourse(course: Course): Promise<any> {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }

  async updateCourse(id: number, courseDetails: Course): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseDetails),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    }
  }

  async deleteCourse(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.status === 204; // No Content
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return false;
    }
  }
}
