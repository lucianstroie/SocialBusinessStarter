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

class Giving < ActiveRecord::Base
  validates :user_id, :pledge_id, presence: true

  belongs_to :user
  belongs_to :pledge
end
