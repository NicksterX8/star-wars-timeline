
export class ItemNode {

    position?: number;
    date?: number;
    publication?: Date;

    constructor(position?: number, date?: number, publication?: Date) {
        this.position = position;
        this.date = date;
        this.publication = publication;
    }
}

