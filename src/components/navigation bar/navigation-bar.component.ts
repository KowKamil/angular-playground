import { Component, inject, input } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
import { Router } from "@angular/router";

@Component({
    selector: 'kk-navigation-bar',
    templateUrl: 'navigation-bar.component.html',
    styleUrl: 'navigation-bar.component.less',
    imports: [ButtonComponent]
})
export class NavigationBarComponent {
    private readonly router = inject(Router);

    public tabs = input<{ label: string, route: string }[]>([]);

    public navigateTo(route: string) {
        this.router.navigate([route]);
    }

}