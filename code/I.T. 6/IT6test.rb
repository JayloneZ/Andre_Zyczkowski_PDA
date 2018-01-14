require('minitest/autorun')
require('minitest/rg')
require_relative('./IT6.rb')

class TestPlayer < MiniTest::Test

  def setup
    @snax =  Player.new()
  end

  def test_player_profile
    result = @snax.player_profile()
    assert_equal("", result)
  end

end
