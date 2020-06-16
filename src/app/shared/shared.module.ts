import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocLayoutComponent } from './layout/doc-layout/doc-layout.component';
import { MessageComponent } from './components/message/message.component';
import { BaseCardComponent } from "./components/base-card/base-card.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DocLayoutComponent, MessageComponent, BaseCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, MessageComponent, BaseCardComponent]
})
export class SharedModule { }
