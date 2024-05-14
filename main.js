function Dijikstra(graph,start,end){
    let distances = {}, previous ={},unvisited= new Set();
    for (let node in graph){
        distances [node]= node ===start? 0:Infinity;
        unvisited.add(node);
    }

 while(unvisited.size){
    let closestNOde = null;
    for (let node of unvisited){
        if(!closestNOde || distances[node]< distances[closestNOde]){
            closestNOde = node;
        }
    }
  if (distances[closestNOde]=== Infinity)break;
  if(closestNOde === end)break;
  for(let neighbor in graph[closestNOde]){
    let newDistance = distances[closestNOde] + graph[closestNOde][neighbor];
    if (newDistance < distances[neighbor]){
        distances[neighbor] = newDistance;
        previous[neighbor] = closestNOde; 
    }
  }
  unvisited.delete(closestNOde);
 }

 let path = [],node = end;
 while(node){
    path.push(node);
    node = previous(node)
 }
 return path.reverse();
}