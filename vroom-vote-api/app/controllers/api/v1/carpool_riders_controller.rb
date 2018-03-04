class Api::V1::CarpoolRidersController < ApplicationController

  def show
    # check if user is already in a carpool
    rider = CarpoolRider.find_by_rider_id(current_user.id)
    # if they are already part of a carpool get that carpool info and return it

    if rider
      render json: rider.carpool.driver
    end
  end

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
