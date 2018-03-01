class Api::V1::AuthController < ApplicationController
  before_action :authorize_user!, only: [:show]

  def show
    render json: {
      id: current_user.id,
      username: current_user.username,
      address: current_user.address,
      locale: current_user.locale,
      _state: current_user._state,
      district: current_user.district,
      is_driver: current_user.is_driver
    }
  end

  def create
    user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      created_jwt = issue_token({id: user.id})
      render json: {username: user.username, id: user.id, jwt: created_jwt}
    else
      render json: {
        error: 'Username or password incorrect'
      }, status: 404
    end
  end

end
