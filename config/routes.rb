Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects
    resources :pledges, only: [:create, :update, :destroy, :show]
    resources :givings, only: [:create, :show]

    get "projects/search", to: "projects#search"
  end



  root "static_pages#root"
end
