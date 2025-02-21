import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule, CommonModule, MatInputModule, MatFormFieldModule,MatButtonModule, MatIconModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  Obj:FormGroup=new FormGroup({
    title: new FormControl("",[Validators.required,Validators.minLength(6)]),
    content: new FormControl("",[Validators.required,Validators.minLength(15),Validators.maxLength(100)])
  })

  constructor(private service:ServiceService,private rout:Router){}

submit()
{
  this.service.add(this.Obj.value).subscribe(dt=>{
    this.rout.navigate([""])
  })
}
}
