class Api::V1::SongsController < Api::V1::ApplicationController
  before_action :set_song, only: [:show]

  def index
    render json: Song.all, each_serializer: SongsSerializer
  end

  def show
    render json: @song
  end

  def create
    song = song_params[:header]
    this_song = Song.create_with(
        title: song[:name],
        bpm: song_params[:bpm].to_i,
        duration: song_params[:duration].to_f,
        ppq: song[:PPQ],
        time_signature: song[:timeSignature]
      ).find_or_create_by(title: song[:name])
    song_params[:tracks].each do |track|
      track_info = {
        start_time: track[:startTime].to_f,
        duration: track[:duration].to_f,
        name: track[:name],
        instrument_id: track[:instrumentNumber].to_i,
        channel_number: track[:channelNumber].to_i
      }
      instrument_info = {
        name: track[:instrument],
        family: track[:instrumentFamily],
        midi_instrument_number: track[:instrumentNumber].to_i,
        is_percussion: track[:isPercussion]
      }

      if !!track[:instrumentNumber]
        inst = Instrument.create_with(instrument_info).find_or_create_by(midi_instrument_number: track[:instrumentNumber].to_i)
        track_create = {}.merge({instrument_id: inst[:midi_instrument_number]}).merge(track_info)
        this_track = this_song.tracks.create_with(track_create).find_or_create_by(name: track[:name])
        track[:notes].each do |note|
          note_info = {
            name: note[:name],
            pitch: note[:midi].to_i,
            start_time: note[:time].to_f,
            velocity: note[:velocity].to_f,
            duration: note[:duration].to_f
          }
          this_track.notes.create( note_info )
        end
      end


    end

    render json: this_song

  end

  private
  def song_params
    params.require(:song)
  end

  def set_song
    @song = Song.find(params[:id])
  end
end
