# 🎧 Spotify Vibe Check — Lesson 2 Upgrade

This folder contains the upgraded frontend for **Lesson 2**.

In this lesson, we connect our frontend to a separate **Render Backend Microservice** to fetch music over the internet!

---

## 🚀 How to Switch Vercel to Lesson 2

Follow these exact steps in your Vercel Dashboard to switch to the `lesson-2` folder:

1. **Open Settings**:
   * On your Vercel Project Overview page, click the **three dots (`...`)** in the top-right corner (next to the "Visit" button).
   * Click **"Settings"** from the dropdown menu.

2. **Change Root Directory**:
   * In the Settings menu, find the **Root Directory** section (under *Build and Deployment* or *General*).
   * Type `lesson-2` into the text box.
   * Click the white **"Save"** button.

3. **Go back to Deployments**:
   * Click the back arrow **`<`** (next to "Settings" in the top-left sidebar) or click **"Deployments"** in the left sidebar.

4. **Redeploy with the new settings**:
   * In the Deployments table, click the **three dots (`...`)** on the right side of the latest deployment row.
   * Click **"Redeploy"** from the dropdown menu.
   * In the popup modal, click the white **"Redeploy"** button to confirm.
   * **In ~10 seconds, Vercel will finish deploying your live Lesson 2 frontend!**

---

## 🔗 Connecting to Your Render Backend

1. Open your live **Vercel website URL** in your browser.
2. Look at the **"Render Backend URL"** input box at the top of the page.
3. Paste the public URL of your Render backend server (e.g. `https://spotify-backend-alex.onrender.com`).
4. Click **"Set URL"**.
5. Click **"🎲 Shuffle Vibe Check"**!
6. Click **"🔍 Inspect Live Data from Server"** at the bottom to see the raw data packet arriving from your server!

---

## 🧪 Experiments to Try

### 1. Test the "Free Tier Wake-up"
Free-tier servers on Render go to sleep after 15 minutes of inactivity. When you make your first request, watch the page show:
`⏳ Waking up Render backend...`
Notice how the page waits patiently and then loads smoothly once the server wakes up!

### 2. The Chaos Downtime Test
1. Log into your Render dashboard and click **"Suspend"** on your backend service.
2. Go back to your Vercel website and click **"Shuffle Vibe Check"**.
3. Notice how your browser displays a clean error banner instead of crashing completely!
