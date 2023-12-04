import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { DynamicColorComponent } from './pages/dynamic-color/dynamic-color.component';
import { ElevationComponent } from './pages/elevation/elevation.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { CardComponent } from './pages/card/card.component';
import { TooltipComponent } from '@angular/material/tooltip';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'buttonToggle',
    component: ButtonToggleComponent
  },
  {
    path: 'dyColor',
    component: DynamicColorComponent
  },
  {
    path: 'elevation',
    component: ElevationComponent
  },
  {
    path: 'ripple',
    component: RippleComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
