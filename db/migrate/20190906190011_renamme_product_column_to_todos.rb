# frozen_string_literal: true

class RenammeProductColumnToTodos < ActiveRecord::Migration[5.2]
  def change
    rename_column :todos, :product, :text
  end
end
