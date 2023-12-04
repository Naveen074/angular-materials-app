import { Component } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {
public count:number = 0;

constructor(private utility:DesignUtilityService){
  
}
  add(){
    this.count++;
    this.utility.cartCount.next(this.count);
  }
  remove(){
    this.count--;
    this.utility.cartCount.next(this.count);
  }
}
