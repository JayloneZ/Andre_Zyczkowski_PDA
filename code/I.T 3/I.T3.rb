names = ["Henrietta", "Maggie", "Heracles", "Tom", "Percy"]


def search_names(array, name)
  return array.include?(name)
end

puts search_names(names, "Maggie")
