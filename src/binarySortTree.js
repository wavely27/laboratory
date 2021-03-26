const arr = [9, 5, 4, 6, 2, 7, 1, 3, 8];

function Node(value) {
  this.value = value;
  this.parent = null;
  this.left = null;
  this.right = null;
  this.count = 0;
}

function BST(arr) {
  const self = this;
  this.root = null;
  this.deep = 0;
  this.size = 0;

  this.add = function (node) {
    let current = this.root;
    if (!current) {
      this.root = node;
    } else {
      while (current) {
        if (current.value === node.value) {
          current.count++;
        } else if (current.value > node.value) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            node.parent = current;
            current = null;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            node.parent = current;
            current = null;
          }
        }
      }
    }
    this.size++;
  };

  arr.forEach(function (number) {
    self.add(new Node(number));
  });

  this.preOrderTraversal = function () {
    function traversal(node) {
      console.log(node.value);
      node.left && traversal(node.left);
      node.right && traversal(node.right);
    }
    traversal(this.root);
  };

  this.inOrderTraversal = function () {
    function traversal(node) {
      node.left && traversal(node.left);
      console.log(node.value);
      node.right && traversal(node.right);
    }
    traversal(this.root);
  };

  this.postOrderTraversal = function () {
    function traversal(node) {
      node.left && traversal(node.left);
      node.right && traversal(node.right);
      console.log(node.value);
    }
    traversal(this.root);
  };

  this.levelOrderTraversal = function () {
    function traversal(node) {
      const queue = [];
      let index = 0;
      console.log(node.value);
      let curr = node;
      queue.push(node);
      while (curr) {
        let left = queue[index].left;
        let right = queue[index].right;
        if (left) {
          console.log(left.value);
          queue.push(left);
        }
        if (right) {
          console.log(right.value);
          queue.push(right);
        }
        curr = queue[++index];
      }
    }
    traversal(this.root);
  };

  this.invert = function () {
    const queue = [];
    let index = 0;
    queue.push(this.root);
    let curr = queue[index];
    while (curr) {
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      let temp = curr.left;
      curr.left = curr.right;
      curr.right = temp;
      curr = queue[++index];
    }
    console.log("queue", queue);
  };
}

const bst = new BST(arr);

console.dir(bst, { depth: 10 });
bst.invert();
console.dir(bst, { depth: 10 });
// bst.levelOrderTraversal()
