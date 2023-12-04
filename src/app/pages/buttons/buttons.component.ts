import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit,OnDestroy {

  constructor(private utility:DesignUtilityService){}

  ngOnInit(){
    this.utility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.utility.exclusive.next(false);
  }
}
