class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :_state, :locale, :is_driver, :seats

  has_many :carpools_driven, class_name: "Carpool", foreign_key: "driver_id"

  has_many :carpool_riders
  has_many :carpools_ridden, through: :carpool_riderscd 
end
