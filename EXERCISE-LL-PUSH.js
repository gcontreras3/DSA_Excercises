// WRITE NODE CLASS HERE //
//                       //
//                       //
//                       //
//                       //
///////////////////////////

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode,
        this.tail = this.head,
        this.length = 1
    }
	// WRITE LL CONSTRUCTOR HERE //
	//                           //
	//                           //
	//                           //
	//                           //
	///////////////////////////////

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    // PUSH METHOD

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!ths.head) return undefined // When we have 0 items in our linked list
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = this.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }
    

}


function test() {
    let myLinkedList = new LinkedList(7);
    myLinkedList.push(4)
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/