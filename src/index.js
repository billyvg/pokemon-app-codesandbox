import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";
import * as Sentry from "@sentry/browser";

Sentry.init({
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  sessionSampleRate: 1.0,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  errorSampleRate: 1.0,
  dsn:
    "https://db01ede399634cab8fd6ebb69388b0e1@o114400.ingest.sentry.io/1505450",
  integrations: [
    new Sentry.Replay({
      // Mask all text content with asterisks (*). Passes text
      // content through to `maskTextFn` before sending to server.
      //
      // Defaults to true, uncomment to change
      // maskAllText: true,
      // Block all media elements (img, svg, video, object,
      // picture, embed, map, audio)
      //
      // Defaults to true, uncomment to change
      // blockAllMedia: true,
    })
  ]
  // ...
});

Sentry.captureException(new Error("test"));

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () => (
  <Wrapper>
    <Title>Hello World, this is my first styled component!</Title>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
