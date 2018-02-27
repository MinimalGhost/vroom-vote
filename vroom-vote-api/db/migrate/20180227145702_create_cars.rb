class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.integer :driver_id
      t.integer :rider_id
      t.integer :seats

      t.timestamps
    end
  end
end
