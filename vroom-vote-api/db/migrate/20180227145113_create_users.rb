class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :address
      t.string :locale
      t.string :_state
      t.string :district
      t.boolean :is_driver
      t.string :password_digest

      t.timestamps
    end
  end
end
