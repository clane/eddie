import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { TooltipComponent, AccordionComponent, AlertComponent, ModalOpenButton, ModalDialog, ComboBox, LoopbackComponent, ListBoxComponent, WidgetDemoComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ TooltipComponent, AccordionComponent, AlertComponent, ModalOpenButton, ModalDialog, ComboBox, ListBoxComponent, LoopbackComponent, WidgetDemoComponent],
  bootstrap: [ WidgetDemoComponent]
})
export class AppModule { }
