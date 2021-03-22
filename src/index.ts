export type Message = {
    from: string,
    to: string,
    subject: string,
    message: string
};

export class SendMessage {
    private message: Message;
    constructor(message: Message) {
        this.message = message;
    }
    sendMessage = () => {
        console.log(`sending message: ${JSON.stringify(this.message, null, 2)}`);
    }

}

