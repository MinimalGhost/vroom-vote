class Api::V1::CarpoolRidersController < ApplicationController

  def create
    request = params[:_json]
    carpool = Carpool.find_by_driver_id(request)
    rider = CarpoolRider.new(carpool_id: carpool.id, rider_id: current_user.id)
    if rider.save
      render json: { carpool: carpool }
    else
      render json: { error: rider.errors.first }
    end
  end
end
