class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def show
    render json: @current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      token = encode_token({ id: @user.id })
      render json: {username: @user.username, jwt: token}
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def login
    # check for user with this email
    @user = User.find_by(email: params[:email])
    # if it exists, make sure password matches
    if user.present? && user.authenticate(params[:password])
      # if password matches, render back a json response of user info
      created_jwt = issue_token({id: user.id})
      render json: {user: user, jwt: created_jwt}
    else
      # otherwise, render back an error response
      render json: {
        error: 'Email or password incorrect'
      }, status: 404
    end
  end


  private

  def user_params
    params.require(:user).permit(
      :email,
      :username,
      :password,
      :password_confirmation
    )
  end
end
