import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primng
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';

//components
import { MenuComponent } from './components/menu/menu.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuBarComponent,
    PanelMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    BrowserAnimationsModule,
    PanelMenuModule,
    MenuModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
