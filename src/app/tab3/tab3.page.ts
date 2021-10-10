import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ionicForm: FormGroup;
  isSubmitted = false;

  public usuarios = [];


  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      eyes: ['', [Validators.required, Validators.minLength(2)]],
      estatura: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      tez: ['', [Validators.required, Validators.minLength(2)]],
      cabello: ['', [Validators.required, Validators.minLength(2)]],
      complexion: ['', [Validators.required, Validators.minLength(2)]],
      particulares: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
}
