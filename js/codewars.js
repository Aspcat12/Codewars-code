//Just some of my code using my idea and Copilot.

function squareDigits(num){
    num = num.toString().split('')
    let result = ''
    for (let i = 0; i < num.length; i++){
        result += parseInt(num[i]) ** 2
    }
    return parseInt(result);
}

function duplicateCount(text) {
    let dupe = text.toLowerCase().split('').reduce((count, value) => {
      count[value] = (count[value] || 0) + 1;
      return count;
    }, {});
    return Object.values(dupe).filter(value => value >= 2).length;
}
// let output = duplicateCount("Indivisibilities")


function openOrSenior(data){
    let arr = []
    for (let i = 0; i < data.length; i++){
      let [age,handi] = data[i]
      let output = ""
      if (age >= 55 && handi >= 7){
        output = "Senior"
      }
      else{
        output = "Open"
      }
      arr.push(output)
    }
    return arr
}

function digPow(n, p){
    let sum = 0
    let n_arr = n.toString()
    for (let i = 0; i < n.toString().length ; i++){
        sum += Math.pow(n_arr[i], p + i)
    }
    return sum % n == 0 ? sum/n : -1
}

function solution(number){
    let sum = 0
    for (let i = 0 ; i < number ; i++){
        if ( i % 3 == 0 || i % 5 == 0){
            sum+= i
        }
    }
    return sum
}

function solution(string) {
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toUpperCase()) {
            arr[i] = " " + arr[i];
        }
    }
    return arr.join('');
}

// function pigIt(str){
//     let arr = str.split(' ').map(word => word.split(''))
//     let result = []
//     for (let i = 0 ; i < arr.length ; i++){
//         let temp = ''
//         if (arr[i].length > 1 ) {
//             temp = arr[i][0]
//             arr[i][0] = ''
//         }
//         if (!/[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(arr[i][0])){
//             arr[i][arr[i].length - 1] += temp + "ay"
//         }
//         result.push(arr[i].join(''))
//     }
//     return result.join(' ')
// }
// using letter expression
function pigIt(str){
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
// let output = pigIt("Hello world !")

// function moveZeros(arr) {
//     let arr_out = []
//     let arr_zero = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === 0){
//             arr_zero.push(arr[i])
//         }
//         else{
//             arr_out.push(arr[i])
//         }
//     }
//     return arr_out.concat(arr_zero)
// }
function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}
// let output = moveZeros([ 'a', 'b', null, 'c', 'd', 1, 1, 3, 1, 9, {}, 9, +0, +0, +0, false, +0, +0, [], +0, +0, +0, +0, +0 ])

function count(string) {
    const arr = string.split('').reduce((count, letter) => {
        count[letter] = (count[letter] || 0) + 1;
        return count;
    }, {});
    return arr;
}

// let output = count("ABC")

function isPangram(string){
    let arr = string.toLowerCase().split('').filter(letter => letter.match(/[a-z]/))
    return new Set(arr).size == 26
  }

function persistence(num) {
    let count = 0
    while (num.toString().length > 1){
        num = num.toString().split('').reduce((a,b) => a * b)
        count += 1
    }
    return count
 }

function zero(func) { return func ? func(0) : 0; } // if func is not null, return func(0), else return 0
function one(func) { return func ? func(1) : 1; }
function two(func) { return func ? func(2) : 2; }
function three(func) { return func ? func(3) : 3; }
function four(func) { return func ? func(4) : 4; }
function five(func) { return func ? func(5) : 5; }
function six(func) { return func ? func(6) : 6; }
function seven(func) { return func ? func(7) : 7; }
function eight(func) { return func ? func(8) : 8; }
function nine(func) { return func ? func(9) : 9; }

function plus(x) { return (y) => y + x; }
function minus(x) { return (y) => y - x; }
function times(x) { return (y) => y * x; }
function dividedBy(x) { return (y) => Math.floor(y / x); }
// let output = seven(times(five())) // must return 35

