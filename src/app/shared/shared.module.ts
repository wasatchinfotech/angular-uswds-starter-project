import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocLayoutComponent } from './layout/doc-layout/doc-layout.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DocLayoutComponent, MessageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, MessageComponent]
})
export class SharedModule { }
