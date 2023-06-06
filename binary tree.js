function bstSearch(root, target) {
    if (root === null || root.val === target) {
      return root;
    }
  
    if (target < root.val) {
      return bstSearch(root.left, target)
    } else {
      return bstSearch(root.right, target)
    }
  }
  