import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss']
})
export class DataDialogComponent implements OnInit{
animal = '';
constructor(@Inject(MAT_DIALOG_DATA) public data){}

ngOnInit(): void {
  
}

}
