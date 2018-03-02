class Ride < ApplicationRecord
  belongs_to :user
  belongs_to :rider, class_name: "User"

  def self.create_ride_for_ids(user_id, rider_id)
    user_ride = Ride.create(user_id: user_id, rider_id: rider_id)
    rider_ride = Ride.create(user_id: rider_id, rider_id: user_id)
    [user_ride, rider_ride]
  end

  def self.destroy_ride_for_ids(user_id, rider_id)
    ride1 = Ride.find_by(user_id: user_id, rider_id: rider_id)
    ride2 = Ride.find_by(user_id: rider_id, rider_id: user_id)
    ride1.destroy
    ride2.destroy
  end
end
