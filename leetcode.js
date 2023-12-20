
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
