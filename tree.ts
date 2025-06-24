/*class Tree<T>{
    constructor(public value:T,
                public Children:Tree<T>[]=[]){}
}

const root= new Tree<string>('Rohi');
let child1= new Tree<string>('child1');
let child2= new Tree<string>('child2');
let grandC= new Tree<string>('Gc');

root.Children.push(child1,child2);
child1.Children.push(grandC);

console.log(root);*/


class TreeNode<T> {
    data: T;
    children: TreeNode<T>[];

    constructor(data: T) {
        this.data = data;
        this.children = [];
    }
}

class Tree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    add(data: T, parentData: T | null = null): void {
        const node = new TreeNode(data);

        if (!this.root) {
            this.root = node;
            return;
        }

        if (parentData === null) {
            console.log("Parent data must be provided for non-root nodes");
            return;
        }

        const parentNode = this.findNode(parentData, this.root);

        if (!parentNode) {
            console.log("Parent node not found");
            return;
        }

        parentNode.children.push(node);
    }

    private findNode(data: T, node: TreeNode<T>): TreeNode<T> | null {
        if (node.data === data) {
            return node;
        }

        for (const child of node.children) {
            const nodeFound = this.findNode(data, child);
            if (nodeFound) return nodeFound;
        }

        return null;
    }

    remove(data: T): void {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }

        if (this.root.data === data) {
            this.root = null;
            return;
        }

        const parentNode = this.findParentNode(data, this.root);

        if (parentNode) {
            parentNode.children = parentNode.children.filter(child => child.data !== data);
            return;
        }

        console.log("Node not found");
    }

    private findParentNode(data: T, node: TreeNode<T>): TreeNode<T> | null {
        for (const child of node.children) {
            if (child.data === data) {
                return node;
            }
            const nodeFound = this.findParentNode(data, child);
            if (nodeFound) return nodeFound;
        }

        return null;
    }
}

// Example usage
const tree = new Tree<number | string>();
tree.add(1);
tree.add(2, 1);
tree.add(3, 1);
tree.add('a', 1);
tree.add(4, 2);
tree.add(5, 2);
tree.add(6, 3);
tree.add(7, 3);
console.log(tree);
tree.remove('a');
console.log(tree);
