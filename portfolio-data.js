window.PORTFOLIO = {
  profile: {
    name: "Habiba Ahmed Hassan",
    title: "AI Engineer",
    summary:
      "AI Engineer with almost 3 years of professional experience designing, building, and deploying production-ready AI systems, specializing in agentic AI, conversational agents, and workflow automation. Proven track record of delivering end-to-end solutions, including real-time voice agents, RAG-based chatbots, and automated operational workflows. Skilled in orchestrating LLMs, building NLP pipelines, integrating with APIs, and deploying scalable AI systems in both company and freelance environments. Strong focus on practical AI engineering, system integration, and delivering impactful AI products using cutting-edge frameworks and technologies.",
    location: "Egypt",
    email: "habibahassan4800@gmail.com",
    phoneDisplay: "+20 10 6565 8735",
    phoneTel: "+201065658735",
    links: [
      { kind: "email", label: "habibahassan4800@gmail.com" },
      { kind: "phone", label: "+20 10 6565 8735", href: "tel:+201065658735" },
      {
        kind: "url",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/habiba-ahmed-3091791ba",
      },
    ],
  },

  experience: [
    {
      org: "Appgain.io",
      role: "AI Engineer",
      period: "Jun 2025 — Present",
      summary:
        "Designing and deploying production-ready AI systems focused on conversational AI and voice interfaces.",
      initiatives: [
        {
          title: "Real-Time Arabic AI Voice Agent",
          bullets: [
            "Production voice agent for Arabic: streaming audio, ASR, LLM reasoning with memory, and TTS; multiple concurrent realtime sessions.",
          ],
          stack: "11labs, LangGraph, LLM APIs, Python, WebSockets, FastAPI",
          decisions: [
            "Chose WebSockets so audio and control events stream both ways with minimal round-trips—critical for conversational latency versus batch REST.",
            "FastAPI (async) fits concurrent sessions and non-blocking I/O to speech and LLM providers without blocking the event loop.",
            "LangGraph structures the dialogue as explicit steps (perceive → reason → act) and makes memory and branching easier to tune than a single monolithic prompt.",
            "Commercial STT/TTS (11labs) trades off control versus building custom models; priority was reliable Arabic voice quality and integration speed in production.",
            "LLM APIs sit between ASR and TTS for reasoning and policy (what to say next), with prompts and state scoped per session to avoid cross-talk.",
            "Python ties providers together with clear boundaries so STT/TTS/LLM can be swapped or A/B-tested under configuration rather than rewrites.",
            "Concurrency is handled at the session level so many users share the same stack safely with isolated state and predictable resource use.",
          ],
        },
        {
          title: "AI Meeting Summarizer",
          bullets: [
            "Transcription plus structured summaries at scale: 100+ meetings per month, ~70% less manual note-taking.",
          ],
          stack: "Whisper, Meta-LLaMA, Streamlit, Python",
          decisions: [
            "Whisper was chosen for strong offline-style ASR quality across accents and noisy meeting audio before summarization.",
            "Meta-LLaMA for summarization keeps longer context and controllable output shape versus smaller models, at the cost of heavier inference—acceptable for batch meeting pipelines.",
            "Streamlit gives a fast internal UI to upload or review runs, inspect summaries, and iterate without building a full front-end stack.",
            "Python orchestrates ingest → transcribe → summarize → store, so the same pipeline can be scheduled or triggered from different sources.",
            "Structured summaries (sections, action items) are enforced via prompt and post-formatting so outputs are comparable week over week for stakeholders.",
            "Kept the pipeline asynchronous where possible so many meetings can be processed without blocking operators on one long file.",
          ],
        },
      ],
    },
    {
      org: "Freelance",
      role: "AI Engineer",
      period: "May 2024 — Present",
      summary:
        "Building AI-powered automation workflows, conversational assistants, and agentic systems for small businesses and online stores.",
      initiatives: [
        {
          title: "Automated Order Management Workflow (n8n)",
          bullets: [
            "Restaurant orders via messaging and APIs: 500+ orders weekly, ~80% faster processing.",
          ],
          stack: "n8n, REST APIs, Webhooks",
          decisions: [
            "n8n provides visual workflows, retries, and logging so non-developers can follow the flow and you can change routing without redeploying a monolith.",
            "REST integrations connect to ordering backends and POS-style systems; webhooks push events in as orders arrive instead of polling.",
            "Idempotent steps (same webhook twice doesn’t double-charge) matter at this volume—designed nodes so duplicate signals fail safe.",
            "Error branches notify humans or fall back to manual queues when APIs fail, so the business doesn’t silently drop orders.",
            "Secrets and URLs live in n8n credentials rather than hard-coded so environments can differ (staging vs production).",
            "Chose breadth over custom microservices: one orchestration layer was faster to iterate for a small business than maintaining several services.",
          ],
        },
        {
          title: "WhatsApp E-commerce Chatbot (n8n)",
          bullets: [
            "Shoe store: inquiries and orders on WhatsApp—300+ interactions/month, high order-fulfillment accuracy.",
          ],
          stack: "n8n, Python, LLM APIs, WhatsApp API",
          decisions: [
            "WhatsApp Business API is the supported channel for outbound/inbound messaging at scale versus unofficial clients.",
            "n8n handles webhook entry from WhatsApp, branching on intent, and handoff to order APIs—Python nodes where custom parsing or LLM calls need code.",
            "LLM APIs interpret messy user text (sizes, colors, stock questions) while deterministic checks confirm inventory and price before confirming an order.",
            "Guardrails reduce hallucinations: the model suggests replies, but order commits go through validated API responses.",
            "Session context is kept lightweight (recent turns) so costs stay predictable for hundreds of monthly conversations.",
            "Fallback path routes to human handoff when confidence is low or the user asks for something outside catalog rules.",
          ],
        },
        {
          title: "Retail AI Assistant for Cosmetics Store (RAG, n8n)",
          bullets: [
            "RAG assistant for products and orders; semantic search; engagement up ~60%.",
          ],
          stack: "LangChain, RAG, Sentence Transformers, n8n, Python",
          decisions: [
            "RAG grounds answers in product sheets and policy docs so recommendations stay tied to real inventory and legal claims, not model memory.",
            "Sentence Transformers (or compatible embeddings) map customer questions to the right chunks; re-embedding when catalogs update is cheaper than fine-tuning for every SKU change.",
            "LangChain (or equivalent orchestration) wires retrieval → LLM → optional tool calls (e.g. check stock) in one composable flow.",
            "n8n connects the assistant to order placement and CRM triggers after the user commits, keeping chat logic separate from fulfillment integrations.",
            "Python handles preprocessing (cleaning docs, chunking strategy) because poor chunking destroys retrieval quality more than model choice.",
            "Chose retrieval over fine-tuning a single model: business knowledge changes often and must be updatable without long retrain cycles.",
          ],
        },
        {
          title: "AI Email Automation Agent (n8n)",
          bullets: [
            "Categorize, draft replies with LLMs, trigger internal workflows—~50% less manual email handling.",
          ],
          stack: "n8n, LLM APIs, Email APIs, Webhooks",
          decisions: [
            "Email APIs (IMAP/SMTP or provider-specific) give reliable ingest and send versus scraping; n8n listens via webhook or polling depending on provider.",
            "Classification first (topic, urgency, department) routes messages before generation so LLM cost is spent only where needed.",
            "LLM drafts are treated as suggestions: approval or auto-send depends on confidence thresholds and category rules to reduce risk.",
            "Webhooks push outcomes into ticketing or CRM so the rest of the org sees the same state as the inbox automation.",
            "Templates constrain tone and structure for customer-facing text while still allowing variable details per thread.",
            "Audit-friendly logging in the workflow records what was sent and why, which matters when disputes or compliance questions appear.",
          ],
        },
        {
          title: "AI Customer Support Automation Agent (n8n)",
          bullets: [
            "Inbound messages, LLM responses, escalation—200 requests/week with strong first-response accuracy.",
          ],
          stack: "n8n, LLM APIs, Webhooks, REST APIs",
          decisions: [
            "Same orchestration idea as email: ingest → classify → respond or escalate, tuned for chat-style turns and SLAs.",
            "REST calls update ticket state and customer records so agents aren’t working off stale data after automation runs.",
            "Escalation rules (keywords, sentiment, VIP flags) override pure LLM replies when human judgment is required.",
            "LLM prompts include policy excerpts or links retrieved from internal docs so first responses align with approved answers.",
            "Rate limits and queues prevent spikes from overwhelming downstream APIs or flooding customers with duplicate replies.",
            "Measured first-response accuracy to tune prompts and thresholds rather than optimizing only for speed.",
          ],
        },
        {
          title: "AI Social Media Engagement Agent",
          bullets: [
            "Generate, schedule, post, and reply to comments—engagement up ~40%, manual posting time down ~70%.",
          ],
          stack: "n8n, LLM APIs, REST APIs, Social Media APIs",
          decisions: [
            "Separated content generation from scheduling so drafts can be reviewed before publish when the client wants oversight.",
            "Platform REST APIs enforce posting windows, media rules, and rate limits—n8n sequences calls with retries and backoff.",
            "LLM generates caption variants and comment replies with brand constraints in the prompt to reduce off-brand output.",
            "Webhooks (where available) notify workflows of new comments so replies happen quickly without constant polling.",
            "Stored credentials per platform rotate and scope minimally (post vs read) to reduce blast radius if a token leaks.",
            "Analytics hooks (impressions, clicks) feed back into what content types get generated next—closing the loop without manual spreadsheets.",
          ],
        },
        {
          title: "AI Sales & Order Follow-Up Agent",
          bullets: [
            "Follow-ups on pending orders and payments—on-time collection up ~35%.",
          ],
          stack: "n8n, LLM APIs, WhatsApp API, REST APIs",
          decisions: [
            "WhatsApp is a high-open-rate channel for payment reminders versus email alone in many markets—used alongside REST updates to order systems.",
            "LLM personalizes reminder text from order metadata (amount, due date) while keeping mandatory legal/disclosure lines fixed.",
            "n8n schedules cadences (day 1, day 3, final notice) with stop conditions when payment clears to avoid harassing paid customers.",
            "REST calls confirm payment status before sending another nudge, preventing duplicate or contradictory messages.",
            "Tone prompts balance firm collection with customer experience so automation doesn’t damage repeat business.",
            "Logging ties each message to an order ID for support when customers reply with disputes or partial payments.",
          ],
        },
      ],
    },
  ],

  expertise: [
    {
      label: "Programming",
      items: ["Python (primary)", "C++", "Java", "JavaScript"],
    },
    {
      label: "AI / Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Hugging Face Transformers",
        "Reinforcement Learning",
      ],
    },
    {
      label: "Generative AI & LLMs",
      items: [
        "Meta-LLaMA",
        "GPT-4o",
        "GPT-NeoX",
        "T5",
        "Whisper",
        "Fine-tuning",
        "Prompt Engineering",
        "Agentic AI",
      ],
    },
    {
      label: "NLP & RAG",
      items: [
        "LangChain",
        "LangGraph",
        "Retrieval Augmented Generation (RAG)",
        "spaCy",
        "Sentence Transformers",
      ],
    },
    {
      label: "Speech AI",
      items: ["Whisper", "STT", "TTS", "Audio Pipelines"],
    },
    {
      label: "Automation & Workflow Orchestration",
      items: ["n8n", "Airflow", "REST APIs", "Webhooks"],
    },
    {
      label: "Backend & Deployment",
      items: [
        "FastAPI",
        "Flask",
        "Streamlit",
        "Docker",
        "Containerization",
        "Cloud Deployment",
      ],
    },
    {
      label: "Vector Databases",
      items: ["FAISS", "Pinecone", "Qdrant"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "Redis", "Selenium", "Bash"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Luxor University — Faculty of Computers and Information Technology",
      period: "Jun 2025",
      detail:
        "Grade: A+ (Excellent). Senior Project: Predictive System for Chronic Diseases Detection.",
    },
  ],

  certifications: [
    "Machine Learning Specialization – Coursera (Andrew Ng), 2024",
    "Microsoft Certified: Azure AI Engineer Associate (Expected 2026)",
  ],
};
