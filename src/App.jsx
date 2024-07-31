import React from "react";

export default function App() {
  return (
    <div>
      <header className="site-header">
        <h1 className="sr-only">Scrollnapping animations</h1>

        <div className="fieldset-wrapper">
          <fieldset>
            <legend className="sr-only">Effects</legend>

            <Input
              type="radio"
              id="blink-effect"
              name="effect"
              value="blink"
              defaultChecked
              label="Blink"
            />
            <Input
              type="radio"
              id="horizontal-scroll-effect"
              name="effect"
              value="horizontal-scroll"
              label="Horizontal scroll"
            />
            <Input
              type="radio"
              id="backwards-scroll-effect"
              name="effect"
              value="backwards-scroll"
              label="Backwards scroll"
            />
            <Input
              type="radio"
              id="zoom-scroll-effect"
              name="effect"
              value="zoom-scroll"
              label="Zoom scroll"
            />
          </fieldset>
        </div>

        <nav>
          <ul className="indicator">
            <li className="">
              <a
                href="#snapping"
                className="text-white border border-white rounded-full "
              >
                <span className="sr-only">Snapping</span>
              </a>
            </li>
            <li className="">
              <a
                href="#scrolling"
                className="text-white border border-white rounded-full "
              >
                <span className="sr-only">Scrolling</span>
              </a>
            </li>
            <li className="">
              <a
                href="#layout"
                className="text-white border border-white rounded-full "
              >
                <span className="sr-only">Layout</span>
              </a>
            </li>
            <li className="">
              <a
                href="#transition"
                className="text-white border border-white rounded-full "
              >
                <span className="sr-only">Transition</span>
              </a>
            </li>
            <li className="">
              <a
                href="#caveats"
                className="text-white border border-white rounded-full "
              >
                <span className="sr-only">Caveats</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Section id="snapping" title="First, we set up the snapping points">
          <img src="https://assets.codepen.io/197359/flower-white.png" alt="" />
          <p>
            We set the scrolling element, in this case our{" "}
            <code className="selector">HTML</code> element, to forcibly snap to
            the Y axis by using{" "}
            <code className="property">scroll-snap-type: y mandatory</code>.
          </p>
          <p>
            And then we set <code className="selector">section</code> as the
            snapping elements by using{" "}
            <code className="property">scroll-snap-align: start</code>.
          </p>
        </Section>

        <Section id="scrolling" title="Next, we set up the scrolling animation">
          <img
            src="https://assets.codepen.io/197359/flower-yellow.png"
            alt=""
          />
          <p>
            We track the <code className="property">view()</code> position of
            the <code className="selector">section</code> elements using the
            named timeline{" "}
            <code className="property">view-timeline: --section;</code>. We had
            previously set the{" "}
            <code className="property">timeline-scope: --section</code> up in
            our <code className="selector">HTML</code> element, so we can access
            it from anywhere in the document.
          </p>
          <p>
            We animate the <code className="selector">.content</code> children
            using{" "}
            <code className="property">animation-timeline: --section;</code>.
            The <code className="selector">.content</code> element will now
            animate based on its parent{" "}
            <code className="selector">section</code>'s position. This is
            important due to how we're handling the layout in the next section.
          </p>
        </Section>

        <Section id="layout" title="Then, we position a fixed layout">
          <img src="https://assets.codepen.io/197359/flower-blue.png" alt="" />
          <p>
            We set the <code className="selector">.content</code> elements to{" "}
            <code className="property">position: fixed</code>, so they're
            removed from the normal document flow and stack on top of each
            other, giving them a solid background, so only one is visible at a
            time.
          </p>
          <p>
            Their parent <code className="selector">section</code>s are
            positioned as normal in the layer below, taking up space,
            scroll-snapping, and powering the{" "}
            <code className="property">animation-timeline</code>.
          </p>
        </Section>

        <Section
          id="transition"
          title="Finally, we create the transition effects"
        >
          <img src="https://assets.codepen.io/197359/flower-red.png" alt="" />
          <p>
            By setting the <code className="selector">.content</code> elements
            to <code className="property">position: fixed</code>, we can now
            transition between them without a visible scrolling movement.
          </p>
          <p>
            We create a normal <code className="selector">@keyframe</code>{" "}
            animation to our liking to transition between them. Check the
            navigation menu to see different effects.
          </p>
        </Section>

        <Section id="caveats" title="Caveats">
          <img
            src="https://assets.codepen.io/197359/flower-purple.png"
            alt=""
          />
          <ul>
            <li>
              Scrolling animations are not currently available in Firefox. This
              demo is using a polyfill.
            </li>
            <li>
              This layout is fragile due to the use of{" "}
              <code className="property">position: fixed</code>. You need to
              carefully manage stacking contexts.
            </li>
            <li>
              Snapping points have their own caveats, such as content taller
              than the viewport becoming inaccessible, along with the general
              annoyance of scrolljacking.
            </li>
            <li>
              The <code className="selector">blink</code> effect uses the{" "}
              <code className="property">contrast()</code> filter, which
              modifies the colors of the entire section. Thus, the background is
              set to black (or white), ensuring that it appears unchanged during
              transitions due to already being at maximum contrast.
            </li>
          </ul>
        </Section>
      </main>

      <footer>
        <p>
          That's it <span className="emoji">🌸</span>
        </p>
      </footer>
    </div>
  );
}

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="content">
      <h2>
        <strong>{title.split(", ")[0]}</strong>, {title.split(", ")[1]}
      </h2>
      <div className="text">{children}</div>
    </div>
  </section>
);

const Input = ({ type, id, name, value, defaultChecked, label }) => (
  <>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      className="sr-only"
    />
    <label htmlFor={id}>{label}</label>
  </>
);
