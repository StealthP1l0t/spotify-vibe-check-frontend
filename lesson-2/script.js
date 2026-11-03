// ========================================================
// 💡 SPOTIFY VIBE CHECK — LESSON 2 JAVASCRIPT
// ========================================================
// In Lesson 2, our frontend has ZERO hardcoded songs!
// Instead, it makes a live remote HTTP call across the internet
// to fetch track data from our Render Node.js backend.

// ----------------------------------------------------
// 🌐 Backend URL Configuration Helpers
// ----------------------------------------------------
function getBackendBaseUrl() {
  // 1. Check URL parameters (e.g. ?backend=https://my-api.onrender.com)
  const urlParams = new URLSearchParams(window.location.search);
  const queryBackend = urlParams.get('backend');
  if (queryBackend) return queryBackend.replace(/\/+$/, '');

  // 2. Check saved value in browser localStorage
  const storedBackend = localStorage.getItem('spotify_demo_backend');
  if (storedBackend) return storedBackend.replace(/\/+$/, '');

  // 3. Fallback to localhost during local development
  return 'http://localhost:3000';
}

function saveBackendUrl() {
  const backendInput = document.getElementById('backend-input');
  let val = backendInput.value.trim().replace(/\/+$/, '');
  
  if (!val) val = 'http://localhost:3000';
  if (!val.startsWith('http://') && !val.startsWith('https://')) {
    val = 'https://' + val;
  }
  
  backendInput.value = val;
  localStorage.setItem('spotify_demo_backend', val);

  // Show "Saved!" confirmation message
  const saveMsg = document.getElementById('save-msg');
  saveMsg.style.display = 'inline';
  setTimeout(() => { saveMsg.style.display = 'none'; }, 2000);
}

// ----------------------------------------------------
// ⚡ Remote HTTP Call (Fetch track from Render Backend)
// ----------------------------------------------------
async function fetchLiveTrack() {
  const btn = document.getElementById('fetch-btn');
  const arrow = document.getElementById('arrow');
  const errorBanner = document.getElementById('error-banner');
  const coldStartNotice = document.getElementById('cold-start-notice');
  const inspectorData = document.getElementById('inspector-data');

  const baseUrl = getBackendBaseUrl();
  const endpoint = `${baseUrl}/api/track`;

  // Timer to warn students if Render free tier is waking up from sleep
  const coldStartTimer = setTimeout(() => {
    coldStartNotice.style.display = 'block';
  }, 2500);

  try {
    // 1. Visual feedback: show request in-flight
    btn.innerHTML = '<span>⏳</span> Calling Backend...';
    btn.style.opacity = '0.7';
    arrow.classList.add('active');
    errorBanner.style.display = 'none';

    // 2. 🚀 The Remote HTTP Call across the internet to our backend
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    clearTimeout(coldStartTimer);
    coldStartNotice.style.display = 'none';

    // Check HTTP status code
    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status} (${response.statusText})`);
    }

    // 3. Parse JSON payload received over the network
    const track = await response.json();

    // 4. Update the HTML page elements
    updateUI(track);

    // 5. Display raw JSON in inspector drawer
    inspectorData.textContent = 
      "// Live JSON payload received over HTTP from Render:\n" + 
      JSON.stringify(track, null, 2);

  } catch (err) {
    clearTimeout(coldStartTimer);
    coldStartNotice.style.display = 'none';
    console.error('Fetch error:', err);
    document.getElementById('error-details').textContent = 
      `Failed to connect to ${endpoint}. Error: ${err.message}. Make sure your Render backend is running!`;
    errorBanner.style.display = 'block';
  } finally {
    // Reset button and arrow animations
    btn.innerHTML = '<span>🎲</span> Shuffle Vibe Check';
    btn.style.opacity = '1';
    arrow.classList.remove('active');
  }
}

// ----------------------------------------------------
// 🎨 Update UI: Change the text and styling on the page
// ----------------------------------------------------
function updateUI(track) {
  document.getElementById('song-title').textContent = track.title;
  document.getElementById('song-artist').textContent = track.artist;
  document.getElementById('song-album').textContent = '💿 ' + track.album;
  document.getElementById('song-year').textContent = '📅 ' + track.year;
  document.getElementById('song-streams').textContent = track.streams + ' streams';
  document.getElementById('vibe-tag').textContent = track.vibe;

  const albumCover = document.getElementById('album-cover');
  albumCover.textContent = track.emoji;
  albumCover.style.background = track.coverGradient;
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const backendInput = document.getElementById('backend-input');
  if (backendInput) {
    backendInput.value = getBackendBaseUrl();
  }
});
