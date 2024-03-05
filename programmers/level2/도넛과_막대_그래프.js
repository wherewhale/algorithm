const isStartEdge = (edges) => {
  const prevs = [];
  const nexts = [];
  var startEdge = undefined;

  edges.forEach((i) => {
    prevs.push(i[0]);
    nexts.push(i[1]);
  });

  const complement = prevs.filter((x) => !nexts.includes(x));
  // 여기서 중복된 배열 요소 검열

  complement.forEach((x, index) => {
    if (complement.indexOf(x, index + 1) !== -1) {
      startEdge = x;
      return;
    }
  });
  return startEdge;
};

function solution(edges) {
  var answer = [];
  var graphStartEdges = []; // 시작 정점과 연결된 graph edge

  answer.push(isStartEdge(edges)); //시작점을 찾는 함수

  edges.forEach((x, index) => {
    if (x[0] === answer[0]) {
      graphStartEdges.push(x[1]);
      edges.splice(index, 1); //불필요한 간선 제외
    }
  });
  // 시작점과 관련된 간선 수, 정점 수 확인
  // 다시 돌아오거나 간선이 끝나는 경우
  // recursive function으로 구현

  // 간선이 끝나는 경우 -> stick 형 + 1
  // 다시 돌아오는 경우 -> 8자 or donut 형 + 1

  return answer;
}
