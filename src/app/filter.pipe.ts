import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student, searchValue: String): any {
    if (!students || !searchValue) {
      return students;
    }

    return students.filter((student: { name: string; city: string; state: string; pinCode:number; mobileNo:number }) => 
    student.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    student.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    student.state.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
    student.pinCode.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    student.mobileNo.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}
