class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :address
      t.string :locale
      t.string :_state
      t.string :district
      t.decimal :latitude
      t.decimal :longitude
      t.boolean :is_driver
      t.string :charity
      t.string :charity_url
      t.integer :seats
      t.boolean :full, default: false
      t.string :password_digest

      t.timestamps
    end
  end
end
