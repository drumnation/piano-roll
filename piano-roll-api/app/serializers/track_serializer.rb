class TrackSerializer < ActiveModel::Serializer
  attributes :id,
             :start_time,
             :duration,
             :name,
             :channel_number,
             :instrument,
             :notes

  def instrument
    InstrumentSerializer.new(object.instrument).attributes
  end

  def notes
    object.notes.map do |note|
      NoteSerializer.new(note).attributes
    end
  end
end
