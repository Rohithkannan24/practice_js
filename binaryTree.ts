class TreeN<T> {
    constructor(
        public data: T,
        public left: TreeN<T> | null = null,
        public right: TreeN<T> | null = null
    ) {}
}

class BinaryTree<T> {
    constructor(public root: TreeN<T> | null = null) {}

    add(data: T): void {
        if (!this.root) {
            this.root = new TreeN(data);
            return;
        }
        this.addNode(data, this.root);
    }

    private addNode(data: T, node: TreeN<T>): void {
        const queue: TreeN<T>[] = [node];
        
        while (queue.length > 0) {
            const current = queue.shift()!;
            
            if (!current.left) {
                current.left = new TreeN(data);
                return;
            } else {
                queue.push(current.left);
            }
            
            if (!current.right) {
                current.right = new TreeN(data);
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    display(node: TreeN<T> | null = this.root, depth: number = 0): void {
        if (!node) {
            console.log("Binary Tree is Empty");
            return;
        }

        //console.log(" ".repeat(depth * 4), node.data);

        if (node.left) this.display(node.left, depth + 1);
        if (node.right) this.display(node.right, depth + 1);
    }

    remove(data: T): boolean|undefined {
        if (!this.root) return false;
        
        if (this.root.data === data) {
            this.root = null;
            return true;
        }
    }
}
let binaryTree=new BinaryTree();
binaryTree.add(5);
binaryTree.add(1);
binaryTree.add(2);
binaryTree.add(3);
binaryTree.add(4);
binaryTree.add(5);
binaryTree.display();
binaryTree.remove(4);
binaryTree.display();
