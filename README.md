# kitchen_pantry

A voice-first kitchen inventory PWA that syncs to Google Sheets. Tap the mic, speak naturally, and your pantry updates hands-free.

---

## Features

- **Voice logging** — tap once, speak naturally, saves automatically
- **Auto-categorization** — guesses the category from a 200+ word dictionary
- **Google Sheets backend** — your data lives in a spreadsheet you own and can edit directly
- **Shopping list view** — auto-filtered to items marked Low or Out
- **Duplicate detection** — saying an item that already exists updates it rather than creating a new row
- **Add/edit manually** — tap any item or the + button for a full form
- **Works offline-ish** — cached items remain visible if you lose connection mid-session

---

## Setup

### 1. Google Sheets

Create a new Google Sheet with a tab named `Inventory`. Row 1 should have these headers:

```
Name | Category | Status | Notes | Last Updated
```

Note the **Spreadsheet ID** from the URL:
```
https://docs.google.com/spreadsheets/d/THIS_IS_YOUR_ID/edit
```

Set sharing to **Anyone with the link can view** (required for the API key approach).

---

### 2. Google Sheets API Key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project named `Kitchen Log`
3. Go to **APIs & Services** → **Enable APIs** → search and enable **Google Sheets API**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy the key

**Restrict the key to your domain (recommended):**
- Click the key → **Application restrictions** → HTTP referrers
- Add: `https://YOUR-USERNAME.github.io/*`
- Save

---

### 3. Deploy to GitHub Pages

1. Create a new **public** GitHub repository named `pantry`
2. Add a README to initialize it
3. Create a file named `index.html` and paste the app code
4. Go to **Settings** → **Pages** → Source: deploy from branch `main` / root
5. Wait 2–3 minutes — your app will be live at:

```
https://YOUR-USERNAME.github.io/pantry
```

---

### 4. Configure the App

Open the URL in **Safari on iPhone/iPad**. You'll see a config screen on first launch:

- **API Key** — from Step 2
- **Spreadsheet ID** — from Step 1
- **Sheet Tab Name** — defaults to `Inventory`

Tap **Connect & Launch**. Your credentials are saved to `localStorage` so you only enter them once.

---

### 5. Add to iPhone Home Screen

In Safari: **Share → Add to Home Screen → Add**

This gives you a full-screen app experience and ensures `localStorage` persists between sessions. Opening via a browser tab may reset credentials depending on your iOS privacy settings.

---

## Voice Commands

Tap the gold mic button and speak. The app saves automatically — no confirmation needed.

| What you say | What happens |
|---|---|
| `"bought harissa"` | Adds harissa → Have |
| `"picked up salmon"` | Adds salmon → Have |
| `"onions are low"` | Updates onions → Low |
| `"running low on olive oil"` | Updates olive oil → Low |
| `"used up the garlic"` | Updates garlic → Out |
| `"I'm out of butter"` | Updates butter → Out |
| `"finished the sriracha"` | Updates sriracha → Out |
| `"remove thyme"` | Deletes thyme |
| `"delete cumin"` | Deletes cumin |

**Add synonyms:** add, bought, got, picked up, stocked, grabbing, grabbed, purchased

**Delete synonyms:** delete, remove

**Status — Have:** bought, got, picked up, stocked, restocked, now have

**Status — Low:** low, running low, almost out, getting low, nearly out

**Status — Out:** out, out of, finished, used up, all gone, tossed, threw out, ran out of, no more, empty

Unrecognized commands show a `?` — try rephrasing.

---

## Auto-Categorization

When adding a new item by voice, the app guesses the category from a built-in dictionary. Recognized categories:

- **Produce** — fruits, vegetables, fresh herbs
- **Protein** — meat, fish, seafood, eggs, tofu
- **Dairy** — milk, cheese, butter, yogurt, cream
- **Pantry** — grains, pasta, canned goods, oils, sweeteners, nuts
- **Spice** — dried spices and seasoning blends
- **Sauce/Condiment** — harissa, miso, sriracha, pesto, dressings
- **Frozen** — anything frozen

Anything unrecognized defaults to **Other**. You can correct it by tapping the item.

---

## Manual Editing

- **Add item** — tap the `+` button
- **Edit item** — tap any row in the list
- **Delete item** — tap a row → Delete button in the form

The manual form also auto-guesses category when you type a name.

---

## Shopping List

Switch to the **Shopping** tab to see only items marked Low or Out. The tab shows a count badge when items need restocking. Screenshot this before heading to the store.

---

## Siri Shortcut (optional)

To open the app directly to voice mode via Siri:

1. Open the **Shortcuts** app on iPhone
2. New Shortcut → Add Action → **Open URL**
3. URL: `https://YOUR-USERNAME.github.io/pantry?action=voice`
4. Tap the shortcut name → **Add to Siri** → record a phrase like *"log ingredient"*

Say *"Hey Siri, log ingredient"* and the app opens with the mic already active.

---

## Settings & Re-configuration

Tap the ⚙ icon in the top right to reset credentials and re-configure. This clears `localStorage` and returns you to the config screen.

---

## Data & Privacy

- All data is stored in **your own Google Sheet** — Anthropic and no third party has access
- The API key is stored in your browser's `localStorage` only
- Restrict your API key to your GitHub Pages domain to prevent unauthorized use (see Setup Step 2)
- The repository must be public for GitHub Pages free tier — avoid committing your API key directly into the HTML source; enter it via the config screen instead

---

## Limitations

- **iOS Safari only for voice** — `webkitSpeechRecognition` is not available in Chrome on iOS
- **One tap required to start listening** — iOS requires a user gesture before microphone access; fully background voice is not possible in a PWA
- **Google Sheets API key is write-enabled** — restrict it to your domain (Setup Step 2) to prevent misuse
- **Row deletion clears content but doesn't remove the row** — the Sheets API requires a `batchUpdate` to physically delete rows; cleared rows are skipped on load and are invisible in the app but remain in the sheet as blank rows
