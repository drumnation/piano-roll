class AddPpqAndTimeSignatureToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :ppq, :integer
    add_column :songs, :time_signature, :array
  end
end
