function solution(edges) {
  var answer = [0, 0, 0, 0];
  var graph = 0;
  const edgeSet = new Set();

  edges.forEach((edge) => {
    edgeSet.add(edge[0]);
    edgeSet.add(edge[1]);
  });

  const inputs = Array.from({ length: edgeSet.size }, () => 0);
  const outputs = Array.from({ length: edgeSet.size }, () => 0);

  edges.forEach((edge) => {
    inputs[edge[1] - 1]++;
    outputs[edge[0] - 1]++;
  });

  outputs.forEach((output, index) => {
    if (output === 2 && inputs[index] !== 0) {
      answer[3]++;
    } else if (output === 0) {
      answer[2]++;
    }
  });

  inputs.forEach((input, index) => {
    if (input === 0 && outputs[index] >= 2) {
      answer[0] = index + 1;
      graph = outputs[index];
    }
  });

  answer[1] = graph - (answer[2] + answer[3]);

  return answer;
}
