class Carpool < ApplicationRecord
  belongs_to :driver, class_name: "User" # Single Driver per Carpool
  has_many :carpool_riders
  has_many :users, through: :carpool_riders
end
