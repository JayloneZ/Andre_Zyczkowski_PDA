def number_included(num)
  array = (1..7).to_a
  array.include?(num)
end


puts number_included(3)
