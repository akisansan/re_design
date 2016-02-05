# By default Volt generates this controller for your Main component
module Main
  class MainController < Volt::ModelController
     before_action :require_login, only: :index # <= 追加
    def index
      # Add code for when the index view is loaded
      reset_message # << 追加
    end

    def about
      # Add code for when the about view is loaded
    end

    private

    # << 追加
    def send_message
      store._messages << page._form
      reset_message
    end

    # << 追加
    def reset_message
      page._form = Message.new
    end


    # The main template contains a #template binding that shows another
    # template.  This is the path to that template.  It may change based
    # on the params._component, params._controller, and params._action values.
    def main_path
      "#{params._component || 'main'}/#{params._controller || 'main'}/#{params._action || 'index'}"
    end

    # Determine if the current nav component is the active one by looking
    # at the first part of the url against the href attribute.
    def active_tab?
      url.path.split('/')[1] == attrs.href.split('/')[1]
    end
  end
end
