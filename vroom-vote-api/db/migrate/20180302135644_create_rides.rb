class CreateRides < ActiveRecord::Migration[5.1]
  def change
    create_table :rides do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :rider
      t.timestamps
    end
  end
end
