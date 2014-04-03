
def f(p, i):
	s = set()
	for j in xrange(0, 7):
		val = j ** 2 ** i % p
		s.add(val)
	return s

primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]

for p in primes:
	print "p = ", p
	print "========="
	for i in xrange(0, 10):
		s = f(p, i)
		print s