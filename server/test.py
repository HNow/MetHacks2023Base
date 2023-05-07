def longestValidParentheses(s):
    stack = [-1]
    max_len = 0
    for i in range(len(s)):
        if s[i] == '(': 
            stack.append(i)
        else:
            stack.pop()
            if len(stack) == 0:
                stack.append(i)
            else:
                max_len = max(max_len, i - stack[-1])
    return max_len
import sys;
a = str(sys.argv[1])
b = int(sys.argv[2])
user_result = longestValidParentheses(a)
print(user_result==b)