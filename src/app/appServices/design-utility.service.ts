import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';
import { PromptComponent } from '../includes/utilities/popups/prompt/prompt.component';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  cartCount = new BehaviorSubject<number>(0)

  constructor(public dialog: MatDialog) { }

promptDialog(promptData){
 const dialogRef = this.dialog.open(PromptComponent,{
    data:promptData
  })

 return dialogRef.afterClosed();
}

}
