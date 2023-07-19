var minimumCount = function (s) {

    let n = s.length - 1;
    let firstChar = s[0];
    let match = 0;
    let palindrome = true;

    for (let i = n; i >= 0; i--) {

        if (firstChar === s[i]) {

            let left = 0;
            let right = i;
            match = i;

            while ((right - left) > 1) {

                if (s[left] == s[right]) {

                    left++;
                    right--;
                    palindrome = true;

                } else {

                    palindrome = false;
                    left = i;

                }

            }

            if (palindrome == true) {

                return n - match;

            }

        }

    }

};

let minimumCountResult = minimumCount(`abffbahuxhhg`);

console.log(minimumCountResult);