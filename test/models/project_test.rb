# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  subtitle           :string           not null
#  body               :text             not null
#  end_date           :date             not null
#  category           :string           not null
#  location           :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  goal               :integer          not null
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
