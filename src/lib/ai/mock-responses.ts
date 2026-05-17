import type { AIResponse } from '@/types';

export const mockChatResponses: Record<string, AIResponse> = {
  disease: {
    answer: 'Based on the symptoms you described, your crop may be affected by a fungal infection. The yellow spots on leaves with brown edges are common signs of early blight or leaf spot disease.',
    recommendedActions: [
      'Remove and destroy affected leaves immediately',
      'Improve air circulation between plants',
      'Avoid overhead watering; water at the base of plants',
      'Apply a recommended fungicide if symptoms persist',
      'Consult your local KVK for specific treatment recommendations',
    ],
    caution: 'This is a preliminary assessment based on described symptoms. For accurate diagnosis, please consult a local agriculture expert or visit your nearest KVK (Krishi Vigyan Kendra).',
    confidence: 'medium',
    sources: [
      {
        title: 'ICAR - Crop Disease Management Guidelines',
        url: 'https://icar.org.in',
        freshness: 'Updated 2024',
        type: 'research',
      },
      {
        title: 'State Department of Agriculture Advisory',
        type: 'government',
        freshness: 'Current season',
      },
    ],
    followUpQuestions: [
      'What crop are you growing?',
      'How long have you noticed these symptoms?',
      'What is the current weather in your area?',
    ],
    language: 'en',
  },
  weather: {
    answer: 'The weather forecast for your area shows moderate rainfall expected in the next 2-3 days. This is good for your standing crops but you should take some precautions.',
    recommendedActions: [
      'Ensure proper drainage in your fields',
      'Harvest any mature crops before heavy rain',
      'Apply preventive fungicide spray if crops are in flowering stage',
      'Store harvested produce in a dry place',
    ],
    caution: 'Weather forecasts can change. Check updates regularly and prepare for unexpected conditions.',
    confidence: 'high',
    sources: [
      {
        title: 'India Meteorological Department (IMD)',
        url: 'https://mausam.imd.gov.in',
        freshness: 'Today',
        type: 'government',
      },
    ],
    followUpQuestions: [
      'What crops are currently in your field?',
      'What growth stage are your crops at?',
    ],
    language: 'en',
  },
  mandi: {
    answer: 'Current mandi prices for your crop show moderate rates. Prices have been stable over the past week with a slight upward trend. The modal price at your nearest mandi is within the expected range.',
    recommendedActions: [
      'Compare prices across 2-3 nearby mandis before selling',
      'Check if MSP (Minimum Support Price) is available for your crop',
      'Consider timing your sale based on price trends',
      'Ensure your produce meets quality standards for better rates',
    ],
    caution: 'Mandi prices change daily. Always verify current prices before making selling decisions. This information is for reference only.',
    confidence: 'medium',
    sources: [
      {
        title: 'Agmarknet - Agricultural Marketing Information Network',
        url: 'https://agmarknet.gov.in',
        freshness: 'Today',
        type: 'government',
      },
    ],
    followUpQuestions: [
      'Which mandi do you usually sell at?',
      'What quantity do you plan to sell?',
    ],
    language: 'en',
  },
  scheme: {
    answer: 'There are several government schemes available for farmers in your state. Based on your profile, you may be eligible for PM-KISAN, PM Fasal Bima Yojana, and the Soil Health Card scheme.',
    recommendedActions: [
      'Visit your nearest CSC (Common Service Center) for application',
      'Keep your Aadhaar, land records, and bank passbook ready',
      'Check eligibility on the official scheme portal',
      'Ask about state-specific schemes at your district agriculture office',
    ],
    caution: 'Eligibility depends on specific criteria. This is general guidance. Please verify your eligibility with official sources before applying. KisanAI does not guarantee scheme approval.',
    confidence: 'medium',
    sources: [
      {
        title: 'PM-KISAN Official Portal',
        url: 'https://pmkisan.gov.in',
        freshness: 'Active scheme',
        type: 'government',
      },
      {
        title: 'Ministry of Agriculture & Farmers Welfare',
        url: 'https://agricoop.nic.in',
        type: 'government',
        freshness: 'Current',
      },
    ],
    followUpQuestions: [
      'What is your land holding size?',
      'Which state and district are you in?',
      'Do you have a Kisan Credit Card?',
    ],
    language: 'en',
  },
  general: {
    answer: 'I can help you with farming-related questions about crop diseases, weather advisories, mandi prices, and government schemes. Please share more details about what you need help with.',
    recommendedActions: [
      'Upload a photo if you see disease symptoms on your crops',
      'Ask about weather conditions for your area',
      'Check current mandi prices for your crop',
      'Learn about government schemes you may be eligible for',
    ],
    caution: 'KisanAI provides general agricultural guidance. For critical decisions, always consult your local agriculture expert or KVK.',
    confidence: 'high',
    sources: [],
    followUpQuestions: [
      'What crop are you growing?',
      'What is your current concern?',
      'Which district are you in?',
    ],
    language: 'en',
  },
};

