import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MessageService } from '../../services/messageService.service';


@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css']
})

export class MessageComponent implements OnInit {
    messages = [];

    constructor(private messageService: MessageService){
        console.log('Messagebar is initialized......')
    }

    ngOnInit(){
        this.messages = this.messageService.message
    }

    removeMessage(msgText){
        let objectId: any;
        for(let i=0; i < this.messages.length; i++){
            if(this.messages[i].text === msgText){
                objectId = i;
                break;
            };
        };
        this.messages.splice(objectId,1);
    }

}