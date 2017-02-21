class Api::GivingsController < ApplicationController

  def create
    @giving = Giving.new(giving_params)
    if @giving.save
      render :show
    else
      render json: @giving.errors.full_messages, status: 422
    end
  end

  def index
    @givings = Giving.all
  end

  def show
    @giving = Giving.find(params[:id])
  end

  private

  def giving_params
    params.require(:giving).permit(:user_id, :pledge_id)
  end

end
