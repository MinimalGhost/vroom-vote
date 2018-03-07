class Api::V1::AuthController < ApplicationController
  before_action :authorize_user!, only: [:show]

  def show
    drivers = User.where(district: current_user.district, is_driver: true, full: false)

    created_jwt = issue_token({id: current_user.id})
    render json: {
      user: UserSerializer.new(current_user),
      jwt: created_jwt,
      drivers: drivers
    }
  end

  def create
    # The current user
    user = User.find_by(username: params[:username])

    # Current users district drivers
    drivers = User.where(district: user.district, is_driver: true)

    if user.present? && user.authenticate(params[:password])
      created_jwt = issue_token({id: user.id})
      render json: {
        user: UserSerializer.new(user),
        jwt: created_jwt,
        drivers: drivers
      }
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end

end
