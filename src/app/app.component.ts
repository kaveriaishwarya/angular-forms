import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AngularForm';
  defaultCountry='India'
  firstname:string
  lastname:string
  email:string = ''
  gen:string
  country:string
  @ViewChild('myForm') form : NgForm;
  defaultGender='Male'

  gender=[
    {id:1,value:'Male'},
    {id:2,value:'Female'},
    {id:3,value:'Others'}
  ]

  onSubmit() {
    console.log(this.form)
    this.email = this.form.value.personalDetails.email;
    this.firstname = this.form.value.personalDetails.firstname;
    this.lastname = this.form.value.personalDetails.lastname;
    this.gen = this.form.value.gender;
    this.country=this.form.value.country;
    this.form.reset();
  }
  Setdefault(){
    // this.form.value.personalDetails.firstname = 'john'
    // this.form.value.personalDetails.lastname = 'bosco'
    // this.form.value.personalDetails.email = 'john@gmail.com'

    // this.form.setValue({
    //   country:'',
    //   gender:'', 
    //   hobbies:'',
    // personalDetails: {firstname: 'john', lastname: 'bosco', email: 'john@gmail.com'}
    // })

    this.form.form.patchValue({
      personalDetails: {firstname: 'john', lastname: 'bosco', email: 'john@gmail.com'}
    
    })
  }
  
}