function incrementString(strng) {
    let match = strng.match(/^(.*?)(\d*)$/);
    let letter = match[1];
    let num = match[2];

    if (!num){
        return match[0] + "1";
    }

    let num_str = (parseInt(num)+1).toString().padStart(num.length, '0');
    let strng_out = letter + num_str

    return strng.replace(/(\d+)$/, val => ++val);
    //or return strng.replace(/(\d+)$/, val => ++val); but this will not work if the number is 000
}

// let output = incrementString("a1bc999")
function productFib(prod){
    let [a, b] = [0, 1];
    while (a * b < prod){
        [a, b] = [b, a + b];
    }
    return [a, b, a * b == prod];
}
// output = productFib(5895)
function rgb(r, g, b) {
    let arr = [r, g, b].map(val => {
        if (val < 0) return '00';
        if (val > 255) return 'FF';
        return val.toString(16).toUpperCase().padStart(2, '0');
    });
    console.log(arr)
    return arr.join('');
}
// output = rgb(173, 255,  47)

class RomanNumerals {
    static toRoman(num) {
        if (num == 0) return '';
        if (num >= 1000) return 'M' + RomanNumerals.toRoman(num - 1000);
        if (num >= 900) return 'CM' + RomanNumerals.toRoman(num - 900);
        if (num >= 500) return 'D' + RomanNumerals.toRoman(num - 500);
        if (num >= 400) return 'CD' + RomanNumerals.toRoman(num - 400);
        if (num >= 100) return 'C' + RomanNumerals.toRoman(num - 100);
        if (num >= 90) return 'XC' + RomanNumerals.toRoman(num - 90);
        if (num >= 50) return 'L' + RomanNumerals.toRoman(num - 50);
        if (num >= 40) return 'XL' + RomanNumerals.toRoman(num - 40);
        if (num >= 10) return 'X' + RomanNumerals.toRoman(num - 10);
        if (num >= 9) return 'IX' + RomanNumerals.toRoman(num - 9);
        if (num >= 5) return 'V' + RomanNumerals.toRoman(num - 5);
        if (num >= 4) return 'IV' + RomanNumerals.toRoman(num - 4);
        if (num >= 1) return 'I' + RomanNumerals.toRoman(num - 1);
    }
  
    static fromRoman(str) {
        let roman = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
        };
        let num = 0;
        for (let i = 0; i < str.length; i++) {
            if ((i < str.length - 1) && (roman[str[i]] < roman[str[i + 1]])) {
                num -= roman[str[i]]; // ex. if the 2 next letter is 'CD' equal to -100 + 500
            } else {
                num += roman[str[i]];
            }
        }
        return num;
    }
}
// console.log(RomanNumerals.toRoman(1990))
// console.log(RomanNumerals.fromRoman('MDCLXVI'))

// O(n^2) solution
// function loop_size(node){
//     let arr = []
//     while (arr.indexOf(node) < 0){
//         arr.push(node)
//         node = node.getNext()
//     }
//     return arr.length - arr.indexOf(node)

// }

// O(n) solution
function loop_size(node) {
    let visited = new Map();
    let i = 0;

    while (!visited.has(node)) {
        visited.set(node, i++);
        node = node.getNext();
    }
    return i - visited.get(node);
}

// O(n) solution with turtle and rabbit creative solution
// function loop_size(node){
//     var turtle = node;
//     var rabbit = node;
    
//     // Find a point in the loop.  Any point will do!
//     // Since the rabbit moves faster than the turtle
//     // and the kata guarantees a loop, the rabbit will
//     // eventually catch up with the turtle.
//     do {
//       turtle = turtle.getNext();
//       rabbit = rabbit.getNext().getNext();
//     }
//     while (turtle != rabbit);
    
//     // The turtle and rabbit are now on the same node,
//     // but we know that node is in a loop.  So now we
//     // keep the turtle motionless and move the rabbit
//     // until it finds the turtle again, counting the
//     // nodes the rabbit visits in the mean time.
//     var count = 0;
//     do {
//       ++count;
//       rabbit = rabbit.getNext();
//     }
//     while (turtle != rabbit);
  
