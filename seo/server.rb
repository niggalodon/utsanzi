require 'sinatra'
require 'sinatra/reloader' if development?
require 'pony'
require 'sinatra/flash'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/pricing' do
  erb :pricing
end

get '/contact' do
  erb :contact
end

get '/services' do
  erb :services
end

post '/contact' do
  send_message
  redirect to('/'), notice: 'Thank you for your message. We\'ll be in touch soon.'
end

not_found do
  erb :not_found, :layout => :fourohfour
end

get '/fake-error' do
  status 500
  "There’s nothing wrong, really :P"
end

helpers do
  def send_message
    Pony.mail(
      :from => 'contact@ui.co.zw',
      :to => 'info@ui.co.zw',
      :subject => params[:name] + " " + params[:email] + " has contacted you",
      :body => params[:message],
      :via => :smtp,
      :via_options => {
        :address => 'smtp.migadu.com',
        :port => '587',
        :enable_starttls_auto => true,
        :user_name =>  'contact@ui.co.zw',
        :password =>  'Jm7nVp^yvlk!S1',
        :authentication => :plain,
        :domain => 'migadu.com'
    })
  end
end