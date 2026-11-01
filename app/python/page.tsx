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
  title: 'CodeistaAI — Python Course | Think. Code. Build.',
  description:
    'Master programming logic, write clean Python code, and build practical projects with CodeistaAI. AI used as a tool to support your learning.',
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
                <span className="status-dot" aria-hidden="true"></span> FOUNDATIONS · PROGRAMMING LOGIC FIRST
              </p>
              <h1 id="hero-title">
                Think clearly. Write Python.
                <br className="hide-mobile" />
                <span className="lime">Build practical tools.</span>
              </h1>
              <p className="hero-sub">Practical Python programming for beginners—logic first, syntax second.</p>
              <p className="muted hero-description">
                Learn to break real problems into clear, logical steps. Practice variables, functions, and file scripts,
                using AI as an interactive learning partner rather than a shortcut.
              </p>
              <div className="cta-group">
                <EnquiryCTA className="button">
                  Enquire about this course
                </EnquiryCTA>
                <a className="text-link" href="#curriculum">
                  View curriculum <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">Beginner-friendly · Practical exercises · AI-assisted learning</p>
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
                  <i></i> PROGRAMMING LOGIC FIRST
                </div>
                <div className="python-core">
                  <span className="core-bracket">{'{'}</span>
                  <span className="py-mark">
                    py<span>_</span>
                  </span>
                  <span className="core-bracket">{'}'}</span>
                </div>
                <span className="floating-label label-a">01 / THINK</span>
                <span className="floating-label label-b">02 / CODE</span>
                <span className="floating-label label-c">03 / BUILD</span>
                <div className="stage-caption">
                  PRACTICAL PYTHON WORKSPACE
                </div>
                <div aria-hidden="true" className="scene-slab slab-one">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>01 / LOGIC</span>
                  </div>
                  <code>if problem_clear:<br />  plan_steps()</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-two">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>02 / EXPERIMENT</span>
                  </div>
                  <code>for step in steps:<br />  test_logic(step)</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-three">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>03 / BUILD</span>
                  </div>
                  <code>tool = build_script()<br />tool.run()</code>
                  <div className="slab-foot">
                    <span>PYTHON WORKSPACE</span>
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
                <p className="eyebrow">01 / THE LEARNING APPROACH</p>
                <h2 id="approach-title">
                  Logic first.
                  <br />
                  Syntax second. Real projects.
                </h2>
              </div>
              <p>
                Our three-step method trains you to think like a programmer before writing code,
                ensuring concepts stay with you long after the course.
              </p>
            </div>

            <div className="pillars">
              <article>
                <div className="pillar-top">
                  <span className="number">01 / THINK</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    {'{ }'}
                  </span>
                </div>
                <h3>Build a mental model.</h3>
                <p>Learn how programming logic works so writing code feels natural, not memorized.</p>
                <div className="pillar-example">
                  <span className="example-label">START WITH A PROBLEM</span>
                  <code>
                    tasks = [&quot;sort files&quot;, &quot;summarize data&quot;]
                    <br />
                    for task in tasks:
                    <br />
                    &nbsp;&nbsp;solve(task)
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Think clearly</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article className="pillar-featured">
                <div className="pillar-top">
                  <span className="number">02 / CODE</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    &gt;_
                  </span>
                </div>
                <h3>Practice with code.</h3>
                <p>Write small scripts, inspect terminal outputs, and get comfortable fixing real errors.</p>
                <div className="pillar-example">
                  <span className="example-label">WRITE CLEAN FUNCTIONS</span>
                  <code>
                    def inspect(value):
                    <br />
                    &nbsp;&nbsp;return type(value).__name__
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Learn by doing</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article>
                <div className="pillar-top">
                  <span className="number">03 / BUILD</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    →
                  </span>
                </div>
                <h3>Make tools that work.</h3>
                <p>Connect variables, functions, and files into small utilities you can run and use.</p>
                <div className="pillar-example">
                  <span className="example-label">PRACTICAL SCRIPTING</span>
                  <code>
                    with open(&quot;data.txt&quot;) as f:
                    <br />
                    &nbsp;&nbsp;records = [r.strip() for r in f]
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Connect the pieces</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>
            </div>

            <p className="approach-caption">
              ThinkCode Approach <span aria-hidden="true">/</span> Programming logic first, AI as a tool
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
                From first principles
                <br />
                to practical scripts.
              </h2>
              <p>
                A structured path through Python fundamentals. Topics below reflect the practical core curriculum.
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
                    <strong>Try it:</strong> Write a script that categorizes and sorts a list of tasks.
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
                    Fetch information from the web, parse structured data, and automate a repetitive task.
                  </p>
                  <ul className="chips">
                    <li>Requests &amp; JSON</li>
                    <li>External packages</li>
                    <li>Working with CSVs</li>
                    <li>Automation scripts</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Read and summarize a sample CSV dataset automatically.
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
                    <strong>Try it:</strong> Build and document a useful local command-line tool.
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
                Hands-on project examples supported by our curriculum. Practical tools you build and understand.
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
                    <span className="warm">SAMPLE DATASET</span>
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
                  <p>Read a sample dataset and turn its rows into a clear, formatted summary.</p>
                  <span className="project-tag">CSV · Collections · Functions</span>
                </div>
              </article>
            </div>

            <div className="project-bottom">
              <p>Practical projects start with solving problems you encounter every day.</p>
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
              <p className="faq-intro">Helpful answers about the Python Foundations course.</p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  What does this Python course cover?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  This course covers fundamental programming logic, variables, conditionals, loops, functions,
                  file reading/writing, and writing practical automation scripts.
                </p>
              </details>

              <details>
                <summary>
                  Do I need previous coding experience?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  No. This course is built specifically for complete beginners and students. We start with fundamental
                  problem-solving logic before introducing syntax.
                </p>
              </details>

              <details>
                <summary>
                  What is the course schedule and duration?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  Course duration, batch timings, and delivery formats are to be confirmed for upcoming cohorts.
                  Submitting an enquiry allows our team to share the latest schedule options with you.
                </p>
              </details>

              <details>
                <summary>
                  How is AI used in this course?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  AI is used as an interactive learning tutor to explain error messages and review student code.
                  You learn the programming logic first so you can verify and direct AI tools with confidence.
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
                  Submitting an enquiry sends your details directly to the CodeistaAI team. We follow up with the full
                  syllabus details, batch schedules, and answer any specific questions you have.
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
                Python Foundations.
              </h2>
              <p>Submit your details to receive full syllabus information and upcoming batch schedules.</p>

              <dl className="course-meta">
                <div>
                  <dt>Course</dt>
                  <dd>Python Foundations</dd>
                </div>
                <div>
                  <dt>Prerequisites</dt>
                  <dd>None (Beginner-friendly)</dd>
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
