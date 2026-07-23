// Constant data for products, services, brands, etc.

export const COMPANY_INFO = {
  name: 'Plantation Services',
  tagline: 'Your Trusted Agricultural Partner Since Years',
  rating: 4.4,
  address: '2, KHB Complex, Barlane, Joythinagar, Chikkamagaluru, Karnataka 577101',
  phone: '08262 236257',
  whatsapp: '918262236257',
  email: 'contact@plantationservices.ai',
  googleMapUrl: 'https://maps.google.com/maps?q=2+KHB+Complex,+Barlane,+Joythinagar,+Chikkamagaluru',
  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/plantationservices',
    instagram: 'https://instagram.com/plantationservices',
    whatsapp: 'https://wa.me/918262236257',
  },
}

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    name: 'Fertilizers',
    icon: '🌾',
    subcategories: [
      { id: 1.1, name: 'NPK', description: 'Balanced nutrients for plant growth' },
      { id: 1.2, name: 'Urea', description: 'Nitrogen-rich fertilizer' },
      { id: 1.3, name: 'DAP', description: 'Di-ammonium phosphate' },
      { id: 1.4, name: 'Potash', description: 'Potassium enriched' },
    ],
  },
  {
    id: 2,
    name: 'Organic Fertilizers',
    icon: '🍃',
    subcategories: [
      { id: 2.1, name: 'Compost', description: 'Organic matter enriched soil' },
      { id: 2.2, name: 'Vermicompost', description: 'Worm-processed organic fertilizer' },
      { id: 2.3, name: 'Biochar', description: 'Carbon-rich soil amendment' },
    ],
  },
  {
    id: 3,
    name: 'Micronutrients',
    icon: '⚗️',
    subcategories: [
      { id: 3.1, name: 'Zinc', description: 'Essential plant nutrient' },
      { id: 3.2, name: 'Magnesium', description: 'Chlorophyll production' },
      { id: 3.3, name: 'Iron', description: 'Plant metabolism support' },
    ],
  },
  {
    id: 4,
    name: 'Crop Protection',
    icon: '🛡️',
    subcategories: [
      { id: 4.1, name: 'Fungicides', description: 'Fungal disease control' },
      { id: 4.2, name: 'Insecticides', description: 'Pest management' },
      { id: 4.3, name: 'Herbicides', description: 'Weed control' },
    ],
  },
  {
    id: 5,
    name: 'Seeds',
    icon: '🌱',
    subcategories: [
      { id: 5.1, name: 'Vegetable Seeds', description: 'High-quality vegetable varieties' },
      { id: 5.2, name: 'Flower Seeds', description: 'Ornamental and flowering plants' },
      { id: 5.3, name: 'Plantation Seeds', description: 'Coffee, spice, plantation crops' },
    ],
  },
  {
    id: 6,
    name: 'Bio Fertilizers',
    icon: '🦠',
    subcategories: [
      { id: 6.1, name: 'Rhizobium', description: 'Nitrogen-fixing bacteria' },
      { id: 6.2, name: 'Azospirillum', description: 'Plant growth promotion' },
      { id: 6.3, name: 'PSB', description: 'Phosphate-solubilizing bacteria' },
    ],
  },
]

export const SERVICES = [
  {
    id: 1,
    title: 'Agricultural Consultancy',
    description: 'Expert guidance on crop selection, soil management, and farming techniques.',
    icon: '👨‍🌾',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Soil Nutrition Advice',
    description: 'Personalized soil analysis and nutrient recommendation programs.',
    icon: '🔬',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Crop Protection Guidance',
    description: 'Disease identification and prevention strategies for your crops.',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1562550503-6ff82e0ecbdf?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Coffee Plantation Support',
    description: 'Specialized support for coffee plantation management and quality improvement.',
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Arecanut Plantation Support',
    description: 'Expert assistance in arecanut cultivation and disease management.',
    icon: '🌴',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Pepper Farming Support',
    description: 'Complete guidance for pepper plantation from soil preparation to harvest.',
    icon: '🌶️',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    title: 'Organic Farming Consultation',
    description: 'Transition to organic farming with sustainable practices and certification support.',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Farm Visit Assistance',
    description: 'On-site farm inspection and personalized recommendations.',
    icon: '🚜',
    image: 'https://images.unsplash.com/photo-1500382017468-7049fae79e70?w=400&h=300&fit=crop',
  },
]

