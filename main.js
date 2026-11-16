function repeatAction(n, action) {
  for (let step = 1; step <= n; step++) {
    action(step);
  }
}

repeatAction(3, (step) => {
  console.log(`Шаг номер ${step}`);
});