class CarpoolSerializer < ActiveModel::Serializer
  attributes :id, :driver_id
  belongs_to :driver, class_name: "User" # Single Driver per Carpool
  has_many :carpool_riders
  has_many :riders, through: :carpool_riders
end
