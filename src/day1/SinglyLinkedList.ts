interface Node<T> {
    value: T;
    next: Node<T> | null;
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = this.tail = null;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node: Node<T> = { value: item, next: null };
        this.length++;
        // check if the head is null
        if (this.head === null || this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        } else {
            const lastNode = this.tail;
            lastNode.next = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        return undefined;
    }
    get(idx: number): T | undefined {
        let i = 0;
        let tempNode: Node<T> | null = null;
        while (i <= idx) {
            if (!tempNode) {
                tempNode = this.head;
            } else {
                tempNode = tempNode.next;
            }
            i++;
        }
        return tempNode?.value;
    }
    removeAt(idx: number): T | undefined {
        let tempNode: Node<T> | null = this.head;
        if (idx === 0 && tempNode) {
            this.head = tempNode.next;
            // remove the variable tempNode
            tempNode.next = null;
            this.length--;
            return tempNode.value;
        }
        let i = 0;
        while (i < idx - 1 && tempNode) {
            tempNode = tempNode.next;
            i++;
        }
        // in middle case
        if (tempNode?.next) {
            const nodeToDelete = tempNode.next;
            tempNode.next = tempNode.next?.next;
            nodeToDelete.next = null;
            if (!tempNode.next?.next) {
                this.tail = tempNode.next;
            }
            this.length--;
            return nodeToDelete.value;
        }
        return;
    }
}
