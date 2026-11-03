# 🎧 Spotify Vibe Check — Lesson 2 Upgrade
 
This folder contains the upgraded frontend for **Lesson 2**.
 
In this lesson, we connect our frontend to a separate **Render Backend Microservice** to fetch music over the internet!
 
---
 
## 🚀 How to Switch Vercel to Lesson 2 (The 1-Click Method)
 
Since these files are already in your repository inside the `lesson-2` folder, you can switch Vercel to run Lesson 2 in just a few clicks:
 
1. Open your project on your [Vercel Dashboard](https://vercel.com).
2. Go to **Settings** (top navigation tab) ➔ **General**.
3. Under **Root Directory**, click **Edit**.
4. Type `lesson-2` (or select `lesson-2` from the dropdown) and click **Save**.
5. Go to the **Deployments** tab, click the three dots (`...`) next to the latest deployment, and click **Redeploy**.
6. **Vercel will now serve your Lesson 2 frontend!**
 
---
 
## 🔗 Connecting to Your Render Backend
 
1. Open your live **Vercel website URL** in your browser.
2. Look at the **"Render Backend URL"** input box at the top of the page.
3. Paste the public URL of your Render backend server (e.g. `https://your-backend.onrender.com`).
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
