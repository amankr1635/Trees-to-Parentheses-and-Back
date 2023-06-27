class Tree {}
class Leaf extends Tree {}
class Branch extends Tree {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
}

// === Function to convert a tree to parentheses representation ===

function treeToParens(tree) {
    if (!tree || !tree.left) return "";
    return "(" + treeToParens(tree.left) + ")" + treeToParens(tree.right);
  }

// === Function to convert parentheses representation to a tree ===

function parensToTree(string) {
  if (string == "") return new Leaf();
  let i = 0,val = 1;
  while (val) {
    i++;
    if (string[i] == "(") val++;
    else val--;
  }
  return new Branch(
    parensToTree(string.slice(1, i)),
    parensToTree(string.slice(i + 1))
  );
}

//===  Creating a tree ===

const tree = new Branch(
    new Leaf(),
    new Branch(
      new Leaf()
    )
  );
  
//=== Converting tree to parentheses representation ===

  const parensCreateFromTree = treeToParens(tree);
  console.log(parensCreateFromTree); 

//===  Converting parentheses representation to a tree ===

const string = "()(())";
const treeFromParens = parensToTree(string);
console.log(treeFromParens);