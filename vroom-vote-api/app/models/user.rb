class User < ApplicationRecord
  has_secure_password
  has_many :carpools_driven, class_name: "Carpool", foreign_key: "driver_id"

  has_many :carpool_riders
  has_many :carpools, through: :carpool_riders
end
