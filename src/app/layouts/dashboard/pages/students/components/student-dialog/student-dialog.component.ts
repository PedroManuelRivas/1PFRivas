import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {
  studentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<StudentDialogComponent>) {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  // Logica boton guardar
  saveFormData(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value)
    }
  }
}
