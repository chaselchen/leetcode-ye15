
/*2648. Generate Fibonacci Sequence (Easy)
Write a generator function that returns a generator object which yields the 
fibonacci sequence. The fibonacci sequence is defined by the relation 
Xn = Xn-1 + Xn-2. The first few numbers of the series are 
0, 1, 1, 2, 3, 5, 8, 13.

Example 1:
Input: callCount = 5
Output: [0,1,1,2,3]
Explanation: const gen = fibGenerator();
             gen.next().value; // 0
             gen.next().value; // 1
             gen.next().value; // 1
             gen.next().value; // 2
             gen.next().value; // 3

Example 2:
Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted

Constraints: 0 <= callCount <= 50*/

var fibGenerator = function*() {
    let f0 = 0, f1 = 1;
    while (true) {
        yield f0;
        [f0, f1] = [f1, f0+f1];
    }
};


/*2733. Neither Minimum nor Maximum (Easy)
Given an integer array nums containing distinct positive integers, find and
return any number from the array that is neither the minimum nor the maximum
value in the array, or -1 if there is no such number. Return the selected
integer.

Example 1:
Input: nums = [3,2,1,4]
Output: 2
Explanation: In this example, the minimum value is 1 and the maximum value
             is 4. Therefore, either 2 or 3 can be valid answers.

Example 2:
Input: nums = [1,2]
Output: -1
Explanation: Since there is no number in nums that is neither the maximum
             nor the minimum, we cannot select a number that satisfies the
             given condition. Therefore, there is no answer.

Example 3:
Input: nums = [2,1,3]
Output: 2
Explanation: Since 2 is neither the maximum nor the minimum value in nums,
             it is the only valid answer.

Constraints:
* 1 <= nums.length <= 100
* 1 <= nums[i] <= 100
* All values in nums are distinct*/

var findNonMinOrMax = function(nums) {
    if (nums.length < 3) return -1;
    return nums.slice(0, 3).sort((a, b) => (a-b))[1];
};


/*2744. Find Maximum Number of String Pairs (Easy)
You are given a 0-indexed array words consisting of distinct strings. The
string words[i] can be paired with the string words[j] if:
* The string words[i] is equal to the reversed string of words[j].
* 0 <= i < j < words.length.
Return the maximum number of pairs that can be formed from the array words.
Note that each string can belong in at most one pair.

Example 1:
Input: words = ["cd","ac","dc","ca","zz"]
Output: 2
Explanation: In this example, we can form 2 pair of strings in the following
             way:
             - We pair the 0th string with the 2nd string, as the reversed
               string of word[0] is "dc" and is equal to words[2].
             - We pair the 1st string with the 3rd string, as the reversed
               string of word[1] is "ca" and is equal to words[3].
             It can be proven that 2 is the maximum number of pairs that can
             be formed.

Example 2:
Input: words = ["ab","ba","cc"]
Output: 1
Explanation: In this example, we can form 1 pair of strings in the following
             way:
             - We pair the 0th string with the 1st string, as the reversed
               string of words[1] is "ab" and is equal to words[0].
             It can be proven that 1 is the maximum number of pairs that can
             be formed.

Example 3:
Input: words = ["aa","ab"]
Output: 0
Explanation: In this example, we are unable to form any pair of strings.

Constraints:
* 1 <= words.length <= 50
* words[i].length == 2
* words consists of distinct strings.
* words[i] contains only lowercase English letters.*/

var maximumNumberOfStringPairs = function(words) {
    let ans = 0, seen = new Set();
    for (let w of words) {
        const ww = w.split("").reverse().join("");
        if (seen.has(ww)) ++ans;
        seen.add(w);
    }
    return ans;
};


/*2824. Count Pairs Whose Sum is Less than Target (Easy)
Given a 0-indexed integer array nums of length n and an integer target,
return the number of pairs (i, j) where 0 <= i < j < n and
nums[i] + nums[j] < target.

Example 1:
Input: nums = [-1,1,2,3,1], target = 2
Output: 3
Explanation: There are 3 pairs of indices that satisfy the conditions in the
             statement:
             - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
             - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
             - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
             Note that (0, 3) is not counted since nums[0] + nums[3] is not
             strictly less than the target.

Example 2:
Input: nums = [-6,2,5,-2,-7,-1,3], target = -2
Output: 10
Explanation: There are 10 pairs of indices that satisfy the conditions in
             the statement:
             - (0, 3) since 0 < 3 and nums[0] + nums[3] = -8 < target
             - (0, 1) since 0 < 1 and nums[0] + nums[1] = -4 < target
             - (0, 4) since 0 < 4 and nums[0] + nums[4] = -13 < target
             - (0, 5) since 0 < 5 and nums[0] + nums[5] = -7 < target
             - (0, 6) since 0 < 6 and nums[0] + nums[6] = -3 < target
             - (1, 4) since 1 < 4 and nums[1] + nums[4] = -5 < target
             - (3, 4) since 3 < 4 and nums[3] + nums[4] = -9 < target
             - (3, 5) since 3 < 5 and nums[3] + nums[5] = -3 < target
             - (4, 5) since 4 < 5 and nums[4] + nums[5] = -8 < target
             - (4, 6) since 4 < 6 and nums[4] + nums[6] = -4 < target

Constraints:
* 1 <= nums.length == n <= 50
* -50 <= nums[i], target <= 50*/

var countPairs = function(nums, target) {
    nums.sort((a, b) => (a-b));
    let ans = 0;
    for (let lo = 0, hi = nums.length-1; lo < hi; )
        if (nums[lo] + nums[hi] < target) {
            ans += hi - lo;
            ++lo;
        } else --hi;
    return ans;
};


/*2828. Check if a String Is an Acronym of Words (Easy)
Given an array of strings words and a string s, determine if s is an acronym
of words. The string s is considered an acronym of words if it can be formed
by concatenating the first character of each string in words in order. For
example, "ab" can be formed from ["apple", "banana"], but it can't be formed
from ["bear", "aardvark"]. Return true if s is an acronym of words, and
false otherwise.

Example 1:
Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie"
             are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the
             acronym.

Example 2:
Input: words = ["an","apple"], s = "a"
Output: false
Explanation: The first character in the words "an" and "apple" are 'a' and
             'a', respectively. The acronym formed by concatenating these
             characters is "aa". Hence, s = "a" is not the acronym.

Example 3:
Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
Output: true
Explanation: By concatenating the first character of the words in the array,
             we get the string "ngguoy". Hence, s = "ngguoy" is the acronym.

Constraints:
* 1 <= words.length <= 100
* 1 <= words[i].length <= 10
* 1 <= s.length <= 100
* words[i] and s consist of lowercase English letters.*/

var isAcronym = function(words, s) {
    return words.length === s.length && words.every((v, i) => v[0] === s[i]);
};


/*2855. Minimum Right Shifts to Sort the Array (Easy)
You are given a 0-indexed array nums of length n containing distinct
positive integers. Return the minimum number of right shifts required to
sort nums and -1 if this is not possible. A right shift is defined as
shifting the element at index i to index (i + 1) % n, for all indices.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 2
Explanation: After the first right shift, nums = [2,3,4,5,1]. After the
             second right shift, nums = [1,2,3,4,5]. Now nums is sorted;
             therefore the answer is 2.

Example 2:
Input: nums = [1,3,5]
Output: 0
Explanation: nums is already sorted therefore, the answer is 0.

Example 3:
Input: nums = [2,1,4]
Output: -1
Explanation: It's impossible to sort the array using right shifts.

Constraints:
* 1 <= nums.length <= 100
* 1 <= nums[i] <= 100
* nums contains distinct integers.*/

var minimumRightShifts = function(nums) {
    let k = 0, n = nums.length;
    for (let i = 1; i < n; ++i)
        if (nums[i-1] > nums[i]) {
            if (k) return -1;
            k = i;
        }
    if (k === 0) return 0;
    return nums[n-1] < nums[0] ? n - k : -1;
};


