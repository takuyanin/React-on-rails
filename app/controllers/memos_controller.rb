class MemosController < ApplicationController
  def index
    @memo = Memo.all
    render json: @memo
  end

  def create
    @memo = Memo.create(text: params[:memo])
    render json: @memo
  end

  def update
    @memo = Memo.find(params[:id])
    @memo.update_attributes(text: params[:memo])
    render json: @memo
  end

  def destroy
    @memo = Memo.find(params[:id])
    if @memo.destroy
      head :no_content, status: :ok
    else
      render json: @memo.errors, status: :unprocessable_entity
    end
  end
end
