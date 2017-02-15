class ChangeUsers < ActiveRecord::Migration
  def change
    add_column :users, :location, :string
    add_column :users, :name, :string, null: false
  end
end