/*2899. Last Visited Integers (Easy)
Given a 0-indexed array of strings words where words[i] is either a positive
integer represented as a string or the string "prev". Start iterating from
the beginning of the array; for every "prev" string seen in words, find the
last visited integer in words which is defined as follows:
* Let k be the number of consecutive "prev" strings seen so far (containing
  the current string). Let nums be the 0-indexed array of integers seen so
  far and nums_reverse be the reverse of nums, then the integer at (k - 1)th
  index of nums_reverse will be the last visited integer for this "prev".
* If k is greater than the total visited integers, then the last visited
  integer will be -1.
Return an integer array containing the last visited integers.

Example 1:
Input: words = ["1","2","prev","prev","prev"]
Output: [2,1,-1]
Explanation: - For "prev" at index = 2, last visited integer will be 2 as
               here the number of consecutive "prev" strings is 1, and in
               the array reverse_nums, 2 will be the first element.
             - For "prev" at index = 3, last visited integer will be 1 as
               there are a total of two consecutive "prev" strings including
               this "prev" which are visited, and 1 is the second last
               visited integer.
             - For "prev" at index = 4, last visited integer will be -1 as
               there are a total of three consecutive "prev" strings
               including this "prev" which are visited, but the total number
               of integers visited is two.

Example 2:
Input: words = ["1","prev","2","prev","prev"]
Output: [1,2,1]
Explanation: - For "prev" at index = 1, last visited integer will be 1.
             - For "prev" at index = 3, last visited integer will be 2.
             - For "prev" at index = 4, last visited integer will be 1 as
               there are a total of two consecutive "prev" strings including
               this "prev" which are visited, and 1 is the second last
               visited integer.

Constraints:
* 1 <= words.length <= 100
* words[i] == "prev" or 1 <= int(words[i]) <= 100*/

var lastVisitedIntegers = function(words) {
    let ans = [], seen = [], k = 0;
    for (const w of words) {
        if (w === "prev") {
            if (k >= seen.length) ans.push(-1);
            else ans.push(seen[seen.length-1-k++]);
        } else {
            seen.add(w);
            k = 0;
        }
    }
    return ans;
};


/*2913. Subarrays Distinct Element Sum of Squares I (Easy)
You are given a 0-indexed integer array nums. The distinct count of a
subarray of nums is defined as:
* Let nums[i..j] be a subarray of nums consisting of all the indices from i
  to j such that 0 <= i <= j < nums.length. Then the number of distinct
  values in nums[i..j] is called the distinct count of nums[i..j].
Return the sum of the squares of distinct counts of all subarrays of nums. A
subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
             [1]: 1 distinct value
             [2]: 1 distinct value
             [1]: 1 distinct value
             [1,2]: 2 distinct values
             [2,1]: 2 distinct values
             [1,2,1]: 2 distinct values
             The sum of the squares of the distinct counts in all subarrays
             is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.

Example 2:
Input: nums = [1,1]
Output: 3
Explanation: Three possible subarrays are:
             [1]: 1 distinct value
             [1]: 1 distinct value
             [1,1]: 1 distinct value
             The sum of the squares of the distinct counts in all subarrays
             is equal to 12 + 12 + 12 = 3.

Constraints:
* 1 <= nums.length <= 100
* 1 <= nums[i] <= 100*/

var sumCounts = function(nums) {
    let ans = 0;
    for (let i = 0, n = nums.length; i < n; ++i) {
        const seen = new Set();
        for (let j = i; j < n; ++j) {
            seen.add(nums[j]);
            ans += Math.pow(seen.size, 2);
        }
    }
    return ans;
};


/*2917. Find the K-or of an Array (Easy)
You are given a 0-indexed integer array nums, and an integer k. The K-or of
nums is a non-negative integer that satisfies the following:
* The ith bit is set in the K-or if and only if there are at least k
  elements of nums in which bit i is set.
Return the K-or of nums. Note that a bit i is set in x if (2i AND x) == 2i,
where AND is the bitwise AND operator.

Example 1:
Input: nums = [7,12,9,8,9,15], k = 4
Output: 9
Explanation: Bit 0 is set at nums[0], nums[2], nums[4], and nums[5].
             Bit 1 is set at nums[0], and nums[5].
             Bit 2 is set at nums[0], nums[1], and nums[5].
             Bit 3 is set at nums[1], nums[2], nums[3], nums[4], and nums[5].
             Only bits 0 and 3 are set in at least k elements of the array,
             and bits i >= 4 are not set in any of the array's elements.
             Hence, the answer is 2^0 + 2^3 = 9.

Example 2:
Input: nums = [2,12,1,11,4,5], k = 6
Output: 0
Explanation: Since k == 6 == nums.length, the 6-or of the array is equal to
             the bitwise AND of all its elements. Hence, the answer is 2 AND
             12 AND 1 AND 11 AND 4 AND 5 = 0.

Example 3:
Input: nums = [10,8,5,9,11,6,8], k = 1
Output: 15
Explanation: Since k == 1, the 1-or of the array is equal to the bitwise OR
             of all its elements. Hence, the answer is
             10 OR 8 OR 5 OR 9 OR 11 OR 6 OR 8 = 15.

Constraints:
* 1 <= nums.length <= 50
* 0 <= nums[i] < 231
* 1 <= k <= nums.length*/

var findKOr = function(nums, k) {
    let ans = 0;
    for (let i = 0; i < 32; ++i) {
        let freq = 0;
        for (const x of nums)
            if (x & 1<<i && ++freq == k) {
                ans ^= 1<<i;
                break;
            }
    }
    return ans;
};


/*2928. Distribute Candies Among Children I (Easy)
You are given two positive integers n and limit. Return the total number of 
ways to distribute n candies among 3 children such that no child gets more 
than limit candies.

Example 1:
Input: n = 5, limit = 2
Output: 3
Explanation: There are 3 ways to distribute 5 candies such that no child 
             gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).

Example 2:
Input: n = 3, limit = 3
Output: 10
Explanation: There are 10 ways to distribute 3 candies such that no child 
             gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), 
             (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), 
             (2, 1, 0) and (3, 0, 0).

Constraints:
* 1 <= n <= 50
* 1 <= limit <= 50*/

var distributeCandies = function(n, limit) {
    let ans = 0; 
    for (var x = 0; x <= limit; ++x) 
        for (var y = 0; y <= limit; ++y)
            if (0 <= n-x-y && n-x-y <= limit) ++ans; 
    return ans; 
};


/*2929. Distribute Candies Among Children II (Medium)
You are given two positive integers n and limit. Return the total number of 
ways to distribute n candies among 3 children such that no child gets more 
than limit candies.

Example 1:
Input: n = 5, limit = 2
Output: 3
Explanation: There are 3 ways to distribute 5 candies such that no child 
             gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).
Example 2:
Input: n = 3, limit = 3
Output: 10
Explanation: There are 10 ways to distribute 3 candies such that no child 
             gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), 
             (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), 
             (2, 1, 0) and (3, 0, 0).

Constraints:
* 1 <= n <= 10^6
* 1 <= limit <= 10^6*/

var distributeCandies = function(n, limit) {
    let ans = 0; 
    for (var x = 0; x <= limit; ++x)
        ans += Math.max(0, Math.min(n-x, 2*limit-n+x)+1); 
    return ans; 
};


/*2930. Number of Strings Which Can Be Rearranged to Contain Substring (Medium)
You are given an integer n. A string s is called good if it contains only 
lowercase English characters and it is possible to rearrange the characters 
of s such that the new string contains "leet" as a substring.

For example:
* The string "lteer" is good because we can rearrange it to form "leetr" .
* "letl" is not good because we cannot rearrange it to contain "leet" as a 
  substring.
Return the total number of good strings of length n. Since the answer may 
be large, return it modulo 10^9 + 7. A substring is a contiguous sequence 
of characters within a string.
 
Example 1:
Input: n = 4
Output: 12
Explanation: The 12 strings which can be rearranged to have "leet" as a 
             substring are: "eelt", "eetl", "elet", "elte", "etel", "etle", 
             "leet", "lete", "ltee", "teel", "tele", and "tlee".

Example 2:
Input: n = 10
Output: 83943898
Explanation: The number of strings with length 10 which can be rearranged 
             to have "leet" as a substring is 526083947580. Hence the 
             answer is 526083947580 % (10^9 + 7) = 83943898.

Constraints: 1 <= n <= 10^5*/

var stringCount = function(n) {
    const mod = 1_000_000_007n; 
    
    const pow = function(x, p, m) {
        let ans = 1n; 
        for (; p; p >>= 1) {
            if (p & 1) ans = ans * x % m; 
            x = x * x % m; 
        }
        return ans; 
    }
    
    const bn = BigInt(n); 
    return ((pow(26n, n, mod) - (75n+bn)*pow(25n, n-1, mod) + (72n+2n*bn)*pow(24n, n-1, mod) - (23n+bn)*pow(23n, n-1, mod)) % mod + mod) % mod; 
};


