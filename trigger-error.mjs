import * as Sentry from "@sentry/node";

// A Sentry DSN is a publishable client key (it's even embedded in the browser loader
// script), so hardcoding it for this demo is fine. Set SENTRY_DSN to override.
const dsn =
  process.env.SENTRY_DSN ??
  "https://a00f6ba90e8471bc86290423078a40ba@o4505291804770304.ingest.us.sentry.io/4511586429698048";

Sentry.init({ dsn });

const fingerprint = ["pullsmith-demo-11", String(Date.now())];
const error = new Error(`Pullsmith version 14.0.0 demo test error @ ${new Date().toISOString()}`);

// A unique fingerprint per run forces a brand-new issue and therefore an issue.created webhook.
const eventId = Sentry.captureException(error, {
  fingerprint,
  tags: {
    pullsmith_demo: "true",
  },
});

await Sentry.flush(2000);

// https://vitally-scrawny-viewing.ngrok-free.dev/api/webhook/sentry
// https://vitally-scrawny-viewing.ngrok-free.dev/api/sentry/setup

console.log("Sent test error to Sentry:", error.message);
console.log("Sentry event id:", eventId);
console.log("Sentry fingerprint:", fingerprint.join(" / "));
