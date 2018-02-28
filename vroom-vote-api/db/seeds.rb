# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jamesDriver = User.create(username: 'james_d', email: 'jd@yahoo.com', first_name: 'james', last_name: 'allis', address: '210 west elm', district: '23', state: 'CA', is_driver: true)

felixRider = User.create(username: 'felix_s', email: 'fs@hotmail.com', first_name: 'felix', last_name: 'sater', address: '210 west elm', district: '23', state: 'CA', is_driver: false, driver_id: 1)
