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
  title: 'CodeistaAI — Python Full Stack Course | Connect Front & Back',
  description:
    'Learn to connect interactive web interfaces, Python APIs, and SQL databases into complete, production-ready applications.',
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
      <ScrollReveal />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <HeaderNav variant="course" courseName="Python Full Stack" />

      <main id="main">
        <section className="hero dark cinematic-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true"></span> FULL STACK · FRONTEND, APIS &amp; DATA
              </p>
              <h1 id="hero-title">
                Connect the interface, API,
                <br className="hide-mobile" />
                and <span className="lime">database.</span>
              </h1>
              <p className="hero-sub">Build end-to-end web applications with Python.</p>
              <p className="muted hero-description">
                Go beyond isolated scripts. Connect interactive user interfaces with Python backend APIs,
                relational databases, and data analysis—with AI as an interactive debugging and architectural assistant.
              </p>
              <div className="cta-group">
                <EnquiryCTA className="button">
                  Enquire about this course
                </EnquiryCTA>
                <a className="text-link" href="#curriculum">
                  View curriculum <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">Intermediate level · Web &amp; data integration · Practical builds</p>
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
                  <i></i> FULL-STACK PYTHON INTEGRATION
                </div>
                <div className="python-core">
                  <span className="core-bracket">{'{'}</span>
                  <span className="py-mark">
                    web<span>_</span>
                  </span>
                  <span className="core-bracket">{'}'}</span>
                </div>
                <span className="floating-label label-a">01 / INTERFACE</span>
                <span className="floating-label label-b">02 / BACKEND</span>
                <span className="floating-label label-c">03 / DATABASE</span>
                <div className="stage-caption">
                  PYTHON FULL STACK WORKSPACE
                </div>
                <div aria-hidden="true" className="scene-slab slab-one">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>01 / FRONTEND</span>
                  </div>
                  <code>page = render(data)<br />return page</code>
                  <div className="slab-foot">
                    <span>WEB INTERFACE</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-two">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>02 / DATA LAYER</span>
                  </div>
                  <code>rows = df.groupby(&apos;type&apos;)<br />summary = rows.size()</code>
                  <div className="slab-foot">
                    <span>SQL &amp; PANDAS</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-three">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>03 / ENDPOINT</span>
                  </div>
                  <code>response = api.get(&apos;/items&apos;)<br />return response</code>
                  <div className="slab-foot">
                    <span>PYTHON API</span>
                    <b>→</b>
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
                <p className="eyebrow">01 / THE ARCHITECTURAL APPROACH</p>
                <h2 id="approach-title">
                  Understand every layer.
                  <br />
                  Connect the full system.
                </h2>
              </div>
              <p>
                Learn how frontend forms, server-side Python endpoints, and relational databases exchange data seamlessly.
              </p>
            </div>

            <div className="pillars">
              <article>
                <div className="pillar-top">
                  <span className="number">01 / INTERFACE</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    {'{ }'}
                  </span>
                </div>
                <h3>See the whole system.</h3>
                <p>Understand how a web page, an API route, and a database communicate.</p>
                <div className="pillar-example">
                  <span className="example-label">FRONTEND REQUEST</span>
                  <code>
                    fetch(&quot;/api/tasks&quot;, &#123;
                    <br />
                    &nbsp;&nbsp;method: &quot;POST&quot;,
                    <br />
                    &nbsp;&nbsp;body: JSON.stringify(task)
                    <br />
                    &#125;)
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Frontend foundations</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article className="pillar-featured">
                <div className="pillar-top">
                  <span className="number">02 / BACKEND</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    &gt;_
                  </span>
                </div>
                <h3>Connect it with Python.</h3>
                <p>Receive requests, validate incoming payloads, and execute business logic safely.</p>
                <div className="pillar-example">
                  <span className="example-label">PYTHON ENDPOINT</span>
                  <code>
                    @app.post(&quot;/api/tasks&quot;)
                    <br />
                    def create_task(task: TaskSchema):
                    <br />
                    &nbsp;&nbsp;return db.insert(task)
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>API design</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article>
                <div className="pillar-top">
                  <span className="number">03 / DATA</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    →
                  </span>
                </div>
                <h3>Store and analyze.</h3>
                <p>Query relational tables with SQL and summarize real-world datasets with pandas.</p>
                <div className="pillar-example">
                  <span className="example-label">DATA PROCESSING</span>
                  <code>
                    df = pd.read_sql(query, conn)
                    <br />
                    summary = df.describe()
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Data integration</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>
            </div>

            <p className="approach-caption">
              ThinkCode Approach <span aria-hidden="true">/</span> Full-stack logic and practical architecture
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
                From API endpoints
                <br />
                to complete stacks.
              </h2>
              <p>
                A structured path through frontend basics, Python backend routing, database design, and end-to-end integration.
              </p>
              <div className="draft-note">
                <span aria-hidden="true">↳</span>
                <p>
                  Structured core syllabus.
                  <br />
                  Batch schedules and duration to be confirmed upon enquiry.
                </p>
              </div>
              <EnquiryCTA className="text-link dark-link">
                Enquire about this course
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
                    Review core Python data structures and build responsive semantic web pages.
                  </p>
                  <ul className="chips">
                    <li>Semantic HTML5</li>
                    <li>CSS layout &amp; Flexbox</li>
                    <li>DOM manipulation</li>
                    <li>JavaScript basics</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build a clean, responsive data dashboard interface.
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
                    Set up a Python web server, define API endpoints, and handle form requests safely.
                  </p>
                  <ul className="chips">
                    <li>REST API design</li>
                    <li>HTTP methods &amp; status codes</li>
                    <li>Request routing</li>
                    <li>Schema validation</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Connect a frontend form to a local Python endpoint with validation.
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
                    Store and query records in relational databases and process information with pandas.
                  </p>
                  <ul className="chips">
                    <li>SQL queries &amp; joins</li>
                    <li>Relational schema design</li>
                    <li>pandas DataFrames</li>
                    <li>Data transformation</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Query an order database and calculate metrics with pandas.
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
                  <p>Assemble all layers into a unified project and write tests to verify functionality.</p>
                  <ul className="chips">
                    <li>Full-stack data flow</li>
                    <li>API endpoint testing</li>
                    <li>Error boundary handling</li>
                    <li>Production deployment concepts</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build and test a complete multi-tier CRUD web application.
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
                <p className="eyebrow lime">03 / MULTI-TIER PROJECTS</p>
                <h2 id="projects-title">
                  Build complete,
                  <br />
                  connected systems.
                </h2>
              </div>
              <p className="muted">
                Practical full-stack projects combining user interfaces, Python backend routing, and persistent database storage.
              </p>
            </div>

            <div className="project-grid">
              <article className="project-card">
                <div className="project-visual mono">
                  <span className="file-label">api_service.py</span>
                  <div className="file-row">
                    <span>GET /api/inventory</span>
                    <span className="lime">200 OK</span>
                  </div>
                  <div className="file-row">
                    <span>POST /api/orders</span>
                    <span className="lime">201 Created</span>
                  </div>
                  <div className="file-row">
                    <span>PUT /api/orders/:id</span>
                    <span className="lime">200 OK</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">BACKEND SERVICE</span>
                  <h3>RESTful API engine.</h3>
                  <p>Build and document a Python web service with input validation and clear status responses.</p>
                  <span className="project-tag">Python · Routing · Input Validation</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual mono">
                  <div className="data-head">
                    <span>orders_db.sql</span>
                    <span className="warm">RELATIONAL QUERY</span>
                  </div>
                  <div className="bar-row">
                    <span>Region A</span>
                    <div style={{ '--bar': '82%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>Region B</span>
                    <div style={{ '--bar': '54%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>Region C</span>
                    <div style={{ '--bar': '94%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">DATA DASHBOARD</span>
                  <h3>Live metrics visualizer.</h3>
                  <p>Query relational records with SQL, aggregate data in pandas, and display live charts on the web.</p>
                  <span className="project-tag">SQL · pandas · Dashboard UI</span>
                </div>
              </article>
            </div>

            <div className="project-bottom">
              <p>Every application connects user actions with persistent data records.</p>
              <a className="text-link" href="#curriculum">
                View curriculum <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="light section" id="faq" aria-labelledby="faq-title">
          <div className="wrap faq-grid">
            <div>
              <p className="eyebrow">04 / QUESTIONS &amp; CLARITY</p>
              <h2 id="faq-title">
                Before you
                <br />
                take the next step.
              </h2>
              <p className="faq-intro">Helpful answers about the Python Full Stack course.</p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  What does this Python Full Stack course cover?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  This course covers frontend HTML/CSS/JavaScript basics, Python backend APIs and routing,
                  relational database design with SQL, data transformation with pandas, and full-stack integration.
                </p>
              </details>

              <details>
                <summary>
                  What starting knowledge is recommended?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Basic familiarity with programming logic or introductory Python syntax (variables, functions, loops)
                  is recommended. Complete beginners should start with our Python Foundations course first.
                </p>
              </details>

              <details>
                <summary>
                  What are the duration and schedule options?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Course duration, batch timings, and delivery formats are being finalized for upcoming cohorts.
                  Submitting an enquiry allows our team to share the confirmed schedule and format options with you.
                </p>
              </details>

              <details>
                <summary>
                  How is AI used in this full-stack course?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  AI is used as an interactive debugging assistant and code reviewer—explaining API errors,
                  suggesting unit test cases, and reviewing architectural patterns while you write and verify the core code.
                </p>
              </details>

              <details>
                <summary>
                  What happens when I submit an enquiry?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Submitting an enquiry connects you directly with the CodeistaAI team. We provide the full syllabus,
                  answer specific questions about batch schedules and prerequisites, and guide you on the best path.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="enquire section" id="enquire" aria-labelledby="enquire-title">
          <div className="wrap enquiry-grid">
            <div className="enquiry-copy">
              <p className="eyebrow">05 / COURSE ENQUIRY</p>
              <h2 id="enquire-title">
                Enquire about
                <br />
                Python Full Stack.
              </h2>
              <p>Submit your details to receive full syllabus information and upcoming batch schedules.</p>

              <dl className="course-meta">
                <div>
                  <dt>Course</dt>
                  <dd>Python Full Stack</dd>
                </div>
                <div>
                  <dt>Prerequisites</dt>
                  <dd>Basic Python recommended</dd>
                </div>
                <div>
                  <dt>Duration &amp; schedule</dt>
                  <dd>To be confirmed (Ask upon enquiry)</dd>
                </div>
                <div>
                  <dt>Delivery format</dt>
                  <dd>To be confirmed (Ask upon enquiry)</dd>
                </div>
              </dl>

              <div className="preview-note">
                <strong>Course Enquiry</strong>
                <p>
                  Connect directly with the CodeistaAI team for curriculum outlines, batch options, and learning guidance.
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
          <p>Think. Code. Build. — Programming logic first, AI as a tool.</p>
          <a className="text-link" href="#main">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>CodeistaAI</span>
          <span>Course details, prerequisites, and schedules subject to confirmation.</span>
        </div>
      </footer>

      <EnquiryDialogModal />
    </>
  );
}
