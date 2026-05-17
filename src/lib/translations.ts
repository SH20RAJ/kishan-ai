export type LanguageCode = "hinglish" | "english" | "hindi" | "bangla" | "marathi";

export interface TranslationSet {
  nav: {
    government: string;
    investors: string;
    partners: string;
    research: string;
    impact: string;
    try: string;
  };
  hero: {
    title: string;
    subtitle: string;
    desc: string;
    cta: string;
  };
  switcher: string;
  kino: {
    title: string;
    bubble: string;
    badge: string;
  };
  problems: {
    tag: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  capabilities: {
    tag: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  steps: {
    tag: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  trust: {
    tag: string;
    title: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  pilot: {
    title: string;
    desc: string;
    gov_btn: string;
    partner_btn: string;
  };
  investors: {
    tag: string;
    title: string;
    desc1: string;
    desc2: string;
    btn: string;
  };
  research: {
    tag: string;
    title: string;
    desc: string;
    pain_title: string;
    pain_quote: string;
    pain_desc: string;
    market_title: string;
    market_desc: string;
    market_sub: string;
    tech_title: string;
    tech_desc: string;
    tech_sub: string;
    btn: string;
  };
  faq: {
    tag: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  waitlist: {
    title: string;
    desc: string;
    name_placeholder: string;
    phone_placeholder: string;
    btn: string;
    spam_note: string;
  };
}

export const translations: Record<LanguageCode, TranslationSet> = {
  hinglish: {
    nav: {
      government: "Government",
      investors: "Investors",
      partners: "Partners",
      research: "Research",
      impact: "Impact",
      try: "Try KisanAI",
    },
    hero: {
      title: "AI farming assistant",
      subtitle: "for every Indian farmer",
      desc: "Get crop advice, weather alerts, mandi prices, and government scheme guidance in your language. One trusted assistant for the decisions that matter most.",
      cta: "Try KisanAI",
    },
    switcher: "Speak to Kino in your language:",
    kino: {
      title: "Meet Kino -- Your Krishi Mitra",
      bubble: "Namaste! Main hoon Kino, aapka Krishi Mitra. Fasal ki bimari, mausam aur mandi bhav ki sabhi jaankari ke liye mujhse bejhijhak pucho! Main Hindi aur English dono samajhta hoon.",
      badge: "Friendly Indian Parrot Mascot",
    },
    problems: {
      tag: "The Problem",
      title: "Farming decisions should not be this hard",
      desc: "Indian farmers lose money every season -- not because of lack of skill, but because critical information is scattered, late, or locked behind language and complexity barriers.",
      items: [
        {
          title: "Fragmented Information",
          desc: "Farmers juggle weather apps, mandi portals, dealer advice, and WhatsApp groups -- none of it connected, much of it unverified.",
        },
        {
          title: "Language Barriers",
          desc: "Most digital farming tools are in English or Hindi. Farmers who speak Tamil, Telugu, Kannada, Marathi, or Bengali are left behind.",
        },
        {
          title: "Complex Government Schemes",
          desc: "Hundreds of schemes exist, but eligibility rules, documents, and deadlines are buried in PDFs and bureaucratic language.",
        },
        {
          title: "Disease Uncertainty",
          desc: "When a crop shows symptoms, farmers guess or rely on local dealers. Wrong treatments waste money; delays cost the harvest.",
        },
      ],
    },
    capabilities: {
      tag: "Product Capabilities",
      title: "One assistant, five capabilities",
      desc: "Instead of juggling five apps, get everything in one conversation.",
      items: [
        {
          title: "Chat Assistant",
          desc: "Ask any farming question in your language. Get clear, sourced answers -- not jargon.",
        },
        {
          title: "Disease Detection",
          desc: "Take a photo of a diseased leaf. Get a diagnosis with confidence level and a next-step checklist.",
        },
        {
          title: "Weather Advisory",
          desc: "Hyper-local weather with crop-specific advice. Know what to do today and tomorrow, not just the forecast.",
        },
        {
          title: "Mandi Prices",
          desc: "Real-time prices from nearby mandis with trend context. Know when to sell, not just what the price is.",
        },
        {
          title: "Government Schemes",
          desc: "Find schemes you qualify for. Get plain-language explanations of eligibility, documents, and deadlines.",
        },
      ],
    },
    steps: {
      tag: "Simple & Fun",
      title: "Three steps. No friction.",
      desc: "Just like learning a new skill on Duolingo, getting crop answers with KisanAI is simple and instant.",
      items: [
        {
          title: "Ask",
          desc: "Type a question, upload a photo, or speak in your language. No registration needed to start.",
        },
        {
          title: "Get Answer",
          desc: "Receive a clear, sourced response with confidence level. If we are not sure, we say so.",
        },
        {
          title: "Take Action",
          desc: "Follow the checklist. Share with your group. Come back when the next decision moment hits.",
        },
      ],
    },
    trust: {
      tag: "Trust & Safety",
      title: "Built for trust, not just speed",
      desc: "In agriculture, wrong advice costs real money. We take accuracy seriously.",
      items: [
        {
          title: "Source-Aware AI",
          desc: "Every answer links to its source. We retrieve from curated, official agricultural knowledge -- not open internet guessing.",
        },
        {
          title: "Expert Verification",
          desc: "Knowledge base curated from KVK advisories, ICAR resources, and state agriculture department content.",
        },
        {
          title: "Government Data",
          desc: "Mandi prices from AgMarkNet. Scheme info from official portals. Weather from IMD. We do not invent data.",
        },
        {
          title: "Privacy-First",
          desc: "No mandatory registration. No land records required. Your data is encrypted and never sold.",
        },
      ],
    },
    pilot: {
      title: "Pilot with your organisation",
      desc: "We are looking for FPOs, KVKs, NGOs, and state agriculture departments to run structured 90-day pilots. Help your farmers access better advisory while we learn what works.",
      gov_btn: "Government Partnerships",
      partner_btn: "Become a Partner",
    },
    investors: {
      tag: "For Investors",
      title: "A real problem, a clear market",
      desc1: "India has ~9.7 crore digitally traceable farmers via PM-KISAN. Rural internet penetration exceeds 41%. 5G covers 99% of districts. Yet no farmer-first, vernacular AI assistant has achieved meaningful scale.",
      desc2: "Our conservative TAM at Rs 600/farmer/year is Rs 58.2 billion. The opportunity is not in inventing farmer advice -- it is in becoming the lowest-friction, highest-trust wrapper around existing information channels.",
      btn: "Read the investor brief",
    },
    research: {
      tag: "Research",
      title: "Grounded in evidence",
      desc: "We built KisanAI because the pain is documented and the timing is right.",
      pain_title: "Farmer pain is real",
      pain_quote: "I have no other option but to sell my land to repay the loan.",
      pain_desc: "Public reports show onion farmers spending Rs 80,000/acre while receiving Rs 300-1,200 for damaged produce. Financial distress from information gaps is measurable and immediate.",
      market_title: "Market timing is right",
      market_desc: "The government launched Bharat-VISTAAR (multilingual AI advisory) in 2026. Bayer FarmRise crossed 5M users. DeHaat hit Rs 3,000 Cr revenue. The category is validated.",
      market_sub: "Our opportunity: be the simplest, most trusted operational wrapper -- not the biggest platform.",
      tech_title: "Technical approach works",
      tech_desc: "Academic research on Indian agricultural QA systems shows curated corpora, latency control, and language quality matter more than broad surface area at MVP stage.",
      tech_sub: "We use RAG over curated sources with explicit abstention -- not open-ended generation.",
      btn: "Read our full research",
    },
    faq: {
      tag: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Is KisanAI free for farmers?",
          a: "Yes, the core assistant is free. Farmers can ask questions, check prices, and get weather advice without paying. We may introduce premium features later, but basic advisory will remain free.",
        },
        {
          q: "Which languages does KisanAI support?",
          a: "We are building for Indian farmers, so language is a priority. We currently support Hindi and are adding regional languages starting with the most-spoken ones in our pilot regions. The goal is every major Indian language.",
        },
        {
          q: "How accurate is the crop disease detection?",
          a: "Our disease detection provides a diagnosis with a confidence level. When confidence is low, we say so and suggest consulting a local expert. We never recommend chemicals without showing the source and uncertainty.",
        },
        {
          q: "Where does KisanAI get its information?",
          a: "We retrieve from curated sources: ICAR advisories, KVK content, state agriculture departments, AgMarkNet mandi data, IMD weather, and official government scheme portals. Every answer links to its source.",
        },
        {
          q: "Do I need to create an account?",
          a: "No. You can start asking questions immediately. Account creation is optional and only used to save your history and preferences. We follow DPDP Act guidelines for data protection.",
        },
        {
          q: "Can KisanAI replace my local agriculture officer?",
          a: "No, and it is not designed to. KisanAI is a decision-support tool that helps you prepare questions, understand options, and act faster. For complex or high-stakes decisions, we always recommend consulting your local KVK or agriculture officer.",
        },
        {
          q: "How is KisanAI different from other farming apps?",
          a: "Most farming apps focus on one thing -- weather, or prices, or disease. KisanAI combines all of these into one conversation in your language. We also show our sources and admit when we are uncertain, which most apps do not.",
        },
        {
          q: "Is my data safe?",
          a: "Yes. We encrypt data in transit and at rest. We do not require land records or identity documents. We do not sell farmer data to anyone. Our privacy policy is written in plain language.",
        },
      ],
    },
    waitlist: {
      title: "Join the waitlist",
      desc: "We are onboarding farmers, FPOs, and partners region by region. Sign up to get early access when we launch in your area.",
      name_placeholder: "Your name",
      phone_placeholder: "Phone number",
      btn: "Join Waitlist",
      spam_note: "We will only contact you about KisanAI access. No spam.",
    },
  },
  english: {
    nav: {
      government: "Government",
      investors: "Investors",
      partners: "Partners",
      research: "Research",
      impact: "Impact",
      try: "Try KisanAI",
    },
    hero: {
      title: "AI farming assistant",
      subtitle: "for every Indian farmer",
      desc: "Get crop advice, weather alerts, mandi prices, and government scheme guidance in your language. One trusted assistant for the decisions that matter most.",
      cta: "Try KisanAI",
    },
    switcher: "Speak to Kino in your language:",
    kino: {
      title: "Meet Kino -- Your Krishi Mitra",
      bubble: "Namaste! I am Kino, your farming companion. Ask me anything about crop diseases, weather, and mandi prices! I understand your language.",
      badge: "Friendly Indian Parrot Mascot",
    },
    problems: {
      tag: "The Problem",
      title: "Farming decisions should not be this hard",
      desc: "Indian farmers lose money every season -- not because of lack of skill, but because critical information is scattered, late, or locked behind language and complexity barriers.",
      items: [
        {
          title: "Fragmented Information",
          desc: "Farmers juggle weather apps, mandi portals, dealer advice, and WhatsApp groups -- none of it connected, much of it unverified.",
        },
        {
          title: "Language Barriers",
          desc: "Most digital farming tools are in English or Hindi. Farmers who speak Tamil, Telugu, Kannada, Marathi, or Bengali are left behind.",
        },
        {
          title: "Complex Government Schemes",
          desc: "Hundreds of schemes exist, but eligibility rules, documents, and deadlines are buried in PDFs and bureaucratic language.",
        },
        {
          title: "Disease Uncertainty",
          desc: "When a crop shows symptoms, farmers guess or rely on local dealers. Wrong treatments waste money; delays cost the harvest.",
        },
      ],
    },
    capabilities: {
      tag: "Product Capabilities",
      title: "One assistant, five capabilities",
      desc: "Instead of juggling five apps, get everything in one conversation.",
      items: [
        {
          title: "Chat Assistant",
          desc: "Ask any farming question in your language. Get clear, sourced answers -- not jargon.",
        },
        {
          title: "Disease Detection",
          desc: "Take a photo of a diseased leaf. Get a diagnosis with confidence level and a next-step checklist.",
        },
        {
          title: "Weather Advisory",
          desc: "Hyper-local weather with crop-specific advice. Know what to do today and tomorrow, not just the forecast.",
        },
        {
          title: "Mandi Prices",
          desc: "Real-time prices from nearby mandis with trend context. Know when to sell, not just what the price is.",
        },
        {
          title: "Government Schemes",
          desc: "Find schemes you qualify for. Get plain-language explanations of eligibility, documents, and deadlines.",
        },
      ],
    },
    steps: {
      tag: "Simple & Fun",
      title: "Three steps. No friction.",
      desc: "Just like learning a new skill on Duolingo, getting crop answers with KisanAI is simple and instant.",
      items: [
        {
          title: "Ask",
          desc: "Type a question, upload a photo, or speak in your language. No registration needed to start.",
        },
        {
          title: "Get Answer",
          desc: "Receive a clear, sourced response with confidence level. If we are not sure, we say so.",
        },
        {
          title: "Take Action",
          desc: "Follow the checklist. Share with your group. Come back when the next decision moment hits.",
        },
      ],
    },
    trust: {
      tag: "Trust & Safety",
      title: "Built for trust, not just speed",
      desc: "In agriculture, wrong advice costs real money. We take accuracy seriously.",
      items: [
        {
          title: "Source-Aware AI",
          desc: "Every answer links to its source. We retrieve from curated, official agricultural knowledge -- not open internet guessing.",
        },
        {
          title: "Expert Verification",
          desc: "Knowledge base curated from KVK advisories, ICAR resources, and state agriculture department content.",
        },
        {
          title: "Government Data",
          desc: "Mandi prices from AgMarkNet. Scheme info from official portals. Weather from IMD. We do not invent data.",
        },
        {
          title: "Privacy-First",
          desc: "No mandatory registration. No land records required. Your data is encrypted and never sold.",
        },
      ],
    },
    pilot: {
      title: "Pilot with your organisation",
      desc: "We are looking for FPOs, KVKs, NGOs, and state agriculture departments to run structured 90-day pilots. Help your farmers access better advisory while we learn what works.",
      gov_btn: "Government Partnerships",
      partner_btn: "Become a Partner",
    },
    investors: {
      tag: "For Investors",
      title: "A real problem, a clear market",
      desc1: "India has ~9.7 crore digitally traceable farmers via PM-KISAN. Rural internet penetration exceeds 41%. 5G covers 99% of districts. Yet no farmer-first, vernacular AI assistant has achieved meaningful scale.",
      desc2: "Our conservative TAM at Rs 600/farmer/year is Rs 58.2 billion. The opportunity is not in inventing farmer advice -- it is in becoming the lowest-friction, highest-trust wrapper around existing information channels.",
      btn: "Read the investor brief",
    },
    research: {
      tag: "Research",
      title: "Grounded in evidence",
      desc: "We built KisanAI because the pain is documented and the timing is right.",
      pain_title: "Farmer pain is real",
      pain_quote: "I have no other option but to sell my land to repay the loan.",
      pain_desc: "Public reports show onion farmers spending Rs 80,000/acre while receiving Rs 300-1,200 for damaged produce. Financial distress from information gaps is measurable and immediate.",
      market_title: "Market timing is right",
      market_desc: "The government launched Bharat-VISTAAR (multilingual AI advisory) in 2026. Bayer FarmRise crossed 5M users. DeHaat hit Rs 3,000 Cr revenue. The category is validated.",
      market_sub: "Our opportunity: be the simplest, most trusted operational wrapper -- not the biggest platform.",
      tech_title: "Technical approach works",
      tech_desc: "Academic research on Indian agricultural QA systems shows curated corpora, latency control, and language quality matter more than broad surface area at MVP stage.",
      tech_sub: "We use RAG over curated sources with explicit abstention -- not open-ended generation.",
      btn: "Read our full research",
    },
    faq: {
      tag: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Is KisanAI free for farmers?",
          a: "Yes, the core assistant is free. Farmers can ask questions, check prices, and get weather advice without paying. We may introduce premium features later, but basic advisory will remain free.",
        },
        {
          q: "Which languages does KisanAI support?",
          a: "We are building for Indian farmers, so language is a priority. We currently support Hindi and are adding regional languages starting with the most-spoken ones in our pilot regions. The goal is every major Indian language.",
        },
        {
          q: "How accurate is the crop disease detection?",
          a: "Our disease detection provides a diagnosis with a confidence level. When confidence is low, we say so and suggest consulting a local expert. We never recommend chemicals without showing the source and uncertainty.",
        },
        {
          q: "Where does KisanAI get its information?",
          a: "We retrieve from curated sources: ICAR advisories, KVK content, state agriculture departments, AgMarkNet mandi data, IMD weather, and official government scheme portals. Every answer links to its source.",
        },
        {
          q: "Do I need to create an account?",
          a: "No. You can start asking questions immediately. Account creation is optional and only used to save your history and preferences. We follow DPDP Act guidelines for data protection.",
        },
        {
          q: "Can KisanAI replace my local agriculture officer?",
          a: "No, and it is not designed to. KisanAI is a decision-support tool that helps you prepare questions, understand options, and act faster. For complex or high-stakes decisions, we always recommend consulting your local KVK or agriculture officer.",
        },
        {
          q: "How is KisanAI different from other farming apps?",
          a: "Most farming apps focus on one thing -- weather, or prices, or disease. KisanAI combines all of these into one conversation in your language. We also show our sources and admit when we are uncertain, which most apps do not.",
        },
        {
          q: "Is my data safe?",
          a: "Yes. We encrypt data in transit and at rest. We do not require land records or identity documents. We do not sell farmer data to anyone. Our privacy policy is written in plain language.",
        },
      ],
    },
    waitlist: {
      title: "Join the waitlist",
      desc: "We are onboarding farmers, FPOs, and partners region by region. Sign up to get early access when we launch in your area.",
      name_placeholder: "Your name",
      phone_placeholder: "Phone number",
      btn: "Join Waitlist",
      spam_note: "We will only contact you about KisanAI access. No spam.",
    },
  },
  hindi: {
    nav: {
      government: "सरकारी साझेदारी",
      investors: "निवेशक",
      partners: "भागीदार",
      research: "शोध",
      impact: "प्रभाव",
      try: "किसान एआई आज़माएं",
    },
    hero: {
      title: "कृषि एआई सहायक",
      subtitle: "हर भारतीय किसान के लिए",
      desc: "अपनी भाषा में फसल सलाह, मौसम अलर्ट, मंडी भाव और सरकारी योजनाओं की जानकारी पाएं। सबसे महत्वपूर्ण निर्णयों के लिए एक भरोसेमंद सहायक।",
      cta: "किसान एआई आज़माएं",
    },
    switcher: "कीनो से अपनी भाषा में बात करें:",
    kino: {
      title: "मिलें कीनो से -- आपका कृषि मित्र",
      bubble: "नमस्ते! मैं हूँ कीनो, आपका कृषि मित्र। फसल की बीमारी, मौसम और मंडी भाव की सभी जानकारी के लिए मुझसे बेझिझक पूछें! मैं हिंदी और अंग्रेजी दोनों समझता हूँ।",
      badge: "मित्रवत भारतीय तोता शुभंकर",
    },
    problems: {
      tag: "समस्या",
      title: "खेती के फैसले इतने कठिन नहीं होने चाहिए",
      desc: "भारतीय किसान हर सीजन में पैसा खोते हैं -- कौशल की कमी के कारण नहीं, बल्कि इसलिए कि महत्वपूर्ण जानकारी बिखरी हुई है या भाषा की बाधाओं में बंद है।",
      items: [
        {
          title: "बिखरी हुई जानकारी",
          desc: "किसान मौसम ऐप, मंडी पोर्टल, डीलरों की सलाह और व्हाट्सएप ग्रुपों के बीच उलझते हैं -- इनमें से कोई भी आपस में जुड़ा नहीं है और काफी जानकारी असत्यापित होती है।",
        },
        {
          title: "भाषा की बाधाएं",
          desc: "अधिकांश डिजिटल कृषि उपकरण केवल अंग्रेजी या हिंदी में हैं। तमिल, तेलुगु, कन्नड़, मराठी या बंगाली बोलने वाले किसान पीछे छूट जाते हैं।",
        },
        {
          title: "जटिल सरकारी योजनाएं",
          desc: "सैकड़ों योजनाएं मौजूद हैं, लेकिन पात्रता नियम, आवश्यक दस्तावेज और अंतिम तिथियां अक्सर जटिल पीडीएफ और सरकारी फाइलों में दबी रहती हैं।",
        },
        {
          title: "फसल रोग की अनिश्चितता",
          desc: "जब फसल में बीमारी के लक्षण दिखते हैं, तो किसान केवल अनुमान लगाते हैं या स्थानीय डीलरों पर भरोसा करते हैं। गलत इलाज से पैसा बर्बाद होता है और फसल खराब हो जाती है।",
        },
      ],
    },
    capabilities: {
      tag: "उत्पाद की क्षमताएं",
      title: "एक सहायक, पांच विशेषताएं",
      desc: "पांच अलग-अलग ऐप्स का उपयोग करने के बजाय, सब कुछ एक ही चॅट में पाएं।",
      items: [
        {
          title: "चैट सहायक",
          desc: "अपनी भाषा में खेती का कोई भी सवाल पूछें। स्पष्ट और प्रमाणित उत्तर पाएं -- बिना किसी जटिल तकनीकी शब्दों के।",
        },
        {
          title: "बीमारी की पहचान",
          desc: "प्रभावित पत्ते की फोटो लें। सटीकता के स्तर और अगले कदमों की सूची के साथ तुरंत बीमारी की पहचान पाएं।",
        },
        {
          title: "मौसम सलाह",
          desc: "फसल-विशिष्ट सलाह के साथ स्थानीय मौसम की जानकारी। केवल पूर्वानुमान ही नहीं, बल्कि आज और कल क्या करना है, यह भी जानें।",
        },
        {
          title: "मंडी के भाव",
          desc: "आसपास की मंडियों से दैनिक वास्तविक समय के भाव। जानें कि कब बेचना सबसे फायदेमंद रहेगा, सिर्फ भाव ही नहीं।",
        },
        {
          title: "सरकारी योजनाएं",
          desc: "जानें कि आप किन योजनाओं के लिए पात्र हैं। आसान भाषा में पात्रता, आवश्यक दस्तावेज और समय सीमा की पूरी जानकारी पाएं।",
        },
      ],
    },
    steps: {
      tag: "सरल और मजेदार",
      title: "तीन आसान कदम। कोई परेशानी नहीं।",
      desc: "डुआलिंगो पर एक नया कौशल सीखने की तरह, किसान एआई के साथ अपनी फसलों के उत्तर पाना बहुत सरल और त्वरित है।",
      items: [
        {
          title: "ऐप खोलें",
          desc: "कोई जटिल पासवर्ड नहीं। वेब या व्हाट्सएप पर तुरंत और आसानी से उपयोग शुरू करें।",
        },
        {
          title: "अपनी भाषा में पूछें",
          desc: "लिखें, बोलें या फोटो अपलोड करें। बिल्कुल वैसे ही बात करें जैसे आप किसी मित्र से कर रहे हों।",
        },
        {
          title: "त्वरित और सटीक सलाह पाएं",
          desc: "स्पष्ट सिफारिशें। कोई जटिल शब्द नहीं। आपकी फसल की सुरक्षा के लिए व्यावहारिक और आसान कदम।",
        },
      ],
    },
    trust: {
      tag: "विश्वास और सुरक्षा",
      title: "भरोसे के लिए निर्मित, सिर्फ गति के लिए नहीं",
      desc: "खेती में गलत सलाह से बड़ा आर्थिक नुकसान हो सकता है। हम जानकारी की सटीकता को बहुत गंभीरता से लेते।",
      items: [
        {
          title: "स्रोत-सचेत एआई",
          desc: "हर उत्तर अपने स्रोत से लिंक होता है। हम केवल प्रमाणित सरकारी और आधिकारिक कृषि ज्ञान से जानकारी प्राप्त करते हैं।",
        },
        {
          title: "विशेषज्ञ सत्यापन",
          desc: "केवीके (KVK) सलाह, आईसीएआर (ICAR) संसाधनों और राज्य कृषि विभागों की प्रमाणित सामग्री से तैयार ज्ञानकोश।",
        },
        {
          title: "सरकारी डेटा",
          desc: "एगमार्कनेट (AgMarkNet) से मंडी के भाव, आधिकारिक पोर्टलों से योजनाओं की जानकारी और आईएमडी (IMD) से मौसम का डेटा।",
        },
        {
          title: "गोपनीयता सर्वप्रथम",
          desc: "कोई अनिवार्य पंजीकरण नहीं। कोई भूमि रिकॉर्ड आवश्यक नहीं। आपका डेटा पूरी तरह सुरक्षित है और कभी बेचा नहीं जाता।",
        },
      ],
    },
    pilot: {
      title: "अपनी संस्था के साथ पायलट चलाएं",
      desc: "हम ९०-दिवसीय पायलट प्रोजेक्ट चलाने के लिए एफपीओ, केवीके, एनजीओ और राज्य कृषि विभागों के साथ साझेदारी की तलाश कर रहे हैं।",
      gov_btn: "सरकारी साझेदारी",
      partner_btn: "भागीदार बनें",
    },
    investors: {
      tag: "निवेशकों के लिए",
      title: "एक वास्तविक समस्या, एक स्पष्ट बाजार",
      desc1: "भारत में पीएम-किसान के माध्यम से लगभग ९.७ करोड़ डिजिटल रूप से ट्रैक करने योग्य किसान हैं। ग्रामीण इंटरनेट की पहुंच ४१% से अधिक है और ९९% जिलों में ५जी सेवा उपलब्ध है। फिर भी किसी स्थानीय भाषा के एआई सहायक ने बड़े पैमाने पर सफलता हासिल नहीं की है।",
      desc2: "६०० रुपये प्रति किसान प्रति वर्ष की रूढ़िवादी दर पर हमारा कुल बाजार आकार ५८.२ बिलियन रुपये है। अवसर नया कृषि ज्ञान बनाने में नहीं है, बल्कि मौजूदा जानकारी को सबसे सरल और भरोसेमंद तरीके से किसानों तक पहुंचाने में है।",
      btn: "निवेशक विवरण पढ़ें",
    },
    research: {
      tag: "अनुसंधान",
      title: "साक्ष्यों पर आधारित",
      desc: "हमने किसान एआई का निर्माण इसलिए किया क्योंकि किसानों की समस्याएं वास्तविक हैं और तकनीकी रूप से यह बिल्कुल सही समय है।",
      pain_title: "किसानों की समस्याएं वास्तविक हैं",
      pain_quote: "ऋण चुकाने के लिए मेरे पास अपनी जमीन बेचने के अलावा कोई विकल्प नहीं है।",
      pain_desc: "सरकारी रिपोर्टों से पता चलता है कि प्याज किसानों को प्रति एकड़ ८०,००० रुपये खर्च करने पड़ते हैं, जबकि खराब मौसम के कारण उन्हें केवल ३०० से १२०० रुपये मिलते हैं। जानकारी के अभाव में वित्तीय संकट बहुत गहरा है।",
      market_title: "बाजार का सही समय",
      market_desc: "सरकार ने २०२६ में भारत-विस्तार (बहुभाषी एआई सलाहकार) लॉन्च किया। बायर फार्मराइज ने ५० लाख से अधिक उपयोगकर्ता जोड़े। देहात ने ३,००० करोड़ रुपये का राजस्व पार किया। बाजार पूरी तरह तैयार है।",
      market_sub: "हमारा अवसर: सबसे सरल और सबसे विश्वसनीय कृषक सहायक बनना -- सबसे बड़ा प्लेटफॉर्म नहीं।",
      tech_title: "तकनीकी दृष्टिकोण प्रभावी है",
      tech_desc: "भारतीय कृषि प्रश्न-उत्तर प्रणालियों पर अकादमिक शोध से पता चलता है कि व्यापक ज्ञान क्षेत्र की तुलना में स्थानीय भाषा की गुणवत्ता, गति और प्रमाणित स्रोत अधिक महत्वपूर्ण हैं।",
      tech_sub: "हम केवल प्रमाणित आधिकारिक स्रोतों पर आधारित आरएजी (RAG) तकनीक का उपयोग करते हैं -- बिना किसी मनगढ़ंत उत्तरों के।",
      btn: "हमारा पूरा शोध पढ़ें",
    },
    faq: {
      tag: "एफएक्यू",
      title: "आम सवाल",
      items: [
        {
          q: "क्या किसान एआई किसानों के लिए मुफ्त है?",
          a: "हाँ, बुनियादी सहायक पूरी तरह से मुफ्त है। किसान बिना किसी शुल्क के प्रश्न पूछ सकते हैं, मंडी के भाव देख सकते हैं और मौसम की सलाह ले सकते हैं। हम बाद में कुछ प्रीमियम सुविधाएं जोड़ सकते हैं, लेकिन बुनियादी सलाह हमेशा मुफ्त रहेगी।",
        },
        {
          q: "किसान एआई किन भाषाओं का समर्थन करता है?",
          a: "हम भारतीय किसानों के लिए निर्माण कर रहे हैं, इसलिए स्थानीय भाषाएं हमारी प्राथमिकता हैं। हम वर्तमान में हिंग्लिश, अंग्रेजी, हिंदी, बंगाली और मराठी का समर्थन करते हैं। हमारा लक्ष्य भारत की सभी प्रमुख भाषाओं को जोड़ना है।",
        },
        {
          q: "फसल रोग की पहचान कितनी सटीक है?",
          a: "हमारी रोग पहचान प्रणाली विश्वसनीयता के स्तर (Confidence Level) के साथ निदान प्रदान करती है। यदि विश्वसनीयता कम होती है, तो हम स्पष्ट रूप से बता देते हैं और स्थानीय कृषि विशेषज्ञ से संपर्क करने की सलाह देते हैं।",
        },
        {
          q: "किसान एआई अपनी जानकारी कहां से प्राप्त करता है?",
          a: "हम केवल प्रमाणित स्रोतों से जानकारी लेते हैं: आईसीएआर (ICAR) सलाह, केवीके (KVK) सामग्री, राज्य कृषि विभाग, एगमार्कनेट मंडी भाव, आईएमडी (IMD) मौसम और आधिकारिक सरकारी योजना पोर्टल। हर उत्तर के साथ उसका स्रोत दिया जाता है।",
        },
        {
          q: "क्या मुझे खाता बनाने की आवश्यकता है?",
          a: "नहीं। आप तुरंत प्रश्न पूछना शुरू कर सकते हैं। खाता बनाना वैकल्पिक है और इसका उपयोग केवल आपके प्रश्नों के इतिहास और प्राथमिकताओं को सुरक्षित रखने के लिए किया जाता है। हम डीपीडीपी (DPDP) नियमों का पालन करते हैं।",
        },
        {
          q: "क्या किसान एआई मेरे स्थानीय कृषि अधिकारी की जगह ले सकता है?",
          a: "नहीं, और इसे इस तरह डिजाइन नहीं किया गया है। किसान एआई एक निर्णय-सहायक उपकरण है जो आपको सही जानकारी प्राप्त करने और तेजी से निर्णय लेने में मदद करता है। किसी भी बड़े फैसले के लिए हम हमेशा स्थानीय केवीके या कृषि अधिकारी से सलाह लेने की सिफारिश करते हैं।",
        },
        {
          q: "किसान एआई अन्य खेती ऐप से कैसे भिन्न है?",
          a: "अधिकांश खेती ऐप्स केवल एक ही चीज़ पर ध्यान केंद्रित करते हैं -- जैसे केवल मौसम या केवल मंडी भाव। किसान एआई इन सभी को आपकी अपनी भाषा में एक ही चैट में जोड़ता है। हम अपने स्रोतों को स्पष्ट रूप से दर्शाते हैं और संदेह होने पर स्पष्ट रूप से मना करते हैं।",
        },
        {
          q: "क्या मेरा डेटा सुरक्षित है?",
          a: "हाँ। हम डेटा को पूरी तरह से एन्क्रिप्ट करके सुरक्षित रखते हैं। हम कोई भूमि रिकॉर्ड या पहचान पत्र नहीं मांगते हैं। हम किसानों का डेटा कभी किसी को नहीं बेचते हैं। हमारी नीतियां बहुत स्पष्ट और पारदर्शी हैं।",
        },
      ],
    },
    waitlist: {
      title: "वेटलिस्ट में शामिल हों",
      desc: "हम अलग-अलग क्षेत्रों के अनुसार किसानों, एफपीओ और भागीदारों को जोड़ रहे हैं। जब हम आपके क्षेत्र में लॉन्च करेंगे, तो सबसे पहले एक्सेस पाने के लिए अभी पंजीकरण करें।",
      name_placeholder: "आपका नाम",
      phone_placeholder: "मोबाइल नंबर",
      btn: "वेटलिस्ट में शामिल हों",
      spam_note: "हम आपसे केवल किसान एआई एक्सेस के लिए संपर्क करेंगे। कोई स्पैम नहीं।",
    },
  },
  bangla: {
    nav: {
      government: "সরকারি অংশীদারিত্ব",
      investors: "বিনিয়োগকারী",
      partners: "অংশীদার",
      research: "গবেষণা",
      impact: "প্রভাব",
      try: "কিসান এআই চেষ্টা করুন",
    },
    hero: {
      title: "কৃষি এআই সহকারী",
      subtitle: "প্রতিটি ভারতীয় কৃষকের জন্য",
      desc: "আপনার নিজের ভাষায় ফসলের পরামর্শ, আবহাওয়ার সতর্কতা, মন্ডির দাম এবং সরকারি স্কিম নির্দেশিকা পান। সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্তের জন্য একটি বিশ্বস্ত সহকারী।",
      cta: "কিসান এআই চেষ্টা করুন",
    },
    switcher: "কিনোর সাথে আপনার ভাষায় কথা বলুন:",
    kino: {
      title: "কিনোর সাথে পরিচিত হোন -- আপনার কৃষি মিত্র",
      bubble: "নমস্কার! আমি কিনো, আপনার কৃষি বন্ধু। ফসলের রোগ, আবহাওয়া এবং মন্ডির দাম সম্পর্কে আমাকে যেকোনো প্রশ্ন করুন! আমি বাংলা, হিন্দি ও ইংরেজি বুঝতে পারি।",
      badge: "বান্ধব ভারতীয় টিয়া পাখি মাসকট",
    },
    problems: {
      tag: "সমস্যা",
      title: "চাষের সিদ্ধান্ত নেওয়া এত কঠিন হওয়া উচিত নয়",
      desc: "ভারতীয় কৃষকরা প্রতি মরসুমে অর্থ হারান -- দক্ষতার অভাবের জন্য নয়, বরং গুরুত্বপূর্ণ তথ্য ছড়িয়ে ছিটিয়ে থাকা এবং ভাষার বাধার কারণে।",
      items: [
        {
          title: "ছড়িয়ে ছিটিয়ে থাকা তথ্য",
          desc: "কৃষকরা আবহাওয়া অ্যাপ, মন্ডির পোর্টাল, ডিলারদের পরামর্শ এবং হোয়াটসঅ্যাপ গ্রুপের মধ্যে বিভ্রান্ত হন -- এগুলির কোনোটিই সংযুক্ত নয় এবং অনেকটাই অপ্রমাণিত।",
        },
        {
          title: "ভাষার বাধা",
          desc: "বেশিরভাগ ডিজিটাল কৃষি সরঞ্জাম ইংরেজি বা হিন্দিতে তৈরি। বাংলা, তামিল, তেলুগু, কন্নড় বা মারাঠিভাষী কৃষকরা পিছিয়ে পড়েন।",
        },
        {
          title: "জটিল সরকারি প্রকল্প",
          desc: "শত শত সরকারি প্রকল্প রয়েছে, তবে যোগ্যতার নিয়ম, প্রয়োজনীয় নথি এবং সময়সীমা প্রায়শই জটিল পিডিএফ এবং অফিসের ফাইলে চাপা পড়ে থাকে।",
        },
        {
          title: "ফসলের রোগ নিয়ে অনিশ্চয়তা",
          desc: "যখন ফসলে রোগের লক্ষণ দেখা দেয়, কৃষকরা কেবল অনুমান করেন বা স্থানীয় ডিলারদের উপর নির্ভর করেন। ভুল চিকিৎসায় অর্থ অপচয় হয় এবং ফসল নষ্ট হয়।",
        },
      ],
    },
    capabilities: {
      tag: "প্রোডাক্টের বৈশিষ্ট্য",
      title: "একটি সহকারী, পাঁচটি সুবিধা",
      desc: "পাঁচটি ভিন্ন অ্যাপ ব্যবহারের বদলে, একটি সাধারণ চ্যাটে সব সুবিধা পান।",
      items: [
        {
          title: "চ্যাট সহকারী",
          desc: "আপনার ভাষায় চাষের যেকোনো প্রশ্ন জিজ্ঞাসা করুন। কোনো জটিল প্রযুক্তিগত শব্দ ছাড়াই স্পষ্ট ও নির্ভরযোগ্য উত্তর পান।",
        },
        {
          title: "রোগ সনাক্তকরণ",
          desc: "আক্রান্ত পাতার একটি ছবি তুলুন। নিখুঁততার মাত্রা এবং পরবর্তী করণীয় পদক্ষেপের তালিকা সহ অবিলম্বে রোগের তথ্য পান।",
        },
        {
          title: "আবহাওয়া পরামর্শ",
          desc: "নির্দিষ্ট ফসলের পরামর্শ সহ স্থানীয় আবহাওয়ার তথ্য। শুধু পূর্বাভাস নয়, আজ এবং কাল ঠিক কী করতে হবে তাও জানুন।",
        },
        {
          title: "মন্ডির দাম",
          desc: "আশেপাশের মন্ডি থেকে প্রতিদিনের রিয়েল-টাইম দাম। কখন বিক্রি করা সবচেয়ে লাভজনক হবে তা জানুন, শুধু দাম নয়।",
        },
        {
          title: "সরকারি প্রকল্প",
          desc: "কোন কোন প্রকল্পের জন্য আপনি যোগ্য তা জানুন। সহজ ভাষায় যোগ্যতা, প্রয়োজনীয় নথি এবং সময়সীমার সম্পূর্ণ তথ্য পান।",
        },
      ],
    },
    steps: {
      tag: "সহজ এবং মজার",
      title: "তিনটি সহজ ধাপ। কোনো জটিলতা নেই।",
      desc: "ডুওলিঙ্গো-তে নতুন কিছু শেখার মতোই, কিসান এআই-এর সাথে ফসলের উত্তর পাওয়া অত্যন্ত সহজ এবং দ্রুত।",
      items: [
        {
          title: "অ্যাপ খুলুন",
          desc: "কোনো জটিল পাসওয়ার্ডের প্রয়োজন নেই। ওয়েব বা হোয়াটসঅ্যাপে অবিলম্বে এবং সহজেই ব্যবহার শুরু করুন।",
        },
        {
          title: "আপনার ভাষায় জিজ্ঞাসা করুন",
          desc: "টাইপ করুন, বলুন বা ছবি আপলোড করুন। একেবারে নিজের বন্ধুর মতো করে কথা বলুন।",
        },
        {
          title: "সহজ ও সঠিক পরামর্শ পান",
          desc: "স্পষ্ট পরামর্শ। কোনো জটিল শব্দ নেই। আপনার ফসল সুরক্ষার জন্য অবিলম্বে বাস্তবায়নযোগ্য পদক্ষেপ।",
        },
      ],
    },
    trust: {
      tag: "বিশ্বাস ও নিরাপত্তা",
      title: "বিশ্বাসের জন্য তৈরি, শুধু গতির জন্য নয়",
      desc: "কৃষিকাজে ভুল পরামর্শের অর্থ হলো বড় আর্থিক ক্ষতি। আমরা তথ্যের নির্ভুলতাকে অত্যন্ত গুরুত্ব দিই।",
      items: [
        {
          title: "উৎস-সচেতন এআই",
          desc: "প্রতিটি উত্তরের সাথে উৎস দেওয়া থাকে। আমরা কেবল প্রত্যয়িত সরকারি এবং অফিসিয়াল কৃষি তথ্যশালা থেকে তথ্য সংগ্রহ করি।",
        },
        {
          title: "বিশেষজ্ঞ দ্বারা যাচাইকৃত",
          desc: "কেভিকে (KVK) পরামর্শ, আইসিএআর (ICAR) তথ্য এবং রাজ্য কৃষি বিভাগের প্রত্যয়িত উপাদান থেকে তৈরি তথ্যভাণ্ডার।",
        },
        {
          title: "সরকারি তথ্য",
          desc: "এগমার্টনেট (AgMarkNet) থেকে মন্ডির দাম, অফিসিয়াল পোর্টাল থেকে প্রকল্পের তথ্য এবং আইএমডি (IMD) থেকে আবহাওয়ার ডেটা।",
        },
        {
          title: "গোপনীয়তা প্রথম",
          desc: "কোনো বাধ্যতামূলক রেজিস্ট্রেশন নেই। কোনো জমির রেকর্ড বা পরিচয়পত্র প্রয়োজন নেই। আপনার তথ্য সম্পূর্ণ সুরক্ষিত এবং কখনো বিক্রি করা হয় না।",
        },
      ],
    },
    pilot: {
      title: "আপনার সংস্থার সাথে পাইলট শুরু করুন",
      desc: "আমরা ৯০ দিনের পাইলট প্রকল্প চালাতে FPO, KVK, NGO এবং রাজ্য কৃষি বিভাগগুলির সাথে সহযোগিতা করতে আগ্রহী।",
      gov_btn: "সরকারি অংশীদারিত্ব",
      partner_btn: "অংশীদার হন",
    },
    investors: {
      tag: "বিনিয়োগকারীদের জন্য",
      title: "একটি বাস্তব সমস্যা, একটি পরিষ্কার বাজার",
      desc1: "ভারতে পিএম-কিসানের মাধ্যমে প্রায় ৯.৭ কোটি ডিজিটালভাবে ট্র্যাকযোগ্য কৃষক রয়েছেন। গ্রামীণ ইন্টারনেট ব্যবহারের হার ৪১%-এর বেশি এবং ৯৯% জেলায় ফাইভ-জি পরিষেবা উপলব্ধ। তবুও কোনো আঞ্চলিক ভাষার এআই সহকারী বড় স্কেলে পৌঁছাতে পারেনি।",
      desc2: "প্রতি কৃষক প্রতি বছর ৬০০ টাকার রক্ষণশীল হারে আমাদের মোট বাজারের আকার ৫৮.২ বিলিয়ন টাকা। সুযোগটি নতুন কোনো কৃষি জ্ঞান তৈরির মধ্যে নেই, বরং বিদ্যমান তথ্যকে কৃষকদের কাছে সবচেয়ে সহজ এবং বিশ্বস্ত উপায়ে পৌঁছে দেওয়ার মধ্যে রয়েছে।",
      btn: "বিনিয়োগকারীদের বিবরণ পড়ুন",
    },
    research: {
      tag: "গবেষণা",
      title: "প্রমাণ ভিত্তিক",
      desc: "আমরা কিসান এআই তৈরি করেছি কারণ কৃষকদের সমস্যাগুলি বাস্তব এবং প্রযুক্তিগতভাবে এটিই সঠিক সময়।",
      pain_title: "কৃষকদের সমস্যা অত্যন্ত বাস্তব",
      pain_quote: "ঋণ পরিশোধের জন্য আমার জমি বিক্রি করা ছাড়া আর কোনো উপায় নেই।",
      pain_desc: "সরকারি রিপোর্ট থেকে দেখা যায় যে পিঁয়াজ চাষীদের প্রতি একরে ৮০,০০০ টাকা খরচ করতে হয়, অথচ খারাপ আবহাওয়ার কারণে তারা মাত্র ৩০০ থেকে ১২০০ টাকা পান। তথ্যের অভাবে আর্থিক সংকট অত্যন্ত গভীর।",
      market_title: "বাজারের সঠিক সময়",
      market_desc: "সরকার ২০২৬ সালে ভারত-বিস্তার (বহুভাষী এআই পরামর্শদাতা) চালু করেছে। বায়ার ফার্মরাইজ ৫০ লক্ষের বেশি ব্যবহারকারী যুক্ত করেছে। দেহাতি ৩,০০০ কোটি টাকার রাজস্ব অতিক্রম করেছে। বাজার সম্পূর্ণ প্রস্তুত।",
      market_sub: "আমাদের সুযোগ: সবচেয়ে সহজ এবং সবচেয়ে বিশ্বস্ত কৃষি সহকারী হওয়া -- সবচেয়ে বড় প্ল্যাটফর্ম নয়।",
      tech_title: "প্রযুক্তিগত পদ্ধতি সফল",
      tech_desc: "ভারতীয় কৃষি প্রশ্নোত্তর ব্যবস্থার ওপর একাডেমিক গবেষণা দেখায় যে ব্যাপক জ্ঞানক্ষেত্রের চেয়ে আঞ্চলিক ভাষার গুণমান, গতি এবং প্রত্যয়িত উৎস অনেক বেশি গুরুত্বপূর্ণ।",
      tech_sub: "আমরা কেবল প্রত্যয়িত অফিসিয়াল উৎসের ওপর ভিত্তি করে আরএজি (RAG) প্রযুক্তি ব্যবহার করি -- কোনো মনগড়া উত্তর ছাড়াই।",
      btn: "আমাদের সম্পূর্ণ গবেষণা পড়ুন",
    },
    faq: {
      tag: "সাধারণ জিজ্ঞাসা",
      title: "সাধারণ প্রশ্নাবলী",
      items: [
        {
          q: "কিসান এআই কি কৃষকদের জন্য সম্পূর্ণ বিনামূল্যে?",
          a: "হ্যাঁ, কিসান এআই-এর মূল চ্যাট সহকারী সম্পূর্ণ বিনামূল্যে। কৃষকরা কোনো খরচ ছাড়াই প্রশ্ন জিজ্ঞাসা করতে পারেন, মন্ডির দাম দেখতে পারেন এবং আবহাওয়ার পরামর্শ নিতে পারেন। আমরা পরবর্তীতে কিছু প্রিমিয়াম ফিচার যোগ করতে পারি, তবে বেসিক পরামর্শ সবসময় বিনামূল্যে থাকবে।",
        },
        {
          q: "কিসান এআই কোন কোন ভাষা সমর্থন করে?",
          a: "আমরা ভারতীয় কৃষকদের জন্য এটি তৈরি করছি, তাই আঞ্চলিক ভাষা আমাদের মূল অগ্রাধিকার। বর্তমানে আমরা হিংলিশ, ইংরেজি, হিন্দি, বাংলা ও মারাঠি ভাষা সমর্থন করি। আমাদের লক্ষ্য ভারতের সমস্ত প্রধান ভাষা যুক্ত করা।",
        },
        {
          q: "ফসলের রোগ সনাক্তকরণ কতটা নির্ভুল?",
          a: "আমাদের রোগ সনাক্তকরণ ব্যবস্থা নির্ভুলতার মাত্রা (Confidence Level) সহ তথ্য প্রদান করে। যদি নির্ভুলতার হার কম হয়, আমরা তা স্পষ্ট জানিয়ে দিই এবং স্থানীয় কৃষি কর্মকর্তার সাথে পরামর্শ করার পরামর্শ দিই।",
        },
        {
          q: "কিসান এআই তার তথ্য কোথা থেকে সংগ্রহ করে?",
          a: "আমরা কেবল প্রত্যয়িত উৎস থেকে তথ্য সংগ্রহ করি: আইসিএআর (ICAR) নির্দেশিকা, কেভিকে (KVK) তথ্য, রাজ্য কৃষি বিভাগ, এগমর্কনেট মন্ডির দাম, আইএমডি (IMD) আবহাওয়া এবং অফিসিয়াল সরকারি পোর্টাল। প্রতিটি উত্তরের সাথে তার উৎস উল্লেখ করা থাকে।",
        },
        {
          q: "আমার কি কোনো অ্যাকাউন্ট তৈরি করতে হবে?",
          a: "না। আপনি অবিলম্বে কোনো অ্যাকাউন্ট ছাড়াই প্রশ্ন জিজ্ঞাসা করা শুরু করতে পারেন। অ্যাকাউন্ট তৈরি করা সম্পূর্ণ ঐচ্ছিক এবং এটি কেবল আপনার প্রশ্নগুলির ইতিহাস ও পছন্দগুলি সংরক্ষণ করতে ব্যবহৃত হয়। আমরা ডিপডিপি (DPDP) নীতি কঠোরভাবে মেনে চলি।",
        },
        {
          q: "কিসান এআই কি আমার স্থানীয় কৃষি কর্মকর্তার বিকল্প হতে পারে?",
          a: "না, এবং এটি তার জন্য তৈরি করা হয়নি। কিসান एआई একটি সিদ্ধান্ত-সহায়ক সরঞ্জাম যা আপনাকে সঠিক তথ্য দ্রুত পেতে সাহায্য করে। যেকোনো বড় সিদ্ধান্তের জন্য আমরা সবসময় স্থানীয় কেভিকে বা কৃষি কর্মকর্তার সাথে পরামর্শ করার সুপারিশ করি।",
        },
        {
          q: "কিসান এআই অন্য কোনো কৃষি অ্যাপ থেকে কীভাবে আলাদা?",
          a: "অধিকাংশ কৃষি অ্যাপ কেবল একটি বিষয়ের ওপর ফোকাস করে -- যেমন শুধু আবহাওয়া বা শুধু মন্ডির দাম। কিসান এআই এই সমস্ত তথ্যকে আপনার নিজের ভাষায় একটি চ্যাটে একত্রিত করে। আমরা আমাদের তথ্যের উৎস স্পষ্টভাবে দেখাই, যা অন্য অ্যাপগুলি সাধারণত করে না।",
        },
        {
          q: "আমার তথ্য কি সুরক্ষিত থাকবে?",
          a: "হ্যাঁ। আমরা আপনার সমস্ত তথ্য সম্পূর্ণ এনক্রিপ্ট করে সুরক্ষিত রাখি। আমরা কোনো জমির রেকর্ড বা পরিচয়পত্র দাবি করি না। আমরা কৃষকদের কোনো তথ্য কখনো কারো কাছে বিক্রি করি না। আমাদের নীতি অত্যন্ত পরিষ্কার ও স্বচ্ছ।",
        },
      ],
    },
    waitlist: {
      title: "ওয়েটলিস্টে যোগ দিন",
      desc: "আমরা বিভিন্ন অঞ্চল অনুযায়ী কৃষক, FPO এবং অংশীদারদের যুক্ত করছি। আপনার এলাকায় আমাদের পরিষেবা চালু হলে সবার আগে আপডেট পেতে এখনই আপনার নাম নথিভুক্ত করুন।",
      name_placeholder: "আপনার নাম",
      phone_placeholder: "মোবাইল নম্বর",
      btn: "ওয়েটলিস্টে যোগ দিন",
      spam_note: "আমরা শুধুমাত্র কিসান এআই অ্যাক্সেস সম্পর্কিত তথ্যের জন্য আপনার সাথে যোগাযোগ করব। কোনো স্প্যাম পাঠানো হবে না।",
    },
  },
  marathi: {
    nav: {
      government: "शासकीय भागीदारी",
      investors: "गुंतवणूकदार",
      partners: "भागीदार",
      research: "संशोधन",
      impact: "प्रभाव",
      try: "किसान एआय वापरून पहा",
    },
    hero: {
      title: "कृषी एआय सहाय्यक",
      subtitle: "प्रत्येक भारतीय शेतकऱ्यासाठी",
      desc: "तुमच्या स्वतःच्या भाषेत पिकांचा सल्ला, हवामानाचे इशारे, मंडीचे भाव आणि सरकारी योजनांची माहिती मिळवा. सर्वात महत्त्वाच्या निर्णयांसाठी एकच विश्वसनीय सहाय्यक।",
      cta: "किसान एआय वापरून पहा",
    },
    switcher: "कीनोशी तुमच्या भाषेत बोला:",
    kino: {
      title: "कीनोला भेटा -- तुमचा कृषी मित्र",
      bubble: "नमस्ते! मी कीनो, तुमचा कृषी मित्र. पिकांचे रोग, हवामान आणि मंडीच्या दरांबद्दल मला काहीही विचारा! मला मराठी, हिंदी आणि इंग्रजी समजते.",
      badge: "मैत्रीपूर्ण भारतीय पोपट शुभंकर",
    },
    problems: {
      tag: "समस्या",
      title: "शेतीचे निर्णय घेणे इतके कठीण नसावे",
      desc: "भारतीय शेतकरी प्रत्येक हंगामात पैशांचे नुकसान सहन करतात -- कौशल्याच्या कमतरतेमुळे नाही, तर महत्त्वाची माहिती विखुरलेली असल्यामुळे आणि भाषेच्या अडथळ्यांमुळे.",
      items: [
        {
          title: "विखुरलेली माहिती",
          desc: "शेतकरी हवामान ॲप्स, मंडीचे पोर्टल, डीलर्सचे सल्ले आणि व्हॉट्सॲप ग्रुप्स यांच्यामध्ये गोंधळतात -- यापैकी काहीही जोडलेले नाही आणि बरीच माहिती अप्रमाणित असते.",
        },
        {
          title: "भाषेचे अडथळे",
          desc: "बहुतेक डिजिटल शेती साधने केवळ इंग्रजी किंवा हिंदीत आहेत. मराठी, तमिळ, तेलगू, कन्नड किंवा बंगाली बोलणारे शेतकरी मागे पडतात.",
        },
        {
          title: "जटिल सरकारी योजना",
          desc: "शेकडो सरकारी योजना आहेत, परंतु पात्रतेचे नियम, आवश्यक कागदपत्रे आणि अंतिम मुदत सहसा क्लिष्ट पीडीएफ आणि सरकारी फायलींमध्ये दबलेली असते.",
        },
        {
          title: "पिकांच्या रोगांबद्दल अनिश्चितता",
          desc: "जेव्हा पिकावर रोगाची लक्षणे दिसतात, शेतकरी केवळ अंदाज लावतात किंवा स्थानिक डीलरवर अवलंबून राहतात. चुकीच्या उपचारांमुळे पैसे वाया जातात आणि पीक खराब होते.",
        },
      ],
    },
    capabilities: {
      tag: "उत्पादनाची वैशिष्ट्ये",
      title: "एक सहाय्यक, पाच वैशिष्ट्ये",
      desc: "पाच वेगवेगळे ॲप्स वापरण्याऐवजी, सर्व काही एकाच चॅटमध्ये मिळवा.",
      items: [
        {
          title: "चॅट सहाय्यक",
          desc: "तुमच्या भाषेत शेतीचा कोणताही प्रश्न विचारा. कोणत्याही क्लिष्ट तांत्रिक शब्दांशिवाय स्पष्ट आणि विश्वसनीय उत्तरे मिळवा.",
        },
        {
          title: "रोग ओळखणे",
          desc: "बाधित पानाचा फोटो काढा. अचूकतेची पातळी आणि पुढील पावलांच्या यादीसह रोगाचे त्वरित निदान मिळवा.",
        },
        {
          title: "हवामान सल्ला",
          desc: "विशिष्ट पिकाच्या सल्ल्यासह स्थानिक हवामानाची माहिती. केवळ अंदाज नाही, तर आज आणि उद्या शेतात नक्की काय करायचे आहे ते देखील जाणून घ्या.",
        },
        {
          title: "मंडीचे भाव",
          desc: "आसपासच्या बाजारपेठांमधून (मंडी) रोजचे थेट भाव. केवळ भावच नाही, तर विक्रीसाठी सर्वात योग्य वेळ कोणती हे देखील जाणून घ्या.",
        },
        {
          title: "सरकारी योजना",
          desc: "तुम्ही कोणत्या योजनांसाठी पात्र आहात ते जाणून घ्या. सोप्या भाषेत पात्रता, आवश्यक कागदपत्रे आणि अंतिम मुदतीची संपूर्ण माहिती मिळवा.",
        },
      ],
    },
    steps: {
      tag: "सोपे आणि मनोरंजक",
      title: "तीन सोप्या पायऱ्या. कोणतीही अडचण नाही.",
      desc: "ड्युओलिंगोवर एखादे नवीन कौशल्य शिकण्याइतकेच, किसान एआय सोबत पिकांचे उत्तर मिळवणे सोपे आणि त्वरित आहे.",
      items: [
        {
          title: "ॲप उघडा",
          desc: "कोणत्याही क्लिष्ट पासवर्डची गरज नाही. वेब किंवा व्हॉट्सॲपवर त्वरित आणि सहज वापर सुरू करा.",
        },
        {
          title: "तुमच्या भाषेत विचारा",
          desc: "टाईप करा, बोला किंवा फोटो अपलोड करा. अगदी आपल्या मित्राशी बोलल्यासारखे सहज संवाद साधा.",
        },
        {
          title: "त्वरित आणि अचूक सल्ला मिळवा",
          desc: "स्पष्ट शिफारसी. कोणतेही क्लिष्ट शब्द नाहीत. तुमच्या पिकाच्या संरक्षणासाठी त्वरित अंमलात आणता येण्याजोग्या पायऱ्या.",
        },
      ],
    },
    trust: {
      tag: "विश्वास आणि सुरक्षा",
      title: "विश्वासासाठी तयार, फक्त वेगासाठी नाही",
      desc: "शेतीमध्ये चुकीच्या सल्ल्यामुळे मोठे आर्थिक नुकसान होऊ शकते. आम्ही माहितीच्या अचूकतेला अत्यंत महत्त्व देतो.",
      items: [
        {
          title: "स्रोत-सचेत एआय",
          desc: "प्रत्येक उत्तरासोबत त्याचा स्रोत दिलेला असतो. आम्ही केवळ प्रमाणित शासकीय आणि अधिकृत कृषी ज्ञानकोशांमधून माहिती मिळवतो.",
        },
        {
          title: "तज्ज्ञांकडून प्रमाणित",
          desc: "केव्हीके (KVK) सल्ला, आयसीएआर (ICAR) माहिती आणि राज्य कृषी विभागाच्या प्रमाणित सामग्रीमधून तयार केलेला ज्ञानकोश.",
        },
        {
          title: "शासकीय डेटा",
          desc: "एगमार्कनेट (AgMarkNet) कडून मंडीचे भाव, अधिकृत पोर्टलवरून योजनांची माहिती आणि आयएमडी (IMD) कडून हवामानाचा डेटा.",
        },
        {
          title: "गोपनीयता सर्वप्रथम",
          desc: "कोणतीही सक्तीची नोंदणी नाही. जमिनीचे रेकॉर्ड किंवा ओळखपत्र आवश्यक नाही. तुमचा डेटा पूर्णपणे सुरक्षित आहे आणि कधीही विकला जात नाही.",
        },
      ],
    },
    pilot: {
      title: "तुमच्या संस्थेसोबत पायलट प्रकल्प चालवा",
      desc: "आम्ही ९० दिवसांचे पायलट प्रकल्प चालवण्यासाठी FPOs, KVKs, NGOs आणि राज्य कृषी विभागांच्या शोधात आहोत आणि भागीदारीसाठी उत्सुक आहोत.",
      gov_btn: "शासकीय भागीदारी",
      partner_btn: "भागीदार व्हा",
    },
    investors: {
      tag: "गुंतवणूकदारांसाठी",
      title: "एक खरी समस्या, एक स्पष्ट बाजारपेठ",
      desc1: "भारतात पीएम-किसानच्या माध्यमातून सुमारे ९.७ कोटी डिजिटल स्वरूपात जोडलेले शेतकरी आहेत. ग्रामीण भागात इंटरनेटचा वापर ४१% पेक्षा जास्त आहे आणि ९९% जिल्ह्यांमध्ये ५जी सेवा उपलब्ध आहे. तरीही कोणत्याही प्रादेशिक भाषेच्या एआय सहाय्यकाने मोठ्या प्रमाणावर यश मिळवलेले नाही.",
      desc2: "प्रति शेतकरी प्रति वर्ष ६०० रुपयांच्या वाजवी दराने आमचा एकूण बाजार आकार ५८.२ अब्ज रुपये आहे. संधी नवीन कृषी ज्ञान तयार करण्यात नाही, तर उपलब्ध माहिती शेतकऱ्यांपर्यंत सर्वात सोप्या आणि विश्वसनीय पद्धतीने पोहोचवण्यात आहे.",
      btn: "गुंतवणूकदार माहितीपत्रक वाचा",
    },
    research: {
      tag: "संशोधन",
      title: "पुराव्यांवर आधारित",
      desc: "आम्ही किसान एआय ची निर्मिती केली कारण शेतकऱ्यांच्या समस्या वास्तववादी आहेत आणि तांत्रिकदृष्ट्या हीच योग्य वेळ आहे.",
      pain_title: "शेतकऱ्यांच्या समस्या अत्यंत वास्तववादी आहेत",
      pain_quote: "कर्ज फेडण्यासाठी माझ्याकडे माझी जमीन विकण्याशिवाय दुसरा कोणताही पर्याय उरलेला नाही.",
      pain_desc: "शासकीय अहवालांवरून असे दिसून येते की कांदा उत्पादक शेतकऱ्यांना प्रति एकर ८०,००० रुपये खर्च करावे लागतात, परंतु खराब हवामानामुळे त्यांना केवळ ३०० ते १२०० रुपये मिळतात. माहितीच्या अभावामुळे निर्माण झालेले आर्थिक संकट खूप गंभीर आहे.",
      market_title: "बाजाराची योग्य वेळ",
      market_desc: "शासनाने २०२६ मध्ये भारत-विस्तार (बहुभाषिक एआय सल्लागार) लाँच केला. बायर फार्मराईजने ५० लाखांपेक्षा जास्त वापरकर्ते जोडले. देहातने ३,००० कोटी रुपयांचा महसूल पार केला. बाजार पूर्णपणे तयार आहे.",
      market_sub: "आमची संधी: सर्वात सोपा आणि सर्वात विश्वसनीय शेती सहाय्यक बनणे -- सर्वात मोठा प्लॅटफॉर्म नाही.",
      tech_title: "तांत्रिक दृष्टिकोन यशस्वी",
      tech_desc: "भारतीय कृषी प्रश्न-उत्तर प्रणालींवरील शैक्षणिक संशोधनावरून असे दिसून येते की व्यापक ज्ञानक्षेत्रापेक्षा स्थानिक भाषेची गुणवत्ता, वेग आणि प्रमाणित स्रोत अधिक महत्त्वाचे आहेत.",
      tech_sub: "आम्ही केवळ प्रमाणित अधिकृत स्रोतांवर आधारित आरएजी (RAG) तंत्रज्ञानाचा वापर करतो -- कोणत्याही मनघडीत उत्तरांशिवाय.",
      btn: "आमचे संपूर्ण संशोधन वाचा",
    },
    faq: {
      tag: "नेहमी विचारले जाणारे प्रश्न",
      title: "वारंवार विचारले जाणारे प्रश्न",
      items: [
        {
          q: "किसान एआय शेतकऱ्यांसाठी विनामूल्य आहे का?",
          a: "होय, मुख्य चॅट सहाय्यक पूर्णपणे विनामूल्य आहे. शेतकरी कोणत्याही शुल्काशिवाय प्रश्न विचारू शकतात, मंडीचे भाव पाहू शकतात आणि हवामानाचा सल्ला घेऊ शकतात. आम्ही नंतर काही प्रीमियम वैशिष्ट्ये जोडू शकतो, परंतु मूलभूत सल्ला नेहमीच विनामूल्य राहील.",
        },
        {
          q: "किसान एआय कोणत्या भाषांना समर्थन देते?",
          a: "आम्ही भारतीय शेतकऱ्यांसाठी हे तयार करत आहोत, त्यामुळे प्रादेशिक भाषा ही आमची मुख्य प्राथमिकता आहे. सध्या आम्ही हिंग्लिश, इंग्रजी, हिंदी, बंगाली आणि मराठी भाषांना समर्थन देतो. आमचे उद्दिष्ट भारतातील सर्व प्रमुख भाषा जोडणे हे आहे.",
        },
        {
          q: "पिकांच्या रोगांचे निदान किती अचूक आहे?",
          a: "आमची रोग ओळखण्याची प्रणाली विश्वासाच्या पातळीसह (Confidence Level) निदान प्रदान करते. अचूकता कमी असल्यास, आम्ही तसे स्पष्ट सांगतो आणि स्थानिक कृषी अधिकाऱ्याचा सल्ला घेण्याची शिफारस करतो.",
        },
        {
          q: "किसान एआय ला ही माहिती कुठून मिळते?",
          a: "आम्ही केवळ प्रमाणित स्रोतांमधून माहिती मिळवतो: आयसीएआर (ICAR) मार्गदर्शक तत्त्वे, केव्हीके (KVK) सामग्री, राज्य कृषी विभाग, एगमार्कनेट मंडीचे भाव, आयएमडी (IMD) हवामान आणि अधिकृत शासकीय योजना पोर्टल. प्रत्येक उत्तरासोबत त्याचा स्रोत दिलेला असतो.",
        },
        {
          q: "मला खाते तयार करण्याची आवश्यकता आहे का?",
          a: "नाही. तुम्ही कोणत्याही खात्याशिवाय त्वरित प्रश्न विचारण्यास सुरुवात करू शकता. खाते तयार करणे पूर्णपणे ऐच्छिक आहे आणि ते केवळ तुमच्या प्रश्नांचा इतिहास आणि प्राधान्ये जतन करण्यासाठी वापरले जाते. आम्ही डीपीडीपी (DPDP) नियमांचे काटेकोरपणे पालन करतो.",
        },
        {
          q: "किसान एआय माझ्या स्थानिक कृषी अधिकाऱ्याची जागा घेऊ शकतो का?",
          a: "नाही, आणि ते तसे डिझाइन केलेले नाही. किसान एआय हे एक निर्णय-सहायक साधन आहे जे तुम्हाला अचूक माहिती जलद मिळवण्यास मदत करते. कोणत्याही मोठ्या निर्णयासाठी आम्ही नेहमी स्थानिक केव्हीके किंवा कृषी अधिकाऱ्याचा सल्ला घेण्याची शिफारस करतो.",
        },
        {
          q: "किसान एआय इतर कृषी ॲप्सपेक्षा कसा वेगळा आहे?",
          a: "बहुतेक कृषी ॲप्स केवळ एकाच गोष्टीवर लक्ष केंद्रित करतात -- जसे फक्त हवामान किंवा फक्त मंडीचे भाव. किसान एआय या सर्व माहितीला तुमच्या स्वतःच्या भाषेत एकाच चॅटमध्ये एकत्र आणतो. आम्ही आमच्या माहितीचे स्रोत स्पष्टपणे दाखवतो, जे इतर ॲप्स सहसा करत नाहीत.",
        },
        {
          q: "माझा डेटा सुरक्षित राहील का?",
          a: "होय. आम्ही तुमचा सर्व डेटा पूर्णपणे एन्क्रिप्ट करून सुरक्षित ठेवतो. आम्ही जमिनीचे रेकॉर्ड किंवा ओळखपत्र मागत नाही. आम्ही शेतकऱ्यांचा कोणताही डेटा कधीही कोणालाही विकत नाही. आमची धोरणे अत्यंत स्पष्ट आणि पारदर्शक आहेत.",
        },
      ],
    },
    waitlist: {
      title: "वेटलिस्टमध्ये सामील व्हा",
      desc: "आम्ही वेगवेगळ्या क्षेत्रांनुसार शेतकरी, FPO आणि भागीदारांना जोडत आहोत. तुमच्या भागात आमची सेवा सुरू झाल्यावर सर्वात आधी प्रवेश मिळवण्यासाठी आत्ताच तुमचे नाव नोंदवा.",
      name_placeholder: "तुमचे नाव",
      phone_placeholder: "मोबाईल नंबर",
      btn: "वेटलिस्टमध्ये सामील व्हा",
      spam_note: "आम्ही तुमच्याशी केवळ किसान एआय प्रवेशाबाबत संपर्क साधू. कोणताही स्पॅम पाठवला जाणार नाही.",
    },
  },
};
