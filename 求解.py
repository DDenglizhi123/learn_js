# 定义数字
numbers = [116, 49, 37, 9, 5]

# 定义符号列表，使用 0 表示 '+'，1 表示 '-'
# 2^4 = 16种组合（因为有4个符号位）
for i in range(16):
    # 构造当前的符号组合
    ops = []
    for j in range(4):
        # 检查 i 的第 j 位是 0 还是 1（用位运算）
        if (i >> j) & 1:
            ops.append('-')
        else:
            ops.append('+')

    # 构造表达式，从第一个数开始
    expr = str(numbers[0])
    total = numbers[0]
    for k in range(4):
        if ops[k] == '+':
            total += numbers[k + 1]
        else:
            total -= numbers[k + 1]
        expr += ops[k] + str(numbers[k + 1])

    # 判断是否等于 100
    if total == 100:
        print("Found solution:", expr, "= 100")