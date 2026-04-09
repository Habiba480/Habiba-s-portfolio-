window.PORTFOLIO = {
  profile: {
    name: "Habiba Ahmed Hassan",
    title: "AI Engineer — conversational systems, agents, and workflow automation",
    summary:
      "I build and ship production AI systems: real-time voice interfaces, retrieval-based assistants, and automated operations. Close to three years across product work (Appgain.io) and freelance engagements—LLM integration, NLP and speech pipelines, APIs, and deployment.",
    location: "Egypt",
    email: "habibahassan4800@gmail.com",
    phoneDisplay: "+20 10 6565 8735",
    phoneTel: "+201065658735",
    links: [
      {
        kind: "email",
        label: "habibahassan4800@gmail.com",
      },
      {
        kind: "phone",
        label: "+20 10 6565 8735",
        href: "tel:+201065658735",
      },
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
        "Production AI for conversational interfaces and voice.",
      initiatives: [
        {
          title: "Real-Time Arabic AI Voice Agent",
          bullets: [
            "Arabic voice agent: streaming audio, speech recognition, LLM reasoning with memory, and TTS.",
            "Multiple concurrent realtime sessions.",
          ],
          stack: "ElevenLabs, LangGraph, LLM APIs, Python, WebSockets, FastAPI",
        },
        {
          title: "AI Meeting Summarizer",
          bullets: [
            "Transcription and structured summaries for recurring meetings.",
            "100+ meetings per month summarized; roughly 70% less manual note-taking.",
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
        "Automation workflows, chatbots, and agent-style systems for small businesses and online retail.",
      initiatives: [
        {
          title: "Automated Order Management Workflow",
          bullets: [
            "Restaurant orders via messaging platforms and APIs.",
            "500+ orders weekly; processing time down about 80%.",
          ],
          stack: "n8n, REST APIs, Webhooks",
        },
        {
          title: "WhatsApp E-commerce Chatbot",
          bullets: [
            "Shoe store: inquiries and order flow on WhatsApp.",
            "300+ interactions monthly; high order-fulfillment accuracy.",
          ],
          stack: "n8n, Python, LLM APIs, WhatsApp API",
        },
        {
          title: "Retail AI Assistant (Cosmetics)",
          bullets: [
            "RAG assistant for products, recommendations, and orders.",
            "Semantic search over store content; engagement up about 60%.",
          ],
          stack: "LangChain, RAG, Sentence Transformers, n8n, Python",
        },
        {
          title: "AI Email Automation Agent",
          bullets: [
            "Routing, LLM replies, and downstream workflows.",
            "About 50% less manual email handling.",
          ],
          stack: "n8n, LLM APIs, Email APIs, Webhooks",
        },
        {
          title: "AI Customer Support Automation Agent",
          bullets: [
            "Inbound messages, LLM responses, escalation rules.",
            "~200 requests per week; strong first-response accuracy.",
          ],
          stack: "n8n, LLM APIs, Webhooks, REST APIs",
        },
        {
          title: "AI Social Media Engagement Agent",
          bullets: [
            "Content generation, scheduling, and comment replies.",
            "Engagement up about 40%; posting workload down about 70%.",
          ],
          stack: "n8n, LLM APIs, REST APIs, Social Media APIs",
        },
        {
          title: "AI Sales & Order Follow-Up Agent",
          bullets: [
            "Reminders for pending orders and follow-up messages.",
            "On-time payments up about 35%.",
          ],
          stack: "n8n, LLM APIs, WhatsApp API, REST APIs",
        },
      ],
    },
  ],

  expertise: [
    {
      label: "Languages",
      items: ["Python (primary)", "C++", "Java", "JavaScript"],
    },
    {
      label: "ML & classical stack",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Hugging Face Transformers",
        "Reinforcement learning",
      ],
    },
    {
      label: "Generative AI & LLMs",
      items: [
        "Meta LLaMA",
        "GPT-4o",
        "GPT-NeoX",
        "T5",
        "Whisper",
        "Fine-tuning",
        "Prompt design",
        "Agent-style orchestration",
      ],
    },
    {
      label: "NLP & retrieval",
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
        "REST & Webhooks",
        "FastAPI",
        "Flask",
        "Streamlit",
        "Docker",
        "Cloud deployment",
      ],
    },
    {
      label: "Data & tooling",
      items: ["FAISS", "Pinecone", "Qdrant", "Git", "Redis", "Selenium", "Bash"],
    },
  ],

  projects: [
    {
      title: "Real-Time Arabic AI Voice Agent",
      role: "Appgain.io",
      summary:
        "Arabic voice pipeline: streaming audio, ASR, LLM with memory, TTS; concurrent sessions.",
      highlights: [
        "ElevenLabs, LangGraph, LLM APIs behind WebSockets and FastAPI.",
        "Tuned for concurrency and low-latency turns.",
      ],
      stack: ["FastAPI", "WebSockets", "LangGraph", "Python", "ElevenLabs", "LLM APIs"],
      links: [],
    },
    {
      title: "AI Meeting Summarizer",
      role: "Appgain.io",
      summary:
        "Transcription plus structured summaries for standing meetings.",
      highlights: [
        "100+ meetings summarized per month; large reduction in manual notes.",
      ],
      stack: ["Whisper", "Meta LLaMA", "Streamlit", "Python"],
      links: [],
    },
    {
      title: "Retail AI Assistant (RAG)",
      role: "Freelance — cosmetics",
      summary:
        "Product Q&A, recommendations, and orders using retrieval over store knowledge.",
      highlights: [
        "LangChain, Sentence Transformers, and n8n; strong engagement lift.",
      ],
      stack: ["LangChain", "RAG", "Sentence Transformers", "n8n", "Python"],
      links: [],
    },
    {
      title: "Operations automation (n8n)",
      role: "Freelance",
      summary:
        "Production workflows: orders, WhatsApp commerce, email, support, social, and sales follow-up.",
      highlights: [
        "High weekly volume: orders, WhatsApp traffic, and support queues with monitored accuracy.",
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
