class Rider < ApplicationRecord
  belongs_to :user
  belongs_to :driver
end
