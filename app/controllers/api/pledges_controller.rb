class Api::PledgesController < ApplicationController

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def index
    @pledges = Pledge.all
  end

  def show
    @pledge = Pledge.find(params[:id])
  end

  def update
    debugger
    @pledge = current_user.pledges.find(params[:id])
    if @pledge.update(pledge_params)
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def destroy
    @pledge = current_user.pledges.find(params[:id])
    @pledge.destroy
    render :show
  end

  private

  def pledge_params
    params.require(:pledge).permit(:project_id, :level, :title, :description)
  end
end
