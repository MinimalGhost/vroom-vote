require 'uri'

class Api::V1::UsersController < ApplicationController

  def index
    districtDrivers = User.where(district: current_user.district, is_driver: true)

    render json: districtDrivers
    # otherwise send back drivers in district
  end

  def create
    user = User.new(user_params)
    carpool = Carpool.new()
    #get district and add it to user
    userAddress = URI.encode(user_params[:address])
    userLocale = URI.encode(user_params[:locale])
    response = RestClient.get("https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV['API_KEY']}&address=#{userAddress}#{userLocale}#{user_params[:_state]}")
    civicData = JSON.parse(response)
    obj = civicData['divisions'].values[2]
    user.district = obj.values[0]

    # Current users district drivers
    drivers = User.where(district: user.district, is_driver: true)

    if user.save
      # if user is driver create a carpool and associate it
      if user.is_driver
        carpool.driver_id = user.id
        carpool.save
      end
      # trying to implement seamless login after user creation
      user = User.find_by(username: params[:username])
      if user.present? && user.authenticate(params[:password])
        created_jwt = issue_token({id: user.id})
        render json: {
          user: UserSerializer.new(user),
          jwt: created_jwt,
          drivers: drivers
        }
      end
    else
      render json: {error: user.errors.first}
    end
  end

  private
    def user_params
      params.permit(:username, :address, :_state, :locale, :is_driver, :seats, :password, :password_confirmation)
    end
end
