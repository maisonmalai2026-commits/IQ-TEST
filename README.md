# CogniScale Free Professional IQ Test

A static GitHub Pages IQ-style test website with Firebase-ready Google sign-in and Firestore result storage.

## Features

- 41 original reasoning questions
- 25-minute timer
- Google sign-in button
- profile fields: name, email, age, gender, country
- IQ score estimate and domain breakdown
- no answer key shown in the final report
- Firestore hooks for saving users and submissions

## Firebase setup

1. Open Firebase Console.
2. Create a project.
3. Add a Web app.
4. Copy the Firebase config object.
5. In `index.html`, replace the placeholder config:

```js
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
```

6. Go to Authentication > Sign-in method > Google, then enable Google.
7. Go to Firestore Database and create a database.

## Firestore collections used

The site writes to:

```text
users/{uid}
iq_submissions/{autoId}
```

## Recommended Firestore rules

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow create, update: if request.auth != null && request.auth.uid == userId;
      allow read, delete: if false;
    }

    match /iq_submissions/{docId} {
      allow create: if request.auth != null
        && request.resource.data.authUid == request.auth.uid;
      allow read, update, delete: if false;
    }
  }
}
```

## GitHub Pages

Make sure `index.html` is in the repository root. After changes, wait a few minutes and hard-refresh the site with Ctrl + F5.
