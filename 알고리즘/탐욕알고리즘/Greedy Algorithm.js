// 탐욕알고리즘(Greedy Algorithm) 매 순간 최적 해를 선택하면서 최종적으로 최적해에 도달하는 알고리즘 설계 기법

/* top-down 재귀를 통해 큰 문제를 작은 문제로 나눠 해결하며 해를 찾는 방법*/
function fibo_td(n, d = []) {
  if (n < 2) return n;
  if (d[n]) return d[n];

  d[n] = fibo_td(n - 1) + fibo_td(n - 2);

  return d[n];
}

console.log(fibo_td(5));
console.log(fibo_td(6));
console.log(fibo_td(7));

/* bottom-up 반복문을 통해 작은 문제부터 차례대로 해를 찾는 방법*/
function fibo_bu(n, d = []) {
  d[0] = 0;
  d[1] = 1;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }

  return d[n];
}

console.log(fibo_bu(5));
console.log(fibo_bu(6));
console.log(fibo_bu(7));
