import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Student } from './student.model';


export class InMemoryWebApiService implements InMemoryDbService {
  createDb() {
    const students: Student[] = [
      { id: 1, name: 'Ronak ', email: 'Ronak@gmail.com ', subject: 'Scince  ', dateOfBirth: new Date('1999-1-13') },
      { id: 2, name: 'Sahbaz', email: 'Sahbaz@gmail.com', subject: 'Maths   ', dateOfBirth: new Date('1998-2-14') },
      { id: 3, name: 'Tina  ', email: 'Tina@gmail.com  ', subject: 'Gujarati', dateOfBirth: new Date('1997-3-15') },
      { id: 4, name: 'Sonal ', email: 'Sonal@gmail.com ', subject: 'Hindi   ', dateOfBirth: new Date('1996-4-16') }
    ];
    return { students };
  }

}
