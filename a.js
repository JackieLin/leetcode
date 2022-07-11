const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 6,
      },
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5
  },
}
const treePre = JSON.parse(JSON.stringify(tree));

function preOrder(treeNode) {
  console.log(treeNode.val, '--->');
  if (treeNode.left) {
    preOrder(treeNode.left);
  }
  if (treeNode.right) {
    preOrder(treeNode.right);
  }
}
console.log('前序遍历');
preOrder(treePre);

const treeIn = JSON.parse(JSON.stringify(tree));

function inOrder(treeNode) {
  if (treeNode.left) {
    inOrder(treeNode.left);
  }
  console.log(treeNode.val + '--->');
  if (treeNode.right) {
    inOrder(treeNode.right);
  }
}

console.log('中序遍历');
inOrder(treeIn);

const treePost = JSON.parse(JSON.stringify(tree));

function postOrder(treeNode) {
  if (treeNode.left) {
    postOrder(treeNode.left);
  }  

  if (treeNode.right) {
    postOrder(treeNode.right);
  }  

  console.log(treeNode.val + '--->');
}

console.log('后序遍历');
postOrder(treePost);


function dfs() {
  // 前面三种都是
}

const treeBfs = JSON.parse(JSON.stringify(tree));

function bfs() {
  const queue = [treeBfs];
  
  while(queue.length) {
    const item = queue.shift();
    console.log(item.val, '--->');
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }
}

bfs();


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const root = preorder[0];
  const index = inorder.indexOf(root);
  const inorderLeft = inorder.slice(0, index + 1);
  const inorderRight = inorder.slice(index + 1);
  const preOrderLeft = preorder.slice(1, index + 1);
  const preOrderRight = preorder.slice(index + 1);
  console.log(index, inorderLeft, inorderRight, preOrderLeft, preOrderRight);
  const treeNode = new TreeNode(root);
  // console.log(inorderLeft, inorderRight);
  // console.log(preOrderLeft, preOrderRight);
  // console.log('==')
  treeNode.left = buildTree(preOrderLeft, inorderLeft);
  treeNode.right = buildTree(preOrderRight, inorderRight);

  return treeNode;
};

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, postorder) {
  if (!preorder.length || !postOrder.length) return null;
  const root = preorder[0];
  const index = inorder.indexOf(root);
  const inorderLeft = inorder.slice(0, index + 1);
  const inorderRight = inorder.slice(index + 1);
  const preOrderLeft = preorder.slice(1, index + 1);
  const preOrderRight = preorder.slice(index + 1);
  console.log(index, inorderLeft, inorderRight, preOrderLeft, preOrderRight);
  const treeNode = new TreeNode(root);
  // console.log(inorderLeft, inorderRight);
  // console.log(preOrderLeft, preOrderRight);
  // console.log('==')
  treeNode.left = buildTree(preOrderLeft, inorderLeft);
  treeNode.right = buildTree(preOrderRight, inorderRight);

  return treeNode;
};

function debounce(factory, time) {
  let timeId;
  return function() {
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      factory();
    }, time);
  }
}

function throttle(factory, time) {
  let lastTime;
  return function(...rest) {
    if (!lastTime || new Date().getTime() - lastTime > time) {
      factory(...rest);
      lastTime = new Date().getTime();
    }   
  }
}

function curry(fn, args) {
  const length = fn.length;
  const args = args || []
  return function(...rest) {
    const arg = args.concat([], args, rest);
    if (arg.length < length) {
      return curry(fn, arg);
    } else {
      fn.apply(this, arg);
    }
  }
}