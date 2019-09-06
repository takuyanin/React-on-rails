# frozen_string_literal: true

class RenameProductsToTodo < ActiveRecord::Migration[5.2]
  def change
    rename_table :products, :todos
  end
end
