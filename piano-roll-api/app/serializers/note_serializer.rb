class NoteSerializer < ActiveModel::Serializer
  attributes :id, :name, :velocity, :pitch, :start_time, :duration

  def velocity
    object.velocity.round(3)
  end
end
