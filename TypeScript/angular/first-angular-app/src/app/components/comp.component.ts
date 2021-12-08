import { Component, Input } from '@angular/core';
@Component({ 
	selector: 'app-comp', 
	template: 
        `<div [style.background-color] = data.color [ngClass]="{subContainer: true}">
            <h1> {{ data.title }} Component</h1>
        </div>`
        , 
	styleUrls: ['./comp.component.css']
})
export class CompComponent { 
    @Input() data: any;
    constructor(){};
}   