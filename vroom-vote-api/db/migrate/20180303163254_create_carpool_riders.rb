class CreateCarpoolRiders < ActiveRecord::Migration[5.1]
  def change
    create_table :carpool_riders do |t|
      t.integer :carpool_id
      t.integer :rider_id

      t.timestamps
    end
  end
end