//     // voila
//     return count;
//   }

function dirReduc(arr){
    let opposite = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
    let arr_out = arr.reduce((acc, dir) => {
        console.log(acc)
        if (acc[acc.length - 1] == opposite[dir]) {
            console.log("pop")
            acc.pop(); // check if the last element added is the opposite of the current element
        } else {
            console.log("push")
            acc.push(dir); // if not, add the current element
        }
        return acc;
    }, []);
    return arr_out;
}

// output = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

//find only first prime number with gap g
function gap(g, m, n) {
    let lastPrime = 0;
    let isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    };
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (i - lastPrime == g) {
                return [lastPrime, i];
            }
            lastPrime = i;
        }
    }
    return null;
}

// output = gap(2,100,110)

// function parseInt(string) {
//     let arr = string.split(/[\s-]+/);
//     let numbers = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3,
//         'four': 4, 'five': 5, 'six': 6, 'seven': 7,
//         'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14,
//         'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
//         'eighteen': 18, 'nineteen': 19, 'twenty': 20,
//         'thirty': 30, 'forty': 40, 'fifty': 50,
//         'sixty': 60, 'seventy': 70, 'eighty': 80,
//         'ninety': 90, 'hundred': 100, 'thousand': 1000,
//         'million': 1000000
//     };
//     let result = 0;
//     let process = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         let num = numbers[word] || 0;
//         if (num === 100) {
//             process *= num;
//         } 
//         else if (num === 1000 || num === 1000000) { // if the number is thousand or million need to reset the process
//             result += process * num;
//             process = 0;
//         }
//         else {
//             process += num;
//         }
//     }
//     result += process;
//     return result;
// }

// output = parseInt("seven hundred eighty-three thousand nine hundred and nineteen")

function sumStrings(a,b) { 
    arr = a.split('').reverse()
    arr2 = b.split('').reverse()
    console.log(arr,arr2)
    let result = []
    let carry = 0 
    let i = 0
    while (i < arr.length || i < arr2.length){
        let sum = (parseInt(arr[i]) || 0) + (parseInt(arr2[i]) || 0) + carry
        carry = Math.floor(sum / 10)
        result.push(sum % 10)
        i++
    }
    if (carry){ // if carry left
        result.push(carry)
    }
    return result.reverse().join('').replace(/^0+/, '') // remove leading zero

}

// output = sumStrings('712569312664357328695151392', '8100824045303269669937')
function knight(start, finish) {
    // Ha-ha, it's not "knight", it's a horse :D
    let letters = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4,
        'e': 5, 'f': 6, 'g': 7, 'h': 8
    }
    let [x1, y1] = start;
    let [x2, y2] = finish;
    x1 = letters[x1];
    x2 = letters[x2];
    y1 = parseInt(y1);
    y2 = parseInt(y2);
    console.log(x1, y1, x2, y2)
    if (x1 == x2 && y1 == y2) {
        return 0;
    }
    let directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    let visited = new Set();
    let queue = [[x1, y1, 0]]; // double array to store x, y, and step
    while (queue.length > 0) {
        let [x, y, step] = queue.shift(); // extract the first element
        if (x == x2 && y == y2) {
            return step;
        }
        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
                let key = newX + ',' + newY;
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([newX, newY, step + 1]);
                    console.log(...queue)
                }
            }
        }
    }
    return -1;
}

// output = knight('a1', 'f1')
// function longestSlideDown (pyramid) {
//     for (let i = 0; i < pyramid.length - 1; i++) {
//         for (let j = 0; j < pyramid[i].length; j++) {
//             pyramid[i+1][j] += Math.max(pyramid[i][j-1] || 0, pyramid[i][j]); //
//             // console.log(pyramid[i][j], pyramid[i][j + 1] || 0,Math.max(pyramid[i][j], pyramid[i][j + 1]||0));
//             // console.log(...pyramid);
//         }
//     }
//     return pyramid[pyramid.length-1].reduce((max, num) => Math.max(max, num), -Infinity);
// }

