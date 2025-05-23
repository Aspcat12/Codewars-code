#Just some of my code using my idea and Copilot.

def count_bits(n):
    return bin(n).count('1')

# print(count_bits(1234))
def digital_root(n):
    temp = 0
    while(n >= 10):
        for i in str(n):
            temp += int(i)
        n = temp
        temp = 0
    return n
# print(digital_root(493193))

def xo(s):
    s = s.lower()
    x = s.count('x')
    o = s.count('o')
    return x == o
# print(xo("fghh"))

def friend(x):
    arr = []
    for i in x:
        if len(i) == 4:
            arr.append(i)
    return arr
# print(friend(["Ryan", "Kieran", "Jason", "Yous"]))

def validate_pin(pin):
    if (len(pin) == 4 or len(pin) == 6) and pin.isdigit():
        return True
    return False

def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if numbers[i] + numbers[j] == target and i != j:
                return [i, j]
    return None

# print(two_sum([2, 2, 3], 4))

def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    n = walk.count('n')
    s = walk.count('s')
    e = walk.count('e')
    w = walk.count('w')
    if n == s and e == w:
        return True
    return False
# print(is_valid_walk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

def find_nb(m):
    n = 0
    while m > 0:
        n += 1
        m -= n ** 3
    if m == 0:
        return n
    return -1

# def tower_builder(n_floors):
#     arr = []
#     for i in range(n_floors):
#         arr.append(" " * (n_floors-1-i) + "*" * (2*i+1) + " " * (n_floors-1-i))
#     return arr

def tower_builder(n_floors, block_size):
    arr = []
    for i in range(n_floors):
        for j in range(block_size[1]):
            arr.append(" " * (n_floors-1-i)* block_size[0] + "*" * (2*i+1)* block_size[0] + " " * (n_floors-1-i)* block_size[0])
    return arr
# print(tower_builder(3, (2, 3)))

# def find_uniq(arr):
#     a,b = set(arr) # or use sort and a[-1] to get to the last one
#     return a if arr.count(a) == 1 else b
# # print(find_uniq([1, 1, 2, 1, 1]))

def find_uniq(arr):

    lowered = [set(word.lower()) for word in arr]
    counts = {}
    for word in lowered:
        counts[frozenset(word)] = counts.get(frozenset(word), 0) + 1
    
    for i, word_set in enumerate(lowered):
        if counts[frozenset(word_set)] == 1:
            return arr[i]

# print(find_uniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) # => 'BbBb'

