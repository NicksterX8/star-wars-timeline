import { ItemNode } from "./itemNode"

class Item {
    title: string;
    medium?: string;
    canontype?: string;

    nodes: ItemNode[] = [];

    id: number;

    constructor(title: string, id: number, medium?: string, canontype?: string) {
        this.title = title;
        this.medium = medium;
        this.canontype = canontype;

        this.id = id;
    }

    createNode(position?: number, date?: number, publication?: Date) {
        let newNode = new ItemNode(position, date, publication);
        this.nodes.push(newNode)
    }

    baseNode() {
        if (this.nodes[0]) {
            return this.nodes[0]
        }
        return new ItemNode()
    }
}

export { Item };