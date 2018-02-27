class Car < ApplicationRecord
  belongs_to :driver
  belongs_to :rider
end
