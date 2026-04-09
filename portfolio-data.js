/**
 * Synced with Habiba_Ahmed_Hassan_AI.pdf — update here when your CV changes.
 * Empty href hides a link. mailto: and tel: open in same window.
 */
window.PORTFOLIO = {
  profile: {
    name: "Habiba Ahmed Hassan",
    title: "AI Engineer — agentic AI, conversational agents & workflow automation",
    summary:
      "AI engineer with almost three years of professional experience designing, building, and deploying production-ready AI systems. I specialize in agentic AI, conversational agents, and workflow automation, delivering end-to-end solutions: real-time voice agents, RAG-based assistants, and automated operational workflows. Experienced orchestrating LLMs, building NLP pipelines, integrating APIs, and deploying scalable AI in company and freelance settings — with a strong focus on practical engineering, integration, and measurable impact.",
    location: "Egypt",
    links: [
      { label: "Email", href: "mailto:habibahassan4800@gmail.com" },
      { label: "Phone", href: "tel:+201065658735" },
      {
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
            "Production-ready voice agent for understanding and responding in Arabic: full pipeline for streaming audio, speech recognition, LLM reasoning, conversational memory, and TTS synthesis.",
            "Supports multiple concurrent users in real time.",
          ],
          stack: "ElevenLabs, LangGraph, LLM APIs, Python, WebSockets, FastAPI",
        },
        {
          title: "AI Meeting Summarizer",
          bullets: [
            "End-to-end meeting intelligence: transcribe meetings and generate structured summaries.",
            "Scaled to 100+ meetings summarized per month; reduced manual note-taking by about 70%.",
          ],
          stack: "Whisper, Meta LLaMA, Streamlit, Python",
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
          title: "Automated Order Management Workflow",
          bullets: [
            "AI workflow to process and manage restaurant customer orders via messaging platforms and APIs.",
            "500+ orders handled weekly; processing time reduced by about 80%.",
          ],
          stack: "n8n, REST APIs, Webhooks",
        },
        {
          title: "WhatsApp E-commerce Chatbot",
          bullets: [
            "WhatsApp chatbot for a shoe store: customer inquiries and order automation.",
            "300+ interactions per month with ~95% accuracy in order fulfillment.",
          ],
          stack: "n8n, Python, LLM APIs, WhatsApp API",
        },
        {
          title: "Retail AI Assistant (Cosmetics)",
          bullets: [
            "RAG-based assistant for product queries, recommendations, and order support with semantic search.",
            "Engagement improved by about 60%.",
          ],
          stack: "LangChain, RAG, Sentence Transformers, n8n, Python",
        },
        {
          title: "AI Email Automation Agent",
          bullets: [
            "Categorizes requests, generates LLM replies, and triggers internal workflows.",
            "Manual email handling reduced by about 50%.",
          ],
          stack: "n8n, LLM APIs, Email APIs, Webhooks",
        },
        {
          title: "AI Customer Support Automation Agent",
          bullets: [
            "Processes customer messages, generates LLM responses, escalates when needed.",
            "~200 requests per week with ~85% first-response accuracy.",
          ],
          stack: "n8n, LLM APIs, Webhooks, REST APIs",
        },
        {
          title: "AI Social Media Engagement Agent",
          bullets: [
            "Generates, schedules, and posts content; responds to comments with LLM-generated replies.",
            "Engagement up ~40%; manual posting time down ~70%.",
          ],
          stack: "n8n, LLM APIs, REST APIs, Social Media APIs",
        },
        {
          title: "AI Sales & Order Follow-Up Agent",
          bullets: [
            "Follow-ups on pending orders, personalized reminders, and inquiry handling.",
            "On-time payment collection increased by about 35%.",
          ],
          stack: "n8n, LLM APIs, WhatsApp API, REST APIs",
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
      label: "AI / ML core",
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
      label: "GenAI & LLMs",
      items: [
        "Meta LLaMA",
        "GPT-4o",
        "GPT-NeoX",
        "T5",
        "Whisper",
        "Fine-tuning",
        "Prompt engineering",
        "Agentic AI",
      ],
    },
    {
      label: "NLP & RAG",
      items: [
        "LangChain",
        "LangGraph",
        "Retrieval-augmented generation",
        "spaCy",
        "Sentence Transformers",
      ],
    },
    {
      label: "Speech & realtime",
      items: ["Whisper", "STT / TTS", "Audio pipelines", "WebSockets"],
    },
    {
      label: "Automation & backend",
      items: [
        "n8n",
        "Airflow",
        "REST APIs & Webhooks",
        "FastAPI",
        "Flask",
        "Streamlit",
        "Docker",
        "Cloud deployment",
      ],
    },
    {
      label: "Data & tools",
      items: ["FAISS", "Pinecone", "Qdrant", "Git / GitHub", "Redis", "Selenium", "Bash"],
    },
  ],

  projects: [
    {
      title: "Real-Time Arabic AI Voice Agent",
      role: "Appgain.io · conversational AI",
      summary:
        "End-to-end Arabic voice agent: streaming audio, ASR, LLM reasoning with memory, and TTS — multi-user realtime sessions.",
      highlights: [
        "Integrated ElevenLabs, LangGraph, and LLM APIs behind WebSockets and FastAPI.",
        "Built for production concurrency and low-latency turns.",
      ],
      stack: ["FastAPI", "WebSockets", "LangGraph", "Python", "ElevenLabs", "LLM APIs"],
      links: [],
    },
    {
      title: "AI Meeting Summarizer",
      role: "Appgain.io · meeting intelligence",
      summary:
        "Transcription plus structured summarization pipeline for recurring meetings at scale.",
      highlights: [
        "100+ meetings summarized per month; ~70% reduction in manual note-taking.",
      ],
      stack: ["Whisper", "Meta LLaMA", "Streamlit", "Python"],
      links: [],
    },
    {
      title: "Retail AI Assistant (RAG)",
      role: "Freelance · cosmetics retail",
      summary:
        "RAG assistant for product Q&A, recommendations, and orders with semantic search over store knowledge.",
      highlights: [
        "LangChain + Sentence Transformers + n8n orchestration.",
        "~60% improvement in engagement (per client metrics).",
      ],
      stack: ["LangChain", "RAG", "Sentence Transformers", "n8n", "Python"],
      links: [],
    },
    {
      title: "High-volume n8n automation",
      role: "Freelance · operations",
      summary:
        "Multiple production n8n workflows: orders, WhatsApp commerce, email, support, social, and sales follow-up — each with measurable throughput and accuracy targets.",
      highlights: [
        "Examples: 500+ orders/week automated; 300+ WhatsApp interactions/month; 200 support requests/week with strong first-response accuracy.",
      ],
      stack: ["n8n", "LLM APIs", "REST", "Webhooks", "WhatsApp API"],
      links: [],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Luxor University — Faculty of Computers and Information Technology",
      period: "Jun 2025",
      detail:
        "Grade: A+ (Excellent). Senior project: predictive system for chronic disease detection.",
    },
  ],

  certifications: [
    "Machine Learning Specialization — Coursera (Andrew Ng), 2024",
    "Microsoft Certified: Azure AI Engineer Associate (expected 2026)",
  ],
};
