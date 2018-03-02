class RideSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :rider_id
end
