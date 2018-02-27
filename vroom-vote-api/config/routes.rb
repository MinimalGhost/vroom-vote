Rails.application.routes.draw do
  scope '/api/v1' do
    resources :drivers

    post '/auth', to: 'auth#create'
    post '/signup', to: 'auth#signup'
    post '/login', to: 'auth#login'
    get '/current_user', to: 'auth#show'
  end
end
