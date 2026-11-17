import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOverview() {
    return {
      name: 'Magang API',
      version: '0.1.0',
      modules: ['auth', 'users', 'students', 'teachers', 'attendance', 'reports', 'dashboard'],
      status: 'ok',
    };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