def score(dice):
    score = 0
    counts = {}

    for die in dice:
        counts[die] = counts.get(die, 0) + 1

    for die in counts:
        count = counts[die]
        if die == 1:
            score += (count // 3) * 1000 + (count % 3) * 100
        elif die == 5:
            score += (count // 3) * 500 + (count % 3) * 50
        else:
            score += (count // 3) * die * 100

    return score

def bouncing_ball(h, bounce, window):
    count = 0
    if h <= 0 or bounce <= 0 or bounce >= 1 or window >= h:
        return -1
    while h> window:
        h *= bounce
        count += 1

    return count * 2 - 1 if count > 0 else -1

from functools import lru_cache

@lru_cache(maxsize=None)

# or
# def memoized(f):
#     cache = {}
#     def wrapped(k):
#         v = cache.get(k)
#         if v is None:
#             v = cache[k] = f(k)
#         return v
#     return wrapped
# @memoized canalso used this instead of lru_cache
def recur_fibo(n):
    if n <= 1:
        return n
    return recur_fibo(n-1) + recur_fibo(n-2)

def perimeter(n):
    total = 0
    for i in range(n+2):
        total += recur_fibo(i)
    return total * 4
# print(perimeter(500))

def sort_array(source_array):
    odds = sorted([x for x in source_array if x % 2 != 0])
    return [odds.pop(0) if x % 2 != 0 else x for x in source_array] # odds.pop(0) removes the first element from the list and returns it
# print(sort_array([5, 3, 2, 8, 1, 4]))

def solution(args):
    if len(args) == 0:
        return ""
    args.sort()
    result = []
    start = args[0]
    end = args[0]
    for i in range(1,len(args)):
        if args[i] == end + 1: # Check if the current number is == end plus 1
            end = args[i]
        else:
            if start == end: # Check if the start and end are the same
                result.append(str(start))
            elif start + 1 == end: # Check if the start plus 1 == end
                result.append(str(start))
                result.append(str(end))
            else: # Check if the start and end are not consecutive
                result.append(f"{start}-{end}")
            start = args[i]
            end = args[i]

    # check the last range
    if start == end:
        result.append(str(start))
    elif start + 1 == end:
        result.append(str(start))
        result.append(str(end))
    else:
        result.append(f"{start}-{end}")
    return ",".join(result)

# print(solution([-6, -3, -2, -1, 0, 1, 2, 3, 4, 5]))

# def snail(snail_map):
#     result = []
#     while snail_map:
#         result += snail_map.pop(0)  # Take the first row
#         if snail_map and snail_map[0]:  # Check if there are still rows left
#             for row in snail_map:
#                 result.append(row.pop())  # Take the last element of each row
#         if snail_map:
#             result += snail_map.pop()[::-1]  # Take the last row in reverse order
#         if snail_map and snail_map[0]:
#             for row in snail_map[::-1]:
#                 result.append(row.pop(0))  # Take the first element of each row in reverse order
#     return result


import numpy as np

def snail(array):
    m = []
    array = np.array(array)
    while len(array) > 0:
        m += array[0].tolist() # .tolist() converts the numpy array to a lists
        array = np.rot90(array[1:])
        print(array)
    return m
# print(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

def is_solved(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] != 0:
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != 0:
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] != 0:
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != 0:
        return board[0][2]
    if any(board[i][j] == 0 for i in range(3) for j in range(3)):
        return -1
    return 0
board = [[0, 0, 1],
        [0, 1, 2],
        [1, 0, 2]]
# print(is_solved(board))

import re

def mix(s1, s2):
    str1 = ''.join(re.findall(r'[a-z]', s1))
    str2 = ''.join(re.findall(r'[a-z]', s2))
    count1 = {}
    count2 = {}

    for letter in str1:
        count1[letter] = count1.get(letter, 0) + 1

    for letter in str2:
        count2[letter] = count2.get(letter, 0) + 1

    entries = []
    all_letters = set(count1.keys()).union(count2.keys())
    for letter in all_letters:
        c1 = count1.get(letter, 0)
        c2 = count2.get(letter, 0)

        if c1 <= 1 and c2 <= 1:
            continue

        if c1 == c2 and c1 > 1:
            entries.append((c1, f"=:{letter*c1}"))
        elif c1 > c2 and c1 > 1:
            entries.append((c1, f"1:{letter*c1}"))
        elif c2 > c1 and c2 > 1:
            entries.append((c2, f"2:{letter*c2}"))

    entries.sort(key=lambda x: (-x[0], x[1].startswith('=:'),x[1]))
    result = [item[1] for item in entries]

    return '/'.join(result)
# print(mix("Sadus:cpms>orqn3zecwGvnznSgacs", "MynwdKizfd$lvse+gnbaGydxyXzayp")) 

from math import gcd
from functools import reduce

def solution(lst):
    if not lst:
        return 0
    common = reduce(gcd, lst)
    return common * len(lst)

# print(solution([6, 9, 21]))

def spiralize(size):
    spiral = [[0] * size for _ in range(size)]
    x, y = 0, 0
    spiral[y][x] = 1

    dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    dir_idx = 0

    def can_move(nx, ny,chk_idx):
        if not (0 <= nx < size and 0 <= ny < size):
            return False
        if spiral[ny][nx] == 1:
            return False
        
        for i in range(-1, 2): # checking adjacent position
            fdx, fdy = dirs[(chk_idx + i) % 4]
            fx, fy = nx + fdx, ny + fdy
            if 0 <= fx < size and 0 <= fy < size:
                if spiral[fy][fx] == 1:
                    return False
        return True

    while True:
        dx, dy = dirs[dir_idx]
        nx, ny = x + dx, y + dy # step 1
        # print(dx,dy,nx,ny,x,y)

        if can_move(nx, ny, dir_idx):
            x, y = nx, ny
            spiral[y][x] = 1
        else:
            # turn right
            dir_idx = (dir_idx + 1) % 4
            dx, dy = dirs[dir_idx]
            nx, ny = x + dx, y + dy # using for check move this is not changing the x and y and this is also equal to step 1
            # print(spiral,dx,dy,nx,ny,x,y)
            if not can_move(nx, ny, dir_idx):
                break

    return spiral
# print(spiralize(6))

def recover_secret(triplets):
    from collections import defaultdict
    char_set = defaultdict(set)
    all_chars = set([char for triplet in triplets for char in triplet])

    for triplet in triplets:
        a, b, c = triplet
        char_set[b].add(a)
        char_set[c].add(b)
    result = []

    while all_chars:
        for char in all_chars:
            # If ch has no dependencies in the remaining set, it comes next
            if not char_set[char].intersection(all_chars):
                result.append(char)
                all_chars.remove(char)
                break

    return ''.join(result)
# triplets = [
#           ['t','u','p'],
#           ['w','h','i'],
#           ['t','s','u'],
#           ['a','t','s'],
#           ['h','a','p'],
#           ['t','i','s'],
#           ['w','h','s']
#         ]
# print(recover_secret(triplets))

import math

class Sudoku(object):
    def __init__(self, data):
        self.data = data
        self.size = len(data)

    def is_valid(self):
        # Check if it is int
        for row in self.data:
            if any(type(n) != int for n in row):
                return False
        
        if self.size != len(self.data[0]):
            return False

        # Check root N
        root = int(math.sqrt(self.size))
        if root * root != self.size:
            return False

        # Check nums
        valid_nums = set([i for i in range(1, self.size + 1)])
        for i in range(self.size):
            if set(self.data[i]) != valid_nums:
                return False
            if set(row[i] for row in self.data) != valid_nums:
                return False

        # Check each box by iterating over smaller boxes
        for y in range(0, self.size, root):
            for x in range(0, self.size, root):
                block = []
                for dy in range(root):
                    for dx in range(root):
                        block.append(self.data[y + dy][x + dx])
                if set(block) != valid_nums:
                    return False

        return True

badSudoku1 = Sudoku([
    [0,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9],
    [1,2,3, 4,5,6, 7,8,9]
])

badSudoku2 = Sudoku([
    [1,2,3,4,5],
    [1,2,3,4],
    [1,2,3,4],  
    [1]
])
goodSudoku1 = Sudoku([
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],

    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],
    
    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,4]
])

goodSudoku2 = Sudoku([
    [1,4, 2,3],
    [3,2, 4,1],

    [4,1, 3,2],
    [2,3, 1,4]
])
print(badSudoku1.is_valid()) # False
print(badSudoku2.is_valid()) # False
print(goodSudoku1.is_valid()) # True
print(goodSudoku2.is_valid()) # True
        

