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

class Pledge < ActiveRecord::Base
  validates :project_id, :level, :title, :description, presence: true

  belongs_to :project
  belongs_to :user
end
