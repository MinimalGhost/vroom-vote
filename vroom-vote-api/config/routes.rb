Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post "/auth", to: "auth#create"
      post "/ride", to: "carpool_riders#create"
      get "/current_user", to: "auth#show"
      get "/drivers", to: "users#index"
      get "/driver", to: "carpool_riders#show"
    end
  end
end
