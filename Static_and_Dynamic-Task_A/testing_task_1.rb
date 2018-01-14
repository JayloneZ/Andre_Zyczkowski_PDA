### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
	# 'val' should be in parenthesis
  if val = 1
	# val should use a comparison operator, not an assignment operator
  return true
	# should be indented
  else
  return false
	# should be indented
  end
end

dif max a b
# 'def' is misspelled, should be written 'def max(a, b)'
  if a > b
      return a
			# too many indents
  else
  b
	# should be indented
  end
end
# too many 'end' lines
end

def looper
  for i in 1..10
  puts i
	# should be indented
  end
end

failures = 0

if looper == 10
	# looper will never equal 10, as it doesn't return anything
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
	# missing 'end'


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
	# 'func1(3)' is not valid in this scope, should be 'max(100,1)'
  failrues = failures + 1
	# 'failrues' is misspelled
end


if failures
	# 'failures' will always pass as this is simply checking whether
	# the variable exists. 'if failures != 0' would be more applicable
  puts "Test Failed"
else
  puts "Test Passed"
end
