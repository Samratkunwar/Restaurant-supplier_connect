import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavMenuPageRoutingModule } from './nav-menu-routing.module';

import { NavMenuPage } from './nav-menu.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavMenuPageRoutingModule
  ],
  declarations: [NavMenuPage ],
  entryComponents: []
})
export class NavMenuPageModule {}
