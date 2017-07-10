class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :bpm, :duration, :tracks

  def tracks
    object.tracks.map do |track|
      TrackSerializer.new(track).attributes
    end
  end
end