function longestSlideDown(pyramid) {
    for (let i = pyramid.length - 2; i >= 0; i--) {
        for (let j = 0; j < pyramid[i].length; j++) {
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return Math.max(...pyramid[0]);
}
// output = longestSlideDown([
//     [3],
//     [7, 4],
//     [2, 4, 6],
//     [8, 5, 9, 3]
// ])

// function countPatternsFrom(firstPoint, length) {
//     if (length >= 8 || length <= 0) {
//         return 0;
//     }
//     if (length == 1) {
//         return 1;
//     }
//     let count = 0;
//     let visited = new Set();
//     let letters_position = {
//         'A': [0, 0], 'B': [1, 0], 'C': [2, 0],
//         'D': [0, 1], 'E': [1, 1], 'F': [2, 1],
//         'G': [0, 2], 'H': [1, 2], 'I': [2, 2]
//     };
//     firstPoint = letters_position[firstPoint];
//     let directions = [
//         [1, 0], [0, 1], [2, 0], [0, 2],
//         [1, 1], [2, 2], [1, 2], [2, 1]
//     ];
//     let newX = (x, dx) =>{
//         if (x + dx > 3) {
//             return (x + dx) % 3;
//         }
//         return x + dx;
//     };
//     let newY = (y, dy) =>{
//         if (y + dy > 3) {
//             return (y + dy) % 3;
//         }
//         return y + dy;
//     };
//     count = 0;
//     start = 1;
//     let forms = (x, y, length) =>{
//         visited.add(x + ',' + y);
//         let result = 0;

//         for (let [dx, dy] of directions) {
//             let PosX = newX(x, dx);
//             let PosY = newY(y, dy);
//             if (PosX >= 0 && PosX < 3 && PosY >= 0 && PosY < 3 && start <= length) {
//                 let key = PosX + ',' + PosY;
//                 if (!visited.has(key)) {
//                     visited.add(PosX + ',' + PosY + ',' + start);
//                     result += 1;
//                     result += forms(PosX, PosY, start + 1);
//                 }
//             }
//             console.log(result,start)
//         }
//         console.log(visited)
//         visited.delete(x + ',' + y);
//         return result;
//     };

//     count += forms(firstPoint[0], firstPoint[1], length);

//     return count;
// }
function countPatternsFrom(firstPoint, length) {
    if (length > 9 || length <= 0) return 0;
    if (length == 1) return 1;

    // for O(1) access (position is no need)
    let letters_position = {
        'A': [0, 0], 'B': [1, 0], 'C': [2, 0],
        'D': [0, 1], 'E': [1, 1], 'F': [2, 1],
        'G': [0, 2], 'H': [1, 2], 'I': [2, 2]
    };

    // Need to add rules for jumps
    let jumps = {};
    let needJump = (a, b, middle) => {
        jumps[a + ',' + b] = middle;
        jumps[b + ',' + a] = middle; 
    }

    needJump('A', 'C', 'B'); needJump('A', 'G', 'D'); needJump('A', 'I', 'E');
    needJump('B', 'H', 'E'); needJump('C', 'I', 'F'); needJump('C', 'G', 'E');
    needJump('D', 'F', 'E'); needJump('G', 'I', 'H');
    //A,C and C,A are the same in object type

    let visited = new Set();

    let dfs = (Pos, step) =>{
        if (step == length) return 1;

        visited.add(Pos);
        let result = 0;

        for (let key in letters_position) {
            if (!visited.has(key)) {
                let jumpKey = Pos + ',' + key;
                if (!jumps[jumpKey] || visited.has(jumps[jumpKey])) {
                    result += dfs(key, step + 1);
                }
            }
        }

        visited.delete(Pos);
        return result;
    }

    return dfs(firstPoint, 1);
}
// output = countPatternsFrom('E', 8)

// function sumIntervals(intervals) {
//     let seen = new Set();
//     for (let [start, stop] of intervals) {
//         for (let num = start; num < stop; num++) {
//             seen.add(num);
//         }
//     }
//     return seen.size;
// }
function sumIntervals(intervals) {
    console.log(...intervals)
    intervals.sort((a, b) => a[0] - b[0]); // Sort by start
    console.log(...intervals)
  
    let totalLength = 0;
    let currentEnd = intervals[0][0]; //start
  
    for (let [start, end] of intervals) {
        currentEnd = start <= currentEnd ? currentEnd : start; // Ensure we don't go backwards
        if (end > currentEnd) {
            totalLength += end - currentEnd;
            currentEnd = end;
        }
    }
  
    return totalLength;
}

// output = sumIntervals( [
//     [1, 4],
//     [7, 10],
//     [3, 5]
//  ] )

// function validateBattlefield(field) {
//     let ships = [0, 0, 0, 0]; // 4, 3, 2, 1
//     let visited = new Set();
//     let directions = [
//         [1, 0], [0, 1], [-1, 0], [0, -1]
//     ];
//     let dfs = (x, y) => {
//         if (x < 0 || x >= 10 || y < 0 || y >= 10 || field[x][y] == 0 || visited.has(x + ',' + y)) {
//             return 0;
//         }
//         visited.add(x + ',' + y);
//         let count = 1;
//         for (let [dx, dy] of directions) {
//             count += dfs(x + dx, y + dy);
//             console.log(count,dx,dy)
//         }
//         return count;
//     };
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             if (field[i][j] == 1 && !visited.has(i + ',' + j)) {
//                 let size = dfs(i, j);
//                 ships[size - 1]++;
//             }
//         }
//     }
//     return ships.join(',') == '4,3,2,1';
// }
function validateBattlefield(field) {
    let ships = [0, 0, 0, 0]; // 4, 3, 2, 1
    let visited = new Set();
    const directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1]
    ];
    
    const contactCheck = [
        [-1, -1], [-1, 1], [1, -1], [1, 1] // Check only diagonal is enough
    ];
    
    let dfs = (x, y, positions) => {
        if (x < 0 || x >= 10 || y < 0 || y >= 10 || field[x][y] == 0 || visited.has(x + ',' + y)) {
            return 0;
        }
        visited.add(x + ',' + y);
        positions.push([x, y]); // Store ship coordinates
        let count = 1;
        for (let [dx, dy] of directions) {
            count += dfs(x + dx, y + dy, positions);
        }
        return count;
    };

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (field[i][j] == 1 && !visited.has(i + ',' + j)) {
                let positions = [];
                let size = dfs(i, j, positions);
                
                // Check for diagonal contacts
                for (let [x, y] of positions) {
                    for (let [dx, dy] of contactCheck) {
                        let newX = x + dx, newY = y + dy;
                        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && field[newX][newY] == 1) {
                            return false; // Ships in contact diagonally
                        }
                    }
                }

                // Check if ship is straight
                let isHorizontal = positions.every(([x, y]) => x == positions[0][0]); // all x Pos must be the same
                let isVertical = positions.every(([x, y]) => y == positions[0][1]); // all y Pos must be the same
                if (!isHorizontal && !isVertical) {
                    return false;
                }

                // Count ships by size
                if (size > 4 || size < 1) return false; // Invalid ship size
                ships[size - 1]++; // Count ship (size - 1 = index)
            }
        }
    }
    
    return ships.join(',') == '4,3,2,1';
}
// output = validateBattlefield([
//     [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ])

