import { Component, input } from "@angular/core";

@Component({
    selector: 'kk-button',
    templateUrl: 'button.component.html',
    styleUrl: 'button.component.less'
})
export class ButtonComponent{
    public colorClass = input<'primary' | 'primary-light' | 'primary-dark'>('primary');
}