import { ResearchArea } from '@/types';

export const researchAreas: ResearchArea[] = [
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced research in image processing, object detection, facial recognition, and visual understanding systems. Our team focuses on developing cutting-edge algorithms for real-world applications.',
    icon: 'Eye',
    technologies: [
      'Convolutional Neural Networks (CNN)',
      'Object Detection (YOLO, R-CNN)',
      'Image Segmentation',
      'Facial Recognition Systems',
      'Generative Adversarial Networks (GAN)',
      'OpenCV',
      'TensorFlow',
      'PyTorch'
    ],
    projects: [
      'Face Image Super-Resolution Using Inception Residual Network',
      'Soft Biometric Recognition on Pedestrian',
      'Night to Day Image Translation using DCGAN',
      'Human Face Generation using Contextual GAN',
      'Quality Image Enhancement from Low Resolution Camera'
    ]
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    description: 'Research in text analysis, sentiment analysis, language understanding, and text generation. We develop NLP solutions for Indonesian language and multilingual applications.',
    icon: 'MessageSquare',
    technologies: [
      'BERT and Transformer Models',
      'IndoBERT for Indonesian Language',
      'LSTM and RNN Networks',
      'Sentiment Analysis',
      'Text Classification',
      'Named Entity Recognition',
      'Machine Translation',
      'Hugging Face Transformers'
    ],
    projects: [
      'COVID-19 Vaccine Opinion Classification using BERT',
      'Indonesian Digital Wallet Sentiment Analysis',
      'Abusive Language Detection in Indonesian Comments',
      'Indonesian News Topic Classification',
      'British vs American English Text Classification',
      'Quranic Verses Multi-label Classification'
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Core machine learning research including supervised and unsupervised learning, deep learning architectures, and optimization techniques for various AI applications.',
    icon: 'Brain',
    technologies: [
      'Deep Neural Networks',
      'Support Vector Machines',
      'Random Forest',
      'Gradient Boosting',
      'Reinforcement Learning',
      'Ensemble Methods',
      'Feature Engineering',
      'Model Optimization'
    ],
    projects: [
      'LSTM-based Customer Feedback Classification',
      'Hierarchical SVM-kNN for Music Emotion Classification',
      'Multilayer Perceptron for News Classification',
      'Automatic Speaker Verification System',
      'Predictive Analytics for Business Intelligence'
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Research in data mining, statistical analysis, big data processing, and business intelligence. We focus on extracting insights from large datasets and developing data-driven solutions.',
    icon: 'BarChart3',
    technologies: [
      'Python Data Stack (Pandas, NumPy, Scikit-learn)',
      'R Programming',
      'Apache Spark',
      'Hadoop Ecosystem',
      'Data Visualization (Matplotlib, Seaborn, Plotly)',
      'Statistical Analysis',
      'Time Series Analysis',
      'A/B Testing'
    ],
    projects: [
      'Customer Behavior Analysis',
      'Market Trend Prediction',
      'Social Media Analytics',
      'Business Process Optimization',
      'Performance Metrics Dashboard Development'
    ]
  },
  {
    id: 'ai-applications',
    title: 'AI Applications & Systems',
    description: 'Development of practical AI applications and systems for real-world problems. We focus on deploying AI solutions in various domains including healthcare, education, and business.',
    icon: 'Cpu',
    technologies: [
      'MLOps and Model Deployment',
      'Cloud Computing (AWS, GCP, Azure)',
      'Docker and Kubernetes',
      'REST APIs and Microservices',
      'Edge Computing',
      'Mobile AI Applications',
      'Web-based AI Systems',
      'IoT Integration'
    ],
    projects: [
      'AI-powered Chatbot Systems',
      'Recommendation Systems',
      'Automated Content Generation',
      'Smart Campus Solutions',
      'Healthcare AI Applications',
      'Educational Technology Platforms'
    ]
  }
];

// Helper functions for research areas
export const getResearchAreaById = (id: string): ResearchArea | undefined => {
  return researchAreas.find(area => area.id === id);
};

export const getResearchAreasByTechnology = (technology: string): ResearchArea[] => {
  return researchAreas.filter(area => 
    area.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getAllTechnologies = (): string[] => {
  const allTechs = researchAreas.flatMap(area => area.technologies);
  return [...new Set(allTechs)].sort();
};

export const getFeaturedResearchAreas = (limit: number = 3): ResearchArea[] => {
  return researchAreas.slice(0, limit);
};