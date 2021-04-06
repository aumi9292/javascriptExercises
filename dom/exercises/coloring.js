
// Given a positive integer that represents an id of an element, apply a class "generation-color" to all element nodes that are at the same level of indentation of the dom tree

function walk(node, cb) {
  cb(node);
  for (let idx = 0; idx < node.children.length; idx++) {
    walk(node.children[idx], cb);
  }
}

function getNestLevel(nodeId) {
  let selected = document.getElementById(String(nodeId));
  let level = 1;
  while (selected && selected.parentNode.nodeName !== 'BODY') {
    level += 1;
    selected = selected.parentNode;
  }
  return level;
}

function colorGeneration(specifiedLevel) {
  let evenLevelNodes = [];
  walk(document.body, (node) => {
    if (node.nodeName !== 'BODY' && specifiedLevel === getNestLevel(node.id)) {
      evenLevelNodes.push(node);
    }
  });
  evenLevelNodes.forEach(node => {
    node.classList.add('generation-color');
  }) 
  return evenLevelNodes;
}

console.log(colorGeneration(0));


// function walk(node, cb) {
//   cb(node);
//   for (let idx = 0; idx < node.children.length; idx++) {
//     walk(node.children[idx], cb);
//   }
// }
// function getNestLevel(nodeId) {
//   let selected = document.getElementById(String(nodeId));
//   let level = 0;
//   while (selected && selected.parentNode.nodeName !== 'BODY') {
//     level += 1;
//     selected = selected.parentNode;
//   }
//   return level;
// }

// function colorGeneration(nodeId) {
//   let specifiedLevel = getNestLevel(nodeId);
//   let evenLevelNodes = [];
//   walk(document.body, (node) => {
//     if (node.nodeName !== 'BODY' && specifiedLevel === getNestLevel(node.id)) {
//       evenLevelNodes.push(node);
//     }
//   });
//   evenLevelNodes.forEach(node => {
//     node.classList.add('generation-color');
//   }) 
//   return evenLevelNodes
// }