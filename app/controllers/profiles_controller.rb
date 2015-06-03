class ProfilesController < ApplicationController

  def index
    @profiles = Profile.all
  end
  def search
    if !params[:search].blank?
      @profiles = Profile.where("name LIKE ?", "%#{params[:search]}%")
    else  
      @profiles = Profile.all
    end
  end
  def create

  end

  def new

  end

  def edit

  end

  def destroy

  end
end
