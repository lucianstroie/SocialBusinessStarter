class CreateGivings < ActiveRecord::Migration
  def change
    create_table :givings do |t|
      t.integer :user_id, null: false
      t.integer :pledge_id, null: false

      t.timestamps null: false
    end
    add_index :givings, :user_id
    add_index :givings, :pledge_id
    add_column :projects, :goal, :integer, null: false
  end
end
