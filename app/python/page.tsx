import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import EnquiryCTA from '@/components/EnquiryCTA';
import EnquiryFormCard from '@/components/EnquiryFormCard';
import EnquiryDialogModal from '@/components/EnquiryDialogModal';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'CodeistaAI — The next chapter',
  description:
    'Explore a proposed Python learning journey from fundamentals to practical projects with CodeistaAI.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function PythonPage() {
  return (
    <>
      <ScrollReveal />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <HeaderNav variant="course" courseName="Python" />

      <main id="main">
        <section className="hero dark cinematic-hero" aria-labelledby="hero-title">
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
              <p className="hero-note">Python-focused learning</p>
            </div>

            <div className="hero-visual">
              <div
                aria-label="Illustrative Python learning workspace"
                className="python-stage"
              >
                <div className="stage-grid"></div>
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit orbit-three"></div>
                <div className="orbit-label top-label">
                  <i></i> ONE LANGUAGE. OPEN POSSIBILITIES.
                </div>
                <div className="python-core">
                  <span className="core-bracket">{'{'}</span>
                  <span className="py-mark">
                    py<span>_</span>
                  </span>
                  <span className="core-bracket">{'}'}</span>
                </div>
                <span className="floating-label label-a">01 / THINK</span>
                <span className="floating-label label-b">02 / BUILD</span>
                <span className="floating-label label-c">03 / ITERATE</span>
                <div className="stage-caption">
                  YOUR IDEAS BELONG HERE <span>↗</span>
                </div>
                <div aria-hidden="true" className="scene-slab slab-one">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>01 / LOGIC</span>
                  </div>
                  <code>if curious:<br />  take_first_step()</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
                    <b>↗</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-two">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>02 / EXPERIMENT</span>
                  </div>
                  <code>for idea in ideas:<br />  try_it(idea)</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
                    <b>↗</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-three">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>03 / CREATE</span>
                  </div>
                  <code>your_idea = build()<br />your_idea.run()</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
                    <b>↗</b>
                  </div>
                </div>
              </div>
            </div>
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
                A proposed Python learning approach: understand the pieces, experiment with them,
                and put them to work.
              </p>
            </div>

            <div className="pillars">
              <article>
                <div className="pillar-top">
                  <span className="number">01 / UNDERSTAND</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    {'{ }'}
                  </span>
                </div>
                <h3>Build a mental model.</h3>
                <p>Learn how Python thinks so syntax feels natural, not memorized.</p>
                <div className="pillar-example">
                  <span className="example-label">START WITH A QUESTION</span>
                  <code>
                    ideas = [&quot;automate&quot;, &quot;build&quot;]
                    <br />
                    for idea in ideas:
                    <br />
                    &nbsp;&nbsp;print(idea)
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
                <h3>Learn by trying.</h3>
                <p>Run small scripts, inspect the output, and get comfortable fixing errors.</p>
                <div className="pillar-example">
                  <span className="example-label">TRY A SMALL SCRIPT</span>
                  <code>
                    def inspect(value):
                    <br />
                    &nbsp;&nbsp;return type(value).__name__
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
                <h3>Make something that works.</h3>
                <p>Connect variables, functions, and files into small tools you can actually run.</p>
                <div className="pillar-example">
                  <span className="example-label">MAKE IT USEFUL</span>
                  <code>
                    with open(&quot;notes.txt&quot;) as f:
                    <br />
                    &nbsp;&nbsp;lines = f.readlines()
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Connect the pieces</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            </div>

            <p className="approach-caption">
              A proposed learning approach <span aria-hidden="true">/</span> Illustrative pseudocode
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
                A proposed path through Python. Topics below are illustrative and await confirmation
                from CodeistaAI.
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
                    Think like a programmer<small>Variables, types &amp; logic</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Understand how Python stores information, makes decisions, and repeats tasks.
                  </p>
                  <ul className="chips">
                    <li>Variables &amp; types</li>
                    <li>Conditionals</li>
                    <li>Loops &amp; ranges</li>
                    <li>Basic debugging</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Write a script that sorts a list of tasks.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">02</span>
                  <span>
                    Keep what you create<small>Files, data &amp; clean code</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Work with files on your computer and organize your code into reusable functions.
                  </p>
                  <ul className="chips">
                    <li>Functions &amp; scope</li>
                    <li>Reading &amp; writing files</li>
                    <li>Lists &amp; dictionaries</li>
                    <li>Error handling</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Read a text file and count the most frequent words.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">03</span>
                  <span>
                    Connect the pieces<small>APIs, datasets &amp; simple automation</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Fetch information from the web, parse structured data, and automate a repetitive
                    task.
                  </p>
                  <ul className="chips">
                    <li>Requests &amp; JSON</li>
                    <li>External packages</li>
                    <li>Working with CSVs</li>
                    <li>Automation scripts</li>
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
                  <h3>A place for every file.</h3>
                  <p>Write a script that sorts a messy folder into neat, labeled directories.</p>
                  <span className="project-tag">Files · Paths · Functions</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual mono">
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
              <p className="faq-intro">A few things to know about this Python course.</p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  What does this Python page cover?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  This page explores a proposed Python learning journey from core logic to useful
                  scripts. Final curriculum, prerequisites, and schedules are to be confirmed.
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
                  Yes. Submitting the enquiry form sends your details to the CodeistaAI team so we
                  can provide you with course information and next steps.
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
                <strong>Course Enquiry</strong>
                <p>
                  Submit your details to receive full syllabus information and next batch schedules.
                </p>
              </div>
            </div>

            <EnquiryFormCard instance="inline" />
          </div>
        </section>
      </main>

      <footer className="dark">
        <div className="wrap footer-main">
          <Link className="wordmark brand-link" href="/" aria-label="CodeistaAI home">
            <Image
              src="/logo-dark.svg"
              alt="CodeistaAI"
              className="brand-logo"
              width={168}
              height={26}
            />
          </Link>
          <p>A new chapter, written in Python.</p>
          <a className="text-link" href="#main">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>CodeistaAI</span>
          <span>Contact &amp; legal information: to be provided</span>
        </div>
      </footer>

      <EnquiryDialogModal />
    </>
  );
}