/*2931. Maximum Spending After Buying Items (Hard)
You are given a 0-indexed m * n integer matrix values, representing the 
values of m * n different items in m different shops. Each shop has n items 
where the jth item in the ith shop has a value of values[i][j]. 
Additionally, the items in the ith shop are sorted in non-increasing order 
of value. That is, values[i][j] >= values[i][j + 1] for all 0 <= j < n - 1.
On each day, you would like to buy a single item from one of the shops. 
Specifically, On the dth day you can:
* Pick any shop i.
* Buy the rightmost available item j for the price of values[i][j] * d. 
  That is, find the greatest index j such that item j was never bought 
  before, and buy it for the price of values[i][j] * d.
Note that all items are pairwise different. For example, if you have bought 
item 0 from shop 1, you can still buy item 0 from any other shop. Return 
the maximum amount of money that can be spent on buying all m * n products.

Example 1:
Input: values = [[8,5,2],[6,4,1],[9,7,3]]
Output: 285
Explanation: - On the first day, we buy product 2 from shop 1 for a price 
               of values[1][2] * 1 = 1.
             - On the second day, we buy product 2 from shop 0 for a price 
               of values[0][2] * 2 = 4.
             - On the third day, we buy product 2 from shop 2 for a price 
               of values[2][2] * 3 = 9.
             - On the fourth day, we buy product 1 from shop 1 for a price 
               of values[1][1] * 4 = 16.
             - On the fifth day, we buy product 1 from shop 0 for a price 
               of values[0][1] * 5 = 25.
             - On the sixth day, we buy product 0 from shop 1 for a price 
               of values[1][0] * 6 = 36.
             - On the seventh day, we buy product 1 from shop 2 for a price 
               of values[2][1] * 7 = 49.
             - On the eighth day, we buy product 0 from shop 0 for a price 
               of values[0][0] * 8 = 64.
               of values[2][0] * 9 = 81.
             Hence, our total spending is equal to 285. It can be shown 
             that 285 is the maximum amount of money that can be spent 
             buying all m * n products. 

Example 2:
Input: values = [[10,8,6,4,2],[9,7,5,3,2]]
Output: 386
Explanation: - On the first day, we buy product 4 from shop 0 for a price 
               of values[0][4] * 1 = 2.
             - On the second day, we buy product 4 from shop 1 for a price 
               of values[1][4] * 2 = 4.
             - On the third day, we buy product 3 from shop 1 for a price of values[1][3] * 3 = 9.
             - On the fourth day, we buy product 3 from shop 0 for a price of values[0][3] * 4 = 16.
             - On the fifth day, we buy product 2 from shop 1 for a price of values[1][2] * 5 = 25.
             - On the sixth day, we buy product 2 from shop 0 for a price of values[0][2] * 6 = 36.
             - On the seventh day, we buy product 1 from shop 1 for a price of values[1][1] * 7 = 49.
             - On the eighth day, we buy product 1 from shop 0 for a price of values[0][1] * 8 = 64
             - On the ninth day, we buy product 0 from shop 1 for a price of values[1][0] * 9 = 81.
             - On the tenth day, we buy product 0 from shop 0 for a price of values[0][0] * 10 = 100.
             Hence, our total spending is equal to 386. It can be shown 
             that 386 is the maximum amount of money that can be spent 
             buying all m * n products.

Constraints:
* 1 <= m == values.length <= 10
* 1 <= n == values[i].length <= 10^4
* 1 <= values[i][j] <= 10^6
* values[i] are sorted in non-increasing order.*/

var maxSpending = function(values) {
    const m = values.length, n = values[0].length; 
    const pq = new PriorityQueue({ compare: (x, y) => x[0]-y[0] }); 
    for (var i = 0; i < m; ++i) 
        pq.enqueue([values[i][n-1], i, n-1]); 
    var ans = 0; 
    for (var k = 0; k < m*n; ++k) {
        const elem = pq.dequeue(), v = elem[0], i = elem[1], j = elem[2]; 
        ans += v * (k+1); 
        if (j) pq.enqueue([values[i][j-1], i, j-1]);
    }
    return ans; 
};


/*2932. Maximum Strong Pair XOR I (Easy)
You are given a 0-indexed integer array nums. A pair of integers x and y is
called a strong pair if it satisfies the condition:
* |x - y| <= min(x, y)
You need to select two integers from nums such that they form a strong pair
and their bitwise XOR is the maximum among all strong pairs in the array.
Return the maximum XOR value out of all possible strong pairs in the array
nums. Note that you can pick the same integer twice to form a pair.

Example 1:
Input: nums = [1,2,3,4,5]
Output: 7
Explanation: There are 11 strong pairs in the array nums: (1, 1), (1, 2),
             (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5)
             and (5, 5). The maximum XOR possible from these pairs is
             3 XOR 4 = 7.

Example 2:
Input: nums = [10,100]
Output: 0
Explanation: There are 2 strong pairs in the array nums: (10, 10) and
             (100, 100). The maximum XOR possible from these pairs is
             10 XOR 10 = 0 since the pair (100, 100) also gives
             100 XOR 100 = 0.

Example 3:
Input: nums = [5,6,25,30]
Output: 7
Explanation: There are 6 strong pairs in the array nums: (5, 5), (5, 6),
             (6, 6), (25, 25), (25, 30) and (30, 30). The maximum XOR
             possible from these pairs is 25 XOR 30 = 7 since the only other
             non-zero XOR value is 5 XOR 6 = 3.

Constraints:
* 1 <= nums.length <= 50
* 1 <= nums[i] <= 100*/

var maximumStrongPairXor = function(nums) {
    let ans = 0;
    for (let i = 0, n = nums.length; i < n; ++i)
        for (let j = i+1; j < n; ++j)
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j]))
                ans = Math.max(ans, nums[i] ^ nums[j]);
    return ans;
};


/*2937. Make Three Strings Equal (Easy)
You are given three strings s1, s2, and s3. You have to perform the 
following operation on these three strings as many times as you want. In 
one operation you can choose one of these three strings such that its 
length is at least 2 and delete the rightmost character of it. Return the 
minimum number of operations you need to perform to make the three strings 
equal if there is a way to make them equal, otherwise, return -1.

Example 1:
Input: s1 = "abc", s2 = "abb", s3 = "ab"
Output: 2
Explanation: Performing operations on s1 and s2 once will lead to three 
             equal strings. It can be shown that there is no way to make 
             them equal with less than two operations.

Example 2:
Input: s1 = "dac", s2 = "bac", s3 = "cac"
Output: -1
Explanation: Because the leftmost letters of s1 and s2 are not equal, they 
             could not be equal after any number of operations. So the 
             answer is -1.

Constraints:
* 1 <= s1.length, s2.length, s3.length <= 100
* s1, s2 and s3 consist only of lowercase English letters.*/

var findMinimumOperations = function(s1, s2, s3) {
    let i = 0; 
    for (let m = Math.min(s1.length, s2.length, s3.length); i < m && s1[i] == s2[i] && s2[i] == s3[i]; ++i); 
    return i > 0 ? s1.length + s2.length + s3.length - 3*i : -1; 
};


/*2938. Separate Black and White Balls (Medium)
There are n balls on a table, each ball has a color black or white. You are 
given a 0-indexed binary string s of length n, where 1 and 0 represent 
black and white balls, respectively. In each step, you can choose two 
adjacent balls and swap them. Return the minimum number of steps to group 
all the black balls to the right and all the white balls to the left.

Example 1:
Input: s = "101"
Output: 1
Explanation: We can group all the black balls to the right in the following 
             way:
             - Swap s[0] and s[1], s = "011".
             Initially, 1s are not grouped together, requiring at least 1 
             step to group them to the right.

Example 2:
Input: s = "100"
Output: 2
Explanation: We can group all the black balls to the right in the following 
             way:
             - Swap s[0] and s[1], s = "010".
             - Swap s[1] and s[2], s = "001".
             It can be proven that the minimum number of steps needed is 2.

Example 3:
Input: s = "0111"
Output: 0
Explanation: All the black balls are already grouped to the right.

Constraints:
* 1 <= n == s.length <= 10^5
* s[i] is either '0' or '1'.*/

var minimumSteps = function(s) {
    let ans = 0, prefix = 0; 
    for (const ch of s) 
        if (ch == '1') ++prefix; 
        else ans += prefix; 
    return ans;
};


/*2939. Maximum Xor Product (Medium)
Given three integers a, b, and n, return the maximum value of 
(a XOR x) * (b XOR x) where 0 <= x < 2n. Since the answer may be too large, 
return it modulo 10^9 + 7. Note that XOR is the bitwise XOR operation.

Example 1:
Input: a = 12, b = 5, n = 4
Output: 98
Explanation: For x = 2, (a XOR x) = 14 and (b XOR x) = 7. Hence, 
             (a XOR x) * (b XOR x) = 98. It can be shown that 98 is the 
             maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.

Example 2:
Input: a = 6, b = 7 , n = 5
Output: 930
Explanation: For x = 25, (a XOR x) = 31 and (b XOR x) = 30. Hence, 
             (a XOR x) * (b XOR x) = 930. It can be shown that 930 is the 
             maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.

Example 3:
Input: a = 1, b = 6, n = 3
Output: 12
Explanation: For x = 5, (a XOR x) = 4 and (b XOR x) = 3. Hence, 
             (a XOR x) * (b XOR x) = 12. It can be shown that 12 is the 
             maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.

Constraints:
* 0 <= a, b < 2^50
* 0 <= n <= 50*/