function whoIsWinner(piecesPositionList){
    let board = Array(6).fill().map(() => Array(7).fill(null));
    const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1],
    ];
    const letters = {
        'A': 0, 'B': 1, 'C': 2, 'D': 3,
        'E': 4, 'F': 5, 'G': 6
    };
    let checkWin = (x, y) => {
        let player = board[x][y];
        for (let [dx, dy] of directions) {
            let count = 1;
            for (let i = 1; i < 4; i++) {
                let newX = x + dx * i;
                let newY = y + dy * i;
                if (newX < 0 || newX >= 6 || newY < 0 || newY >= 7 || board[newX][newY] != player) {
                    break;
                }
                count++;
            }
            for (let i = 1; i < 4; i++) {
                let newX = x - dx * i;
                let newY = y - dy * i;
                if (newX < 0 || newX >= 6 || newY < 0 || newY >= 7 || board[newX][newY] != player) {
                    break;
                }
                count++;
            }
            if (count >= 4) {
                return player;
            }
        }
        return null;
    };
    for (let move of piecesPositionList) {
        let [col, player] = move.split('_');
        col = letters[col];
        let row = 0;
        while (row < 6 && board[row][col] == null) {
            row++; // always go to the bottom
        }
        board[row - 1][col] = player;
        let winner = checkWin(row - 1, col);
        if (winner != null) {
            return winner;
        }
    }
    return 'Draw';
}
// output = whoIsWinner([ 'G_Red',
//     'G_Yellow',
//     'E_Red',
//     'A_Yellow',
//     'G_Red',
//     'A_Yellow',
//     'C_Red',
//     'G_Yellow',
//     'C_Red',
//     'G_Yellow',
//     'F_Red',
//     'E_Yellow',
//     'A_Red',
//     'C_Yellow',
//     'D_Red',
//     'B_Yellow',
//     'A_Red',
//     'F_Yellow',
//     'E_Red',
//     'C_Yellow',
//     'D_Red',
//     'E_Yellow',
//     'E_Red',
//     'A_Yellow',
//     'A_Red' ])

