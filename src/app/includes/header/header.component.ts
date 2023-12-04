import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartCount: any = '';
  exclusive:boolean = false;

  constructor(private utility: DesignUtilityService) {
    this.utility.cartCount.subscribe((res) => {
      this.cartCount = res;
    })
  }

  ngOnInit(){
this.utility.exclusive.subscribe((res)=>{
this.exclusive = res;
})
  }

  Onlogout() {
    const data = {
      title: 'Log Out?',
      text: 'Do you want to log out?'
    }
    this.utility.promptDialog(data).subscribe((res) => {
      console.log(res)
    })
  }
}
