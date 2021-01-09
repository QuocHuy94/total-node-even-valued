const readlỉne = require("readline-sync");

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new TreeNode(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new TreeNode(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}

let arr = readlỉne.question("Nhap mang so nguyen: ");

try {
    if(JSON.parse(arr)) {
        arr = JSON.parse(arr)
    }
}
catch(err) {
    arr = `[${arr}]`;
    arr = JSON.parse(arr);
}

let tree = new TreeNode(arr[0]);

tree.insert(arr.slice(1, arr.length));

function sumEvenGrandparent(root) {
  let total = 0;

  function dfs(node) {
    if (!node) return;

    if (node.value % 2 === 0) {
      if (node.left) {
        total +=
          ((node.left.left && node.left.left.value) || 0) +
          ((node.left.right && node.left.right.value) || 0);
      }
      if (node.right) {
        total +=
          ((node.right.left && node.right.left.value) || 0) +
          ((node.right.right && node.right.right.value) || 0);
      }
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return total;
}

let sum = sumEvenGrandparent(tree);

console.log(`Tổng là ${sum}`);
