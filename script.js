function threeSum(arr, target) {
  // Sort the array to use the two-pointer approach
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDiff = Math.abs(currentSum - target);

      // Update closestSum if the current triplet is closer to the target
      if (currentDiff < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Adjust pointers based on the current sum
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
module.exports = threeSum;
