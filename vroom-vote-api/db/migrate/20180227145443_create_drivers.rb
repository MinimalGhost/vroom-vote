class CreateDrivers < ActiveRecord::Migration[5.1]
  def change
    create_table :drivers do |t|
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :district
      t.string :state
      t.integer :user_id

      t.timestamps
    end
  end
end
