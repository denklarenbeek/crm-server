import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {

    @Input() isCollapsed: boolean;

    @Output()
    change: EventEmitter<boolean> = new EventEmitter();

    collapseSideBar() {
        this.isCollapsed = true;
        this.change.emit(this.isCollapsed);
    }
}