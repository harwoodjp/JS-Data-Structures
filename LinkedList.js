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
	get length() {
		return this.getLength();
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
	getNodeByValue(value) {
		let tmpHead = this.head;
		while(tmpHead) {
			if (tmpHead.value === value) {
				return tmpHead
			}
			tmpHead = tmpHead.link;
		}
	}
	printList(readable) {
		let tmpHead = this.head;
		while(tmpHead) {
			readable ? console.log(`Node(${tmpHead.value})`) : console.log(tmpHead)			
			tmpHead = tmpHead.link;
		}
	}	
	removeNodeByValue(value) {
		let tmpHead = this.head;
		while(tmpHead) {
			if (tmpHead.value === value) {
				if (tmpHead.link) {
					this.head = tmpHead.link;
				}
				else {
					this.head = null;
				}
			}

			if (tmpHead.link && (tmpHead.link.value === value)) {
				if (tmpHead.link.link) {
					tmpHead.link = tmpHead.link.link
				} else {
					tmpHead.link = null;
				}
			}
			tmpHead = tmpHead.link;
		}
	}
}

const node3 = new Node("end", null),
	node2 = new Node(false, node3),
	node1 = new Node(4354, node2),
	node0 = new Node("first/head", node1);

let list = new LinkedList();

list.head = node0;

list.printList(1);
list.removeNodeByValue("end");
console.log("\n");
list.printList(1);


