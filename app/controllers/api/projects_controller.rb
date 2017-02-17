class Api::ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
		@project = Project.new(project_params)
		if @project.save
			login(@project)
			render :show
		else
			render json: @project.errors.full_messages, status: 422
		end
	end

  def index
    @projects = Project.all
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = current_user.projects.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
      render :edit
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render :index
  end



	private

	def project_params
		params.require(:project).permit(:user_id, :title, :subtitle, :body, :end_date, :category, :location)
	end
end
