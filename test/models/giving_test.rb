# == Schema Information
#
# Table name: givings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  pledge_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class GivingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
