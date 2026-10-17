import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import EnquiryCTA from '@/components/EnquiryCTA';
import EnquiryFormCard from '@/components/EnquiryFormCard';
import EnquiryDialogModal from '@/components/EnquiryDialogModal';
import ScrollReveal from '@/components/ScrollReveal';
import CourseBodyClass from '@/components/CourseBodyClass';

export const metadata: Metadata = {
  title: 'CodeistaAI | Python Full Stack Course Preview',
  description:
    'Explore a proposed Python Full Stack learning journey from web foundations to APIs, SQL and data analysis with CodeistaAI.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function PythonFullStackPage() {
  return (
    <>
      <CourseBodyClass course="full-stack" />
      <ScrollReveal />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <HeaderNav variant="course" courseName="Python Full Stack" />

      <main id="main">
        <section className="hero dark cinematic-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">PYTHON FULL STACK / BUILD YOUR NEXT CHAPTER</p>
              <h1 id="hero-title">
                Less piecing together.
                <br />
                More <span className="lime">connecting.</span>
              </h1>
              <p className="hero-sub">Build the whole picture with Python.</p>
              <p className="muted hero-description">
                Connect the interface, the backend, and the data. Explore how Python turns
                separate parts into a working web application.
              </p>
              <div className="cta-group">
                <EnquiryCTA className="button">
                  Explore Python Full Stack <span aria-hidden="true">↗</span>
                </EnquiryCTA>
                <a className="text-link" href="#curriculum">
                  See the learning path <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">
                Python Full Stack learning <span aria-hidden="true">/</span> Proposed course preview
              </p>
            </div>

            <div className="hero-visual">
              <div
                aria-label="Illustrative Python Full Stack learning workspace"
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
                    web<span>_</span>
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
                  <code>page = render(data)<br />return page</code>
                  <div className="slab-foot">
                    <span>PYTHON FULL STACK WORKSPACE</span>
                    <b>↗</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-two">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>02 / EXPERIMENT</span>
                  </div>
                  <code>rows = df.groupby(&apos;type&apos;)<br />summary = rows.size()</code>
                  <div className="slab-foot">
                    <span>PYTHON FULL STACK WORKSPACE</span>
                    <b>↗</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-three">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>03 / CREATE</span>
                  </div>
                  <code>response = api.get(&apos;/tasks&apos;)<br />show(response)</code>
                  <div className="slab-foot">
                    <span>PYTHON FULL STACK WORKSPACE</span>
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
                A proposed Python Full Stack learning approach: understand the pieces, experiment
                with them, and put them to work.
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
                <h3>See the whole system.</h3>
                <p>Understand how a page, an API, and a database work together.</p>
                <div className="pillar-example">
                  <span className="example-label">START WITH A QUESTION</span>
                  <code>
                    page = render(data)
                    <br />
                    return page
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
                <h3>Connect it with code.</h3>
                <p>Send a request. Validate the input. Follow the data through your application.</p>
                <div className="pillar-example">
                  <span className="example-label">MAKE THE CONNECTION</span>
                  <code>
                    rows = df.groupby(&apos;type&apos;)
                    <br />
                    summary = rows.size()
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
                <h3>Build something complete.</h3>
                <p>Bring the interface and Python backend together in a useful local project.</p>
                <div className="pillar-example">
                  <span className="example-label">BRING IT TOGETHER</span>
                  <code>
                    response = api.get(&apos;/tasks&apos;)
                    <br />
                    show(response)
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
                A proposed path through Python Full Stack. Topics below are illustrative and await
                confirmation from CodeistaAI.
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
                Explore Python Full Stack <span aria-hidden="true">↗</span>
              </EnquiryCTA>
            </div>

            <div className="modules">
              <details open>
                <summary>
                  <span className="module-no">01</span>
                  <span>
                    Build the foundations<small>Python, HTML &amp; CSS</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Explore Python logic alongside the structure and styling of a web page.
                  </p>
                  <ul className="chips">
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript basics</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build a simple responsive page.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">02</span>
                  <span>
                    Connect the application<small>APIs &amp; backend logic</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Explore request handling, validation, and the connection between browser and server.
                  </p>
                  <ul className="chips">
                    <li>HTTP</li>
                    <li>REST APIs</li>
                    <li>Routing</li>
                    <li>Validation</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Connect a form to a local Python endpoint.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">03</span>
                  <span>
                    Make data useful<small>SQL, pandas &amp; analysis</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Store application data, then use pandas to clean, group, and summarize sample datasets.
                  </p>
                  <ul className="chips">
                    <li>SQL</li>
                    <li>pandas</li>
                    <li>DataFrames</li>
                    <li>CSV</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Turn sample records into a readable summary.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">04</span>
                  <span>
                    Bring the stack together<small>Integration, testing &amp; deployment concepts</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Combine the layers and explore how to test and prepare an application for deployment.
                  </p>
                  <ul className="chips">
                    <li>Integration</li>
                    <li>Tests</li>
                    <li>Git</li>
                    <li>Deployment concepts</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build and test a small local web application.
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
                  <span className="eyebrow">APPLICATION EXPLORATION</span>
                  <h3>A place for every task.</h3>
                  <p>Explore a task tracker with a browser interface, Python API, and database.</p>
                  <span className="project-tag">Illustrative project · scope to be confirmed</span>
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
                  <span className="eyebrow">APPLICATION EXPLORATION</span>
                  <h3>Give your data a view.</h3>
                  <p>Use pandas to summarize sample data and display it in a simple dashboard.</p>
                  <span className="project-tag">Illustrative project · scope to be confirmed</span>
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
              <p className="faq-intro">
                A few things to know about this Python Full Stack course preview.
              </p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  What does this Python Full Stack page cover?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  This page explores a proposed Python Full Stack learning path. Final curriculum,
                  prerequisites, and delivery details are to be confirmed.
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
              <p className="eyebrow">
                Explore what learning Python Full Stack could look like for you.
              </p>
              <h2 id="enquire-title">
                Curiosity is
                <br />
                a great first step.
              </h2>
              <p>Explore what learning Python could look like for you.</p>

              <dl className="course-meta">
                <div>
                  <dt>Course</dt>
                  <dd>Python Full Stack</dd>
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
          <p>A new chapter, built with Python Full Stack.</p>
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
