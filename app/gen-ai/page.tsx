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
  title: 'CodeistaAI — Gen AI Course | Prompts, RAG & Evaluation',
  description:
    'Explore prompt engineering, embeddings, retrieval-augmented generation (RAG), and evaluation to build responsible AI-powered tools.',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function GenAIPage() {
  return (
    <>
      <ScrollReveal />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <HeaderNav variant="course" courseName="Gen AI" />

      <main id="main">
        <section className="hero dark cinematic-hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true"></span> APPLIED AI · PROMPTS, RETRIEVAL &amp; EVALUATION
              </p>
              <h1 id="hero-title">
                Build thoughtful AI tools.
                <br className="hide-mobile" />
                <span className="lime">Evaluate every output.</span>
              </h1>
              <p className="hero-sub">Turn language models into reliable, grounded applications.</p>
              <p className="muted hero-description">
                Learn how to structure prompts, retrieve relevant documents with vector embeddings,
                and rigorously evaluate model answers. Understand both the power and limitations of generative AI.
              </p>
              <div className="cta-group">
                <EnquiryCTA className="button">
                  Enquire about this course
                </EnquiryCTA>
                <a className="text-link" href="#curriculum">
                  View curriculum <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero-note">Modern AI workflows · RAG architectures · Responsible evaluation</p>
            </div>

            <div className="hero-visual">
              <div
                aria-label="Illustrative Gen AI learning workspace"
                className="python-stage"
              >
                <div className="stage-grid"></div>
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="orbit orbit-three"></div>
                <div className="orbit-label top-label">
                  <i></i> CONTEXT-AWARE GENERATION
                </div>
                <div className="python-core">
                  <span className="core-bracket">{'{'}</span>
                  <span className="py-mark">
                    ai<span>_</span>
                  </span>
                  <span className="core-bracket">{'}'}</span>
                </div>
                <span className="floating-label label-a">01 / PROMPT</span>
                <span className="floating-label label-b">02 / RETRIEVE</span>
                <span className="floating-label label-c">03 / EVALUATE</span>
                <div className="stage-caption">
                  GEN AI WORKSPACE
                </div>
                <div aria-hidden="true" className="scene-slab slab-one">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>01 / SCHEMA</span>
                  </div>
                  <code>prompt = task + schema<br />draft = generate(prompt)</code>
                  <div className="slab-foot">
                    <span>STRUCTURED OUTPUT</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-two">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>02 / RAG PIPELINE</span>
                  </div>
                  <code>docs = vector_db.query(q)<br />grounded = answer(docs)</code>
                  <div className="slab-foot">
                    <span>RETRIEVAL PIPELINE</span>
                    <b>→</b>
                  </div>
                </div>
                <div aria-hidden="true" className="scene-slab slab-three">
                  <div className="slab-dots">
                    <i></i><i></i><i></i><span>03 / VERIFY</span>
                  </div>
                  <code>score = evaluate(grounded)<br />guardrails.verify(score)</code>
                  <div className="slab-foot">
                    <span>EVALUATION ENGINE</span>
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
                <p className="eyebrow">01 / THE EVALUATION-FIRST APPROACH</p>
                <h2 id="approach-title">
                  Context matters.
                  <br />
                  Verification comes first.
                </h2>
              </div>
              <p>
                Generative AI is only as useful as its grounding and reliability.
                We teach you how to supply relevant context, constrain outputs, and test for hallucinations.
              </p>
            </div>

            <div className="pillars">
              <article>
                <div className="pillar-top">
                  <span className="number">01 / PROMPT</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    {'{ }'}
                  </span>
                </div>
                <h3>Structure the prompt.</h3>
                <p>Move past vague queries. Learn few-shot patterns, system constraints, and schema enforcement.</p>
                <div className="pillar-example">
                  <span className="example-label">STRUCTURED PROMPTING</span>
                  <code>
                    messages = [
                    <br />
                    &nbsp;&nbsp;&#123;&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: schema&#125;,
                    <br />
                    &nbsp;&nbsp;&#123;&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: query&#125;
                    <br />
                    ]
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Prompt design</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article className="pillar-featured">
                <div className="pillar-top">
                  <span className="number">02 / RETRIEVE</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    &gt;_
                  </span>
                </div>
                <h3>Ground with context.</h3>
                <p>Chunk real documents, generate embeddings, and retrieve only the facts needed to answer.</p>
                <div className="pillar-example">
                  <span className="example-label">VECTOR RETRIEVAL</span>
                  <code>
                    chunks = split_docs(documents)
                    <br />
                    context = vector_store.search(q, k=3)
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>RAG foundations</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>

              <article>
                <div className="pillar-top">
                  <span className="number">03 / EVALUATE</span>
                  <span className="pillar-symbol" aria-hidden="true">
                    →
                  </span>
                </div>
                <h3>Measure and guardrail.</h3>
                <p>Check answers against source documents. Learn benchmark metrics to prevent hallucination.</p>
                <div className="pillar-example">
                  <span className="example-label">SOURCE CHECK</span>
                  <code>
                    groundedness = verify_citations(
                    <br />
                    &nbsp;&nbsp;answer, context
                    <br />
                    )
                  </code>
                </div>
                <div className="pillar-bottom">
                  <span>Evaluation &amp; safety</span>
                  <span aria-hidden="true">→</span>
                </div>
              </article>
            </div>

            <p className="approach-caption">
              ThinkCode Approach <span aria-hidden="true">/</span> Applied generative AI with strict evaluation
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
                From prompt engineering
                <br />
                to evaluation.
              </h2>
              <p>
                A structured path through generative models, vector embeddings, RAG pipelines, and output verification.
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
                    Understand the model<small>Generative AI &amp; foundations</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Understand how large language models predict tokens, handle context windows, and manage parameters.
                  </p>
                  <ul className="chips">
                    <li>Tokens &amp; context windows</li>
                    <li>Temperature &amp; top-p</li>
                    <li>Model architectures</li>
                    <li>API authentication</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Connect to an LLM API and inspect token usage and latency.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">02</span>
                  <span>
                    Shape better responses<small>Prompts &amp; structured outputs</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Write structured prompt templates that reliably produce valid JSON schemas for application code.
                  </p>
                  <ul className="chips">
                    <li>Zero-shot &amp; few-shot</li>
                    <li>Role-based messaging</li>
                    <li>JSON schema enforcement</li>
                    <li>Pydantic parsing</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build a tool that extracts structured tabular data from unformatted text.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">03</span>
                  <span>
                    Ground answers in context<small>Embeddings &amp; retrieval (RAG)</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>
                    Convert text documents into vector embeddings and retrieve factual passages for answering queries.
                  </p>
                  <ul className="chips">
                    <li>Text chunking strategies</li>
                    <li>Vector embeddings</li>
                    <li>Similarity search</li>
                    <li>RAG integration</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build a question-answering assistant over your own course notes.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  <span className="module-no">04</span>
                  <span>
                    Build with care<small>Evaluation &amp; application design</small>
                  </span>
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="module-body">
                  <p>Systematically evaluate answers, trace source references, and build user guardrails.</p>
                  <ul className="chips">
                    <li>Hallucination detection</li>
                    <li>Source attribution</li>
                    <li>Benchmarking answers</li>
                    <li>Responsible AI safeguards</li>
                  </ul>
                  <p className="practice">
                    <strong>Try it:</strong> Build an automated evaluation script that grades model groundedness.
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
                <p className="eyebrow lime">03 / APPLIED AI PROJECTS</p>
                <h2 id="projects-title">
                  Build tools with
                  <br />
                  grounded outputs.
                </h2>
              </div>
              <p className="muted">
                Practical projects exploring prompt engineering, vector retrieval pipelines, and output verification.
              </p>
            </div>

            <div className="project-grid">
              <article className="project-card">
                <div className="project-visual mono">
                  <span className="file-label">rag_pipeline.py</span>
                  <div className="file-row">
                    <span>source_doc.pdf</span>
                    <span className="lime">Indexed 48 chunks</span>
                  </div>
                  <div className="file-row">
                    <span>user_query</span>
                    <span className="lime">3 chunks matched</span>
                  </div>
                  <div className="file-row">
                    <span>grounded_answer</span>
                    <span className="lime">Citations verified</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">RETRIEVAL SYSTEM</span>
                  <h3>Document QA assistant.</h3>
                  <p>Build a retrieval-augmented tool that answers questions strictly using verified private documents.</p>
                  <span className="project-tag">Embeddings · Vector Search · Citations</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual mono">
                  <div className="data-head">
                    <span>evaluation_report.json</span>
                    <span className="warm">BENCHMARK TEST</span>
                  </div>
                  <div className="bar-row">
                    <span>Groundedness</span>
                    <div style={{ '--bar': '92%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>Relevance</span>
                    <div style={{ '--bar': '88%' } as React.CSSProperties}></div>
                  </div>
                  <div className="bar-row">
                    <span>Hallucination</span>
                    <div style={{ '--bar': '8%' } as React.CSSProperties}></div>
                  </div>
                </div>
                <div className="project-info">
                  <span className="eyebrow">EVALUATION HARNESS</span>
                  <h3>Output quality validator.</h3>
                  <p>Measure answer faithfulness against source context and flag unsupported claims automatically.</p>
                  <span className="project-tag">Evaluation · Guardrails · Metrics</span>
                </div>
              </article>
            </div>

            <div className="project-bottom">
              <p>Responsible AI development begins with measuring correctness and citing sources.</p>
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
              <p className="faq-intro">Helpful answers about the Gen AI &amp; Applied LLMs course.</p>
            </div>

            <div className="faqs">
              <details>
                <summary>
                  What does this Gen AI course cover?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  This course covers LLM API fundamentals, structured prompt engineering, text embeddings,
                  retrieval-augmented generation (RAG) architecture, and evaluating model output reliability.
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
                  Basic programming experience in Python (data structures, functions, API calls) is recommended.
                  If you are brand new to coding, we encourage taking our Python Foundations course first.
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
                  How is AI used in this course?
                  <span className="expand" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>
                  You learn both how to build with AI and how to use it responsibly. We emphasize understanding
                  model mechanics, grounding outputs in factual documents, and verifying code rather than trusting it blindly.
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
                  Submitting an enquiry connects you directly with the CodeistaAI team. We share full syllabus details,
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
                Gen AI &amp; Applied LLMs.
              </h2>
              <p>Submit your details to receive full syllabus information and upcoming batch schedules.</p>

              <dl className="course-meta">
                <div>
                  <dt>Course</dt>
                  <dd>Gen AI &amp; Applied LLMs</dd>
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
