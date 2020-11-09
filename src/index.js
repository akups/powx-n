// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

// Input: x = 2.00000, n = 10
// Output: 1024.00000

const pow = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result = result * x;
  }
  // We do something if n > 1

  return result;
};
// pow(3, 3) = 3 * 3 * 3 = 27
const test = () => {
  if (pow(2, 10) === 1024) {
    console.log("Passed 1st.");
  } else {
    console.log("Failed.");
  }
  if (pow(3, 3) === 27) {
    console.log("Passed 2nd.");
  }
};

test();
