class Api::V1::CarpoolRidersController < ApplicationController

  def create
    CarpoolRider.new()
  end

  private

  def carpool_rider_params
    params.permit(:driver_id)
  end
end
