const a = [] === []
const b = [] == []
const c = [1, 2, 3] === [1, 2, 3]
const d = [1, 8, 5] === [1, 2, 3]

const check = () => {
  if (a && b && d) {
    return 'all passed'
  }
  if (a || b || c) {
    return 'some passed'
  }
  return 'fail'
}

console.log(check());
