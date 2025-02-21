import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';
import { view } from '../interfaces/datatypes';
import { ServiceService } from '../service.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray,transferArrayItem, DragDropModule, CdkDropListGroup} from '@angular/cdk/drag-drop';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink,CommonModule, FormsModule, MatGridListModule,MatDividerModule,MatCardModule,MatButtonModule,
    CdkDropList, CdkDrag, DragDropModule,MatIcon,CdkDropListGroup],
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  array: view[] = [];   // To Do Container
  array2: view[] = []; // In Progress Container

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.view().subscribe(dt => {
      this.array = dt;
    });
  }

  remove(id:number)
  {
    let ch:boolean =confirm("Continue to remove product???");
      if(ch===true)
      {
        this.service.remove(id).subscribe((data) => {
          this.array = data;
        });
      }
      else
      {
        alert("Delete was cancelled!!");
      }
 }
  drop(event: CdkDragDrop<view[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
