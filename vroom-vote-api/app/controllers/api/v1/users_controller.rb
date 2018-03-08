require 'uri'

class Api::V1::UsersController < ApplicationController

  def index
    districtDrivers = User.where(district: current_user.district, is_driver: true)

    render json: districtDrivers
    # otherwise send back drivers in district
  end

  # google maps api = ENV['MAPS_KEY']
  # google geocode api = ENV['GEOCODE_KEY']

  def create
    user = User.new(user_params)
    carpool = Carpool.new()

    # get lat lon and add it to user
    uAddress = user_params[:address].gsub(' ','+')
    uLoc = user_params[:locale].gsub(' ','+')
    uState = user_params[:_state]
    uMaster = "#{uAddress}#{uLoc}#{uState}"
    geoResponse = RestClient.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{uMaster}&key=#{ENV['GEOCODE_KEY']}")

    geoData = JSON.parse(geoResponse)
    user.latitude = geoData['results'][0]['geometry']['location']['lat']
    user.longitude = geoData['results'][0]['geometry']['location']['lng']
    # user.latitude = geoData['geometry']['location'].values[0]
    # user.longitude = geoData['geometry']['location'].values[1]

    #get district and add it to user
    userAddress = URI.encode(user_params[:address])
    userLocale = URI.encode(user_params[:locale])
    response = RestClient.get("https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV['API_KEY']}&address=#{userAddress}#{userLocale}#{user_params[:_state]}")
    civicData = JSON.parse(response)
    obj = civicData['divisions'].values[2]
    user.district = obj.values[0]

    # save senator and rep names/images
    sen1 = civicData['officials'][2]
    sen2 = civicData['officials'][3]
    rep = civicData['officials'][4]
    user.senator_1 = sen1.values[0]
    user.senator_1_img = sen1.values[5]
    user.senator_2 = sen2.values[0]
    user.senator_2_img = sen2.values[5]
    user.house_rep = rep.values[0]
    user.house_rep_img = rep.values[5]
    # Current users district drivers
    drivers = User.where(district: user.district, is_driver: true, full: false)


    if user.save

      # if user is driver create a carpool and associate it
      if user.is_driver
        carpool.driver_id = user.id
        carpool.save
        CarpoolRider.create(carpool_id: carpool.id, user_id: user.id)
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
      params.permit(:username, :email, :address, :_state, :locale, :is_driver, :seats, :charity, :charity_url, :password, :password_confirmation)
    end
end
