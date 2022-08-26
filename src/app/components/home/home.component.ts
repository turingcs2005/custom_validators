import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidatorsService } from 'src/app/services/custom-validators.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  intakeForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private cv: CustomValidatorsService
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.fb.group({
      state: ['', [this.cv.validateState]],
      city: ['', [], [this.cv.validateCity]]
    })
  }

  onSubmit() {
    console.log('Form submitted to database!');
  }

}