var maximumXorProduct = function(a, b, n) {
    const mod = 1_000_000_007n; 
    let aa = BigInt(a), bb = BigInt(b); 
    for (let i = BigInt(n)-1n; i >= 0n; --i) 
        if (aa >= bb && (bb & 1n<<i) == 0 || aa < bb && (aa & 1n<<i) == 0) {
            aa ^= 1n<<i; 
            bb ^= 1n<<i; 
        }
    return aa % mod * (bb % mod) % mod; 
};


/*2940. Find Building Where Alice and Bob Can Meet (Hard)
You are given a 0-indexed array heights of positive integers, where 
heights[i] represents the height of the ith building. If a person is in 
building i, they can move to any other building j if and only if i < j and 
heights[i] < heights[j]. You are also given another array queries where 
queries[i] = [ai, bi]. On the ith query, Alice is in building ai while Bob 
is in building bi. Return an array ans where ans[i] is the index of the 
leftmost building where Alice and Bob can meet on the ith query. If Alice 
and Bob cannot move to a common building on query i, set ans[i] to -1.

Example 1:
Input: heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
Output: [2,5,-1,5,2]
Explanation: - In the first query, Alice and Bob can move to building 2 
               since heights[0] < heights[2] and heights[1] < heights[2]. 
             - In the second query, Alice and Bob can move to building 5 
               since heights[0] < heights[5] and heights[3] < heights[5]. 
             - In the third query, Alice cannot meet Bob since Alice cannot 
               move to any other building.
             - In the fourth query, Alice and Bob can move to building 5 
               since heights[3] < heights[5] and heights[4] < heights[5].
             - In the fifth query, Alice and Bob are already in the same 
               building.  
             For ans[i] != -1, It can be shown that ans[i] is the leftmost 
             building where Alice and Bob can meet. For ans[i] == -1, It 
             can be shown that there is no building where Alice and Bob can 
             meet.

Example 2:
Input: heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
Output: [7,6,-1,4,6]
Explanation: - In the first query, Alice can directly move to Bob's 
               building since heights[0] < heights[7].
             - In the second query, Alice and Bob can move to building 6 
               since heights[3] < heights[6] and heights[5] < heights[6].
             - In the third query, Alice cannot meet Bob since Bob cannot 
               move to any other building.
             - In the fourth query, Alice and Bob can move to building 4 
               since heights[3] < heights[4] and heights[0] < heights[4].
             - In the fifth query, Alice can directly move to Bob's 
               building since heights[1] < heights[6].
             For ans[i] != -1, It can be shown that ans[i] is the leftmost 
             building where Alice and Bob can meet. For ans[i] == -1, It 
             can be shown that there is no building where Alice and Bob can 
             meet.

Constraints:
* 1 <= heights.length <= 5 * 10^4
* 1 <= heights[i] <= 10^9
* 1 <= queries.length <= 5 * 10^4
* queries[i] = [ai, bi]
* 0 <= ai, bi <= heights.length - 1*/

var leftmostBuildingQueries = function(heights, queries) {
    const m = heights.length, n = queries.length; 
    const qs = Array(m).fill().map(() => []); 
    const ans = Array(n).fill(-1); 
    for (let [i, [a, b]] of queries.entries()) {
        if (a > b) { var temp = a; a = b; b = temp; }
        if (a == b || heights[a] < heights[b]) ans[i] = b; 
        else qs[b].push([heights[a], i]); 
    }
    const pq = new PriorityQueue({ compare: (x, y) => x[0]-y[0] }); 
    for (const[k, x] of heights.entries()) {
        while (pq.size() && pq.front()[0] < x) {
            const [_, i] = pq.dequeue(); 
            ans[i] = k; 
        }
        for (var elem of qs[k]) pq.enqueue(elem); 
    }
    return ans; 
};


/*2942. Find Words Containing Character (Easy)
You are given a 0-indexed array of strings words and a character x. Return
an array of indices representing the words that contain the character x.
Note that the returned array may be in any order.

Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return
             indices 0 and 1.

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and
             2.

Example 3:
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an
             empty array.

Constraints:
* 1 <= words.length <= 50
* 1 <= words[i].length <= 50
* x is a lowercase English letter.
* words[i] consists only of lowercase English letters.*/

var findWordsContaining = function(words, x) {
    const ans = [];
    for (let i = 0; i < words.length; ++i)
        if (words[i].includes(x)) ans.push(i);
    return ans;
};


/*2946. Matrix Similarity After Cyclic Shifts (Easy)
You are given a 0-indexed m x n integer matrix mat and an integer k. You 
have to cyclically right shift odd indexed rows k times and cyclically left 
shift even indexed rows k times. Return true if the initial and final 
matrix are exactly the same and false otherwise.

Example 1:
Input: mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2
Output: true
Explanation: Initially, the matrix looks like the first figure. Second 
             figure represents the state of the matrix after one right and 
             left cyclic shifts to even and odd indexed rows. Third figure 
             is the final state of the matrix after two cyclic shifts which 
             is similar to the initial matrix. Therefore, return true.

Example 2:
Input: mat = [[2,2],[2,2]], k = 3
Output: true
Explanation: As all the values are equal in the matrix, even after 
             performing cyclic shifts the matrix will remain the same. 
             Therefeore, we return true.

Example 3:
Input: mat = [[1,2]], k = 1
Output: false
Explanation: After one cyclic shift, mat = [[2,1]] which is not equal to 
             the initial matrix. Therefore we return false.

Constraints:
* 1 <= mat.length <= 25
* 1 <= mat[i].length <= 25
* 1 <= mat[i][j] <= 25
* 1 <= k <= 50*/

var areSimilar = function(mat, k) {
    for (var row of mat) 
        for (var j = 0, n = row.length; j < n; ++j) 
            if (row[j] != row[(j+k) % n]) return false; 
    return true; 
};


/*2947. Count Beautiful Substrings I (Medium)
You are given a string s and a positive integer k. Let vowels and 
consonants be the number of vowels and consonants in a string. A string is 
beautiful if:
* vowels == consonants.
* (vowels * consonants) % k == 0, in other terms the multiplication of 
  vowels and consonants is divisible by k.
Return the number of non-empty beautiful substrings in the given string s.
A substring is a contiguous sequence of characters in a string. Vowel 
letters in English are 'a', 'e', 'i', 'o', and 'u'. Consonant letters in 
English are every letter except vowels. 

Example 1:
Input: s = "baeyh", k = 2
Output: 2
Explanation: There are 2 beautiful substrings in the given string.
             - Substring "baeyh", vowels = 2 (["a",e"]), 
               consonants = 2 (["y","h"]). You can see that string "aeyh" 
               is beautiful as vowels == consonants and 
               vowels * consonants % k == 0.
             - Substring "baeyh", vowels = 2 (["a",e"]), 
               consonants = 2 (["b","y"]). You can see that string "baey" 
               is beautiful as vowels == consonants and 
               vowels * consonants % k == 0.
             It can be shown that there are only 2 beautiful substrings in 
             the given string.

Example 2:
Input: s = "abba", k = 1
Output: 3
Explanation: There are 3 beautiful substrings in the given string.
             - Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]). 
             - Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]).
             - Substring "abba", vowels = 2 (["a","a"]), 
               consonants = 2 (["b","b"]).
             It can be shown that there are only 3 beautiful substrings in 
             the given string.

Example 3:
Input: s = "bcdf", k = 1
Output: 0
Explanation: There are no beautiful substrings in the given string.

Constraints:
* 1 <= s.length <= 1000
* 1 <= k <= 1000
* s consists of only English lowercase letters.*/

var beautifulSubstrings = function(s, k) {
    let ans = 0; 
    for (var i = 0, n = s.length; i < n; ++i) {
        let vowels = 0, consonants = 0; 
        for (var j = i; j < n; ++j) {
            if ("aeiou".includes(s[j])) ++vowels; 
            else ++consonants; 
            if (vowels == consonants && vowels * consonants % k == 0) ++ans; 
        }
    }
    return ans; 
};


