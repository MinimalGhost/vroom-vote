class User < ApplicationRecord
  has_secure_password
  has_many :riders, class_name: "User",
                    foreign_key: "driver_id"

  belongs_to :driver, class_name: "User"
end
