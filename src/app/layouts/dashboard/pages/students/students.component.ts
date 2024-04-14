import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'age', 'email', 'createdAt'];
  students: IStudent[] = [
    {
      id: 1,
      firstName: "Pedro",
      lastName: "Rivas",
      address: "Santo Domingo 1410",
      age: 36,
      email: "pedromanuelrivas@gmail.com",
      createdAt: new Date()
    },
    {
      id: 2,
      firstName: "Josefina",
      lastName: "Rondon",
      address: "Santo Domingo 1410",
      age: 36,
      email: "josefina@gmail.com",
      createdAt: new Date()
    }
  ]
  constructor(private matDialog: MatDialog) { }
  openDialog(): void {
    this.matDialog.open(StudentDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if(result) {
          this.students = [...this.students, result]
        }
      }
    })
  }
}