var Result = { "win": 1, "loss": 2, "tie": 3 }

var reversedResult = Object.fromEntries(
    Object.entries(Result).map(([key, value]) => [value, key])
);

function PokerHand(hand) {
    this.hands = hand.split(" ");
    this.ranks = this.hands.map(card => "23456789TJQKA".indexOf(card[0])); //to value 0-12
    this.suits = this.hands.map(card => card[1]);
}

PokerHand.prototype.repeatedRanks = function () {
    let counts = {};
    this.ranks.forEach(rank => counts[rank] = (counts[rank] || 0) + 1);
    let values = Object.values(counts).sort((a, b) => b - a);

    if (values[0] == 4) return 6; // Four of a kind
    if (values[0] == 3 && values[1] == 2) return 5; // Full house
    if (values[0] == 3) return 4; // Three of a kind
    if (values[0] == 2 && values[1] == 2) return 3; // Two pairs
    if (values[0] == 2) return 2; // One pair
    return 1; // High card
}

PokerHand.prototype.isStraight = function () {
    let sortedRanks = [...new Set(this.ranks)].sort((a, b) => a - b);
    if (sortedRanks.length == 5 && sortedRanks[4] - sortedRanks[0] == 4) return true;
    if (sortedRanks.includes(12)){ // Ace low case
        let sortedAcelow = sortedRanks.map(rank => (rank == 12 ? 1 : rank)).sort((a, b) => a - b);
        if (sortedAcelow.length == 5 && sortedAcelow[4] - sortedAcelow[0] == 4) return true;
    }
    return false;
};

PokerHand.prototype.isFlush = function () {
    let isSuits = new Set(this.suits);
    if (isSuits.size == 1) return true;
    return false;
}

PokerHand.prototype.evaluateHand = function (){
    const Ranks = this.repeatedRanks();
    const isStraight = this.isStraight();
    const isFlush = this.isFlush();
    if (isStraight && isFlush) return 9; // Straight Flush
    if (Ranks == 6) return 8; // Four of a Kind
    if (Ranks == 5) return 7; // Full House
    if (isFlush) return 6; // Flush
    if (isStraight) return 5; // Straight
    if (Ranks == 4) return 4; // Three of a Kind
    if (Ranks == 3) return 3; // Two Pairs
    if (Ranks == 2) return 2; // One Pair
    if (Ranks == 1) return 1; // High Card
    return 0 //Weird case
}

