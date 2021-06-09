# https://github.com/middleman/middleman/issues/1490
module LangHelper
  def opposite_locale
    locale == :en ? :hu : :en
  end

  def opposite_locale_path
    if locale == :en
      "/hu/#{current_path}"
    else
      parts = current_path.split('/')
      '/' + parts[1..-1].join('/')
    end
  end

  def local_path(path, options={})
    l = options[:locale] ? options[:locale].to_sym : I18n.locale
    if l == :en
      path
    else
      "/hu#{path}"
    end
  end
end