/*2948. Make Lexicographically Smallest Array by Swapping Elements (Medium)
You are given a 0-indexed array of positive integers nums and a positive 
integer limit. In one operation, you can choose any two indices i and j and 
swap nums[i] and nums[j] if |nums[i] - nums[j]| <= limit. Return the 
lexicographically smallest array that can be obtained by performing the 
operation any number of times. An array a is lexicographically smaller than 
an array b if in the first position where a and b differ, array a has an 
element that is less than the corresponding element in b. For example, the 
array [2,10,3] is lexicographically smaller than the array [10,2,3] because 
they differ at index 0 and 2 < 10. 

Example 1:
Input: nums = [1,5,3,9,8], limit = 2
Output: [1,3,5,8,9]
Explanation: Apply the operation 2 times:
             - Swap nums[1] with nums[2]. The array becomes [1,3,5,9,8]
             - Swap nums[3] with nums[4]. The array becomes [1,3,5,8,9]
             We cannot obtain a lexicographically smaller array by applying 
             any more operations. Note that it may be possible to get the 
             same result by doing different operations.

Example 2:
Input: nums = [1,7,6,18,2,1], limit = 3
Output: [1,6,7,18,1,2]
Explanation: Apply the operation 3 times:
             - Swap nums[1] with nums[2]. The array becomes [1,6,7,18,2,1]
             - Swap nums[0] with nums[4]. The array becomes [2,6,7,18,1,1]
             - Swap nums[0] with nums[5]. The array becomes [1,6,7,18,1,2]
             We cannot obtain a lexicographically smaller array by applying 
             any more operations.

Example 3:
Input: nums = [1,7,28,19,10], limit = 3
Output: [1,7,28,19,10]
Explanation: [1,7,28,19,10] is the lexicographically smallest array we can 
             obtain because we cannot apply the operation on any two 
             indices.

Constraints:
* 1 <= nums.length <= 10^5
* 1 <= nums[i] <= 10^9
* 1 <= limit <= 10^9*/

var lexicographicallySmallestArray = function(nums, limit) {
    let vals = []; 
    for (const [i, x] of nums.entries()) vals.push([x, i]); 
    vals.sort((x, y) => x[0]-y[0]); 
    let idx = [], kk = 0; 
    for (const [k, [x, i]] of vals.entries()) {
        idx.push(i); 
        if (k == vals.length-1 || x+limit < vals[k+1][0]) {
            idx.sort((x, y) => x-y); 
            for (var j = 0; j < idx.length; ++j) nums[idx[j]] = vals[kk+j][0]; 
            idx.length = 0; 
            kk = k+1; 
        }
    }
    return nums; 
};


/*2949. Count Beautiful Substrings II (Hard)
You are given a string s and a positive integer k. Let vowels and 
consonants be the number of vowels and consonants in a string. A string is 
beautiful if:
* vowels == consonants.
* (vowels * consonants) % k == 0, in other terms the multiplication of 
  vowels and consonants is divisible by k.
Return the number of non-empty beautiful substrings in the given string s.
A substring is a contiguous sequence of characters in a string. Vowel 
letters in English are 'a', 'e', 'i', 'o', and 'u'. Consonant letters in 
English are every letter except vowels.

Example 1:
Input: s = "baeyh", k = 2
Output: 2
Explanation: There are 2 beautiful substrings in the given string.
             - Substring "baeyh", vowels = 2 (["a",e"]), 
               consonants = 2 (["y","h"]). You can see that string "aeyh" 
               is beautiful as vowels == consonants and 
               vowels * consonants % k == 0.
             - Substring "baeyh", vowels = 2 (["a",e"]), 
               consonants = 2 (["b","y"]). You can see that string "baey" 
               is beautiful as vowels == consonants and 
               vowels * consonants % k == 0.
             It can be shown that there are only 2 beautiful substrings in 
             the given string.

Example 2:
Input: s = "abba", k = 1
Output: 3
Explanation: There are 3 beautiful substrings in the given string.
             - Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]).
             - Substring "abba", vowels = 1 (["a"]), consonants = 1 (["b"]).
             - Substring "abba", vowels = 2 (["a","a"]), consonants = 2 
               (["b","b"]).
             It can be shown that there are only 3 beautiful substrings in 
             the given string.

Example 3:
Input: s = "bcdf", k = 1
Output: 0
Explanation: There are no beautiful substrings in the given string.
 
Constraints:
* 1 <= s.length <= 5 * 10^4
* 1 <= k <= 1000
* s consists of only English lowercase letters.*/

var beautifulSubstrings = function(s, k) {
    for (var n = 1; n <= k; ++n) 
        if (n * n % k === 0) break; 
    n *= 2; 
    const seen = Array(n).fill().map(() => new Map());
    seen[n-1].set(0, 1); 
    let ans = 0, diff = 0; 
    for (const [i, ch] of s.split('').entries()) {
        if ("aeiou".includes(ch)) ++diff; 
        else --diff; 
        if (!(seen[i%n].has(diff))) seen[i%n].set(diff, 0); 
        ans += seen[i%n].get(diff); 
        seen[i%n].set(diff, seen[i%n].get(diff) + 1); 
    }
    return ans; 
};


/*2956. Find Common Elements Between Two Arrays (Easy)
You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, 
respectively. Consider calculating the following values:
* The number of indices i such that 0 <= i < n and nums1[i] occurs at least 
  once in nums2.
* The number of indices i such that 0 <= i < m and nums2[i] occurs at least 
  once in nums1.
Return an integer array answer of size 2 containing the two values in the 
above order.

Example 1:
Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
Output: [3,4]
Explanation: We calculate the values as follows:
             - The elements at indices 1, 2, and 3 in nums1 occur at least 
               once in nums2. So the first value is 3.
             - The elements at indices 0, 1, 3, and 4 in nums2 occur at 
               least once in nums1. So the second value is 4.

Example 2:
Input: nums1 = [3,4,2,3], nums2 = [1,5]
Output: [0,0]
Explanation: There are no common elements between the two arrays, so the two 
             values will be 0.

Constraints:
* n == nums1.length
* m == nums2.length
* 1 <= n, m <= 100
* 1 <= nums1[i], nums2[i] <= 100*/

var findIntersectionValues = function(nums1, nums2) {
    let ans = [0, 0]; 
    for (const x of nums1) 
        if (nums2.includes(x)) ++ans[0]; 
    for (const x of nums2)
        if (nums1.includes(x)) ++ans[1]; 
    return ans;
};


/*2957. Remove Adjacent Almost-Equal Characters (Medium)
You are given a 0-indexed string word. In one operation, you can pick any 
index i of word and change word[i] to any lowercase English letter. Return 
the minimum number of operations needed to remove all adjacent almost-equal 
characters from word. Two characters a and b are almost-equal if a == b or 
a and b are adjacent in the alphabet.

Example 1:
Input: word = "aaaaa"
Output: 2
Explanation: We can change word into "acaca" which does not have any 
             adjacent almost-equal characters. It can be shown that the 
             minimum number of operations needed to remove all adjacent 
             almost-equal characters from word is 2.

Example 2:
Input: word = "abddez"
Output: 2
Explanation: We can change word into "ybdoez" which does not have any 
             adjacent almost-equal characters. It can be shown that the 
             minimum number of operations needed to remove all adjacent 
             almost-equal characters from word is 2.

Example 3:
Input: word = "zyxyxyz"
Output: 3
Explanation: We can change word into "zaxaxaz" which does not have any 
             adjacent almost-equal characters. It can be shown that the 
             minimum number of operations needed to remove all adjacent 
             almost-equal characters from word is 3.

Constraints:
* 1 <= word.length <= 100
* word consists only of lowercase English letters.*/

var removeAlmostEqualCharacters = function(word) {
    let ans = 0; 
    for (let i = 1; i < word.length; ++i) 
        if (Math.abs(word[i-1].charCodeAt(0) - word[i].charCodeAt(0)) <= 1) ++ans, ++i; 
    return ans; 
};


/*2958. Length of Longest Subarray With at Most K Frequency (Medium)
You are given an integer array nums and an integer k. The frequency of an 
element x is the number of times it occurs in an array. An array is called 
good if the frequency of each element in this array is less than or equal to 
k. Return the length of the longest good subarray of nums. A subarray is a 
contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6
Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the 
             values 1, 2, and 3 occur at most twice in this subarray. Note 
             that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also 
             good. It can be shown that there are no good subarrays with 
             length more than 6.

Example 2:
Input: nums = [1,2,1,2,1,2,1,2], k = 1
Output: 2
Explanation: The longest possible good subarray is [1,2] since the values 1 
             and 2 occur at most once in this subarray. Note that the 
             subarray [2,1] is also good. It can be shown that there are no 
             good subarrays with length more than 2.

Example 3:
Input: nums = [5,5,5,5,5,5,5], k = 4
Output: 4
Explanation: The longest possible good subarray is [5,5,5,5] since the value 
             5 occurs 4 times in this subarray. It can be shown that there 
             are no good subarrays with length more than 4.

Constraints:
* 1 <= nums.length <= 10^5
* 1 <= nums[i] <= 10^9
* 1 <= k <= nums.length*/

