import {LinkedList} from "@/classes/LinkedList"

let linkedList: LinkedList<string>

describe("LinkedList", () => {
    beforeEach(() => {
        linkedList = new LinkedList()
        linkedList.addNode("First Node")
        linkedList.addNode("Second Node")
        linkedList.addNode("Last Node")
    })

    it("adds the initial node as the head and tail", () => {
        linkedList = new LinkedList()
        linkedList.addNode("Only Node")

        expect(linkedList.head!.data).toEqual("Only Node")
        expect(linkedList.tail).toBe(linkedList.head)
    })

    it("knows its size", () => {
        expect(linkedList.size).toEqual(3)
    })

    it("keeps track of all added values", () => {
        expect(linkedList.head!.data).toEqual("First Node")
        expect(linkedList.head!.next!.data).toEqual("Second Node")
        expect(linkedList.head!.next!.next!.data).toEqual("Last Node")
        expect(linkedList.head!.next!.next).toBe(linkedList.tail)
    })

    it("can delete values from the head", () => {
        linkedList.deleteHeadNode()

        expect(linkedList.head!.data).toEqual("Second Node")
        expect(linkedList.size).toEqual(2)
    })

    it("allows an action to be performed over all elements of the list", () => {
        const elements: string[] = []
        linkedList.transverse((data) => {
            elements.push(data)
        })

        expect(elements).toEqual(["First Node", "Second Node", "Last Node"])
    })
})
