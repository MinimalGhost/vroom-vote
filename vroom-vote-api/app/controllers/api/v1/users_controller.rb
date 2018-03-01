require 'uri'

class Api::V1::UsersController < ApplicationController

  def index
    districtDrivers = User.where(district: current_user.district, is_driver: true)
    render json: districtDrivers
  end

  def create
    user = User.new(user_params)
    #concat whitespace with %20
    userAddress = URI.encode(user_params[:address])
    userLocale = URI.encode(user_params[:locale])
    response = RestClient.get("https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV['API_KEY']}&address=#{userAddress}#{userLocale}#{user_params[:_state]}")

    civicData = JSON.parse(response)
    obj = civicData['divisions'].values[2]
    user.district = obj.values[0]

    if user.save
      render json: user
    else
      render json: {error: user.errors.first}
    end
  end

  private

    def user_params
      params.permit(:username, :address, :_state, :locale, :is_driver,  :password, :password_confirmation)
    end

end
