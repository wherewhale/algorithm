#include <stdio.h>

int main() {
  // 입력
  int x;
  int n;
  scanf("%d %d", &x, &n);

  // 계산
  int total = 0;
  for (int i = 0; i < n; i++) {
    int a, b;
    scanf("%d %d", &a, &b);
    total += a * b;
  }

  // 출력
  if (total == x) {
    printf("Yes");
  } else {
    printf("No");
  }

  return 0;
}
