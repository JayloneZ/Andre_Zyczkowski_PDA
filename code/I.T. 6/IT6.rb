class Player

attr_reader :name, :age, :team, :role, :is_active
def initialize()
  @name = "Snax",
  @age = 22,
  @team = "Virtus Pro",
  @role = "Rifler",
  @is_active = true
end

def player_profile()
  if :is_active == true
    return "#{:name} is a pro player playing for #{:team} as a #{:role}."
  else
    return "#{:name} is not currently active."
  end
end

end
