class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :_state, :locale, :is_driver
end
