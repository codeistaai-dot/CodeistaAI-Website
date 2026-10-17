import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import CourseBodyClass from '@/components/CourseBodyClass';
import ScrollReveal from '@/components/ScrollReveal';
import './home.css';

export const metadata: Metadata = {
  title: 'CodeistaAI — Choose your next chapter',
  description:
    'Explore Python, Python Full Stack and Gen AI with CodeistaAI. Choose your next learning path.',
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
        <section className="hero wrap">
          <p className="eyebrow">
            <span className="dot"></span> THREE PATHS. YOUR NEXT CHAPTER.
          </p>
          <h1>
            Start with curiosity.
            <br />
            Build <span>what comes next.</span>
          </h1>
          <p className="intro">
            From your first line of Python to connected applications and AI-powered ideas.
            Choose a path that speaks to you.
          </p>
          <a className="button" href="#courses">
            Explore the courses <span aria-hidden="true">↗</span>
          </a>

          <div className="course-nexus">
            <div aria-hidden="true" className="nexus-glow"></div>
            <div aria-hidden="true" className="nexus-source">
              &gt;_
            </div>
            <svg
              aria-hidden="true"
              className="nexus-traces"
              preserveAspectRatio="none"
              viewBox="0 0 1000 230"
            >
              <defs>
                <linearGradient id="trace" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#d6b5ff"></stop>
                  <stop offset="1" stopColor="#905bf4" stopOpacity=".3"></stop>
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#trace)" strokeWidth="1.5">
                <path d="M500 0 V40 Q500 75 450 75 H220 Q170 75 170 115 V230"></path>
                <path d="M500 0 V230"></path>
                <path d="M500 0 V40 Q500 75 550 75 H780 Q830 75 830 115 V230"></path>
              </g>
              <g fill="#d6b5ff">
                <circle cx="170" cy="150" r="3"></circle>
                <circle cx="500" cy="110" r="3"></circle>
                <circle cx="830" cy="150" r="3"></circle>
              </g>
            </svg>
            <div className="nexus-options">
              <Link href="/python">
                <span className="nexus-index">01 / FOUNDATIONS</span>
                <div>
                  <span className="nexus-mark">py_</span>
                  <span aria-hidden="true" className="nexus-arrow">
                    ↗
                  </span>
                </div>
                <strong>Python</strong>
                <small>Start with the logic.</small>
              </Link>
              <Link href="/python-full-stack">
                <span className="nexus-index">02 / APPLICATIONS</span>
                <div>
                  <span className="nexus-mark">web_</span>
                  <span aria-hidden="true" className="nexus-arrow">
                    ↗
                  </span>
                </div>
                <strong>Python Full Stack</strong>
                <small>Connect every layer.</small>
              </Link>
              <Link href="/gen-ai">
                <span className="nexus-index">03 / POSSIBILITIES</span>
                <div>
                  <span className="nexus-mark">ai_</span>
                  <span aria-hidden="true" className="nexus-arrow">
                    ↗
                  </span>
                </div>
                <strong>Gen AI</strong>
                <small>Build with intelligence.</small>
              </Link>
            </div>
          </div>

          <div className="hero-bottom">
            <span>THINK CLEARLY.</span>
            <span>CONNECT THE PIECES.</span>
            <span>MAKE SOMETHING USEFUL.</span>
          </div>
        </section>

        <section className="section wrap" id="courses">
          <div className="section-head">
            <div>
              <p className="eyebrow">01 / CHOOSE YOUR DIRECTION</p>
              <h2>
                Different starting points.
                <br />
                The same drive to build.
              </h2>
            </div>
            <p>
              Start with the fundamentals, connect an entire application, or explore generative AI.
              Each course has its own space to discover more.
            </p>
          </div>

          <div className="course-grid">
            <Link className="course-card" href="/python">
              <div className="card-top">
                <span>01 / EXPLORE</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                py_
              </div>
              <h3>Python</h3>
              <p className="card-lead">Start with the foundations.</p>
              <p>
                Turn curiosity into code. Explore the logic, practice the basics, and build useful
                Python scripts.
              </p>
              <div className="card-bottom">
                <span>Variables · Functions · Files</span>
                <strong>Explore course ↗</strong>
              </div>
            </Link>

            <Link className="course-card" href="/python-full-stack">
              <div className="card-top">
                <span>02 / EXPLORE</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                web_
              </div>
              <h3>Python Full Stack</h3>
              <p className="card-lead">Connect the whole picture.</p>
              <p>
                Bring the interface, Python backend, and data together. Explore web applications,
                APIs, SQL, and pandas.
              </p>
              <div className="card-bottom">
                <span>Frontend · APIs · pandas</span>
                <strong>Explore course ↗</strong>
              </div>
            </Link>

            <Link className="course-card" href="/gen-ai">
              <div className="card-top">
                <span>03 / EXPLORE</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div aria-hidden="true" className="course-symbol">
                ai_
              </div>
              <h3>Gen AI</h3>
              <p className="card-lead">Make room for new ideas.</p>
              <p>
                Explore how prompts, models, and retrieval work together. Build thoughtful AI tools
                and learn to evaluate their outputs.
              </p>
              <div className="card-bottom">
                <span>Prompts · RAG · Evaluation</span>
                <strong>Explore course ↗</strong>
              </div>
            </Link>
          </div>
        </section>

        <section className="course-deep section wrap">
          <div className="feature-row">
            <div className="feature-copy">
              <p className="eyebrow">FOUNDATIONS / PYTHON</p>
              <h2>
                Small first steps.
                <br />
                Real understanding.
              </h2>
              <p>
                Start with the logic behind the code. Explore variables, functions and files, then
                connect them in a useful script.
              </p>
              <Link className="feature-link" href="/python">
                Discover Python <span>↗</span>
              </Link>
              <div className="mini-tags">
                <span>Understand the logic</span>
                <span>Learn by trying</span>
              </div>
            </div>

            <div className="code-window">
              <div className="window-head">
                <span className="window-dots">● ● ●</span>
                <span>first_step.py</span>
                <span>PYTHON</span>
              </div>
              <div className="code-lines">
                <span className="code-comment"># Every idea starts somewhere.</span>
                <br />
                <span className="code-purple">ideas</span> = [
                <br />
                &nbsp;&nbsp;&quot;understand the basics&quot;,
                <br />
                &nbsp;&nbsp;&quot;automate a small task&quot;,
                <br />
                &nbsp;&nbsp;&quot;build something useful&quot;
                <br />
                ]
                <br />
                <br />
                <span className="code-purple">for</span> idea <span className="code-purple">in</span> ideas:
                <br />
                &nbsp;&nbsp;print(f&quot;Let&apos;s &#123;idea&#125;.&quot;)
              </div>
              <div className="code-output">
                <span>OUTPUT / ILLUSTRATIVE</span>
                <p>
                  › Let&apos;s build something useful.<i></i>
                </p>
              </div>
            </div>
          </div>

          <div className="feature-pair">
            <div>
              <h3>Start with a question.</h3>
              <p>Turn a problem into small, clear steps you can reason about.</p>
              <div className="mini-flow">
                <span>Question</span>
                <b>→</b>
                <span>Logic</span>
                <b>→</b>
                <span>Code</span>
              </div>
            </div>
            <div>
              <h3>Make the next version better.</h3>
              <p>Read the output, find the bug, and try another approach.</p>
              <div className="iteration">
                <span>idea.py</span>
                <div className="iteration-line"></div>
                <span className="iteration-end">next_version.py ↗</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-section section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">CONNECTIONS / PYTHON FULL STACK</p>
                <h2>
                  One application.
                  <br />
                  Every layer connected.
                </h2>
              </div>
              <p>
                Move between the interface, the backend and the data. Explore how the parts work
                together to create a complete experience.
              </p>
            </div>

            <div className="stack-board">
              <div className="window-head">
                <span>PROJECT / YOUR NEXT APPLICATION</span>
                <span>ILLUSTRATIVE ARCHITECTURE</span>
              </div>
              <div className="stack-layers">
                <div>
                  <span className="layer-no">01 / INTERFACE</span>
                  <h3>What people see.</h3>
                  <div className="mini-browser">
                    <div></div>
                    <p></p>
                    <p></p>
                    <span className="mock-button">Preview</span>
                  </div>
                  <small>HTML · CSS · JavaScript</small>
                </div>
                <b aria-hidden="true">↔</b>
                <div>
                  <span className="layer-no">02 / BACKEND</span>
                  <h3>How it works.</h3>
                  <div className="api-lines">
                    <span>
                      <em>GET</em> /tasks
                    </span>
                    <span>
                      <em>POST</em> /tasks
                    </span>
                    <span>
                      <em>PUT</em> /tasks/:id
                    </span>
                  </div>
                  <small>Python · APIs · Validation</small>
                </div>
                <b aria-hidden="true">↔</b>
                <div>
                  <span className="layer-no">03 / DATA</span>
                  <h3>What connects it.</h3>
                  <div className="data-table">
                    <span>DATASET</span>
                    <span>VALUE</span>
                    <span>sample_a</span>
                    <span>24</span>
                    <span>sample_b</span>
                    <span>18</span>
                    <span>sample_c</span>
                    <span>32</span>
                  </div>
                  <small>SQL · pandas · DataFrames</small>
                </div>
              </div>
            </div>

            <div className="feature-bottom">
              <p>From a single request to a useful result.</p>
              <Link className="feature-link" href="/python-full-stack">
                Explore Python Full Stack ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="section wrap ai-feature">
          <div className="feature-row">
            <div className="feature-copy">
              <p className="eyebrow">POSSIBILITIES / GEN AI</p>
              <h2>
                More context.
                <br />
                More thoughtful AI.
              </h2>
              <p>
                Explore how prompts, retrieval and evaluation can turn a model response into a useful
                application. Learn to question the output, too.
              </p>
              <Link className="feature-link" href="/gen-ai">
                Explore Gen AI ↗
              </Link>
            </div>

            <div className="ai-window">
              <div className="window-head">
                <span>CONTEXT WORKSPACE</span>
                <span>ILLUSTRATIVE</span>
              </div>
              <div className="document-pills">
                <span>◈ sample-notes.txt</span>
                <span>◈ reference.md</span>
              </div>
              <div className="chat-question">What are the key ideas in these notes?</div>
              <div className="chat-response">
                <span className="ai-spark">✧</span>
                <div>
                  <strong>Start with the source.</strong>
                  <p>
                    Retrieve relevant context. Generate a draft. Review the answer against the
                    original material.
                  </p>
                  <span className="source-chip">Source references → Human review</span>
                </div>
              </div>
              <div className="ai-loop">
                <span>Prompt</span>
                <span>→</span>
                <span>Retrieve</span>
                <span>→</span>
                <span>Evaluate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">02 / FROM IDEAS TO UNDERSTANDING</p>
                <h2>
                  Make the connection.
                  <br />
                  Then make it your own.
                </h2>
              </div>
              <p>
                A proposed approach built around understanding concepts, experimenting with code,
                and bringing the pieces together.
              </p>
            </div>

            <div className="workspace">
              <div className="workspace-bar">
                <span>
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span>your_next_chapter / learning.map</span>
                <span>PREVIEW</span>
              </div>
              <div className="flow">
                <div>
                  <span className="step">01</span>
                  <h3>Understand</h3>
                  <p>Find the logic behind the idea. Give each concept a clear place.</p>
                  <code>question → clarity</code>
                </div>
                <span aria-hidden="true" className="connector">
                  →
                </span>
                <div>
                  <span className="step">02</span>
                  <h3>Experiment</h3>
                  <p>Try a small example. Inspect the result. Ask a better question.</p>
                  <code>idea → iteration</code>
                </div>
                <span aria-hidden="true" className="connector">
                  →
                </span>
                <div>
                  <span className="step">03</span>
                  <h3>Create</h3>
                  <p>Connect what you have learned in a practical project direction.</p>
                  <code>pieces → possibilities</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="direction">
            <div>
              <p className="eyebrow">03 / FOLLOW YOUR CURIOSITY</p>
              <h2>
                Where do you
                <br />
                want to begin?
              </h2>
              <p>
                You don’t need the whole journey mapped out. Start with the kind of work you want to
                explore.
              </p>
            </div>

            <div className="path-list">
              <Link href="/python">
                <span>
                  &ldquo;I want to understand code.&rdquo;
                  <small>Explore Python foundations</small>
                </span>
                <b aria-hidden="true">↗</b>
              </Link>
              <Link href="/python-full-stack">
                <span>
                  &ldquo;I want to build an application.&rdquo;
                  <small>Explore Python Full Stack</small>
                </span>
                <b aria-hidden="true">↗</b>
              </Link>
              <Link href="/gen-ai">
                <span>
                  &ldquo;I want to experiment with AI.&rdquo;
                  <small>Explore Gen AI</small>
                </span>
                <b aria-hidden="true">↗</b>
              </Link>
            </div>
          </div>
        </section>

        <section className="wrap closing">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>
              One small step.
              <br />
              A whole new possibility.
            </h2>
          </div>
          <a className="button" href="#courses">
            Choose your course <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="wrap">
        <div>
          <Link href="/" aria-label="CodeistaAI home">
            <Image
              src="/logo-dark.svg"
              alt="CodeistaAI"
              width={168}
              height={32}
            />
          </Link>
          <p>Curiosity, written in code.</p>
        </div>
        <nav aria-label="Course pages">
          <Link href="/python">Python ↗</Link>
          <Link href="/python-full-stack">Python Full Stack ↗</Link>
          <Link href="/gen-ai">Gen AI ↗</Link>
        </nav>
        <p className="legal">CodeistaAI · Contact and legal details to be provided.</p>
      </footer>
    </div>
  );
}
