# frozen_string_literal: true

class TodosController < ApplicationController
  def index
    @todo = Todo.all
    render json: @todo
  end

  def create
    @todo = Todo.create(text: params[:todo])
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes(text: params[:todo])
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      head :no_content, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end
end
