const UTF_8 = 'utf-8';

export class MessagePayload {
    constructor(data) {
        this.data = data;
    }

    static fromBuffer(buffer) {
        return JSON.parse(buffer.toString(UTF_8));
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this), UTF_8)
    }
}