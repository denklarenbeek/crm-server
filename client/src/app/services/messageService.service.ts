import { Injectable } from '@angular/core';

@Injectable()

export class MessageService {
    public message = [];

    constructor(){

    }

    addMessage(textMessage: string, msgStatus: string){
        this.message.push({text: textMessage, status: msgStatus})
    }
}

