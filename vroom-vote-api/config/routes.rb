Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :rides
      post "/auth", to: "auth#create"
      get "/current_user", to: "auth#show"
      get "/drivers", to: "users#index"
    end
  end
end
