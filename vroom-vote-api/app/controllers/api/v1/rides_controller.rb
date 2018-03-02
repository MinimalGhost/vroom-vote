class RidesController < ApplicationController
  def create
    if params.include?(:rider_id)
      new_rides = Ride.create_reciprocal_for_ids(current_user.id, params[:rider_id])
    end
  end

  def destroy
    Ride.destroy_reciprocal_for_ids(current_user.id, params[:rider_id])
  end
end