PokerHand.prototype.compareWith = function(hand){
    const thisHands = this.evaluateHand();
    const anotherHands = hand.evaluateHand();
    if (thisHands > anotherHands) return Result.win;
    if (thisHands < anotherHands) return Result.loss;
    if (thisHands == anotherHands){ // equal hand case
        let sortedHands = [...this.ranks].sort((a, b) => b - a);
        let sortedAnothers = [...hand.ranks].sort((a, b) => b - a);
        for (let i = 0; i < sortedHands.length; i++) {
            if (sortedHands[i] > sortedAnothers[i]) return Result.win;
            if (sortedHands[i] < sortedAnothers[i]) return Result.loss;
        }
    }
    return Result.tie;
}
// let hand1 = new PokerHand("AH KH QH JH TH"); 
// let hand2 = new PokerHand("9H 9D 9S 9C 7D");
// output = reversedResult[hand1.compareWith(hand2)];

// function lastDigit(n, m) {
//     //^0 = 1
//     if (m == 0n) return 1n;
//     //only care about the last digit
//     let lastDigit = n % 10n; // Get last digit of base
//     let remains = {
//         0n: [0n], 1n: [1n], 2n: [2n, 4n, 8n, 6n], 3n: [3n, 9n, 7n, 1n],
//         4n: [4n, 6n], 5n: [5n], 6n: [6n], 7n: [7n, 9n, 3n, 1n],
//         8n: [8n, 4n, 2n, 6n], 9n: [9n, 1n]
//     };
//     let cycle = remains[lastDigit];
//     let remain = (m-1n) % BigInt(cycle.length);
//     return cycle[remain];
// }

// console.log(lastDigit(10n, 10000000000n)); // 0n
// output = lastDigit(4n, 1n) 

// function lastDigit(as){
//     if (as.length == 0) return 1;
//     if (as.length == 1) return as[0] % 10;
//     if (as[as.length-1] == 0) {
//         as.pop();
//         as[as.length-1] = 1;
//         return lastDigit(as);
//     }
//     const remains = {
//         0: [0], 1: [1], 2: [2, 4, 8, 6], 3: [3, 9, 7, 1],
//         4: [4, 6], 5: [5], 6: [6], 7: [7, 9, 3, 1],
//         8: [8, 4, 2, 6], 9: [9, 1]
//     };
//     let Digit = as.reverse().pop() % 10;
//     let cycle = remains[Digit];
//     //reverse back before recursive
//     let remain = (lastDigit(as.reverse()) - 1) % cycle.length;
//     return cycle[remain];
// }

function lastDigit (as){
    return as.reduceRight((prev, curr, i) => {
      let exp = prev < 4 ?
        prev :
        (prev % 4 + 4);
  
      let base = i === 0 ?
        (curr % 10) :
        (curr < 4 ? curr : (curr % 4 + 4));
  
      return Math.pow(base, exp);
    }, 1) % 10;
}
// console.log(lastDigit([563523, 857326, 660633, 749455])); // 1

// function smaller(arr) {
//     let result = Array(arr.length).fill(0);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) { // check each element after the current element
//             if (arr[j] < arr[i]) {
//                 result[i]++;
//             }
//         }
//     }
//     return result;
// }
class FenwickTree {
    constructor(size) {
        this.tree = Array(size + 1).fill(0);
    }
    
    update(index, value) {
        while (index < this.tree.length) {
            this.tree[index] += value;
            index += index & -index;
        }
    }
    
    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index;
        }
        return sum;
    }
}

function smaller(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => a - b);
    let sortedMap = new Map(sorted.map((val, idx) => [val, idx + 1]));
    
    let tree = new FenwickTree(sorted.length);
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        let rank = sortedMap.get(arr[i]);
        result.push(tree.query(rank - 1)); // count numbers smaller than current
        tree.update(rank, 1); // insert into the tree
    }

    return result.reverse();
}
// output = smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])

