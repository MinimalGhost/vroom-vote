class CarpoolRiderSerializer < ActiveModel::Serializer
  attributes :id, :carpool_id, :rider_id
  belongs_to :carpool
  belongs_to :rider, class_name: "User"
end
