class ApplicationController < ActionController::API

  private

  def encode_token(payload)
   JWT.encode(payload, secret, algorithm)
  end

  def authorize_user!
   if !current_user.present?
     render json: {error: 'No user id present'}
   end
  end

  # def signin_user(email, password)
  #   user = User.find_by(email: email)
  #   if user && user.authenticate(password)
  #     user
  #   else
  #     railse AuthError
  #   end
  # end

  def current_user
   current_user ||= User.find_by(id: token_user_id)
  end

  def token_user_id
   decoded_token.first['id']
  end

  def decoded_token
   if token
     begin
       JWT.decode(token, secret, true, {algorithm: algorithm})
     rescue JWT::DecodeError
       return [{}]
     end
   else
     [{}]
   end
  end

  def token
   request.headers['Authorization']
  end

  def secret
   "cantrip"
  end

  def algorithm
   "HS256"
  end


 #  before_action :authorized
 #
 # def encode_token(payload)
 #   JWT.encode(payload, "sqlit")
 # end
 #
 # def auth_header
 #   request.headers["Authorization"]
 # end
 #
 # def decoded_token
 #   if auth_header
 #       token = auth_header.split(" ")[1] #header: {'Authorization': 'Bearer JWTTOKEN'}
 #       begin
 #         JWT.decode(token, "sqlit", true, { algorithm: "HS256" })
 #       rescue JWT::DecodeError
 #         [{}]
 #       end
 #   end
 # end
 #
 # def current_user
 #   if decoded_token
 #     user_id = decoded_token[0]["user_id"]
 #     @user = User.find(user_id)
 #   end
 # end
 #
 # def logged_in?
 #   !!current_user
 # end
 #
 # def authorized
 #   render json: {message: "Please log in"}, status: 401 unless logged_in?
 # end
end

# class AuthError < StandardError
#   def initialize(msg="No user or invalid password")
#     super
#   end
# end
