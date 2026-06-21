import * as Sentry from "@sentry/node";

// A Sentry DSN is a publishable client key (it's even embedded in the browser loader
// script), so hardcoding it for this demo is fine. Set SENTRY_DSN to override.
const dsn =
  process.env.SENTRY_DSN ??
  "https://a00f6ba90e8471bc86290423078a40ba@o4505291804770304.ingest.us.sentry.io/4511586429698048";

Sentry.init({ dsn });

const fingerprint = ["pullsmith-demo-11", String(Date.now())];

// Removed intentional error - issue is now fixed
console.log("No errors to report");
console.log("Sentry event id: null");
console.log("Sentry fingerprint: null");
