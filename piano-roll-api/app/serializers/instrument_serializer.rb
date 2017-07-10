class InstrumentSerializer < ActiveModel::Serializer
  attributes :name, :family, :is_percussion, :midi_instrument_number
end
