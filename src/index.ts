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
    getMessage2Send = (): string => {
        return(`message 2 send: ${JSON.stringify(this.message, null, 2)}`);
    }

}

