# == Schema Information
#
# Table name: pledges
#
#  id          :integer          not null, primary key
#  project_id  :integer          not null
#  level       :integer          not null
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PledgeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