export const mockDiseaseResult = {
  possibleIssue: 'Early Blight (Alternaria solani)',
  confidence: 'medium' as const,
  description:
    'Early blight is a common fungal disease that affects tomatoes, potatoes, and other crops. It appears as dark brown to black spots with concentric rings on older leaves first.',
  recommendedActions: [
    'Remove and destroy infected plant parts',
    'Ensure adequate spacing between plants for air circulation',
    'Apply copper-based fungicide as a preventive measure',
    'Rotate crops next season to prevent recurrence',
    'Avoid working in fields when plants are wet',
  ],
  caution:
    'This is an AI-assisted preliminary assessment. For confirmed diagnosis and treatment, please consult your local KVK or agriculture extension officer. Do not apply chemicals without expert guidance.',
  consultExpert: true,
  similarIssues: ['Late Blight', 'Leaf Spot', 'Septoria Leaf Spot'],
};

export const mockWeatherData = {
  location: 'Sample District',
  current: {
    temperature: 32,
    humidity: 65,
    description: 'Partly cloudy',
    windSpeed: 12,
    rainfall: 0,
  },
  forecast: [
    { date: 'Today', high: 34, low: 24, rainfall: 0, humidity: 60, description: 'Sunny' },
    { date: 'Tomorrow', high: 33, low: 25, rainfall: 15, humidity: 75, description: 'Light rain' },
    { date: 'Day 3', high: 30, low: 23, rainfall: 25, humidity: 80, description: 'Moderate rain' },
    { date: 'Day 4', high: 31, low: 24, rainfall: 5, humidity: 70, description: 'Cloudy' },
    { date: 'Day 5', high: 33, low: 25, rainfall: 0, humidity: 55, description: 'Clear' },
  ],
  farmingActions: [
    {
      action: 'Ensure proper drainage in fields before expected rain',
      reason: 'Heavy rainfall predicted in next 48 hours',
      urgency: 'high' as const,
    },
    {
      action: 'Apply preventive spray for fungal diseases',
      reason: 'High humidity increases disease risk',
      urgency: 'medium' as const,
    },
    {
      action: 'Delay any planned fertilizer application',
      reason: 'Rain may wash away nutrients',
      urgency: 'low' as const,
    },
  ],
  riskAlerts: [
    {
      type: 'rain' as const,
      severity: 'medium' as const,
      message: 'Moderate rainfall expected. Ensure drainage and protect harvested produce.',
      validUntil: 'Next 48 hours',
    },
  ],
  lastUpdated: new Date().toISOString(),
};

export const mockMandiPrices = [
  {
    commodity: 'Wheat',
    mandi: 'Central Mandi',
    district: 'Sample District',
    state: 'Punjab',
    minPrice: 2100,
    maxPrice: 2350,
    modalPrice: 2200,
    unit: '₹/quintal',
    date: new Date().toISOString().split('T')[0],
    trend: 'stable' as const,
  },
  {
    commodity: 'Rice (Paddy)',
    mandi: 'Grain Market',
    district: 'Sample District',
    state: 'Punjab',
    minPrice: 1900,
    maxPrice: 2200,
    modalPrice: 2050,
    unit: '₹/quintal',
    date: new Date().toISOString().split('T')[0],
    trend: 'up' as const,
  },
  {
    commodity: 'Mustard',
    mandi: 'Oilseed Mandi',
    district: 'Sample District',
    state: 'Rajasthan',
    minPrice: 5200,
    maxPrice: 5800,
    modalPrice: 5500,
    unit: '₹/quintal',
    date: new Date().toISOString().split('T')[0],
    trend: 'down' as const,
  },
  {
    commodity: 'Cotton',
    mandi: 'Cotton Market',
    district: 'Sample District',
    state: 'Gujarat',
    minPrice: 6200,
    maxPrice: 6800,
    modalPrice: 6500,
    unit: '₹/quintal',
    date: new Date().toISOString().split('T')[0],
    trend: 'up' as const,
  },
  {
    commodity: 'Onion',
    mandi: 'Vegetable Mandi',
    district: 'Sample District',
    state: 'Maharashtra',
    minPrice: 800,
    maxPrice: 1500,
    modalPrice: 1200,
    unit: '₹/quintal',
    date: new Date().toISOString().split('T')[0],
    trend: 'down' as const,
  },
];

