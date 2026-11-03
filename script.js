// ========================================================
// 💡 SPOTIFY VIBE CHECK — LESSON 1 JAVASCRIPT
// ========================================================
// In Lesson 1, all our song data lives right here in the browser!
// Students can add their favorite songs directly to this list.

const songs = [
  {
    id: 1,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    vibe: "🕺 Upbeat & Nostalgic",
    year: 2022,
    streams: "3.4 Billion",
    coverGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    emoji: "🏠"
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    vibe: "🚀 Disco Pop / Fun",
    year: 2020,
    streams: "2.1 Billion",
    coverGradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    emoji: "🪐"
  },
  {
    id: 3,
    title: "Sunroof",
    artist: "Nicky Youre & dazy",
    album: "Sunroof",
    vibe: "☀️ Good Vibes / Summer",
    year: 2022,
    streams: "850 Million",
    coverGradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    emoji: "🚗"
  },
  {
    id: 4,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    vibe: "⚡ 80s Synthpop / Energetic",
    year: 2020,
    streams: "4.3 Billion",
    coverGradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    emoji: "⚡"
  },
  {
    id: 5,
    title: "Golden Hour",
    artist: "JVKE",
    album: "this is what ____ feels like",
    vibe: "🎹 Piano Pop / Dreamy",
    year: 2022,
    streams: "1.2 Billion",
    coverGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    emoji: "🌅"
  },
  {
    id: 6,
    title: "Counting Stars",
    artist: "OneRepublic",
    album: "Native",
    vibe: "⭐ Pop Rock Classic",
    year: 2013,
    streams: "2.5 Billion",
    coverGradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    emoji: "🌠"
  },
  {
    id: 7,
    title: "Anti-Hero",
    artist: "Taylor Swift",
    album: "Midnights",
    vibe: "🌙 Indie Pop / Melodic",
    year: 2022,
    streams: "1.8 Billion",
    coverGradient: "linear-gradient(135deg, #2b5876 0%, #4e4376 100%)",
    emoji: "✨"
  }
];

// ----------------------------------------------------
// 🎲 Shuffle Function: Pick a random song & update screen
// ----------------------------------------------------
function shuffleTrack() {
  // 1. Pick a random song from our list
  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomSong = songs[randomIndex];

  // 2. Update the HTML elements on the page
  updateUI(randomSong);

  // 3. Show the raw song object in the inspector drawer
  document.getElementById('inspector-data').textContent = 
    "// Data loaded from local JavaScript array:\n" + 
    JSON.stringify(randomSong, null, 2);
}

// ----------------------------------------------------
// 🎨 Update UI: Change the text and styling on the page
// ----------------------------------------------------
function updateUI(song) {
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('song-artist').textContent = song.artist;
  document.getElementById('song-album').textContent = '💿 ' + song.album;
  document.getElementById('song-year').textContent = '📅 ' + song.year;
  document.getElementById('song-streams').textContent = song.streams + ' streams';
  document.getElementById('vibe-tag').textContent = song.vibe;

  const albumCover = document.getElementById('album-cover');
  albumCover.textContent = song.emoji;
  albumCover.style.background = song.coverGradient;
}

// ----------------------------------------------------
// 🔍 Toggle Inspector Drawer
// ----------------------------------------------------
function toggleInspector() {
  const body = document.getElementById('inspector-data');
  const arrow = document.getElementById('inspector-arrow');
  if (body.style.display === 'block') {
    body.style.display = 'none';
    arrow.textContent = '▼';
  } else {
    body.style.display = 'block';
    arrow.textContent = '▲';
  }
}

// Show the first song object in the inspector on page load
document.addEventListener('DOMContentLoaded', () => {
  const inspector = document.getElementById('inspector-data');
  if (inspector) {
    inspector.textContent = 
      "// Local song database ready. Click 'Shuffle Vibe Check' to shuffle!\n" +
      JSON.stringify(songs[0], null, 2);
  }
});
