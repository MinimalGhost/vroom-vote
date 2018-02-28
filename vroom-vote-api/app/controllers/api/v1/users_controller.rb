require 'uri'

class Api::V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    #concat whitespace with %20
    userAddress = URI.encode(user_params[:address])
    userLocale = URI.encode(user_params[:locale])
    response = RestClient.get("https://www.googleapis.com/civicinfo/v2/representatives?key=#{ENV['API_KEY']}&address=#{userAddress}#{userLocale}#{user_params[:_state]}")

    civicData = JSON.parse(response)

    # gameContent['results'].each do |obj|
    #   triviaRound = Content.new(
    #     question: obj['question'],
    #     correct: obj['correct_answer'],
    #     incorrect: obj['incorrect_answers'].join('^'))
    #     if triviaRound.save
    #       puts('successfully saved')
    #     else
    #       puts('nope')
    #       render json: {errors: triviaRound.errors.full_messages}, status: 422
    #     end
    # end

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
