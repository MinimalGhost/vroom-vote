# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jw_driver = User.create(username: 'James Webb', address: '98-19 64th Ave', locale: 'Flushing', _state: 'NY', district: nil, is_driver: true, password_digest: 1234)

sk_driver = User.create(username: 'Sarah Kamil', address: '63-37 108th St', locale: 'Forest Hills', _state: 'NY', district: nil, is_driver: true, password_digest: 1234)

bt_driver = User.create(username: 'Ben Travis', address: '102-40 67th St', locale: 'Flushing', _state: 'NY', district: nil, is_driver: true, password_digest: 1234)

bad_driver = User.create(username: 'Bad District Driver', address: '72-10 37th Ave', locale: 'Flushing', _state: 'NY', district: nil, is_driver: true, password_digest: 1234)

ls_rider = User.create(username: 'Linda Sully', address: '104-21 68th St', locale: 'Flushing', _state: 'NY', district: nil, is_driver: false, password_digest: 1234)
