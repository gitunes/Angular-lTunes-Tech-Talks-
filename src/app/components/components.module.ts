import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NatificationComponent } from './natification/natification.component';



@NgModule({
  declarations: [HeaderComponent, NatificationComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class ComponentsModule { }
