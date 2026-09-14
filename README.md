# CROWNSTONE REALTY

Premium international real-estate website — **website-only phase**.

## 1. Run in SPCK Editor

No Node.js, npm, Vite, React, Next.js, TypeScript, Tailwind build process, terminal or local server is required for the basic website experience.

1. Create/import the `CROWNSTONE-REALTY` folder in SPCK Editor.
2. Preserve the folder structure.
3. Open `index.html`.
4. Use SPCK's browser/preview.

The website uses relative paths for its local CSS/JS files. Property and editorial photography currently use remote image URLs so the package stays lightweight; these can be replaced later with files in `assets/images/`.

## 2. Structure

```text
CROWNSTONE-REALTY/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## 3. What works now

- Responsive premium real-estate UI.
- Responsive navigation and mobile menu.
- Property dataset in `js/script.js`.
- Location / transaction / property-type / price / bedroom filtering.
- Result count, sorting and clear filters.
- Property detail modal.
- Save/unsave properties using `localStorage`.
- Viewing request form with validation and local demonstration storage.
- Property inquiry form with validation and local demonstration storage.
- Sell-property form with validation and local demonstration storage.
- Contact form with validation and local demonstration storage.
- Customer dashboard UI.
- Firebase Email/Password authentication integration scaffold.
- Login, signup, logout and password-reset flow once Firebase is configured.
- Authenticated state changes the Login button to Dashboard.
- Reduced-motion support.
- No fake AI, CRM, WhatsApp or automation processing.

## 4. Firebase setup

Firebase Web Authentication is intentionally separated from the rest of the frontend.

### Create/configure Firebase

In the Firebase Console:

1. Create a Firebase project.
2. Add a Web app.
3. Enable **Authentication → Sign-in method → Email/Password**.
4. Copy the **Web app configuration**.
5. Open `js/script.js`.
6. Replace the values inside `FIREBASE_CONFIG`.

Only the normal Firebase Web configuration belongs in a browser application. It is not a secret credential.

Example shape:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
```

### Do NOT put these in frontend files

- Firebase Admin SDK private key
- Service-account JSON
- Server credentials
- API secrets
- Database admin credentials

The provided Firebase Web App configuration is connected in `js/script.js`. Email/Password must still be enabled in the Firebase Console.

## 5. Important SPCK/Firebase note

The website itself can open directly from `index.html`, but Firebase Authentication is a hosted security service and browser-origin restrictions can apply to direct `file://` previews depending on the browser and Firebase configuration.

If Firebase authentication does not work from SPCK's direct preview, deploy the exact same static files to a normal HTTPS static host and add that domain under Firebase Authentication → Settings → Authorized domains.

This is not a reason to fake authentication in JavaScript. The website instead shows a clear configuration state until Firebase is correctly connected.

## 6. Security architecture

### Client-side validation

The browser validates:
- required fields
- email format
- mobile format
- input lengths
- basic password length before Firebase submission

This improves usability but is **not server-side security**.

### Server-side validation boundary

This standalone frontend does not have a custom backend. Therefore it does not claim to provide server-side validation for future database/API operations.

When a production API/backend is added, it must:
- validate every submitted field again;
- validate property IDs against authoritative server-side data;
- validate appointment/inquiry ownership and authorization;
- enforce allowed values and length limits;
- reject malformed or unauthorized requests;
- perform authorization checks server-side.

### Authentication

Firebase Authentication handles password credentials. The website:
- does not create a custom password database;
- does not store passwords in `localStorage`;
- does not log passwords;
- uses generic authentication failure messaging;
- uses Firebase's hosted authentication/abuse protections rather than pretending JavaScript is server-side rate limiting.

### Generic errors

User-facing auth errors intentionally avoid exposing internal Firebase/database details or account-existence information.

## 7. Local demonstration data

These website-only records are stored in browser `localStorage`:

- saved properties
- viewing requests
- property inquiries
- sell submissions
- contact submissions

This is **not production storage** and is not suitable for multi-user CRM workflows.

## 8. Future automation integration points

Automation is deliberately NOT implemented in this phase.

Future architecture:

```text
CROWNSTONE WEBSITE
        ↓
Production API / Webhook
        ↓
Real Estate Automation
        ↓
AI Lead Qualification
        ↓
Property Matching
        ↓
CRM
        ↓
Agent
```

The later integration should replace/augment the local form-storage functions with authenticated HTTPS API calls.

Recommended future frontend integration boundary:
- `submitViewingRequest()`
- `submitInquiry()`
- `submitPropertySubmission()`
- `submitContact()`

Those functions should eventually call a production backend. Do not put private API secrets in this frontend.

No fake AI processing, WhatsApp connection, CRM connection, email automation or webhook is included now.

## 9. Sample content

Property listings, location counts, descriptions and agent text are demonstration content. No real awards, certifications, operating history, client statistics or performance claims are invented.

Before production use, replace demonstration data with verified business/property information and appropriate legal/privacy documents.

## 10. Performance

The implementation avoids application frameworks and heavy 3D libraries. Images use responsive remote URLs and the design supports `prefers-reduced-motion`.

For production, replace remote demonstration images with optimized WebP/AVIF assets in `assets/images/` and use a CDN where appropriate.

## 11. Production checklist

Before launch:

- Configure Firebase correctly.
- Configure Firebase Authorized Domains.
- Test authentication on HTTPS.
- Add production backend/API.
- Add server-side validation and authorization.
- Add secure database rules.
- Add production privacy/terms documents.
- Replace demonstration property data with verified data.
- Replace demonstration images with licensed/owned images.
- Add real company contact details.
- Add real social destinations if desired.
- Add monitoring/error reporting without logging secrets or passwords.
- Review legal, privacy and data-retention requirements for every target market.

**Honesty boundary:** this package is a polished, functional frontend and Firebase Authentication integration scaffold. It is not a complete production brokerage backend or automation system.
