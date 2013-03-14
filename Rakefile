require 'sprockets'

task :configure_sprockets do
  @sprok_env = Sprockets::Environment.new
end

namespace :assets do
  task :set_path => :configure_sprockets do
    @sprok_env.append_path "modules/"
  end

  desc "Compile assets."
  task :compile => :set_path do
    @sprok_env["manifest.js"].write_to "strapTK.js"
  end

  desc "Minify assets"
  task :minify => :set_path do
    require 'uglifier'

    @sprok_env.js_compressor = Uglifier.new
    @sprok_env["manifest.js"].write_to "strapTK.min.js"
  end
end

namespace :site do

  task :set_path => :configure_sprockets do
    @sprok_env.append_path "strapTK/"
  end

  desc "Build site files"
  task :build => :set_path do
    require "haml"
    require "tilt"

    @sprok_env.register_engine ".haml", Tilt::HamlTemplate

    @sprok_env["testing.scss"].write_to "strapTK/testing.css"
    @sprok_env["index.html.haml"].write_to "strapTK/index.html"
  end
end