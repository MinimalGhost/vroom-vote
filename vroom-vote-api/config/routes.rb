Rails.application.routes.draw do
  scope '/api/v1' do
    resources :drivers

    post '/signup', to: 'auth#create'
    post '/login', to: 'auth#login'
    get '/current_user', to: 'auth#show'
  end
end
