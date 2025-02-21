import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterLink,CommonModule, ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule,MatIconModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{ 
  Obj:FormGroup=new FormGroup({
      id:new FormControl(""),
      title: new FormControl("",[Validators.required,Validators.minLength(6)]),
      content: new FormControl("",[Validators.required,Validators.minLength(15),Validators.maxLength(100)])
    })
  
    constructor(private service:ServiceService,private rout:Router, private activerout:ActivatedRoute){}

    ngOnInit(): void {
      let id:number=this.activerout.snapshot.params["id"]
      this.service.selectdata(id).subscribe((dt)=>{
        this.Obj.patchValue(dt)
        
      })
    }
    updata()
    {
    console.log(this.Obj)
      this.service.update(this.Obj.value.id,this.Obj.value).subscribe(dt=>{
      
        this.rout.navigate([""])
      })
    }
    }