var maxSubarrayLength = function(nums, k) {
    let ans = 0, freq = new Map(); 
    for (let i = 0, ii = 0; i < nums.length; ++i) {
        freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1); 
        while (freq.get(nums[i]) > k) {
            freq.set(nums[ii], freq.get(nums[ii])-1); 
            ++ii
        }
        ans = Math.max(ans, i-ii+1); 
    }
    return ans; 
};


/*2959. Number of Possible Sets of Closing Branches (Hard)
There is a company with n branches across the country, some of which are 
connected by roads. Initially, all branches are reachable from each other by 
traveling some roads. The company has realized that they are spending an 
excessive amount of time traveling between their branches. As a result, they 
have decided to close down some of these branches (possibly none). However, 
they want to ensure that the remaining branches have a distance of at most 
maxDistance from each other. The distance between two branches is the 
minimum total traveled length needed to reach one branch from another. You 
are given integers n, maxDistance, and a 0-indexed 2D array roads, where 
roads[i] = [ui, vi, wi] represents the undirected road between branches ui 
and vi with length wi. Return the number of possible sets of closing 
branches, so that any branch has a distance of at most maxDistance from any 
other. Note that, after closing a branch, the company will no longer have 
access to any roads connected to it. Note that, multiple roads are allowed.

Example 1:
Input: n = 3, maxDistance = 5, roads = [[0,1,2],[1,2,10],[0,2,10]]
Output: 5
Explanation: The possible sets of closing branches are:
             - The set [2], after closing, active branches are [0,1] and 
               they are reachable to each other within distance 2.
             - The set [0,1], after closing, the active branch is [2].
             - The set [1,2], after closing, the active branch is [0].
             - The set [0,2], after closing, the active branch is [1].
             - The set [0,1,2], after closing, there are no active branches.
             It can be proven, that there are only 5 possible sets of 
             closing branches.

Example 2:
Input: n = 3, maxDistance = 5, roads = [[0,1,20],[0,1,10],[1,2,2],[0,2,2]]
Output: 7
Explanation: The possible sets of closing branches are:
             - The set [], after closing, active branches are [0,1,2] and 
               they are reachable to each other within distance 4.
             - The set [0], after closing, active branches are [1,2] and 
               they are reachable to each other within distance 2.
             - The set [1], after closing, active branches are [0,2] and 
               they are reachable to each other within distance 2.
             - The set [0,1], after closing, the active branch is [2].
             - The set [1,2], after closing, the active branch is [0].
             - The set [0,2], after closing, the active branch is [1].
             - The set [0,1,2], after closing, there are no active branches.
             It can be proven, that there are only 7 possible sets of 
             closing branches.

Example 3:
Input: n = 1, maxDistance = 10, roads = []
Output: 2
Explanation: The possible sets of closing branches are:
             - The set [], after closing, the active branch is [0].
             - The set [0], after closing, there are no active branches.
             It can be proven, that there are only 2 possible sets of 
             closing branches.

Constraints:
* 1 <= n <= 10
* 1 <= maxDistance <= 10^5
* 0 <= roads.length <= 1000
* roads[i].length == 3
* 0 <= ui, vi <= n - 1
* ui != vi
* 1 <= wi <= 1000
* All branches are reachable from each other by traveling some roads.*/

var numberOfSets = function(n, maxDistance, roads) {
    let ans = 0; 
    for (let m = 0; m < (1<<n); ++m) {
        let dist = Array(n).fill(null).map(() => Array(n).fill(1e6)); 
        for (let u = 0; u < n; ++u)
            if (m & 1<<u) dist[u][u] = 0; 
        for (let road of roads) {
            let u = road[0], v = road[1], w = road[2]; 
            if ((m & 1<<u) && (m & 1<<v))
                dist[u][v] = dist[v][u] = Math.min(dist[u][v], w); 
        }
        for (let k = 0; k < n; ++k)
            for (let u = 0; u < n; ++u)
                for (let v = 0; v < n; ++v)
                    dist[u][v] = Math.min(dist[u][v], dist[u][k] + dist[k][v]); 
        let found = false; 
        for (let u = 0; u < n; ++u)
            if (m & 1<<u)
                for (let v = 0; v < n; ++v)
                    if ((m & 1<<v) && dist[u][v] > maxDistance) found = true; 
        if (!found) ++ans; 
    }
    return ans; 
};


/*2960. Count Tested Devices After Test Operations (Easy)
You are given a 0-indexed integer array batteryPercentages having length n,
denoting the battery percentages of n 0-indexed devices. Your task is to
test each device i in order from 0 to n - 1, by performing the following
test operations:
* If batteryPercentages[i] is greater than 0:
  + Increment the count of tested devices.
  + Decrease the battery percentage of all devices with indices j in the
    range [i + 1, n - 1] by 1, ensuring their battery percentage never goes
    below 0, i.e, batteryPercentages[j] = max(0, batteryPercentages[j] - 1).
  + Move to the next device.
* Otherwise, move to the next device without performing any test.
Return an integer denoting the number of devices that will be tested after
performing the test operations in order.

Example 1:
Input: batteryPercentages = [1,1,2,1,3]
Output: 3
Explanation: Performing the test operations in order starting from device 0:
             - At device 1, batteryPercentages [1] == 0, so we move to the
               next device without testing.
             - At device 2, batteryPercentages[2] > 0, so there are now 2
               tested devices, and batteryPercentages becomes [1,0,1,0,1].
             - At device 3, batteryPercentages [3] == 0, so we move to the
               next device without testing.
             - At device 0, batteryPercentages[0] > 0, so there is now 1
               tested device, and batteryPercentages becomes [1,0,1,0,2].
             - At device 4, batteryPercentages[4] > 0, so there are now 3
               tested devices, and batteryPercentages stays the same.
             So, the answer is 3.

Example 2:
Input: batteryPercentages = [0,1,2]
Output: 2
Explanation: Performing the test operations in order starting from device 0:
             - At device 0, batteryPercentages[0] == 0, so we move to the
               next device without testing.
             - At device 1, batteryPercentages[1] > 0, so there is now 1
               tested device, and batteryPercentages becomes [0,1,1].
             - At device 2, batteryPercentages [2] > 0, so there are now 2
               tested devices, and batteryPercentages stays the same.
             So, the answer is 2.

Constraints:
* 1 <= n == batteryPercentages.length <= 100
* 0 <= batteryPercentages[i] <= 100*/

var countTestedDevices = function(batteryPercentages) {
    let ans = 0;
    for (let x of batteryPercentages)
        if (ans < x) ++ans;
    return ans;
};


/*2961. Double Modular Exponentiation (Medium)
You are given a 0-indexed 2D array variables where
variables[i] = [ai, bi, ci, mi], and an integer target. An index i is good
if the following formula holds:
* 0 <= i < variables.length
* ((aibi % 10)ci) % mi == target
Return an array consisting of good indices in any order.

Example 1:
Input: variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]], target = 2
Output: [0,2]
Explanation: For each index i in the variables array:
             1) For the index 0, variables[0] = [2,3,3,10],
                (23 % 10)3 % 10 = 2.
             2) For the index 1, variables[1] = [3,3,3,1],
                (33 % 10)3 % 1 = 0.
             3) For the index 2, variables[2] = [6,1,1,4],
                (61 % 10)1 % 4 = 2.
             Therefore we return [0,2] as the answer.

Example 2:
Input: variables = [[39,3,1000,1000]], target = 17
Output: []
Explanation: For each index i in the variables array:
             1) For the index 0, variables[0] = [39,3,1000,1000],
                (393 % 10)1000 % 1000 = 1.
             Therefore we return [] as the answer.

Constraints:
* 1 <= variables.length <= 100
* variables[i] == [ai, bi, ci, mi]
* 1 <= ai, bi, ci, mi <= 10^3
* 0 <= target <= 10^3*/

var getGoodIndices = function(variables, target) {

    function pow(x, p, m) {
        let ans = 1;
        for (; p; p >>= 1) {
            if (p & 1) ans = ans * x % m;
            x = x * x % m;
        }
        return ans;
    }

    const ans = [];
    for (const [i, [a, b, c, m]] of variables.entries()) {
        if (pow(pow(a, b, 10), c, m) == target) ans.push(i);
    }
    return ans;
};


