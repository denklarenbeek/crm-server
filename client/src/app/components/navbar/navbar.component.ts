import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    dropdown: boolean = false;

    @Input() isCollapsed: boolean;

    @Output()
    change: EventEmitter<boolean> = new EventEmitter();

    collapseSideBar() {
        this.isCollapsed = false;
        this.change.emit(this.isCollapsed);
    }

    showDropdown() {
        this.dropdown = !this.dropdown;
    }

}