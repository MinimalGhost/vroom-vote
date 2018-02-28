class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only [:index]

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def profile
    if current_user
      render json: current_user, status: 200
    else
      render json: { message: "User not found" }, status: 404
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: {message: 'User deleted'}
  end

  def user_params
    params.require(:user).permit(
      :email,
      :password
    )
  end
end