/*2962. Count Subarrays Where Max Element Appears at Least K Times (Meidum)
You are given an integer array nums and a positive integer k. Return the
number of subarrays where the maximum element of nums appears at least k
times in that subarray. A subarray is a contiguous sequence of elements
within an array.

Example 1:
Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are:
             [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

Example 2:
Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.

Constraints:
* 1 <= nums.length <= 10^5
* 1 <= nums[i] <= 10^6
* 1 <= k <= 10^5*/

var countSubarrays = function(nums, k) {
    let m = Math.max(...nums); 
    let ans = 0, ii = 0, freq = 0; 
    for (let x of nums) {
        if (x == m) ++freq; 
        while (freq == k) 
            if (nums[ii++] == m) --freq; 
        ans += ii; 
    }
    return ans; 
};


/*2963. Count the Number of Good Partitions (Hard)
You are given a 0-indexed array nums consisting of positive integers. A
partition of an array into one or more contiguous subarrays is called good
if no two subarrays contain the same number. Return the total number of good
partitions of nums. Since the answer may be large, return it modulo
10^9 + 7.

Example 1:
Input: nums = [1,2,3,4]
Output: 8
Explanation: The 8 possible good partitions are: ([1], [2], [3], [4]),
             ([1], [2], [3,4]), ([1], [2,3], [4]), ([1], [2,3,4]),
             ([1,2], [3], [4]), ([1,2], [3,4]), ([1,2,3], [4]), and
             ([1,2,3,4]).

Example 2:
Input: nums = [1,1,1,1]
Output: 1
Explanation: The only possible good partition is: ([1,1,1,1]).

Example 3:
Input: nums = [1,2,1,3]
Output: 2
Explanation: The 2 possible good partitions are: ([1,2,1], [3]) and
             ([1,2,1,3]).

Constraints:
* 1 <= nums.length <= 10^5
* 1 <= nums[i] <= 10^9*/

var numberOfGoodPartitions = function(nums) {
    const mod = 1_000_000_007n; 
    const last = new Map(); 
    for (let i = 0; i < nums.length; ++i) last.set(nums[i], i); 
    let ans = 1n; 
    for (let i = 0, ii = 0; i < nums.length; ++i) {
        if (ii < i) ans = ans * 2n % mod; 
        ii = Math.max(ii, last.get(nums[i])); 
    }
    return ans; 
};


/*2965. Find Missing and Repeated Values (Easy)
You are given a 0-indexed 2D integer matrix grid of size n * n with values
in the range [1, n2]. Each integer appears exactly once except a which
appears twice and b which is missing. The task is to find the repeating and
missing numbers a and b. Return a 0-indexed integer array ans of size 2
where ans[0] equals to a and ans[1] equals to b.

Example 1:
Input: grid = [[1,3],[2,2]]
Output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is
             [2,4].

Example 2:
Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
Output: [9,5]
Explanation: Number 9 is repeated and number 5 is missing so the answer is
             [9,5].

Constraints:
* 2 <= n == grid.length == grid[i].length <= 50
* 1 <= grid[i][j] <= n * n
* For all x that 1 <= x <= n * n there is exactly one x that is not equal to
  any of the grid members.
* For all x that 1 <= x <= n * n there is exactly one x that is equal to
  exactly two of the grid members.
* For all x that 1 <= x <= n * n except two of them there is exatly one pair
  of i, j that 0 <= i, j <= n - 1 and grid[i][j] == x.*/

var findMissingAndRepeatedValues = function(grid) {
    let s = 0, s2 = 0, n = grid.length*grid.length;
    for (const row of grid)
        for (const x of row) {
            s += x;
            s2 += x*x;
        }
    let diff = s - n*(n+1)/2, total = (s2 - n*(n+1)*(2*n+1)/6) / diff;
    return [(total+diff)/2, (total-diff)/2];
};


/*2966. Divide Array Into Arrays With Max Difference (Medium)
You are given an integer array nums of size n and a positive integer k.
Divide the array into one or more arrays of size 3 satisfying the following
conditions:
* Each element of nums should be in exactly one array.
* The difference between any two elements in one array is less than or equal
  to k.
Return a 2D array containing all the arrays. If it is impossible to satisfy
the conditions, return an empty array. And if there are multiple answers,
return any of them.

Example 1:
Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
Output: [[1,1,3],[3,4,5],[7,8,9]]
Explanation: We can divide the array into the following arrays: [1,1,3],
             [3,4,5] and [7,8,9]. The difference between any two elements in
             each array is less than or equal to 2. Note that the order of
             elements is not important.

Example 2:
Input: nums = [1,3,3,2,7,3], k = 3
Output: []
Explanation: It is not possible to divide the array satisfying all the
             conditions.

Constraints:
* n == nums.length
* 1 <= n <= 10^5
* n is a multiple of 3.
* 1 <= nums[i] <= 10^5
* 1 <= k <= 10^5*/

var divideArray = function(nums, k) {
    nums.sort((a, b) => (a-b));
    const ans = [];
    for (let i = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i-2] > k) return [];
        ans.push([nums[i-2], nums[i-1], nums[i]]);
    }
    return ans;
};


/*2967. Minimum Cost to Make Array Equalindromic (Medium)
You are given a 0-indexed integer array nums having length n. You are
allowed to perform a special move any number of times (including zero) on
nums. In one special move you perform the following steps in order:
* Choose an index i in the range [0, n - 1], and a positive integer x.
* Add |nums[i] - x| to the total cost.
* Change the value of nums[i] to x.
A palindromic number is a positive integer that remains the same when its
digits are reversed. For example, 121, 2552 and 65756 are palindromic
numbers whereas 24, 46, 235 are not palindromic numbers. An array is
considered equalindromic if all the elements in the array are equal to an
integer y, where y is a palindromic number less than 10^9. Return an integer
denoting the minimum possible total cost to make nums equalindromic by
performing any number of special moves.

Example 1:
Input: nums = [1,2,3,4,5]
Output: 6
Explanation: We can make the array equalindromic by changing all elements to
             3 which is a palindromic number. The cost of changing the array
             to [3,3,3,3,3] using 4 special moves is given by
             |1 - 3| + |2 - 3| + |4 - 3| + |5 - 3| = 6. It can be shown that
             changing all elements to any palindromic number other than 3
             cannot be achieved at a lower cost.

Example 2:
Input: nums = [10,12,13,14,15]
Output: 11
Explanation: We can make the array equalindromic by changing all elements to
             11 which is a palindromic number. The cost of changing the
             array to [11,11,11,11,11] using 5 special moves is given by
             |10 - 11| + |12 - 11| + |13 - 11| + |14 - 11| + |15 - 11| = 11.
             It can be shown that changing all elements to any palindromic
             number other than 11 cannot be achieved at a lower cost.

Example 3:
Input: nums = [22,33,22,33,22]
Output: 22
Explanation: We can make the array equalindromic by changing all elements to
             22 which is a palindromic number. The cost of changing the
             array to [22,22,22,22,22] using 2 special moves is given by
             |33 - 22| + |33 - 22| = 22. It can be shown that changing all
             elements to any palindromic number other than 22 cannot be
             achieved at a lower cost.

Constraints:
* 1 <= n <= 10^5
* 1 <= nums[i] <= 10^9*/

var minimumCost = function(nums) {
    const sz = nums.length;
    nums.sort((a, b) => (a-b));
    const median = nums[Math.floor(sz/2)], digits = median.toString(), n = digits.length;
    const h = digits.substring(0, (n+1)/2), hh = h.split("").reverse().join("");
    const val = parseInt(h + hh.substring(n&1), 10);
    let cand = 0;
    const vals = [val];
    if (val < median) {
        const t = (parseInt(h) + 1).toString(), tt = t.split("").reverse().join("");
        if (t.length > Math.floor((n+1)/2)) cand = val + 2;
        else cand = parseInt(t + tt.substring(n&1));
        vals.push(cand);
    } else if (val > median) {
        const t = (parseInt(h) - 1).toString(), tt = t.split("").reverse().join("");
        if (t.length < Math.floor((n+1)/2) || t === "0" && val > 10) cand = val - 2;
        else cand = parseInt(t + tt.substring(n&1));
        vals.push(cand);
    }
    let ans = BigInt(1e15);
    for (const v of vals) {
        let prefix = 0n;
        for (const x of nums)
            prefix += BigInt(Math.abs(x - v));
        if (prefix < ans) ans = prefix;
    }
    return Number(ans);
};


