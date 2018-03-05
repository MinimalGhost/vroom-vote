class CarpoolRider < ApplicationRecord
  belongs_to :carpool
  belongs_to :user
end
