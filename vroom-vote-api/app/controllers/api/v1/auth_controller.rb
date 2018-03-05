class Api::V1::AuthController < ApplicationController
  before_action :authorize_user!, only: [:show]

  def show
    render json: {user: current_user}
  end

  def create
    # The current user
    user = User.find_by(username: params[:username])

    # Current users district drivers
    drivers = User.where(district: user.district, is_driver: true)

    # If current user is in a carpool get their rider id
    # and get the associated carpool data
    rider = CarpoolRider.find_by_rider_id(user.id)
    carpool = Carpool.find_by(id: rider.carpool_id)

    if user.present? && user.authenticate(params[:password])
      created_jwt = issue_token({id: user.id})
      render json: {user: user, jwt: created_jwt, carpool: carpool, drivers: drivers}
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end

end