export const BRANDS = [
  {
    id: 1,
    name: 'IFFCO',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Leading fertilizer manufacturer in India',
  },
  {
    id: 2,
    name: 'Coromandel',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Premium crop nutrition solutions',
  },
  {
    id: 3,
    name: 'UPL',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Crop protection and life sciences',
  },
  {
    id: 4,
    name: 'Bayer',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Global leader in crop science',
  },
  {
    id: 5,
    name: 'Syngenta',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Seeds and agricultural chemicals',
  },
  {
    id: 6,
    name: 'Rallis India',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Agricultural and specialty chemicals',
  },
  {
    id: 7,
    name: 'PI Industries',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Crop protection and specialty chemicals',
  },
  {
    id: 8,
    name: 'Dhanuka',
    logo: 'https://images.unsplash.com/photo-1599505058277-f6418d72a3ff?w=200&h=100&fit=crop',
    description: 'Agrochemical solutions',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Coffee Plantation Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    message: 'Plantation Services has been instrumental in improving my coffee yield by 35%. Their expert guidance and quality products are unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Arecanut Farmer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    message: 'The soil nutrition advice from their team has transformed my plantation. Highly recommended for any serious farmer.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohan Singh',
    role: 'Pepper Farmer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    message: 'Best agricultural partner I could ask for. Their crop protection products really work!',
    rating: 4,
  },
]

export const FAQ = [
  {
    id: 1,
    question: 'What types of crops do you provide support for?',
    answer: 'We provide specialized support for coffee, pepper, arecanut, cardamom, tea, and other plantation crops, as well as vegetables and general farming.',
  },
  {
    id: 2,
    question: 'Do you offer farm visit consultations?',
    answer: 'Yes! We offer on-site farm visits for personalized recommendations. Contact us to schedule a visit.',
  },
  {
    id: 3,
    question: 'Are your products organic certified?',
    answer: 'We offer both conventional and organic certified products. Please inquire about specific organic options.',
  },
  {
    id: 4,
    question: 'How can I get soil analysis done?',
    answer: 'Visit our office with soil samples. Our team will conduct analysis and provide personalized nutrient recommendations.',
  },
  {
    id: 5,
    question: 'Do you provide seeds?',
    answer: 'Yes, we stock high-quality seeds for vegetables, flowers, and plantation crops from trusted brands.',
  },
  {
    id: 6,
    question: 'What is your delivery area?',
    answer: 'We deliver across Chikkamagaluru and surrounding regions. Contact us for specific delivery inquiries.',
  },
]

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Coffee Plantation',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'plantation',
  },
  {
    id: 2,
    title: 'Fertilizer Products',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop',
    category: 'products',
  },
  {
    id: 3,
    title: 'Farm Inspection',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    category: 'farm-visit',
  },
  {
    id: 4,
    title: 'Crop Field',
    image: 'https://images.unsplash.com/photo-1500382017468-7049fae79e70?w=400&h=300&fit=crop',
    category: 'crop-field',
  },
  {
    id: 5,
    title: 'Store Interior',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop',
    category: 'store',
  },
  {
    id: 6,
    title: 'Farmer Interaction',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
    category: 'farmer',
  },
  {
    id: 7,
    title: 'Agricultural Field',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop',
    category: 'crop-field',
  },
  {
    id: 8,
    title: 'Pepper Plantation',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop',
    category: 'plantation',
  },
]

export const AGRICULTURAL_TIPS = [
  {
    id: 1,
    title: 'Best Time to Apply Fertilizers',
    description: 'Learn the optimal timing for fertilizer application based on crop growth stages.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Soil pH Management',
    description: 'Understand how to maintain proper soil pH for maximum nutrient absorption.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Water Management in Plantations',
    description: 'Efficient irrigation techniques for coffee and spice plantations.',
    image: 'https://images.unsplash.com/photo-1500382017468-7049fae79e70?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Pest Management Strategies',
    description: 'Integrated pest management for sustainable and effective crop protection.',
    image: 'https://images.unsplash.com/photo-1562550503-6ff82e0ecbdf?w=400&h=300&fit=crop',
  },
]
