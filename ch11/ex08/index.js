function benchmark(repeat = 54) {
    const target = `${"a".repeat(repeat)}!`;
    console.time(target);
    const result = target.match(/^(a|aa)+$/);
    console.timeLog(target, repeat, result);
}

benchmark(1)
benchmark(2)
benchmark(3)
benchmark(4)
benchmark(5)
benchmark(6)
benchmark(7)
benchmark(8)
benchmark(9)
benchmark(10)

benchmark(11)
benchmark(12)
benchmark(13)
benchmark(14)
benchmark(15)
benchmark(16)
benchmark(17)
benchmark(18)
benchmark(19)
benchmark(20)

benchmark(21)
benchmark(22)
benchmark(23)
benchmark(24)
benchmark(25)
benchmark(26)
benchmark(27)
benchmark(28)
benchmark(29)
benchmark(30)

benchmark(31)
benchmark(32)
benchmark(33)
benchmark(34)
benchmark(35)
benchmark(36)
benchmark(37)
benchmark(38)
benchmark(39)
benchmark(40)

benchmark(41)
benchmark(42)
benchmark(43)
benchmark(44)
benchmark(45)
benchmark(46)
benchmark(47)
benchmark(48)
benchmark(49)
benchmark(50)

benchmark(51)
benchmark(52)
benchmark(53)
benchmark(54)