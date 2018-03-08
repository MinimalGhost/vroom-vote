class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :address, :_state, :locale, :is_driver, :seats, :district,   :senator_1, :senator_1_img, :senator_2, :senator_2_img, :house_rep, :house_rep_img, :latitude, :longitude, :charity, :charity_url, :full

  # has_many :carpools_driven, class_name: "Carpool", foreign_key: "driver_id"

  # has_many :carpool_riders
  has_many :carpools

  # private
  # def carpools
  #   CarpoolSerializer.new(object.carpools).attributes
  # end
end
