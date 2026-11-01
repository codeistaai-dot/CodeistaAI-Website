import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import CourseBodyClass from '@/components/CourseBodyClass';
import ScrollReveal from '@/components/ScrollReveal';
import './home.css';

export const metadata: Metadata = {
  title: 'CodeistaAI — Think. Code. Build. | Programming Logic First',
  description:
    'Learn to break problems into clear steps, write code, and build practical projects—with AI used as a tool to support learning.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function HomePage() {
  return (
    <div className="page-home">
      <ScrollReveal />
      <CourseBodyClass course="home" />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <HeaderNav variant="home" />

      <main id="main">
        {/* Hero Section */}
        <section className="hero wrap" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true"></span> PROGRAMMING LOGIC FIRST · AI AS A TOOL
          </p>
          <h1 id="hero-title">
            Think. Code. <span className="hero-build">Build.</span>
          </h1>
          <p className="intro">
            Learn to break problems into clear steps, write code, and build practical
            projects—with AI used as a tool to support learning.
          </p>
          <div className="hero-cta-wrap">
            <a className="button" href="#courses">
              Explore courses <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Restrained Learning Process Visual */}
          <div className="learning-nexus" aria-label="Learning progression overview">
            <div className="learning-step-card">
              <div className="step-badge">01 / THINK</div>
              <h3>Deconstruct the logic</h3>
              <p>Break complex problems into clear, step-by-step algorithms before typing syntax.</p>
              <div className="step-code">
                <code>
                  <span className="code-comment"># 01. Break down problem</span>
                  <br />
                  <span className="code-purple">def</span> plan_steps(problem):
                  <br />
                  &nbsp;&nbsp;<span className="code-purple">return</span> [clarify, decompose, solve]
                </code>
              </div>
            </div>

            <div className="learning-step-connector" aria-hidden="true">
              →
            </div>

            <div className="learning-step-card is-active">
              <div className="step-badge">02 / CODE</div>
              <h3>Write clean code</h3>
              <p>Practice variables, loops, functions, and data structures with immediate feedback.</p>
              <div className="step-code">
                <code>
                  <span className="code-comment"># 02. Implement the logic</span>
                  <br />
                  <span className="code-purple">for</span> step <span className="code-purple">in</span> plan_steps(task):
                  <br />
                  &nbsp;&nbsp;code = write_solution(step)
                </code>
              </div>
            </div>

            <div className="learning-step-connector" aria-hidden="true">
              →
            </div>

            <div className="learning-step-card">
              <div className="step-badge">03 / BUILD</div>
              <h3>Ship practical tools</h3>
              <p>Combine modules into working tools, using AI to test edge cases and review code.</p>
              <div className="step-code">
                <code>
                  <span className="code-comment"># 03. AI as a learning tool</span>
                  <br />
                  project = build_app(code)
                  <br />
                  ai_assistant.review_and_explain(project)
                </code>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 / THINK THE LOGIC</span>
            <span>02 / CODE WITH CONFIDENCE</span>
            <span>03 / BUILD WITH AI AS A TOOL</span>
          </div>
        </section>

        {/* Methodology / Approach Section */}
        <section className="approach section" id="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">01 / THE LEARNING METHOD</p>
                <h2 id="approach-title">
                  Programming logic first.
                  <br className="hide-mobile" />
                  AI as a learning tool.
                </h2>
              </div>
              <p>
                Before letting AI generate solutions you cannot verify, learn how code actually works.
                We train students to reason through problems so you can write, debug, and own your software.
              </p>
            </div>

            <div className="workspace">
              <div className="workspace-bar">
                <span>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>codeistaai / methodology.py</span>
                <span>THINK. CODE. BUILD.</span>
              </div>
              <div className="flow">
                <div>
                  <span className="step">STEP 01</span>
                  <h3>Think</h3>
                  <p>Build the mental model. Break messy real-world challenges into predictable, logical steps.</p>
                  <code>problem → algorithm</code>
                </div>
                <span aria-hidden="true" className="connector">
                  →
                </span>
                <div>
                  <span className="step">STEP 02</span>
                  <h3>Code</h3>
                  <p>Turn logic into clean, readable code. Practice syntax, functions, files, and debugging.</p>
                  <code>logic → clean_code.py</code>
                </div>
                <span aria-hidden="true" className="connector">
                  →
                </span>
                <div>
                  <span className="step">STEP 03</span>
                  <h3>Build</h3>
                  <p>Ship working tools and applications. Use AI as an interactive tutor and code reviewer.</p>
                  <code>code + ai_partner → tool</code>
                </div>
              </div>
            </div>

            <div className="methodology-note">
              <strong>The ThinkCode Learning Approach:</strong>
              <p>
                We believe algorithmic problem-solving is the durable foundation of engineering. Syntax can be
                looked up and AI can generate snippets, but understanding how to reason through problems, evaluate outputs,
                and structure solutions is what creates confident developers.
              </p>
            </div>
          </div>
        </section>

        {/* Single Main Course Comparison Section */}
        <section className="section wrap" id="courses" aria-labelledby="courses-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / CHOOSE YOUR COURSE</p>
              <h2 id="courses-title">
                Three focused courses.
                <br className="hide-mobile" />
                Clear starting points.
              </h2>
            </div>
            <p>
              Select the path that matches your current knowledge and goals. Each course emphasizes
              practical exercises, problem-solving, and building working software.
            </p>
          </div>

          <div className="course-grid">
            {/* Course 1: Python */}
            <article className="course-card">
              <div className="card-top">
                <span className="card-phase">01 / FOUNDATIONS</span>
                <span className="level-badge">Beginner</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                py_
              </div>
              <div className="card-header">
                <h3>Python</h3>
                <p className="card-audience">
                  For beginners and students starting from scratch with no prior coding experience.
                </p>
              </div>

              <div className="card-body">
                <p className="outcomes-heading">What you will learn &amp; build:</p>
                <ul className="outcomes-list" aria-label="Python learning outcomes">
                  <li>Break everyday problems into clear, logical steps before writing syntax</li>
                  <li>Write clean, modular code with variables, loops, functions, and data structures</li>
                  <li>Build practical automation scripts for file processing, data tasks, and CLI tools</li>
                </ul>
              </div>

              <div className="card-bottom">
                <div className="card-meta">
                  <div className="meta-row">
                    <span className="meta-label">Prerequisites:</span>
                    <span className="meta-value">None</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">To be confirmed (Ask upon enquiry)</span>
                  </div>
                </div>
                <Link className="course-card-action" href="/python">
                  View course <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Course 2: Python Full Stack */}
            <article className="course-card">
              <div className="card-top">
                <span className="card-phase">02 / APPLICATIONS</span>
                <span className="level-badge">Intermediate</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                web_
              </div>
              <div className="card-header">
                <h3>Python Full Stack</h3>
                <p className="card-audience">
                  For learners with basic coding knowledge ready to ship complete web applications.
                </p>
              </div>

              <div className="card-body">
                <p className="outcomes-heading">What you will learn &amp; build:</p>
                <ul className="outcomes-list" aria-label="Python Full Stack learning outcomes">
                  <li>Connect browser user interfaces to robust Python API backend services</li>
                  <li>Model, store, and query relational data using SQL and database persistence</li>
                  <li>Build and deploy integrated, multi-tier web applications with input validation</li>
                </ul>
              </div>

              <div className="card-bottom">
                <div className="card-meta">
                  <div className="meta-row">
                    <span className="meta-label">Prerequisites:</span>
                    <span className="meta-value">Basic Python recommended</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">To be confirmed (Ask upon enquiry)</span>
                  </div>
                </div>
                <Link className="course-card-action" href="/python-full-stack">
                  View course <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Course 3: Gen AI */}
            <article className="course-card">
              <div className="card-top">
                <span className="card-phase">03 / POSSIBILITIES</span>
                <span className="level-badge">Applied</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                ai_
              </div>
              <div className="card-header">
                <h3>Gen AI</h3>
                <p className="card-audience">
                  For developers and learners looking to build reliable, grounded AI applications.
                </p>
              </div>

              <div className="card-body">
                <p className="outcomes-heading">What you will learn &amp; build:</p>
                <ul className="outcomes-list" aria-label="Gen AI learning outcomes">
                  <li>Engineer structured prompts and evaluate model outputs for reliability</li>
                  <li>Ground generative responses in private documents using vector retrieval (RAG)</li>
                  <li>Build working AI tools with source attribution, trace logs, and fallback rules</li>
                </ul>
              </div>

              <div className="card-bottom">
                <div className="card-meta">
                  <div className="meta-row">
                    <span className="meta-label">Prerequisites:</span>
                    <span className="meta-value">Python basics recommended</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">To be confirmed (Ask upon enquiry)</span>
                  </div>
                </div>
                <Link className="course-card-action" href="/gen-ai">
                  View course <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Practical Projects & Capabilities Showcases */}
        <section className="course-deep section wrap" aria-labelledby="showcase-title">
          <div className="feature-row">
            <div className="feature-copy">
              <p className="eyebrow">FOUNDATIONS IN ACTION / PYTHON</p>
              <h2 id="showcase-title">
                Logic first.
                <br className="hide-mobile" />
                Real understanding.
              </h2>
              <p>
                Start with the reasoning behind the code. Explore variables, control flow, functions,
                and files—then connect them in an automated, useful script.
              </p>
              <Link className="feature-link" href="/python">
                View Python course <span aria-hidden="true">→</span>
              </Link>
              <div className="mini-tags">
                <span>Understand the logic</span>
                <span>Learn by trying</span>
              </div>
            </div>

            <div className="code-window">
              <div className="window-head">
                <span className="window-dots">● ● ●</span>
                <span>organize_files.py</span>
                <span>PYTHON</span>
              </div>
              <div className="code-lines">
                <span className="code-comment"># Turn logic into an automation script</span>
                <br />
                <span className="code-purple">import</span> os, shutil
                <br />
                <br />
                <span className="code-purple">def</span> organize_folder(path):
                <br />
                &nbsp;&nbsp;<span className="code-purple">for</span> file <span className="code-purple">in</span> os.listdir(path):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">if</span> file.endswith(&quot;.csv&quot;):
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shutil.move(file, &quot;datasets/&quot;)
              </div>
              <div className="code-output">
                <span>OUTPUT / REAL AUTOMATION</span>
                <p>
                  › Sorted 18 data files into /datasets.<i></i>
                </p>
              </div>
            </div>
          </div>

          <div className="feature-pair">
            <div>
              <h3>Start with a problem.</h3>
              <p>Turn challenges into small, clear steps you can reason through before writing code.</p>
              <div className="mini-flow">
                <span>Problem</span>
                <b aria-hidden="true">→</b>
                <span>Logic</span>
                <b aria-hidden="true">→</b>
                <span>Code</span>
              </div>
            </div>
            <div>
              <h3>Iterate and verify.</h3>
              <p>Read program output, diagnose bugs, and improve the solution systematically.</p>
              <div className="iteration">
                <span>draft.py</span>
                <div className="iteration-line" aria-hidden="true"></div>
                <span className="iteration-end">verified_app.py →</span>
              </div>
            </div>
          </div>
        </section>

        {/* Python Full Stack Architecture Showcase */}
        <section className="stack-section section" aria-labelledby="stack-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">CONNECTIONS IN ACTION / PYTHON FULL STACK</p>
                <h2 id="stack-title">
                  One application.
                  <br className="hide-mobile" />
                  Every layer connected.
                </h2>
              </div>
              <p>
                Experience how frontend interfaces, Python APIs, and database tables interact
                to form complete, responsive web applications.
              </p>
            </div>

            <div className="stack-board">
              <div className="window-head">
                <span>APPLICATION ARCHITECTURE</span>
                <span>CONNECTED LAYERS</span>
              </div>
              <div className="stack-layers">
                <div>
                  <span className="layer-no">01 / INTERFACE</span>
                  <h3>What users see.</h3>
                  <div className="mini-browser">
                    <div></div>
                    <p></p>
                    <p></p>
                    <span className="mock-button">Submit Form</span>
                  </div>
                  <small>HTML · CSS · JavaScript</small>
                </div>
                <b aria-hidden="true">↔</b>
                <div>
                  <span className="layer-no">02 / BACKEND</span>
                  <h3>How it processes.</h3>
                  <div className="api-lines">
                    <span>
                      <em>GET</em> /api/items
                    </span>
                    <span>
                      <em>POST</em> /api/submit
                    </span>
                    <span>
                      <em>PUT</em> /api/items/:id
                    </span>
                  </div>
                  <small>Python · APIs · Input Validation</small>
                </div>
                <b aria-hidden="true">↔</b>
                <div>
                  <span className="layer-no">03 / DATA</span>
                  <h3>What it stores.</h3>
                  <div className="data-table">
                    <span>RECORD</span>
                    <span>STATUS</span>
                    <span>order_101</span>
                    <span>active</span>
                    <span>order_102</span>
                    <span>verified</span>
                    <span>order_103</span>
                    <span>completed</span>
                  </div>
                  <small>SQL · pandas · Relational Data</small>
                </div>
              </div>
            </div>

            <div className="feature-bottom">
              <p>From an initial HTTP request to reliable database storage.</p>
              <Link className="feature-link" href="/python-full-stack">
                View Python Full Stack course <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Gen AI Showcase */}
        <section className="section wrap ai-feature" aria-labelledby="ai-showcase-title">
          <div className="feature-row">
            <div className="feature-copy">
              <p className="eyebrow">APPLIED AI IN ACTION / GEN AI</p>
              <h2 id="ai-showcase-title">
                Context-grounded.
                <br className="hide-mobile" />
                Thoughtful AI systems.
              </h2>
              <p>
                Explore how prompt engineering, vector retrieval (RAG), and evaluation turn raw model outputs
                into reliable, traceable applications. Learn how to identify and prevent hallucinations.
              </p>
              <Link className="feature-link" href="/gen-ai">
                View Gen AI course <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="ai-window">
              <div className="window-head">
                <span>RETRIEVAL-AUGMENTED CONTEXT WORKSPACE</span>
                <span>SOURCE GROUNDING</span>
              </div>
              <div className="document-pills">
                <span>◈ syllabus-guide.pdf</span>
                <span>◈ student-notes.md</span>
              </div>
              <div className="chat-question">How does CodeistaAI use AI in the classroom?</div>
              <div className="chat-response">
                <span className="ai-spark" aria-hidden="true">✧</span>
                <div>
                  <strong>Grounded in verified context:</strong>
                  <p>
                    Relevant notes are retrieved and fed to the model. The response is synthesized
                    with source citations and verified by the student.
                  </p>
                  <span className="source-chip">Document context → Retrieval → Human review</span>
                </div>
              </div>
              <div className="ai-loop">
                <span>Prompt</span>
                <span aria-hidden="true">→</span>
                <span>Retrieve</span>
                <span aria-hidden="true">→</span>
                <span>Evaluate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Questions from Students & Parents (FAQ) */}
        <section className="section wrap faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-head">
            <div>
              <p className="eyebrow">04 / QUESTIONS &amp; CLARITY</p>
              <h2 id="faq-title">
                Common questions from
                <br className="hide-mobile" />
                students and parents.
              </h2>
            </div>
            <p>
              Clear, transparent answers about course prerequisites, our teaching philosophy,
              and what happens when you enquire.
            </p>
          </div>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                Do I or my child need prior coding experience?
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Our <strong>Python</strong> course is specifically designed for complete beginners and students
                with zero prior experience. We start with fundamental computational logic before writing syntax.
                Our <strong>Python Full Stack</strong> and <strong>Gen AI</strong> courses assume familiarity with
                basic programming logic or introductory Python concepts.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Why teach programming logic before AI tools?
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                AI coding tools can generate snippets quickly, but if a student does not understand programming
                logic, they cannot spot mistakes, debug errors, or verify whether code is secure and efficient.
                We teach problem-solving logic first so learners have the knowledge to direct and evaluate AI intelligently.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How is AI used during the learning process?
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                AI is treated as an interactive learning partner—explaining cryptic compiler errors, providing
                practice problems, and reviewing student code. It is never used as a replacement for human reasoning
                or an automatic assignment generator.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                How long do the courses take and what is the schedule?
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Course durations, delivery formats (live interactive sessions, practice hours), and upcoming batch
                start dates are currently being finalized for the next cohort. Submitting a course enquiry allows
                our team to provide you with the most up-to-date schedule and options.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                What happens after I submit an enquiry?
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Submitting an enquiry connects you directly with the CodeistaAI team. We share full syllabus details,
                answer specific questions about batch timings and prerequisites, and help you select the most suitable
                course for your background.
              </p>
            </details>
          </div>
        </section>

        {/* Closing Action Section */}
        <section className="wrap closing" aria-labelledby="closing-title">
          <div>
            <p className="eyebrow">GET STARTED</p>
            <h2 id="closing-title">
              Ready to build
              <br className="hide-mobile" />
              genuine coding skills?
            </h2>
            <p className="closing-sub">
              Compare our three learning tracks to find your starting point—from
              foundational programming logic to full stack development and practical AI tools.
            </p>
          </div>
          <div className="closing-buttons">
            <a className="button" href="#courses">
              Explore courses <span aria-hidden="true">↑</span>
            </a>
            <a className="button button-outline" href="#approach">
              Our approach <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="wrap footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="CodeistaAI home">
              <Image
                src="/logo-dark.svg"
                alt="CodeistaAI"
                width={168}
                height={32}
              />
            </Link>
            <p className="footer-tagline">
              Think. Code. Build. — Programming logic first, AI as a tool.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Course pages">
            <Link href="/python">Python</Link>
            <Link href="/python-full-stack">Python Full Stack</Link>
            <Link href="/gen-ai">Gen AI</Link>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>CodeistaAI · Course details, prerequisites, and schedules subject to confirmation.</span>
          <span>© {new Date().getFullYear()} CodeistaAI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