/*2968. Apply Operations to Maximize Frequency Score (Hard)
You are given a 0-indexed integer array nums and an integer k. You can
perform the following operation on the array at most k times:
* Choose any index i from the array and increase or decrease nums[i] by 1.
The score of the final array is the frequency of the most frequent element
in the array. Return the maximum score you can achieve. The frequency of an
element is the number of occurences of that element in the array.

Example 1:
Input: nums = [1,2,6,4], k = 3
Output: 3
Explanation: We can do the following operations on the array:
             - Choose i = 0, and increase the value of nums[0] by 1. The
               resulting array is [2,2,6,4].
             - Choose i = 3, and decrease the value of nums[3] by 1. The
               resulting array is [2,2,6,3].
             - Choose i = 3, and decrease the value of nums[3] by 1. The
               resulting array is [2,2,6,2].
             The element 2 is the most frequent in the final array so our
             score is 3. It can be shown that we cannot achieve a better
             score.

Example 2:
Input: nums = [1,4,4,2,4], k = 0
Output: 3
Explanation: We cannot apply any operations so our score will be the
             frequency of the most frequent element in the original array,
             which is 3.

Constraints:
* 1 <= nums.length <= 10^5
* 1 <= nums[i] <= 10^9
* 0 <= k <= 10^14*/

var maxFrequencyScore = function(nums, k) {
    nums.sort((a, b) => (a-b));
    let ii = 0;
    for (let i = 0; i < nums.length; ++i) {
        k -= nums[i] - nums[Math.floor((ii+i)/2)];
        if (k < 0)
            k += nums[Math.floor((ii+i+1)/2)] - nums[ii++];
    }
    return nums.length - ii;
};


/*2996. Smallest Missing Integer Greater Than Sequential Prefix Sum (Easy)
You are given a 0-indexed array of integers nums. A prefix nums[0..i] is
sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In
particular, the prefix consisting only of nums[0] is sequential. Return the
smallest integer x missing from nums such that x is greater than or equal to
the sum of the longest sequential prefix.

Example 1:
Input: nums = [1,2,3,2,5]
Output: 6
Explanation: The longest sequential prefix of nums is [1,2,3] with a sum of
             6. 6 is not in the array, therefore 6 is the smallest missing
             integer greater than or equal to the sum of the longest
             sequential prefix.

Example 2:
Input: nums = [3,4,5,1,12,14,13]
Output: 15
Explanation: The longest sequential prefix of nums is [3,4,5] with a sum of
             12. 12, 13, and 14 belong to the array while 15 does not.
             Therefore 15 is the smallest missing integer greater than or
             equal to the sum of the longest sequential prefix.

Constraints:
* 1 <= nums.length <= 50
* 1 <= nums[i] <= 50*/

var missingInteger = function(nums) {
    let prefix = 0;
    for (let i = 0; i < nums.length && (i == 0 || nums[i] == 1 + nums[i-1]); prefix += nums[i++]);
    const seen = new Set(nums);
    while (seen.has(prefix)) ++prefix;
    return prefix;
};


/*2997. Minimum Number of Operations to Make Array XOR Equal to K (Medium)
You are given a 0-indexed integer array nums and a positive integer k. You
can apply the following operation on the array any number of times:
* Choose any element of the array and flip a bit in its binary
  representation. Flipping a bit means changing a 0 to 1 or vice versa.
Return the minimum number of operations required to make the bitwise XOR of
all elements of the final array equal to k. Note that you can flip leading
zero bits in the binary representation of elements. For example, for the
number (101)2 you can flip the fourth bit and obtain (1101)2.

Example 1:
Input: nums = [2,1,3,4], k = 1
Output: 2
Explanation: We can do the following operations:
             - Choose element 2 which is 3 == (011)2, we flip the first bit
               and we obtain (010)2 == 2. nums becomes [2,1,2,4].
             - Choose element 0 which is 2 == (010)2, we flip the third bit
               and we obtain (110)2 = 6. nums becomes [6,1,2,4].
             The XOR of elements of the final array is
             (6 XOR 1 XOR 2 XOR 4) == 1 == k. It can be shown that we cannot
             make the XOR equal to k in less than 2 operations.

Example 2:
Input: nums = [2,0,2,0], k = 0
Output: 0
Explanation: The XOR of elements of the array is
             (2 XOR 0 XOR 2 XOR 0) == 0 == k. So no operation is needed.

Constraints:
* 1 <= nums.length <= 10^5
* 0 <= nums[i] <= 10^6
* 0 <= k <= 10^6*/

var minOperations = function(nums, k) {
    let ans = 0;
    for (let x = nums.reduce((x, y) => x ^ y, k); x; x &= x-1) ++ans;
    return ans;
};


/*2998. Minimum Number of Operations to Make X and Y Equal (Medium)
You are given two positive integers x and y. In one operation, you can do
one of the four following operations:
* Divide x by 11 if x is a multiple of 11.
* Divide x by 5 if x is a multiple of 5.
* Decrement x by 1.
* Increment x by 1.
Return the minimum number of operations required to make x and y equal.

Example 1:
Input: x = 26, y = 1
Output: 3
Explanation: We can make 26 equal to 1 by applying the following operations:
             1. Decrement x by 1
             2. Divide x by 5
             3. Divide x by 5
             It can be shown that 3 is the minimum number of operations
             required to make 26 equal to 1.

Example 2:
Input: x = 54, y = 2
Output: 4
Explanation: We can make 54 equal to 2 by applying the following operations:
             1. Increment x by 1
             2. Divide x by 11
             3. Divide x by 5
             4. Increment x by 1
             It can be shown that 4 is the minimum number of operations
             required to make 54 equal to 2.

Example 3:
Input: x = 25, y = 30
Output: 5
Explanation: We can make 25 equal to 30 by applying the following operations:
             1. Increment x by 1
             2. Increment x by 1
             3. Increment x by 1
             4. Increment x by 1
             5. Increment x by 1
             It can be shown that 5 is the minimum number of operations
             required to make 25 equal to 30.

Constraints: 1 <= x, y <= 10^4*/

var minimumOperationsToMakeEqual = function(x, y) {
    if (x <= y) return y - x;
    let ans = x - y;
    for (const v of [5, 11]) {
        ans = Math.min(ans, minimumOperationsToMakeEqual(Math.floor(x/v), y) + 1 + x % v);
        ans = Math.min(ans, minimumOperationsToMakeEqual(Math.floor(x/v)+1, y) + 1 + v - x % v);
    }
    return ans;
};


/*2999. Count the Number of Powerful Integers (Hard)
You are given three integers start, finish, and limit. You are also given a
0-indexed string s representing a positive integer. A positive integer x is
called powerful if it ends with s (in other words, s is a suffix of x) and
each digit in x is at most limit. Return the total number of powerful
integers in the range [start..finish]. A string x is a suffix of a string y
if and only if x is a substring of y that starts from some index (including
0) in y and extends to the index y.length - 1. For example, 25 is a suffix
of 5125 whereas 512 is not.

Example 1:
Input: start = 1, finish = 6000, limit = 4, s = "124"
Output: 5
Explanation: The powerful integers in the range [1..6000] are 124, 1124,
             2124, 3124, and, 4124. All these integers have each digit <= 4,
             and "124" as a suffix. Note that 5124 is not a powerful integer
             because the first digit is 5 which is greater than 4. It can be
             shown that there are only 5 powerful integers in this range.

Example 2:
Input: start = 15, finish = 215, limit = 6, s = "10"
Output: 2
Explanation: The powerful integers in the range [15..215] are 110 and 210.
             All these integers have each digit <= 6, and "10" as a suffix.
             It can be shown that there are only 2 powerful integers in this
             range.

Example 3:
Input: start = 1000, finish = 2000, limit = 4, s = "3000"
Output: 0
Explanation: All integers in the range [1000..2000] are smaller than 3000,
             hence "3000" cannot be a suffix of any integer in this range.

Constraints:
* 1 <= start <= finish <= 10^15
* 1 <= limit <= 9
* 1 <= s.length <= floor(log10(finish)) + 1
* s only consists of numeric digits which are at most limit.
* s does not have leading zeros.*/

var numberOfPowerfulInt = function(start, finish, limit, s) {

    function fn(val) {
        const n = val.length - s.length;
        if (n < 0) return 0;
        const dp = Array(n+1).fill().map(() => Array(2).fill(0));
        dp[n][0] = 1;
        if (val.substring(n) >= s) dp[n][1] = 1;
        for (let i = n-1; i >= 0; --i) {
            dp[i][0] = (1+limit) * dp[i+1][0];
            if (Number(val.charAt(i)) <= limit) dp[i][1] = Number(val.charAt(i))*dp[i+1][0] + dp[i+1][1];
            else dp[i][1] = (1+limit) * dp[i+1][0];
            console.log(dp[i][0], dp[i][1]);
        }
        return dp[0][1];
    };

    return fn(finish.toString()) - fn((start-1).toString());
};
