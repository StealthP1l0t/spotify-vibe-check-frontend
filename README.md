# 🎧 Spotify Vibe Check (Lesson 1)

Welcome to the **Spotify Vibe Check** project! This is a web application built with **HTML**, **CSS**, and **JavaScript** that displays randomized songs, vibes, album art, and streaming statistics.

---

## 🚀 How to Deploy on Vercel

1. Log into [Vercel](https://vercel.com) using your GitHub account.
2. Under **"Deploy your first project"**, click the **"Import"** button next to **Import Project** (or click **"+ Create New"** in the top-right).
3. Under **"Import Git Repository"**, find your forked frontend repository (`spotify-vibe-check-frontend`) and click **"Import"**.
4. On the **New Project** configuration screen:
   * **Project Name**: ⚠️ **Important:** Change this to a unique name with your name in it (e.g., `spotify-vibe-alex` or `spotify-vibe-sarah`). *This determines your public web address!*
   * **Root Directory**: `./` (leave default)
   * **Application Preset**: `Other` (leave default)
   * Click the white **"Deploy"** button at the bottom.
5. In ~10 seconds, your site is live! You will get your own unique link (e.g. `https://spotify-vibe-alex.vercel.app`) that you can open on your phone or share with classmates!

---

## 📂 File Structure

* **`index.html`**: The structure of the music player card, buttons, and display labels.
* **`style.css`**: The design, colors (Spotify dark theme), fonts, and card animations.
* **`script.js`**: The JavaScript code that picks a random song and updates the card when you click **"Shuffle Vibe Check"**.
* **`lesson-2/`**: Contains the upgraded frontend files for **Lesson 2**.

---

## 🎨 Fun Customization Challenges

### 1. Add Your Favorite Songs
Open `script.js` on GitHub (click the ✏️ pencil icon to edit) and look for the `songs` list:
```javascript
{
  id: 8,
  title: "Your Song Name",
  artist: "Your Favorite Artist",
  album: "Album Title",
  vibe: "🔥 High Energy",
  year: 2024,
  streams: "500 Million",
  coverGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
  emoji: "🎵"
}
```
Add your own song objects, click **"Commit changes"** on GitHub, and watch Vercel automatically update your live website!

### 2. Change the Theme Colors
Open `style.css` and try changing the `--spotify-green` variable at the top to your favorite neon color (e.g. `#ff2a85` for neon pink or `#00f0ff` for electric cyan).

---

## ❓ The Big Question for Lesson 2

Right now, all our songs are saved directly in our `script.js` file.
* *What happens if Spotify has over 100 million songs? Can we fit all of them inside one webpage on everyone's phone?*
* In **Lesson 2**, we will connect this frontend to a separate **Music Server (Microservice)** in the cloud using the files inside the `lesson-2/` folder!
