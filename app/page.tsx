import React from 'react';
import Image from 'next/image';
import HeaderNav from '@/components/HeaderNav';
import EnquiryCTA from '@/components/EnquiryCTA';
import EnquiryFormCard from '@/components/EnquiryFormCard';
import EnquiryDialogModal from '@/components/EnquiryDialogModal';

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="prototype-bar">
        DESIGN PREVIEW <span>•</span> Proposed content. Course details awaiting confirmation.
      </div>

      <header className="header">
        <HeaderNav />
      </header>

      <main id="main">
        <section className="hero dark" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true"></span> ONE LANGUAGE. OPEN
                POSSIBILITIES.
              </p>
              <h1 id="hero-title">
                Less wondering.
                <br />
                More <span className="lime">building.</span>
              </h1>
              <p className="hero-sub">Make your next move with Python.</p>
              <p className="muted hero-description">
                Turn your curiosity into code. Explore Python, connect the concepts, and start making
                things that work.
              </p>
              <div className="cta-group">
                <EnquiryCTA className="button">
                  Explore the Python course <span aria-hidden="true">↗</span>
                </EnquiryCTA>
                <a className="text-link" href="#curriculum">
                  See the learning path <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">
                Python-focused learning <span aria-hidden="true">/</span> Proposed course preview
              </p>
            </div>

            <div className="workspace" aria-label="Illustrative Python code example">
              <div className="workspace-top">
                <span className="mono">CODEISTA / PYTHON LAB</span>
                <span className="outline-tag">EXAMPLE</span>
              </div>
              <div className="editor">
                <div className="editor-tab">
                  <span className="lime" aria-hidden="true">
                    ⌘
                  </span>{' '}
                  first_step.py <span className="muted">×</span>
                </div>
                <div
                  className="code"
                  aria-label="Python code: defines a list of ideas, prints a build message for each idea, then prints Your next chapter starts here."
                >
                  <div>
                    <i>01</i>
                    <span className="comment"># Big ideas. Small first steps.</span>
                  </div>
                  <div>
                    <i>02</i>
                    <span className="purple">ideas</span> = [
                  </div>
                  <div>
                    <i>03</i> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="lime">&quot;automate the everyday&quot;</span>,
                  </div>
                  <div>
                    <i>04</i> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="lime">&quot;make sense of data&quot;</span>,
                  </div>
                  <div>
                    <i>05</i> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="lime">&quot;build something useful&quot;</span>
                  </div>
                  <div>
                    <i>06</i>]
                  </div>
                  <div>
                    <i>07</i>&nbsp;
                  </div>
                  <div>
                    <i>08</i>
                    <span className="purple">for</span> idea <span className="purple">in</span> ideas:
                  </div>
                  <div>
                    <i>09</i> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="warm">print</span>(
                    <span className="lime">f&quot;Let&apos;s &#123;idea&#125;.&quot;</span>)
                  </div>
                  <div>
                    <i>10</i>&nbsp;
                  </div>
                  <div>
                    <i>11</i>
                    <span className="warm">print</span>(
                    <span className="lime">&quot;Your next chapter starts here.&quot;</span>)
                  </div>
                </div>
                <div className="terminal">
                  <div className="terminal-label">
                    <span>OUTPUT PREVIEW</span>
                    <span className="lime">Python 3</span>
                  </div>
                  <p>
                    <span aria-hidden="true">›</span> Let&apos;s build something useful.
                  </p>
                  <p className="lime">
                    <span aria-hidden="true">›</span> Your next chapter starts here.
                    <span className="cursor" aria-hidden="true"></span>
                  </p>
                  <small>Illustrative excerpt · code is not executed</small>
                </div>
              </div>
              <div className="workspace-bottom">
                <span>
                  <span className="status-dot" aria-hidden="true"></span> Your ideas belong here.
                </span>
                <span aria-hidden="true">&#123; py &#125;</span>
              </div>
            </div>
          </div>

          <div className="wrap hero-footer">
            <span>START WITH THE FUNDAMENTALS.</span>
            <span>THINK IN PYTHON.</span>
            <span>
              MAKE IT YOUR OWN. <span className="lime" aria-hidden="true">↘</span>
            </span>
          </div>
        </section>

        <section className="light section" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / THE APPROACH</p>
                <h2 id="approach-title">
                  One focus.
                  <br />
                  A whole new toolkit.
                </h2>
              </div>
              <p>
                Python is the starting point. These proposed learning pillars connect understanding
                a concept with using it in your own code.
              </p>
            </div>

            <div className="pillars">
              <article>
                <div className="pillar-top">
                  <span className="number">01 / UNDERSTAND</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    &#123; &#125;
                  </span>
                </div>
                <h3>Understand the logic.</h3>
                <p>Break a problem into clear steps with variables, conditions, and loops.</p>
                <div className="pillar-example">
                  <span className="example-label">START WITH A QUESTION</span>
                  <code>
                    <span>if</span> curious:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;take_first_step()
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Think clearly</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>

              <article className="pillar-featured">
                <div className="pillar-top">
                  <span className="number">02 / EXPERIMENT</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    &gt;_
                  </span>
                </div>
                <h3>Get your hands on code.</h3>
                <p>Try an idea. Read the output. Find the bug. Make the next version better.</p>
                <div className="pillar-example">
                  <span className="example-label">MAKE THE CONNECTION</span>
                  <code>
                    <span>for</span> idea <span>in</span> ideas:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;try_it(idea)
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Learn by trying</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>

              <article>
                <div className="pillar-top">
                  <span className="number">03 / CREATE</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>Make something useful.</h3>
                <p>Turn the pieces into practical scripts, from file tools to data summaries.</p>
                <div className="pillar-example">
                  <span className="example-label">BRING IT TOGETHER</span>
                  <code>
                    your_idea = <span>build</span>()
                    <br />
                    your_idea.run()
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Connect the pieces</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            </div>

            <p className="approach-caption">
              A proposed learning approach <span aria-hidden="true">/</span> Illustrative
              Python-style snippets
            </p>
          </div>
        </section>

        <section
          className="light curriculum-section"
          id="curriculum"
          aria-labelledby="curriculum-title"
        >
          <div className="wrap curriculum-grid">
            <div className="curriculum-intro">
              <p className="eyebrow">02 / YOUR LEARNING PATH</p>
              <h2 id="curriculum-title">
                From the first line
                <br />
                to your next idea.
              </h2>
              <p>
                A focused progression through Python. Open each stage to explore the proposed topics.
              </p>
              <div className="draft-note">
                <span aria-hidden="true">↳</span>
                <p>
                  Illustrative curriculum.
                  <br />
                  Final syllabus and prerequisites to be confirmed by CodeistaAI.
                </p>
              </div>
              <EnquiryCTA className="text-link dark-link">
                Explore course details <span aria-hidden="true">↗</span>
              </EnquiryCTA>
            </div>

            <div className="modules">
              <details open>
                <summary>
                  <span className="module-no">01</span>
                  <span>
                    Start speaking Python<small>Syntax &amp; foundations</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>Get comfortable reading and writing your first Python programs.</p>
                  <ul className="chips">
                    <li>Variables &amp; types</li>
                    <li>Strings &amp; numbers</li>
                    <li>Input &amp; output</li>
                    <li>Conditions &amp; loops</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build a simple unit converter.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">02</span>
                  <span>
                    Give your code structure<small>Functions &amp; collections</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>Organize data and break a bigger problem into reusable pieces.</p>
                  <ul className="chips">
                    <li>Lists &amp; dictionaries</li>
                    <li>Functions</li>
                    <li>Modules</li>
                    <li>Comprehensions</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Create a command-line task list.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">03</span>
                  <span>
                    Work with real inputs<small>Files, errors &amp; debugging</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Read local files, handle unexpected input, and understand what went wrong.
                  </p>
                  <ul className="chips">
                    <li>File handling</li>
                    <li>CSV &amp; JSON</li>
                    <li>Exceptions</li>
                    <li>Debugging</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Summarize a sample CSV file.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">04</span>
                  <span>
                    Build with intention<small>Objects, testing &amp; a project</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>Structure a small Python project and check that its core behavior works.</p>
                  <ul className="chips">
                    <li>Classes &amp; objects</li>
                    <li>Basic tests</li>
                    <li>Project structure</li>
                    <li>Documentation</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build and document a useful local tool.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section
          className="dark section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow lime">03 / PUT PYTHON TO WORK</p>
                <h2 id="projects-title">
                  Don&apos;t just read it.
                  <br />
                  Make it do something.
                </h2>
              </div>
              <p className="muted">
                Example project directions, not confirmed course deliverables. A glimpse of what
                Python can help you explore.
              </p>
            </div>

            <div className="project-grid">
              <article className="project-card">
                <div className="project-visual mono">
                  <span className="file-label">organize.py</span>
                  <div className="file-row">
                    <span>notes.txt</span>
                    <span className="lime">→ /documents</span>
                  </div>
                  <div className="file-row">
                    <span>photo.png</span>
                    <span className="lime">→ /images</span>
                  </div>
                  <div className="file-row">
                    <span>data.csv</span>
                    <span className="lime">→ /datasets</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">AUTOMATION</span>
                  <h3>Give busywork a shortcut.</h3>
                  <p>Explore a file organizer that sorts sample files by type.</p>
                  <span className="project-tag">Files · Paths · Conditions</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual mono">
                  <span className="file-label">summarize.py</span>
                  <div className="data-head">
                    <span>sample.csv</span>
                    <span className="warm">ILLUSTRATIVE DATA</span>
                  </div>
                  <div className="bar-row">
                    <span>A</span>
                    <div style={{ '--bar': '76%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>B</span>
                    <div style={{ '--bar': '48%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>C</span>
                    <div style={{ '--bar': '90%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">DATA EXPLORATION</span>
                  <h3>Find the story in a file.</h3>
                  <p>Read a sample dataset and turn its rows into a clear summary.</p>
                  <span className="project-tag">CSV · Collections · Functions</span>
                </div>
              </article>
            </div>

            <div className="project-bottom">
              <p>Your next project could start with a problem you notice every day.</p>
              <a className="text-link" href="#curriculum">
                Explore the foundations <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="light section" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-grid">
            <div>
              <p className="eyebrow">04 / A LITTLE CLARITY</p>
              <h2 id="faq-title">
                Before you
                <br />
                take the next step.
              </h2>
              <p className="faq-intro">A few things to know about this Python course preview.</p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  Is Python the only course offered here?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Yes. This CodeistaAI page is dedicated to Python. No additional courses or services
                  are offered in this prototype.
                </p>
              </details>

              <details>
                <summary>
                  Do I need coding experience?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  The proposed learning path begins with fundamentals. Eligibility, target audience,
                  and any prerequisites are awaiting confirmation from CodeistaAI.
                </p>
              </details>

              <details>
                <summary>
                  What are the fees and schedule?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Course price, duration, delivery format, and start dates are to be confirmed. This
                  preview does not accept bookings or payments.
                </p>
              </details>

              <details>
                <summary>
                  Who teaches the course?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Instructor details are to be confirmed. No instructor profile, credential, or
                  affiliation has been supplied for this preview.
                </p>
              </details>

              <details>
                <summary>
                  Are certificates or placements included?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Certification and placement support details have not been provided. This preview
                  makes no promises about certificates, employment, or career outcomes.
                </p>
              </details>

              <details>
                <summary>
                  Will the form contact CodeistaAI?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  No. The form only demonstrates validation in your browser. No information is sent
                  or saved, and no enquiry or enrolment is created.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="enquire section" id="enquire" aria-labelledby="enquire-title">
          <div className="wrap enquiry-grid">
            <div className="enquiry-copy">
              <p className="eyebrow">05 / YOUR NEXT CHAPTER</p>
              <h2 id="enquire-title">
                Curiosity is
                <br />
                a great first step.
              </h2>
              <p>Explore what learning Python could look like for you.</p>

              <dl className="course-meta">
                <div>
                  <dt>Course</dt>
                  <dd>Python</dd>
                </div>
                <div>
                  <dt>Price &amp; duration</dt>
                  <dd>To be confirmed</dd>
                </div>
                <div>
                  <dt>Format &amp; start date</dt>
                  <dd>To be confirmed</dd>
                </div>
              </dl>

              <div className="preview-note">
                <strong>You&apos;re exploring a UI prototype.</strong>
                <p>
                  The form is a local demonstration. Use sample details; no information is sent or
                  saved.
                </p>
              </div>
            </div>

            <EnquiryFormCard instance="inline" />
          </div>
        </section>
      </main>

      <footer className="dark">
        <div className="wrap footer-main">
          <a className="wordmark brand-link" href="#" aria-label="CodeistaAI home">
            <Image
              src="/logo-dark.svg"
              alt="CodeistaAI"
              className="brand-logo"
              width={168}
              height={26}
            />
          </a>
          <p>A new chapter, written in Python.</p>
          <a className="text-link" href="#main">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>CodeistaAI · Standalone design prototype</span>
          <span>Contact &amp; legal information: to be provided</span>
        </div>
      </footer>

      <EnquiryDialogModal />
    </>
  );
}
