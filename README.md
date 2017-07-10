# React Midi Sequencer
## A piano roll style midi file player for composers that enables import, visualization, and playback of midi files.

![Watch the Demo](/demo.gif)
[Video Demo](https://youtu.be/W0LfRSNiCAo)

### Concept

Inspired by programs like FruityLoops with a piano roll style composition interface, Scott and I set out to build our own from Scratch.  Scott had always been interested in music creation apps and my background in Music Theory made me an ideal partner for decoding the ancient world of midi technology.

### Technical Challenges
- Developed Ruby on Rails backend, parsed midi to JSON, and seeded database with music data.
- Designed React vertical piano component that plays on click and correlates to a horizontal pitch grid.
- Implemented a clock system utilizing state and enabling synchronized playback of each note.
- Open sourced custom instrument SoundFonts rendered for use with Tone.js on GitHub.

### Our Approach

We began by converting a midi file of the Legend of Zelda theme song into JSON and saving it into our database. From there we configured the rest of the backend and served the data to our front-end via API.  From there we worked through how we'd visualize each individual note on a grid and implement a playable vertical piano.

For the virtual instrument sounds to play we had to convert soundfonts into Javascript and Mp3, importing each file directly from an open source repo I created to share these conversions. We went through several phases trying to implement playback.  

Phase 1 we developed our own timer system and used state to compare note timings against the master clock.  This was extremely expensive requiring a rewrite. We eventually moved the project to redux, added various redux add-ons to benefit performance and then moved the timeline and playback features exclusively to Tone.js.

### What's next

We're working through some stability issues, multi-playback, cleaning up latency/pops/clicks, and creating a custom drum sample library. Different versions are spread across branches, but the demo above is the latest version using redux.