export const mockSchemes = [
  {
    id: 'pm-kisan',
    name: 'PM-KISAN',
    nameHi: 'पीएम-किसान',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    description:
      'Under PM-KISAN, all landholding farmer families are provided income support of ₹6,000 per year in three equal installments of ₹2,000 each.',
    eligibility: [
      'Must be a landholding farmer family',
      'Must have valid Aadhaar card',
      'Must have a bank account',
      'Must be registered on PM-KISAN portal',
    ],
    benefits: '₹6,000 per year in 3 installments of ₹2,000 each',
    documentsRequired: ['Aadhaar Card', 'Land Records', 'Bank Passbook', 'Mobile Number'],
    howToApply:
      'Register online at pmkisan.gov.in or visit your nearest CSC (Common Service Center)',
    officialUrl: 'https://pmkisan.gov.in',
    category: 'subsidy' as const,
    lastUpdated: '2024',
  },
  {
    id: 'pmfby',
    name: 'PM Fasal Bima Yojana',
    nameHi: 'पीएम फसल बीमा योजना',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    description:
      'Crop insurance scheme that provides financial support to farmers suffering crop loss/damage due to unforeseen events like natural calamities, pests, and diseases.',
    eligibility: [
      'All farmers growing notified crops',
      'Must be enrolled through notified channels',
      'Loanee farmers are automatically enrolled',
    ],
    benefits: 'Insurance coverage against crop loss with low premium rates',
    documentsRequired: [
      'Aadhaar Card',
      'Land Records',
      'Bank Passbook',
      'Sowing Certificate',
    ],
    howToApply:
      'Apply through banks, CSCs, or insurance company portals during notified periods',
    officialUrl: 'https://pmfby.gov.in',
    category: 'insurance' as const,
    lastUpdated: '2024',
  },
  {
    id: 'soil-health',
    name: 'Soil Health Card Scheme',
    nameHi: 'मृदा स्वास्थ्य कार्ड योजना',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    description:
      'Provides soil health cards to farmers with crop-wise recommendations on nutrients and fertilizers to improve productivity.',
    eligibility: ['All farmers across India'],
    benefits: 'Free soil testing and nutrient recommendations for your farm',
    documentsRequired: ['Aadhaar Card', 'Land Records'],
    howToApply:
      'Visit your nearest soil testing laboratory or agriculture department office',
    officialUrl: 'https://soilhealth.dac.gov.in',
    category: 'subsidy' as const,
    lastUpdated: '2024',
  },
  {
    id: 'kcc',
    name: 'Kisan Credit Card',
    nameHi: 'किसान क्रेडिट कार्ड',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    description:
      'Provides affordable credit to farmers for their agricultural needs including crop production, post-harvest expenses, and maintenance.',
    eligibility: [
      'All farmers, fishers, and animal husbandry farmers',
      'Must have valid land documents',
      'Must be 18 years or older',
    ],
    benefits: 'Crop loan at 4% interest rate with timely repayment incentive',
    documentsRequired: [
      'Aadhaar Card',
      'Land Records',
      'Passport Size Photo',
      'Bank Account',
    ],
    howToApply: 'Apply at your nearest bank branch with required documents',
    officialUrl: 'https://www.india.gov.in/spotlight/kisan-credit-card-kcc',
    category: 'loan' as const,
    lastUpdated: '2024',
  },
];
