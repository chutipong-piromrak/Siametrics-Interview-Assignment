var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; //Input Arry

function removeDuplicates(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
    j++;
  }
  return i + 1;
}

console.log(removeDuplicates(nums));
