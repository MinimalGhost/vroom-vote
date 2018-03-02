class User < ApplicationRecord
  has_secure_password
  has_many :rides, dependent: :destroy
  has_many :riders, through: :rides
end
