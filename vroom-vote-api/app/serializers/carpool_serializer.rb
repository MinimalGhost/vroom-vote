class CarpoolSerializer < ActiveModel::Serializer
  attributes :id, :driver_id, :users
  # belongs_to :driver, class_name: "User" # Single Driver per Carpool
  # has_many :users
  # has_many :carpool_riders
  # has_many :riders, through: :carpool_riders
  # private
  # def users
  #   UserSerializer.new(object.users).attributes
  # end
end
