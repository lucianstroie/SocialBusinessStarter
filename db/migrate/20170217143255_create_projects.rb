class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :subtitle, null: false
      t.text :body, null: false
      t.date :end_date, null: false
      t.string :category, null: false
      t.string :location, null: false

      t.timestamps null: false
    end
    add_index :projects, :user_id
  end
end
