Dir['./*/*.rb'].each { |file| load file }
include FaviconsHelper

# FIXME: this should be replaced by postcss tools
# activate :autoprefixer do |prefix|
#   prefix.browsers = "last 2 versions"
# end

activate :i18n,
         langs: %i[en hu],
         mount_at_root: :en

config[:js_dir] = 'javascripts'
config[:css_dir] = 'stylesheets'
config[:images_dir] = 'images'

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
set :url_root, @app.data.site.host
set :markdown_engine, :kramdown
set :haml, { :format => :html5 }

activate :livereload

configure :development do
  set      :debug_assets, true
  activate :pry
end

configure :build do
  set      :asset_host, @app.data.site.host
  set      :relative_links, true
  activate :asset_hash
  activate :directory_indexes
  activate :favicon_maker, icons: generate_favicons_hash
  activate :gzip
  activate :minify_html
  activate :images do |images|
    # Optimize images (default: false)
    images.optimize = true
  end
  activate :search_engine_sitemap
  activate :relative_assets
  activate :robots,
           rules: [{ user_agent: '*', allow: %w[/] }],
           sitemap: File.join(@app.data.site.host, 'sitemap.xml')
end
activate :meta_tags
activate :inline_svg
activate :external_pipeline,
         name: :webpack,
         command: build? ? 'npm run build' : 'npm run start',
         source: '.tmp/dist',
         latency: 1

set :favicons, [
  {
    rel: 'apple-touch-icon',
    size: '180x180',
    icon: 'apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    size: '32x32',
    icon: 'favicon32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    size: '16x16',
    icon: 'favicon16x16.png'
  },
  {
    rel: 'shortcut icon',
    size: '64x64,32x32,24x24,16x16',
    icon: 'favicon.ico'
  }
]
