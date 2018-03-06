class Api::V1::CarpoolRidersController < ApplicationController

  def show
    # check if user is already in a carpool

    rider = CarpoolRider.find_by(user_id: current_user.id)

    # If current user is in a carpool get their rider id
    # and get the associated carpool data

    carpool = Carpool.find_by(id: rider.carpool_id)
    # if they are already part of a carpool get that carpool info and return it
    if rider
      render json: carpool
    end
  end

  def create
    carpool = Carpool.find_by(driver_id: params[:_json])
    rider = CarpoolRider.new(carpool_id: carpool.id, user_id: current_user.id)
    if rider.save
      render json: carpool
    else
      render json: { error: rider.errors.first }
    end
  end
end
