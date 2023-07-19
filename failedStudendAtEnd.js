function failedStudentAtEnd(nums) {

    let start = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] >= 0) {

            result.splice(start, 0, nums[i]);
            start++;

        } else {

            result.push(nums[i]);

        }

    }

    return result;

}

let failedStudentAtEndResult = failedStudentAtEnd([1, -1, 3, 2, -7, -5, 11, 6]);

console.log(failedStudentAtEndResult);