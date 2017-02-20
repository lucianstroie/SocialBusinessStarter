class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :project_id, null: false
      t.integer :level, null: false
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
    add_index :pledges, :project_id
  end
end
