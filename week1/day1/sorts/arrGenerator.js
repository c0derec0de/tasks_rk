export default function arrGenerator(n) {
  const randomArr = [];
  for (let i = 0; i < n; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1);
  }
  return randomArr;
}
