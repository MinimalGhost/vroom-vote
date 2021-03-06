# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180303163254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carpool_riders", force: :cascade do |t|
    t.integer "carpool_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "carpools", force: :cascade do |t|
    t.integer "driver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "address"
    t.string "locale"
    t.string "_state"
    t.string "district"
    t.string "senator_1"
    t.string "senator_1_img"
    t.string "senator_2"
    t.string "senator_2_img"
    t.string "house_rep"
    t.string "house_rep_img"
    t.decimal "latitude"
    t.decimal "longitude"
    t.boolean "is_driver"
    t.string "charity"
    t.string "charity_url"
    t.integer "seats"
    t.boolean "full", default: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
