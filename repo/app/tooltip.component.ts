import { Component, 
         AfterViewInit,
         Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'aria-tooltip',
    template: `
        <h2>Tooltip</h2>
        <p>Focus the following link to see the tooltip</p>
        <a 
            id="link" 
            (click)="toggle()" 
            (focus)="open()" 
            (blur)="close()" 
            (mouseover)="open()" 
            (mouseout)="close()" 
            href="#" 
            aria-describedby="tooltip" 
            (keyup.escape)="close()"
        >
        link with tooltip
        </a>
        <div 
            id="tooltip" 
            role="tooltip" 
            *ngIf="show" 
            [attr.aria-hidden]="ariaHidden"
        >
        lorem impsum dolar
        </div>
    `,
    styles: [`
       #tooltip { 
           padding:10px; 
           width:500px; 
           border-radius:10px;
           border:5px solid #000; 
           background-color:#fff; 
           position:relative; 
           top:-55px; 
           left:330px; 
           color:#000;
      }  
      #link { width:200px; }
    `],
})
export class TooltipComponent implements AfterViewInit {

    constructor(private titleService: Title){}
    show: boolean = false;
    ariaHidden: boolean = !this.show;
    //When show is true ariaHidden is false
    //bound with the attribute binding [attr.aria-hidden]="ariaHidden"

    open() {
        //show the tooltip
        this.show = true;
        this.ariaHidden = !this.show;
    }

    close() {
        //hide the tooltip
        this.show = false;
        this.ariaHidden = !this.show;
    }

    toggle() {
        //toggle the tooltip
        this.show = !this.show;
        this.ariaHidden = !this.show;
    }
    
    //For setting the document's Title from inside the component
    setTitle( newTitle: string) { this.titleService.setTitle(newTitle); }
    
    //After the module loads set the title
    ngAfterViewInit() { this.setTitle('Tooltip'); }

}

