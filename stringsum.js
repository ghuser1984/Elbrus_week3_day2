//given a string and an integer return string multyplied by integer

const repeatStr = function (n, str) {
  let res = '';
  for (let i = 1; i<=n; i++){
    res += str;
  }
  return res
}

module.exports = repeatStr
