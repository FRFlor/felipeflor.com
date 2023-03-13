class DataNode<T> {
    public data: any
    public next: DataNode<T> | null = null
    public previous: DataNode<T> | null = null

    constructor(data: T) {
        this.data = data
    }
}

export class LinkedList<T> {
    public head: DataNode<T> | null = null
    public tail: DataNode<T> | null = null
    public size = 0

    addNode(data: T) {
        const newNode = new DataNode(data)
        this.size++

        if (this.head === null || this.tail === null) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
    }

    deleteHeadNode() {
        if (this.head === null) {
            return
        }
        this.size--

        const newHead = this.head.next
        if (newHead === null) {
            this.head = null
            this.tail = null
            return
        }

        newHead.previous = null
        this.head = newHead
    }

    transverse(callback: (data: T, index?: number) => void) {
        let currentNode: DataNode<T> | null = this.head

        if (currentNode === null) {
            return
        }

        let index = 0

        do {
            callback(currentNode.data, index)
            currentNode = currentNode.next
            index++
        } while (currentNode !== null)
    }
}
