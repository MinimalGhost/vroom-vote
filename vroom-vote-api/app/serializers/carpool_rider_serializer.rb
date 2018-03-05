class CarpoolRiderSerializer < ActiveModel::Serializer
  attributes :id, :carpool_id, :user_id
  belongs_to :carpool
  belongs_to :user
end
