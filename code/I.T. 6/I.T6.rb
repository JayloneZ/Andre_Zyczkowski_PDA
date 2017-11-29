snax = {
  name: "Snax",
  age: "21",
  team: "Virtus Pro",
  role: "Rifler",
  is_active: true
}

def player_profile(player)
  if player[:is_active] == true
    return "#{player[:name]} is a pro player playing for #{player[:team]} as a #{player[:role]}."
  else
    return "#{player[:name]} is not currently active."
  end
end

puts player_profile(snax)