function integerSquareRoot(number) {
    let num = BigInt(number);
    let low = 0n, high = num;

    while (low <= high) {
        let mid = (low + high) / 2n;
        let square = mid * mid;

        if (square === num) return String(mid);
        if (square < num) low = mid + 1n;
        else high = mid - 1n;
    }

    return String(high); // high is the integer square root
}
// output = integerSquareRoot("23232328323215435345345345343458098856756556809400840980980980980809092343243243243243098799634")

function expand(expr) {
    let match = expr.match(/\((-?\d*)([a-z])([+-]\d+)?\)\^(\d+)/);
    console.log(match)
    if (!match) return expr;

    let [_, a, letter, b, n] = match;
    a = a === "-" ? -1 : a === "" ? 1 : parseInt(a);
    b = b ? parseInt(b) : 0;
    n = parseInt(n);

    if (n === 0) return "1";
    if (n === 1) return `${a !== 1 ? a : ""}${letter}${b > 0 ? "+" : ""}${b !== 0 ? b : ""}`;

    let result = [];
    
    //using binomial theorem
    let factorial = (n) => {
        return n > 1 ? n * factorial(n - 1) : 1;
    } 

    for (let k = 0; k <= n; k++) {
        let formula = (factorial(n) / (factorial(k) * factorial(n - k))) * (a ** (n - k)) * (b ** k);
        if (formula === 0) continue;
        
        let term = formula === 1 && n - k !== 0 ? "" : formula === -1 && n - k !== 0 ? "-" : formula;
        let variable = n - k > 0 ? `${letter}${n - k > 1 ? `^${n - k}` : ""}` : "";
        
        result.push(`${term}${variable}`);
        console.log(result)
    }
    
    return result.join("+").replace(/\+\-/g, "-");
}

// output =expand("(r+0)^103")

// should be able to use bigInt but can also use string
function compareStrings(a, b) {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
}

function subtractStrings(a, b) {
    let borrow = 0, result = "", i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let digitA = i >= 0 ? Number(a[i]) : 0;
        let digitB = j >= 0 ? Number(b[j]) : 0;
        let diff = digitA - digitB - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else borrow = 0;
        result = diff + result;
        i--; j--;
    }
    return result.replace(/^0+/, "") || "0";
}

function addStrings(a, b) {
    let carry = 0, result = "", i = a.length - 1, j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        let sum = (i >= 0 ? Number(a[i]) : 0) + (j >= 0 ? Number(b[j]) : 0) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--; j--;
    }
    return result;
}

function divideByTwo(num) {
    let result = "", carry = 0;
    for (let digit of num) {
        let cur = carry * 10 + Number(digit);
        result += Math.floor(cur / 2);
        carry = cur % 2;
    }
    return result.replace(/^0+/, "") || "0";
}

function multiplyStrings(a, b) {
    let result = "0";
    for (let i = b.length - 1, place = ""; i >= 0; i--, place += "0") {
        let carry = 0, row = "";
        for (let j = a.length - 1; j >= 0; j--) {
            let product = Number(a[j]) * Number(b[i]) + carry;
            row = (product % 10) + row;
            carry = Math.floor(product / 10);
        }
        if (carry) row = carry + row;
        result = addStrings(result, row + place);
    }
    return result;
}

function integerSquareRoot(number) {
    let low = "0", high = number;
    while (compareStrings(low, high) <= 0) {
        let mid = divideByTwo(addStrings(low, high));
        let square = multiplyStrings(mid, mid);

        if (square === number) return mid;
        if (compareStrings(square, number) < 0) low = addStrings(mid, "1");
        else high = subtractStrings(mid, "1");
    }
    return high;
}

console.log(integerSquareRoot("23232328323215435345345345343458098856756556809400840980980980980809092343243243243243098799634")); 
// Expected: "152421548093487868711992623730429930751178496967"

console.log(integerSquareRoot("1000")); // Expected: "31"
