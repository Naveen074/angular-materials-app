import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { FormRecord, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicColorComponent } from './pages/dynamic-color/dynamic-color.component';
import { ElevationComponent } from './pages/elevation/elevation.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { SimpleDialogComponent } from './pages/dialog/simple-dialog/simple-dialog.component';
import { ScrollDialogComponent } from './pages/dialog/scroll-dialog/scroll-dialog.component';
import { DataDialogComponent } from './pages/dialog/data-dialog/data-dialog.component';
import { CardComponent } from './pages/card/card.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { DesignUtilityModule } from './appModules/design-utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    DynamicColorComponent,
    ElevationComponent,
    RippleComponent,
    MenuComponent,
    BadgesComponent,
    DialogComponent,
    SimpleDialogComponent,
    ScrollDialogComponent,
    DataDialogComponent,
    CardComponent,
    TooltipComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignUtilityModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
