class CarpoolRider < ApplicationRecord
  belongs_to :carpool
  belongs_to :rider, class_name: "User"
end
