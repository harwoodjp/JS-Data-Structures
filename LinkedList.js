class Node {
	constructor(value, link) {
		this.value = value;
		this.link = link;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	setHead(head) {
		this.head = head;
	}
	printList() {
		let tmpHead = this.head;
		while(tmpHead) {
			console.log(tmpHead)
			tmpHead = tmpHead.link;
		}
	}
	getLength() {
		let tmpHead = this.head;
		let length = 0;
		while (tmpHead) {
			length++;
			tmpHead = tmpHead.link;				
		}
		return length;
	}
}


const node3 = new Node(3, null),
	node2 = new Node(2, node3),
	node1 = new Node(1, node2),
	node0 = new Node(0, node1);

let list = new LinkedList();
list.setHead(node0);
list.printList();
//list.getLength();
