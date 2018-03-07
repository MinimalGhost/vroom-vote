class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :_state, :locale, :is_driver, :seats, :district, :latitude, :longitude, :charity

  # has_many :carpools_driven, class_name: "Carpool", foreign_key: "driver_id"

  # has_many :carpool_riders
  has_many :carpools

  # private
  # def carpools
  #   CarpoolSerializer.new(object.carpools).attributes
  # end
end
