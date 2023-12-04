import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { ScrollDialogComponent } from './scroll-dialog/scroll-dialog.component';
import { DataDialogComponent } from './data-dialog/data-dialog.component';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public animal: string = '';
  public name: string = '';
  public promptResult: boolean = false;
  public promptTitle = '';
  public promptText = '';

  constructor(public dialog: MatDialog, private utility: DesignUtilityService) { }

  openDialog() {
    this.dialog.open(SimpleDialogComponent,{
      // width:'500px',
      // maxWidth:'600px',
      // minWidth:'600px',
      // height:'500px',
      // maxHeight:'300px',
      // minHeight:'100px',
      hasBackdrop: false,
      disableClose:true
    })
  }

  openScrollableDialog() {
    this.dialog.open(ScrollDialogComponent).afterClosed().subscribe((res) => {
      if (res) {
        console.log('This is scrollable Dialog')
      } else {
        console.log('Dialog closed')
      }
    })
  }

  openDialogData() {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      data: this.name
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.animal = res;
    })
  }

  promptDialog() {
    const data ={
      title:this.promptTitle,
      text:this.promptText
    }
   const dialogData = this.utility.promptDialog(data);
   dialogData.subscribe((res)=>{
    console.log(res)
    this.promptResult =res;
   })
  }
}
