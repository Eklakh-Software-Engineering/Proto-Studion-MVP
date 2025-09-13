// DTE Rajasthan Official Portal - Advanced Multilingual AI Chatbot
// Government of Rajasthan - Directorate of Technical Education
// Comprehensive JavaScript Implementation with Real Data Integration

'use strict';

// ==================== OFFICIAL DTE RAJASTHAN DATA ====================
const DTE_RAJASTHAN_DATA = {
  institutionInfo: {
    name: "Directorate of Technical Education",
    shortName: "DTE Rajasthan",
    organization: "Government of Rajasthan",
    established: "1975",
    type: "State Technical Education Board",
    location: "Rajasthan, India",
    officialWebsite: "dte.rajasthan.gov.in",
    portalWebsite: "techedu.rajasthan.gov.in",
    mission: "To provide quality technical education and skill development across Rajasthan state through polytechnic institutions"
  },

  statistics: {
    totalColleges: "184+",
    governmentColleges: "98",
    privateColleges: "86+",
    courseTypes: "Engineering and Non-Engineering Diplomas",
    totalStudents: "85,000+",
    establishedYear: "1975",
    affiliatedInstitutions: "All technical institutions in Rajasthan"
  },

  feeStructure2025: {
    governmentPolytechnic: {
      firstYearFee: "₹11,500 - ₹12,500",
      subsequentYearsFee: "₹8,500 - ₹9,500",
      courseType: "3-year Diploma in Engineering/Non-Engineering",
      duration: "3 years (6 semesters)",
      additionalCosts: {
        hostelFee: "₹1,800 per year",
        cautionMoney: "₹2,000 (refundable)",
        messFee: "₹1,000 per month",
        libraryFee: "₹500 per year",
        labFee: "₹1,200 per year"
      }
    },
    privatePolytechnic: {
      totalFee: "₹66,000",
      yearlyFee: "₹22,000 per year",
      duration: "3 years",
      paymentStructure: "Annual or semester-wise payments accepted",
      additionalCosts: "Varies by institution (₹5,000-15,000 additional)"
    }
  },

  academicCalendar2025: {
    admissionDates: {
      applicationStart: "May 15, 2025",
      applicationEnd: "June 30, 2025",
      documentVerification: "July 1-15, 2025",
      meritListRelease: "July 20, 2025",
      counselingStart: "July 25, 2025",
      classesCommence: "August 15, 2025"
    },
    examSchedule: {
      firstClassTest: "October 30, 2025",
      sportsActivities: "November 6-8, 2025",
      secondClassTest: "December 11, 2025",
      classesEnd: "December 13, 2025",
      theoryExams: {
        engineering: "April 2026",
        nonEngineering: "March 2026"
      },
      practicalExams: "Before Theory Exams",
      resultDeclaration: "Within 6-8 weeks of exams"
    }
  },

  scholarshipSchemes: {
    cmHigherEducation: {
      name: "Chief Minister Higher Education Scholarship",
      amount: "₹5,000 per annum",
      eligibility: "60% marks in 12th, Family income < ₹2.5 lakh",
      provider: "Department of College Education, Rajasthan",
      applicationPortal: "sso.rajasthan.gov.in",
      documentsRequired: ["12th Mark Sheet", "Income Certificate", "Caste Certificate", "Aadhaar Card"]
    },
    postMatric: {
      name: "Post-Matric Scholarship",
      amount: "₹15,000 per month for 3 years",
      eligibility: "SC/ST/OBC students, Family income criteria applies",
      provider: "Social Justice & Empowerment Department",
      applicationPortal: "sje.rajasthan.gov.in",
      totalAmount: "₹5,40,000 over 3 years"
    },
    swamiVivekananda: {
      name: "Swami Vivekananda Single Girl Child Scholarship",
      amount: "Up to ₹50 lakh per annum",
      eligibility: "Single girl child, admission to top 150 global/50 Indian institutions",
      categories: {
        E1: "Family income < ₹8 lakh",
        E2: "Family income ₹8-25 lakh", 
        E3: "Family income > ₹25 lakh"
      },
      totalSeats: "200 per year"
    },
    minority: {
      name: "Minority Scholarship",
      amount: "₹12,000 per annum",
      eligibility: "Muslim, Christian, Sikh, Buddhist, Parsi, Jain communities",
      incomeLimit: "₹2 lakh per annum"
    }
  },

  coursesOffered: {
    engineering: [
      "Civil Engineering", "Mechanical Engineering", "Electrical Engineering",
      "Electronics & Communication", "Computer Science & Engineering",
      "Information Technology", "Automobile Engineering", "Chemical Engineering",
      "Mining Engineering", "Textile Technology", "Agriculture Engineering"
    ],
    nonEngineering: [
      "Architecture Assistantship", "Interior Design", "Fashion Design",
      "Hotel Management & Catering Technology", "Pharmacy", "Medical Laboratory Technology",
      "Radiology & Imaging Technology", "Library & Information Science"
    ]
  },

  contactInformation: {
    dteMainOffice: {
      address: "W-6, Gaurav Path, Residency Road, Jodhpur (Rajasthan) - 342032",
      phone: "+91-291-2434395",
      fax: "+91-291-2430398", 
      email: "dte-raj@rajasthan.gov.in",
      workingHours: "10:00 AM - 5:00 PM (Monday-Friday)"
    },
    studentHelpdesk: {
      phone: "+91-141-2711964",
      email: "help.dte@rajasthan.gov.in", 
      whatsapp: "+91-9829311964",
      workingHours: "9:00 AM - 6:00 PM (Monday-Saturday)"
    },
    admissionHelpline: {
      phone: "+91-141-2700233",
      email: "admission.dte@rajasthan.gov.in",
      tollFree: "1800-180-6127"
    },
    emergencyContact: {
      phone: "+91-141-5111000",
      stateCallCenter: "181",
      complaintPortal: "sampark.rajasthan.gov.in"
    }
  }
};

// ==================== ADVANCED LANGUAGE SYSTEM ====================
const LANGUAGE_SYSTEM = {
  hi: {
    name: "Hindi",
    nativeName: "हिंदी",
    flag: "🇮🇳",
    code: "hi",
    direction: "ltr",
    welcomeMessage: "राजस्थान तकनीकी शिक्षा निदेशालय के उन्नत बहुभाषी AI असिस्टेंट में आपका हार्दिक स्वागत है! मैं आपकी तकनीकी शिक्षा संबंधी सभी जिज्ञासाओं का विस्तृत उत्तर दे सकता हूं।",
    quickActions: ["फीस संरचना", "छात्रवृत्ति योजनाएं", "प्रवेश प्रक्रिया", "परीक्षा कैलेंडर", "संपर्क जानकारी", "कॉलेज सूची"],
    typingText: "DTE AI असिस्टेंट आपके प्रश्न का उत्तर तैयार कर रहा है...",
    assistantStatus: "ऑनलाइन • आपकी सेवा में तत्पर",
    assistantName: "DTE राजस्थान AI असिस्टेंट",
    inputPlaceholder: "फीस, छात्रवृत्ति, प्रवेश, परीक्षा, कोर्स के बारे में पूछें...",
    voiceSupport: true,
    suggestions: ["फीस कितनी है?", "छात्रवृत्ति के लिए कैसे आवेदन करें?", "प्रवेश की अंतिम तारीख क्या है?"]
  },
  
  en: {
    name: "English", 
    nativeName: "English",
    flag: "🇺🇸",
    code: "en",
    direction: "ltr",
    welcomeMessage: "Welcome to the advanced multilingual AI assistant of Rajasthan Directorate of Technical Education! I can provide comprehensive information about technical education, admissions, fees, scholarships, and much more.",
    quickActions: ["Fee Structure", "Scholarship Schemes", "Admission Process", "Exam Calendar", "Contact Information", "College List"],
    typingText: "DTE AI Assistant is preparing your response...",
    assistantStatus: "Online • Ready to help you",
    assistantName: "DTE Rajasthan AI Assistant",
    inputPlaceholder: "Ask about fees, scholarships, admissions, exams, courses...",
    voiceSupport: true,
    suggestions: ["What are the fees?", "How to apply for scholarships?", "What is admission deadline?"]
  },

  raj: {
    name: "Rajasthani",
    nativeName: "राजस्थानी", 
    flag: "🏛️",
    code: "raj",
    direction: "ltr",
    welcomeMessage: "राजस्थान तकनीकी शिक्षा निदेशालय के बहुभाषी सहायक में आपका स्वागत है! म्हारै पास सगळी जानकारी है राजस्थानी भाषा में।",
    quickActions: ["फीस री जानकारी", "छात्रवृत्ति", "दाखिला प्रक्रिया", "परीक्षा री तारीख", "संपर्क", "कॉलेज री सूची"],
    typingText: "सहायक आपको जवाब दे रह्यो है...",
    assistantStatus: "ऑनलाइन • मदद खातर तैयार",
    assistantName: "DTE राजस्थान बहुभाषी सहायक",
    inputPlaceholder: "फीस, छात्रवृत्ति, दाखिला के बारे में पूछो...",
    voiceSupport: true,
    suggestions: ["फीस कितनी लागे?", "छात्रवृत्ति कैसे मिले?", "दाखिला कब से है?"]
  },

  pa: {
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    flag: "🇮🇳",
    code: "pa", 
    direction: "ltr",
    welcomeMessage: "ਰਾਜਸਥਾਨ ਤਕਨੀਕੀ ਸਿੱਖਿਆ ਨਿਰਦੇਸ਼ਾਲੇ ਦੇ ਬਹੁ-ਭਾਸ਼ਾਈ AI ਸਹਾਇਕ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਮੈਂ ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਤਕਨੀਕੀ ਸਿੱਖਿਆ ਸਬੰਧੀ ਜਿਗਿਆਸਾਵਾਂ ਦਾ ਉੱਤਰ ਦੇ ਸਕਦਾ ਹਾਂ।",
    quickActions: ["ਫੀਸ ਦੀ ਜਾਣਕਾਰੀ", "ਸਕਾਲਰਸ਼ਿਪ", "ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ", "ਪਰੀਖਿਆ ਕੈਲੰਡਰ", "ਸੰਪਰਕ", "ਕਾਲਜ ਸੂਚੀ"],
    typingText: "ਸਹਾਇਕ ਤੁਹਾਡੇ ਸਵਾਲ ਦਾ ਜਵਾਬ ਤਿਆਰ ਕਰ ਰਿਹਾ ਹੈ...",
    assistantStatus: "ਆਨਲਾਈਨ • ਮਦਦ ਲਈ ਤਿਆਰ",
    assistantName: "DTE ਰਾਜਸਥਾਨ AI ਸਹਾਇਕ",
    inputPlaceholder: "ਫੀਸ, ਸਕਾਲਰਸ਼ਿਪ, ਦਾਖਲੇ ਬਾਰੇ ਪੁੱਛੋ...",
    voiceSupport: true,
    suggestions: ["ਫੀਸ ਕਿੰਨੀ ਹੈ?", "ਸਕਾਲਰਸ਼ਿਪ ਕਿਵੇਂ ਮਿਲੇ?", "ਦਾਖਲਾ ਕਦੋਂ ਹੈ?"]
  },

  gu: {
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    flag: "🇮🇳", 
    code: "gu",
    direction: "ltr",
    welcomeMessage: "રાજસ્થાન તકનીકી શિક્ષણ નિર્દેશાલયના અદ્વિતીય બહુભાષી AI સહાયકમાં તમારું સ્વાગત છે! હું તમારી તકનીકી શિક્ષણ સંબંધિત તમામ જિજ્ઞાસાઓનો વિગતવાર જવાબ આપી શકું છું.",
    quickActions: ["ફીસની માહિતી", "શિષ્યવૃત્તિ", "પ્રવેશ પ્રક્રિયા", "પરીક્ષા કેલેન્ડર", "સંપર્ક", "કોલેજ યાદી"],
    typingText: "સહાયક તમારા પ્રશ્નનો જવાબ તૈયાર કરી રહ્યો છે...",
    assistantStatus: "ઓનલાઇન • સેવામાં હાજર", 
    assistantName: "DTE રાજસ્થાન AI સહાયક",
    inputPlaceholder: "ફીસ, શિષ્યવૃત્તિ, પ્રવેશ વિશે પૂછો...",
    voiceSupport: true,
    suggestions: ["ફીસ કેટલી છે?", "શિષ્યવૃત્તિ કેવી રીતે મેળવવી?", "પ્રવેશ ક્યારે છે?"]
  },

  ur: {
    name: "Urdu",
    nativeName: "اردو", 
    flag: "🇮🇳",
    code: "ur",
    direction: "rtl",
    welcomeMessage: "راجستھان تکنیکی تعلیم کے کثیر لسانی AI معاون میں آپ کا خیرمقدم! میں آپ کی تکنیکی تعلیم سے متعلق تمام سوالات کا تفصیلی جواب دے سکتا ہوں۔",
    quickActions: ["فیس کی معلومات", "اسکالرشپ", "داخلہ عمل", "امتحان کیلنڈر", "رابطہ", "کالج فہرست"],
    typingText: "معاون آپ کے سوال کا جواب تیار کر رہا ہے...",
    assistantStatus: "آن لائن • خدمت میں حاضر",
    assistantName: "DTE راجستھان AI معاون",
    inputPlaceholder: "فیس، اسکالرشپ، داخلہ کے بارے میں پوچھیں...",
    voiceSupport: true,
    suggestions: ["فیس کتنی ہے؟", "اسکالرشپ کیسے حاصل کریں؟", "داخلہ کب ہے؟"]
  }
};

// ==================== ADVANCED NLP & AI SYSTEM ====================
const INTENT_RECOGNITION_SYSTEM = {
  patterns: {
    fees: {
      keywords: ["fee", "fees", "cost", "payment", "tuition", "money", "charge", "फीस", "शुल्क", "कीमत", "भुगतान", "पैसा", "खर्च", "लागत", "फीस री", "ਫੀਸ", "ફીસ", "فیس"],
      phrases: ["कितनी फीस", "fees structure", "payment details", "cost of course", "tuition fees", "फीस कितनी है", "fee kitni hai"],
      confidence: 0.85
    },
    
    scholarships: {
      keywords: ["scholarship", "स्कॉलरशिप", "छात्रवृत्ति", "scholarship", "स्कॉलर", "वृत्ति", "financial aid", "मुख्यमंत्री", "swami", "vivekananda", "post matric", "minority", "ਸਕਾਲਰਸ਼ਿਪ", "શિષ્યવૃત્તિ", "اسکالرشپ"],
      phrases: ["scholarship schemes", "छात्रवृत्ति योजना", "financial assistance", "scholarship apply", "scholarship eligibility"],
      confidence: 0.9
    },

    admissions: {
      keywords: ["admission", "प्रवेश", "दाखिला", "eligibility", "पात्रता", "apply", "आवेदन", "entrance", "merit", "counseling", "seat", "ਦਾਖਲਾ", "પ્રવેશ", "داخلہ"],
      phrases: ["admission process", "how to apply", "eligibility criteria", "प्रवेश प्रक्रिया", "कैसे आवेदन करें", "admission dates"],
      confidence: 0.88
    },

    examSchedule: {
      keywords: ["exam", "test", "timetable", "calendar", "schedule", "date", "परीक्षा", "टेस्ट", "समय", "कैलेंडर", "तारीख", "theory", "practical", "result", "ਪਰੀਖਿਆ", "પરીક્ષા", "امتحان"],
      phrases: ["exam dates", "class test", "theory exam", "practical exam", "result date", "परीक्षा कब है"],
      confidence: 0.82
    },

    courses: {
      keywords: ["course", "कोर्स", "branch", "शाखा", "engineering", "diploma", "subjects", "विषय", "stream", "specialization", "ਕੋਰਸ", "કોર્સ", "کورس"],
      phrases: ["available courses", "engineering branches", "diploma courses", "course details", "subjects offered"],
      confidence: 0.8
    },

    contact: {
      keywords: ["contact", "phone", "email", "address", "संपर्क", "फोन", "ईमेल", "पता", "helpline", "office", "location", "ਸੰਪਰਕ", "સંપર્ક", "رابطہ"],
      phrases: ["contact details", "phone number", "office address", "helpline number", "संपर्क जानकारी"],
      confidence: 0.75
    },

    colleges: {
      keywords: ["college", "कॉलेज", "institute", "संस्थान", "polytechnic", "पॉलिटेक्निक", "government", "private", "list", "सूची", "ਕਾਲਜ", "કોલેજ", "کالج"],
      phrases: ["college list", "polytechnic colleges", "government colleges", "private colleges", "कॉलेज की सूची"],
      confidence: 0.78
    }
  },

  contextManagement: {
    maxHistory: 10,
    currentContext: [],
    userPreferences: {}
  },

  advancedAnalysis: {
    sentimentAnalysis: true,
    entityExtraction: true,
    multilanguageDetection: true,
    conversationFlow: true
  }
};

// ==================== COMPREHENSIVE RESPONSE TEMPLATES ====================
const RESPONSE_TEMPLATES = {
  fees: {
    hi: `💰 **राजस्थान DTE - विस्तृत फीस संरचना 2025:**

🏛️ **सरकारी पॉलिटेक्निक कॉलेज:**
• प्रथम वर्ष फीस: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.firstYearFee}
• बाकी वर्षों की फीस: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.subsequentYearsFee}
• कुल अवधि: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.duration}
• कोर्स प्रकार: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.courseType}

🏢 **प्राइवेट पॉलिटेक्निक कॉलेज:**
• कुल फीस: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.totalFee} (3 वर्ष)
• वार्षिक फीस: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.yearlyFee}
• भुगतान: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.paymentStructure}

🏠 **अतिरिक्त शुल्क (सरकारी कॉलेज):**
• हॉस्टल शुल्क: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.hostelFee}
• जमानत राशि: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.cautionMoney}
• मेस शुल्क: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.messFee}
• पुस्तकालय शुल्क: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.libraryFee}
• प्रयोगशाला शुल्क: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.labFee}

💡 **महत्वपूर्ण जानकारी:**
• फीस माफी योजना उपलब्ध (आर्थिक कमजोर वर्ग के लिए)
• EMI की सुविधा उपलब्ध
• छात्रवृत्ति प्राप्त करने पर फीस में छूट

📞 **फीस संबंधी पूछताछ:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
📧 **ईमेल:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
🌐 **ऑनलाइन पेमेंट:** techedu.rajasthan.gov.in`,

    en: `💰 **Rajasthan DTE - Detailed Fee Structure 2025:**

🏛️ **Government Polytechnic Colleges:**
• First Year Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.firstYearFee}
• Subsequent Years: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.subsequentYearsFee}
• Duration: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.duration}
• Course Type: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.courseType}

🏢 **Private Polytechnic Colleges:**
• Total Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.totalFee} (3 years)
• Annual Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.yearlyFee}
• Payment: ${DTE_RAJASTHAN_DATA.feeStructure2025.privatePolytechnic.paymentStructure}

🏠 **Additional Costs (Government Colleges):**
• Hostel Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.hostelFee}
• Caution Money: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.cautionMoney}
• Mess Charges: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.messFee}
• Library Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.libraryFee}
• Lab Fee: ${DTE_RAJASTHAN_DATA.feeStructure2025.governmentPolytechnic.additionalCosts.labFee}

💡 **Important Information:**
• Fee waiver schemes available for economically weaker sections
• EMI facilities available
• Scholarship recipients get fee concessions

📞 **Fee Queries:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
📧 **Email:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
🌐 **Online Payment:** techedu.rajasthan.gov.in`
  },

  scholarships: {
    hi: `🎓 **राजस्थान DTE - छात्रवृत्ति योजनाएं 2025:**

👑 **मुख्यमंत्री उच्च शिक्षा छात्रवृत्ति:**
• राशि: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.amount}
• पात्रता: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.eligibility}
• आवेदन पोर्टल: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.applicationPortal}
• आवश्यक दस्तावेज: 12वीं मार्कशीट, आय प्रमाण पत्र, जाति प्रमाण पत्र, आधार कार्ड

🏛️ **पोस्ट-मैट्रिक छात्रवृत्ति:**
• राशि: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.amount}
• कुल राशि: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.totalAmount}
• पात्रता: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.eligibility}
• आवेदन: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.applicationPortal}

🌟 **स्वामी विवेकानंद एकल बालिका छात्रवृत्ति:**
• राशि: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.amount}
• पात्रता: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.eligibility}
• कुल सीटें: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.totalSeats}
• श्रेणी E1: आय < 8 लाख | E2: आय 8-25 लाख | E3: आय > 25 लाख

🕌 **अल्पसंख्यक छात्रवृत्ति:**
• राशि: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.amount}
• पात्रता: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.eligibility}
• आय सीमा: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.incomeLimit}

📋 **आवेदन प्रक्रिया:**
1. SSO पोर्टल पर रजिस्ट्रेशन करें
2. आवश्यक दस्तावेज अपलोड करें
3. ऑनलाइन आवेदन जमा करें
4. वेरिफिकेशन का इंतजार करें

📞 **छात्रवृत्ति सहायता:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
💬 **WhatsApp:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}`,

    en: `🎓 **Rajasthan DTE - Scholarship Schemes 2025:**

👑 **Chief Minister Higher Education Scholarship:**
• Amount: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.amount}
• Eligibility: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.eligibility}
• Portal: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.cmHigherEducation.applicationPortal}
• Documents: 12th Marksheet, Income Certificate, Caste Certificate, Aadhaar Card

🏛️ **Post-Matric Scholarship:**
• Amount: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.amount}
• Total Amount: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.totalAmount}
• Eligibility: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.eligibility}
• Portal: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.postMatric.applicationPortal}

🌟 **Swami Vivekananda Single Girl Child Scholarship:**
• Amount: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.amount}
• Eligibility: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.eligibility}
• Total Seats: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.swamiVivekananda.totalSeats}
• Category E1: Income < ₹8L | E2: Income ₹8-25L | E3: Income > ₹25L

🕌 **Minority Scholarship:**
• Amount: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.amount}
• Eligibility: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.eligibility}
• Income Limit: ${DTE_RAJASTHAN_DATA.scholarshipSchemes.minority.incomeLimit}

📋 **Application Process:**
1. Register on SSO Portal
2. Upload required documents
3. Submit online application
4. Wait for verification

📞 **Scholarship Help:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
💬 **WhatsApp:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}`
  },

  admissions: {
    hi: `🎓 **राजस्थान DTE - प्रवेश प्रक्रिया 2025:**

📋 **पात्रता मानदंड:**
• शिक्षा: 10वीं पास न्यूनतम 35% अंकों के साथ
• आवश्यक विषय: गणित और विज्ञान अनिवार्य
• आयु: न्यूनतम 15 वर्ष (कोई अधिकतम सीमा नहीं)
• राष्ट्रीयता: भारतीय नागरिक

📅 **महत्वपूर्ण तिथियां:**
• आवेदन शुरू: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.applicationStart}
• आवेदन अंत: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.applicationEnd}
• दस्तावेज़ सत्यापन: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.documentVerification}
• मेधा सूची: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.meritListRelease}
• काउंसलिंग: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.counselingStart}
• कक्षाएं शुरू: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.classesCommence}

🏛️ **संस्थान जानकारी:**
• स्थापित: ${DTE_RAJASTHAN_DATA.institutionInfo.established}
• कुल कॉलेज: ${DTE_RAJASTHAN_DATA.statistics.totalColleges}
• सरकारी कॉलेज: ${DTE_RAJASTHAN_DATA.statistics.governmentColleges}
• प्राइवेट कॉलेज: ${DTE_RAJASTHAN_DATA.statistics.privateColleges}
• कुल छात्र: ${DTE_RAJASTHAN_DATA.statistics.totalStudents}

📚 **उपलब्ध कोर्स:**
**इंजीनियरिंग:** ${DTE_RAJASTHAN_DATA.coursesOffered.engineering.slice(0, 6).join(', ')} और अन्य
**नॉन-इंजीनियरिंग:** ${DTE_RAJASTHAN_DATA.coursesOffered.nonEngineering.slice(0, 4).join(', ')} और अन्य

🎯 **चयन प्रक्रिया:**
• मेरिट आधारित (10वीं के अंकों पर)
• कोई प्रवेश परीक्षा नहीं
• ऑनलाइन काउंसलिंग प्रक्रिया
• सीट आवंटन मेधा के आधार पर

📄 **आवश्यक दस्तावेज:**
• 10वीं की मार्कशीट
• जन्म प्रमाण पत्र
• जाति प्रमाण पत्र (यदि लागू हो)
• आय प्रमाण पत्र
• आधार कार्ड
• पासपोर्ट साइज़ फोटो

📞 **प्रवेश पूछताछ:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
📧 **ईमेल:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
☎️ **टोल फ्री:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.tollFree}`,

    en: `🎓 **Rajasthan DTE - Admission Process 2025:**

📋 **Eligibility Criteria:**
• Education: 10th pass with minimum 35% marks
• Required Subjects: Mathematics and Science compulsory
• Age: Minimum 15 years (no upper age limit)
• Nationality: Indian citizens

📅 **Important Dates:**
• Application Start: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.applicationStart}
• Application End: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.applicationEnd}
• Document Verification: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.documentVerification}
• Merit List: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.meritListRelease}
• Counseling: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.counselingStart}
• Classes Begin: ${DTE_RAJASTHAN_DATA.academicCalendar2025.admissionDates.classesCommence}

🏛️ **Institution Information:**
• Established: ${DTE_RAJASTHAN_DATA.institutionInfo.established}
• Total Colleges: ${DTE_RAJASTHAN_DATA.statistics.totalColleges}
• Government Colleges: ${DTE_RAJASTHAN_DATA.statistics.governmentColleges}
• Private Colleges: ${DTE_RAJASTHAN_DATA.statistics.privateColleges}
• Total Students: ${DTE_RAJASTHAN_DATA.statistics.totalStudents}

📚 **Available Courses:**
**Engineering:** ${DTE_RAJASTHAN_DATA.coursesOffered.engineering.slice(0, 6).join(', ')} and more
**Non-Engineering:** ${DTE_RAJASTHAN_DATA.coursesOffered.nonEngineering.slice(0, 4).join(', ')} and more

🎯 **Selection Process:**
• Merit-based (10th marks)
• No entrance examination
• Online counseling process
• Seat allotment based on merit

📄 **Required Documents:**
• 10th Mark Sheet
• Birth Certificate
• Caste Certificate (if applicable)
• Income Certificate
• Aadhaar Card
• Passport Size Photos

📞 **Admission Queries:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
📧 **Email:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
☎️ **Toll Free:** ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.tollFree}`
  },

  examSchedule: {
    hi: `📅 **राजस्थान DTE - शैक्षणिक कैलेंडर 2025-26:**

📝 **आंतरिक मूल्यांकन:**
• प्रथम क्लास टेस्ट: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.firstClassTest}
• खेलकूद गतिविधियां: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.sportsActivities}
• द्वितीय क्लास टेस्ट: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.secondClassTest}
• कक्षाएं समाप्त: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.classesEnd}

📋 **मुख्य परीक्षाएं:**
• इंजीनियरिंग सिद्धांत परीक्षा: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.theoryExams.engineering}
• नॉन-इंजीनियरिंग परीक्षा: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.theoryExams.nonEngineering}
• प्रैक्टिकल परीक्षा: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.practicalExams}

📊 **परिणाम घोषणा:**
• परीक्षा के बाद: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.resultDeclaration}
• ऑनलाइन उपलब्ध: ${DTE_RAJASTHAN_DATA.institutionInfo.portalWebsite}

🎯 **परीक्षा पैटर्न:**
• सिद्धांत: 70% अंक (बाहरी परीक्षा)
• प्रैक्टिकल: 30% अंक (आंतरिक मूल्यांकन)
• न्यूनतम उत्तीर्ण: 40% (प्रत्येक विषय में 35%)

📚 **अध्ययन सामग्री:**
• AICTE अनुमोदित पाठ्यक्रम
• प्रैक्टिकल आधारित शिक्षा
• उद्योग-अनुकूल कौशल विकास

🌐 **ऑनलाइन सेवाएं:**
• डिजिटल परीक्षा फॉर्म
• ऑनलाइन फीस भुगतान
• तत्काल परिणाम सेवा
• डिजिटल मार्कशीट डाउनलोड

📞 **परीक्षा संबंधी पूछताछ:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
📧 **ईमेल:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}`,

    en: `📅 **Rajasthan DTE - Academic Calendar 2025-26:**

📝 **Internal Assessments:**
• First Class Test: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.firstClassTest}
• Sports Activities: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.sportsActivities}
• Second Class Test: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.secondClassTest}
• Classes End: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.classesEnd}

📋 **Main Examinations:**
• Engineering Theory Exams: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.theoryExams.engineering}
• Non-Engineering Exams: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.theoryExams.nonEngineering}
• Practical Exams: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.practicalExams}

📊 **Results Declaration:**
• After Exams: ${DTE_RAJASTHAN_DATA.academicCalendar2025.examSchedule.resultDeclaration}
• Online Available: ${DTE_RAJASTHAN_DATA.institutionInfo.portalWebsite}

🎯 **Exam Pattern:**
• Theory: 70% marks (External examination)
• Practical: 30% marks (Internal assessment)
• Minimum Pass: 40% (35% in each subject)

📚 **Study Material:**
• AICTE approved curriculum
• Practical-based education
• Industry-aligned skill development

🌐 **Online Services:**
• Digital exam forms
• Online fee payment
• Instant result service
• Digital marksheet download

📞 **Exam Queries:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
📧 **Email:** ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}`
  },

  contact: {
    hi: `📞 **राजस्थान DTE - संपर्क जानकारी:**

🏛️ **मुख्य कार्यालय (जोधपुर):**
• पता: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.address}
• फोन: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.phone}
• फैक्स: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.fax}
• ईमेल: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.email}
• समय: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.workingHours}

📚 **छात्र सहायता केंद्र:**
• हेल्पलाइन: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
• ईमेल: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}
• WhatsApp: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}
• समय: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.workingHours}

🎓 **प्रवेश हेल्पलाइन:**
• फोन: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
• ईमेल: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
• टोल फ्री: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.tollFree}

🚨 **आपातकालीन सहायता:**
• 24x7 हेल्पलाइन: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.phone}
• राज्य कॉल सेंटर: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.stateCallCenter}
• शिकायत पोर्टल: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.complaintPortal}

🌐 **डिजिटल सेवाएं:**
• आधिकारिक वेबसाइट: ${DTE_RAJASTHAN_DATA.institutionInfo.officialWebsite}
• तकनीकी शिक्षा पोर्टल: ${DTE_RAJASTHAN_DATA.institutionInfo.portalWebsite}
• SSO पोर्टल: sso.rajasthan.gov.in
• मोबाइल ऐप: "राजस्थान DTE" (Google Play/App Store)

🕐 **विशेष सेवा समय:**
• प्रवेश काउंसलिंग: सुबह 9:00 - रात 8:00
• फीस जमा: सुबह 10:00 - शाम 4:00
• दस्तावेज़ सत्यापन: सुबह 10:30 - शाम 3:30
• ऑनलाइन सहायता: 24x7 उपलब्ध

📱 **सोशल मीडिया:**
• Facebook: DTE Rajasthan Official
• Twitter: @DTE_Rajasthan
• YouTube: DTE Rajasthan Channel
• Instagram: @dte_rajasthan_official`,

    en: `📞 **Rajasthan DTE - Contact Information:**

🏛️ **Main Office (Jodhpur):**
• Address: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.address}
• Phone: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.phone}
• Fax: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.fax}
• Email: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.email}
• Hours: ${DTE_RAJASTHAN_DATA.contactInformation.dteMainOffice.workingHours}

📚 **Student Support Center:**
• Helpline: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
• Email: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}
• WhatsApp: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}
• Hours: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.workingHours}

🎓 **Admission Helpline:**
• Phone: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.phone}
• Email: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.email}
• Toll Free: ${DTE_RAJASTHAN_DATA.contactInformation.admissionHelpline.tollFree}

🚨 **Emergency Support:**
• 24x7 Helpline: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.phone}
• State Call Center: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.stateCallCenter}
• Complaint Portal: ${DTE_RAJASTHAN_DATA.contactInformation.emergencyContact.complaintPortal}

🌐 **Digital Services:**
• Official Website: ${DTE_RAJASTHAN_DATA.institutionInfo.officialWebsite}
• Technical Education Portal: ${DTE_RAJASTHAN_DATA.institutionInfo.portalWebsite}
• SSO Portal: sso.rajasthan.gov.in
• Mobile App: "Rajasthan DTE" (Google Play/App Store)

🕐 **Special Service Hours:**
• Admission Counseling: 9:00 AM - 8:00 PM
• Fee Submission: 10:00 AM - 4:00 PM
• Document Verification: 10:30 AM - 3:30 PM
• Online Support: 24x7 Available

📱 **Social Media:**
• Facebook: DTE Rajasthan Official
• Twitter: @DTE_Rajasthan
• YouTube: DTE Rajasthan Channel
• Instagram: @dte_rajasthan_official`
  }
};

// ==================== APPLICATION STATE MANAGEMENT ====================
class DTEChatbotState {
  constructor() {
    this.currentLanguage = 'hi';
    this.conversationHistory = [];
    this.userContext = {};
    this.isVoiceMode = false;
    this.isTyping = false;
    this.userPreferences = {
      theme: 'auto',
      fontSize: 'medium',
      voiceSpeed: 1.0
    };
    this.analytics = {
      sessionStart: Date.now(),
      messagesExchanged: 0,
      topicsDiscussed: [],
      languageSwitches: 0
    };
  }

  updateLanguage(langCode) {
    if (LANGUAGE_SYSTEM[langCode]) {
      this.currentLanguage = langCode;
      this.analytics.languageSwitches++;
      this.logInteraction('language_change', { newLanguage: langCode });
    }
  }

  addToHistory(type, message, metadata = {}) {
    const entry = {
      type,
      message,
      timestamp: Date.now(),
      language: this.currentLanguage,
      metadata
    };
    
    this.conversationHistory.push(entry);
    
    // Keep only last 50 messages for performance
    if (this.conversationHistory.length > 50) {
      this.conversationHistory = this.conversationHistory.slice(-50);
    }
    
    this.analytics.messagesExchanged++;
  }

  logInteraction(event, data = {}) {
    const logEntry = {
      event,
      timestamp: Date.now(),
      data,
      session: this.analytics.sessionStart
    };
    
    // In production, send to analytics service
    console.log('Analytics:', logEntry);
  }

  getContextSuggestions() {
    const recentTopics = this.conversationHistory
      .slice(-5)
      .map(entry => entry.metadata?.intent)
      .filter(Boolean);
    
    const lang = LANGUAGE_SYSTEM[this.currentLanguage];
    
    // Smart suggestions based on conversation context
    if (recentTopics.includes('fees')) {
      return ['छात्रवृत्ति', 'scholarship', 'financial aid'];
    } else if (recentTopics.includes('admissions')) {
      return ['eligibility', 'पात्रता', 'documents'];
    }
    
    return lang.suggestions || [];
  }
}

// ==================== ADVANCED NLP ENGINE ====================
class DTENLPEngine {
  constructor() {
    this.stopWords = {
      hi: ['है', 'में', 'को', 'की', 'के', 'से', 'पर', 'और', 'या', 'तो', 'भी', 'ही'],
      en: ['the', 'is', 'at', 'which', 'on', 'and', 'or', 'but', 'in', 'with', 'to', 'for'],
      raj: ['है', 'मैं', 'रो', 'री', 'को', 'सै', 'नै'],
      pa: ['ਹੈ', 'ਵਿੱਚ', 'ਨੂੰ', 'ਦੇ', 'ਨਾਲ', 'ਤੇ'],
      gu: ['છે', 'માં', 'ને', 'ના', 'સાથે', 'અને'],
      ur: ['ہے', 'میں', 'کو', 'کا', 'سے', 'پر']
    };
  }

  detectLanguage(text) {
    const langPatterns = {
      hi: /[\u0900-\u097F]/,
      en: /^[a-zA-Z0-9\s\.,!?]+$/,
      raj: /[\u0900-\u097F].*?(रो|री|को|सै|नै)/,
      pa: /[\u0A00-\u0A7F]/,
      gu: /[\u0A80-\u0AFF]/,
      ur: /[\u0600-\u06FF]/
    };

    for (const [lang, pattern] of Object.entries(langPatterns)) {
      if (pattern.test(text)) {
        return lang;
      }
    }

    return 'en'; // Default to English
  }

  preprocessText(text, language = 'hi') {
    // Convert to lowercase and normalize
    let processed = text.toLowerCase().trim();
    
    // Remove extra spaces
    processed = processed.replace(/\s+/g, ' ');
    
    // Remove punctuation except important ones
    processed = processed.replace(/[^\w\s\u0900-\u097F\u0A00-\u0A7F\u0A80-\u0AFF\u0600-\u06FF?]/g, '');
    
    return processed;
  }

  extractEntities(text) {
    const entities = {
      numbers: [],
      dates: [],
      emails: [],
      phones: [],
      amounts: []
    };

    // Extract numbers
    const numbers = text.match(/\d+/g);
    if (numbers) entities.numbers = numbers;

    // Extract amounts
    const amounts = text.match(/₹\s*[\d,]+/g);
    if (amounts) entities.amounts = amounts;

    // Extract phone numbers
    const phones = text.match(/(\+91[-\s]?)?\d{10}/g);
    if (phones) entities.phones = phones;

    // Extract emails
    const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
    if (emails) entities.emails = emails;

    return entities;
  }

  analyzeIntent(text, language = 'hi') {
    const processed = this.preprocessText(text, language);
    const patterns = INTENT_RECOGNITION_SYSTEM.patterns;
    
    let bestMatch = { intent: 'general', confidence: 0, matches: [] };
    
    for (const [intent, config] of Object.entries(patterns)) {
      let score = 0;
      let matches = [];
      
      // Check keywords
      config.keywords.forEach(keyword => {
        if (processed.includes(keyword.toLowerCase())) {
          score += 2;
          matches.push(keyword);
        }
      });
      
      // Check phrases
      if (config.phrases) {
        config.phrases.forEach(phrase => {
          if (processed.includes(phrase.toLowerCase())) {
            score += 3;
            matches.push(phrase);
          }
        });
      }
      
      // Calculate confidence
      const confidence = Math.min(score / (config.keywords.length + (config.phrases?.length || 0)), 1);
      
      if (confidence > bestMatch.confidence) {
        bestMatch = { intent, confidence, matches };
      }
    }
    
    return bestMatch;
  }

  generateSuggestions(intent, language = 'hi') {
    const suggestions = {
      fees: {
        hi: ['सरकारी कॉलेज फीस', 'प्राइवेट कॉलेज फीस', 'अतिरिक्त शुल्क', 'EMI सुविधा'],
        en: ['Government college fees', 'Private college fees', 'Additional charges', 'EMI facility']
      },
      scholarships: {
        hi: ['CM छात्रवृत्ति', 'पोस्ट मैट्रिक', 'अल्पसंख्यक छात्रवृत्ति', 'आवेदन प्रक्रिया'],
        en: ['CM Scholarship', 'Post Matric', 'Minority Scholarship', 'Application process']
      },
      admissions: {
        hi: ['पात्रता', 'आवेदन तिथि', 'दस्तावेज', 'काउंसलिंग'],
        en: ['Eligibility', 'Application dates', 'Documents', 'Counseling']
      }
    };

    return suggestions[intent]?.[language] || [];
  }
}

// ==================== VOICE PROCESSING SYSTEM ====================
class DTEVoiceProcessor {
  constructor() {
    this.recognition = null;
    this.synthesis = window.speechSynthesis;
    this.isListening = false;
    this.voices = {};
    this.initVoices();
  }

  initVoices() {
    if (this.synthesis) {
      const loadVoices = () => {
        const voices = this.synthesis.getVoices();
        this.voices = {
          hi: voices.find(v => v.lang.startsWith('hi')) || voices.find(v => v.lang.startsWith('en')),
          en: voices.find(v => v.lang.startsWith('en')),
          raj: voices.find(v => v.lang.startsWith('hi')) || voices.find(v => v.lang.startsWith('en')),
          pa: voices.find(v => v.lang.startsWith('pa')) || voices.find(v => v.lang.startsWith('hi')),
          gu: voices.find(v => v.lang.startsWith('gu')) || voices.find(v => v.lang.startsWith('hi')),
          ur: voices.find(v => v.lang.startsWith('ur')) || voices.find(v => v.lang.startsWith('hi'))
        };
      };

      loadVoices();
      this.synthesis.addEventListener('voiceschanged', loadVoices);
    }
  }

  startListening(language = 'hi', callback) {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      callback({ error: 'Speech recognition not supported' });
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();

    const langMap = {
      hi: 'hi-IN',
      en: 'en-US',
      raj: 'hi-IN',
      pa: 'pa-IN',
      gu: 'gu-IN',
      ur: 'ur-PK'
    };

    this.recognition.lang = langMap[language] || 'hi-IN';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;

    this.recognition.onstart = () => {
      this.isListening = true;
      callback({ status: 'listening' });
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      
      callback({ 
        transcript, 
        confidence,
        alternatives: Array.from(event.results[0]).map(r => ({
          transcript: r.transcript,
          confidence: r.confidence
        }))
      });
    };

    this.recognition.onerror = (event) => {
      callback({ error: event.error });
    };

    this.recognition.onend = () => {
      this.isListening = false;
      callback({ status: 'ended' });
    };

    this.recognition.start();
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  speak(text, language = 'hi', options = {}) {
    if (!this.synthesis) return;

    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice based on language
    if (this.voices[language]) {
      utterance.voice = this.voices[language];
    }

    // Configure speech parameters
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    // Add event listeners
    utterance.onstart = () => options.onStart?.();
    utterance.onend = () => options.onEnd?.();
    utterance.onerror = (event) => options.onError?.(event);

    this.synthesis.speak(utterance);
  }

  stopSpeaking() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }
}

// ==================== MAIN APPLICATION CLASS ====================
class DTERajasthanChatbot {
  constructor() {
    this.state = new DTEChatbotState();
    this.nlp = new DTENLPEngine();
    this.voice = new DTEVoiceProcessor();
    
    this.elements = {};
    this.isInitialized = false;
    
    this.init();
  }

  init() {
    this.bindElements();
    this.attachEventListeners();
    this.setupAccessibility();
    this.loadUserPreferences();
    this.initializeUI();
    
    this.isInitialized = true;
    console.log('🏛️ DTE Rajasthan Multilingual AI Chatbot Initialized Successfully');
    console.log('📊 Features: 6 Languages, Voice Support, Real DTE Data Integration');
  }

  bindElements() {
    this.elements = {
      // Main website
      chatFloatingButton: document.getElementById('chatFloatingButton'),
      openChatbot: document.getElementById('openChatbot'),
      
      // Language modal
      languageModal: document.getElementById('languageModal'),
      closeLanguageModal: document.getElementById('closeLanguageModal'),
      languageOptions: document.querySelectorAll('.language-option'),
      
      // Chat interface
      chatInterface: document.getElementById('chatInterface'),
      chatWelcome: document.getElementById('chatWelcome'),
      chatMessages: document.getElementById('chatMessages'),
      chatInput: document.getElementById('chatInput'),
      sendButton: document.getElementById('sendButton'),
      
      // Chat controls
      voiceInput: document.getElementById('voiceInput'),
      attachButton: document.getElementById('attachButton'),
      typingIndicator: document.getElementById('typingIndicator'),
      
      // Header controls
      languageToggle: document.getElementById('languageToggle'),
      voiceToggle: document.getElementById('voiceToggle'),
      minimizeChat: document.getElementById('minimizeChat'),
      closeChat: document.getElementById('closeChat'),
      
      // Dynamic content
      assistantName: document.getElementById('assistantName'),
      assistantStatus: document.getElementById('assistantStatus'),
      welcomeTitle: document.getElementById('welcomeTitle'),
      welcomeMessage: document.getElementById('welcomeMessage'),
      quickActions: document.getElementById('quickActions'),
      inputSuggestions: document.getElementById('inputSuggestions'),
      typingText: document.getElementById('typingText'),
      
      // Accessibility
      fontIncrease: document.getElementById('fontIncrease'),
      fontDecrease: document.getElementById('fontDecrease'),
      highContrast: document.getElementById('highContrast')
    };
  }

  attachEventListeners() {
    // Floating button
    this.elements.chatFloatingButton?.addEventListener('click', () => this.openLanguageModal());
    this.elements.openChatbot?.addEventListener('click', () => this.openLanguageModal());
    
    // Language modal
    this.elements.closeLanguageModal?.addEventListener('click', () => this.closeLanguageModal());
    this.elements.languageModal?.addEventListener('click', (e) => {
      if (e.target === this.elements.languageModal) this.closeLanguageModal();
    });
    
    // Language options
    this.elements.languageOptions?.forEach(option => {
      option.addEventListener('click', (e) => {
        const langCode = e.currentTarget.dataset.lang;
        this.selectLanguage(langCode);
      });
    });
    
    // Chat input
    this.elements.chatInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    this.elements.chatInput?.addEventListener('input', (e) => {
      this.autoResizeTextarea(e.target);
      this.generateInputSuggestions(e.target.value);
    });
    
    // Send button
    this.elements.sendButton?.addEventListener('click', () => this.sendMessage());
    
    // Voice controls
    this.elements.voiceInput?.addEventListener('click', () => this.handleVoiceInput());
    this.elements.voiceToggle?.addEventListener('click', () => this.toggleVoiceMode());
    
    // Chat controls
    this.elements.languageToggle?.addEventListener('click', () => this.openLanguageModal());
    this.elements.minimizeChat?.addEventListener('click', () => this.minimizeChat());
    this.elements.closeChat?.addEventListener('click', () => this.closeChat());
    
    // File attachment (future enhancement)
    this.elements.attachButton?.addEventListener('click', () => this.handleFileAttachment());
    
    // Accessibility
    this.elements.fontIncrease?.addEventListener('click', () => this.adjustFontSize(1));
    this.elements.fontDecrease?.addEventListener('click', () => this.adjustFontSize(-1));
    this.elements.highContrast?.addEventListener('click', () => this.toggleHighContrast());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
  }

  setupAccessibility() {
    // Add ARIA labels dynamically
    this.elements.chatInput?.setAttribute('aria-label', 'चैट संदेश लिखें');
    this.elements.sendButton?.setAttribute('aria-label', 'संदेश भेजें');
    this.elements.voiceInput?.setAttribute('aria-label', 'आवाज़ से बोलें');
    
    // Focus management
    this.elements.chatInput?.setAttribute('tabindex', '0');
    this.elements.sendButton?.setAttribute('tabindex', '1');
  }

  loadUserPreferences() {
    const saved = localStorage.getItem('dte-chatbot-preferences');
    if (saved) {
      try {
        this.state.userPreferences = { ...this.state.userPreferences, ...JSON.parse(saved) };
      } catch (e) {
        console.warn('Could not load user preferences:', e);
      }
    }
  }

  saveUserPreferences() {
    try {
      localStorage.setItem('dte-chatbot-preferences', JSON.stringify(this.state.userPreferences));
    } catch (e) {
      console.warn('Could not save user preferences:', e);
    }
  }

  initializeUI() {
    this.updateLanguageUI('hi'); // Default to Hindi
    this.updateQuickActions();
  }

  // ==================== LANGUAGE MANAGEMENT ====================
  
  openLanguageModal() {
    this.elements.languageModal?.classList.remove('hidden');
    this.state.logInteraction('language_modal_opened');
  }

  closeLanguageModal() {
    this.elements.languageModal?.classList.add('hidden');
  }

  selectLanguage(langCode) {
    if (!LANGUAGE_SYSTEM[langCode]) return;
    
    this.state.updateLanguage(langCode);
    this.updateLanguageUI(langCode);
    this.closeLanguageModal();
    this.openChatInterface();
    
    // Add welcome message
    setTimeout(() => {
      const lang = LANGUAGE_SYSTEM[langCode];
      this.addMessage('bot', lang.welcomeMessage);
    }, 500);
  }

  updateLanguageUI(langCode) {
    const lang = LANGUAGE_SYSTEM[langCode];
    if (!lang) return;

    // Update UI elements
    const updates = {
      assistantName: lang.assistantName,
      assistantStatus: lang.assistantStatus,
      welcomeTitle: lang.assistantName,
      welcomeMessage: lang.welcomeMessage,
      typingText: lang.typingText
    };

    Object.entries(updates).forEach(([id, text]) => {
      const element = this.elements[id];
      if (element) element.textContent = text;
    });

    // Update input placeholder
    if (this.elements.chatInput) {
      this.elements.chatInput.placeholder = lang.inputPlaceholder;
      this.elements.chatInput.style.direction = lang.direction;
    }

    this.updateQuickActions();
  }

  updateQuickActions() {
    const lang = LANGUAGE_SYSTEM[this.state.currentLanguage];
    if (!lang || !this.elements.quickActions) return;

    this.elements.quickActions.innerHTML = '';
    
    lang.quickActions.forEach(action => {
      const button = document.createElement('button');
      button.className = 'quick-action';
      button.textContent = action;
      button.addEventListener('click', () => this.handleQuickAction(action));
      this.elements.quickActions.appendChild(button);
    });
  }

  handleQuickAction(action) {
    this.elements.chatInput.value = action;
    this.sendMessage();
  }

  // ==================== CHAT INTERFACE ====================
  
  openChatInterface() {
    this.elements.chatInterface?.classList.remove('hidden');
    this.elements.chatFloatingButton?.classList.add('hidden');
    
    // Focus chat input
    setTimeout(() => {
      this.elements.chatInput?.focus();
    }, 300);
    
    this.state.logInteraction('chat_opened');
  }

  closeChat() {
    this.elements.chatInterface?.classList.add('hidden');
    this.elements.chatFloatingButton?.classList.remove('hidden');
    this.state.logInteraction('chat_closed');
  }

  minimizeChat() {
    // For future enhancement - minimize to floating widget
    this.closeChat();
  }

  sendMessage() {
    const input = this.elements.chatInput;
    if (!input || this.state.isTyping) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    this.addMessage('user', message);
    input.value = '';
    this.autoResizeTextarea(input);

    // Hide welcome section
    if (this.elements.chatWelcome) {
      this.elements.chatWelcome.style.display = 'none';
    }

    // Process and respond
    this.processUserMessage(message);
  }

  addMessage(type, content, metadata = {}) {
    if (!this.elements.chatMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message chat-message--${type}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = type === 'user' ? 'आप' : 
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="8" font-weight="bold">राज</text></svg>';

    const content_div = document.createElement('div');
    content_div.className = 'message-content';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    
    // Format message with markdown-like syntax
    const formattedContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>')
      .replace(/•/g, '&bull;');
    
    bubble.innerHTML = formattedContent;

    const timestamp = document.createElement('div');
    timestamp.className = 'message-timestamp';
    timestamp.textContent = new Date().toLocaleTimeString('hi-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    content_div.appendChild(bubble);
    content_div.appendChild(timestamp);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content_div);

    this.elements.chatMessages.appendChild(messageDiv);
    
    // Add to history
    this.state.addToHistory(type, content, metadata);
    
    // Scroll to bottom
    this.scrollToBottom();

    // Voice output for bot messages
    if (type === 'bot' && this.state.isVoiceMode) {
      this.speakMessage(content);
    }
  }

  processUserMessage(message) {
    this.showTypingIndicator();

    // Detect language if different from current
    const detectedLang = this.nlp.detectLanguage(message);
    
    // Analyze intent
    const intentAnalysis = this.nlp.analyzeIntent(message, this.state.currentLanguage);
    
    // Generate response with realistic delay
    const delay = 1500 + Math.random() * 2000; // 1.5-3.5 seconds
    
    setTimeout(() => {
      this.hideTypingIndicator();
      
      const response = this.generateResponse(intentAnalysis, message);
      this.addMessage('bot', response, { 
        intent: intentAnalysis.intent, 
        confidence: intentAnalysis.confidence 
      });
      
      // Update suggestions
      this.updateContextualSuggestions(intentAnalysis.intent);
      
    }, delay);
  }

  generateResponse(intentAnalysis, userMessage) {
    const { intent, confidence } = intentAnalysis;
    const lang = this.state.currentLanguage;

    // High confidence - use template response
    if (confidence > 0.3 && RESPONSE_TEMPLATES[intent] && RESPONSE_TEMPLATES[intent][lang]) {
      return RESPONSE_TEMPLATES[intent][lang];
    }

    // Low confidence - ask for clarification
    if (confidence < 0.2) {
      return this.getFallbackResponse();
    }

    // Medium confidence - provide general information
    return this.getGeneralResponse(intent);
  }

  getFallbackResponse() {
    const responses = {
      hi: `मुझे खुशी होगी यदि आप अपना प्रश्न अधिक स्पष्ट रूप से पूछ सकें। मैं निम्नलिखित विषयों में आपकी सहायता कर सकता हूं:

🎯 **मुख्य सेवाएं:**
• फीस संरचना और भुगतान प्रक्रिया
• छात्रवृत्ति योजनाएं और आवेदन
• प्रवेश प्रक्रिया और पात्रता
• परीक्षा कैलेंडर और महत्वपूर्ण तिथियां
• कॉलेज जानकारी और संपर्क विवरण

📞 **तत्काल सहायता के लिए:**
• छात्र हेल्पडेस्क: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
• WhatsApp: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}
• ईमेल: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}

कृपया अपना प्रश्न फिर से पूछें या ऊपर दिए गए किसी भी विषय के बारे में जानकारी मांगें।`,

      en: `I'd be happy to help if you could ask your question more clearly. I can assist you with:

🎯 **Main Services:**
• Fee structure and payment process
• Scholarship schemes and applications  
• Admission process and eligibility
• Exam calendar and important dates
• College information and contact details

📞 **For Immediate Help:**
• Student Helpdesk: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.phone}
• WhatsApp: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.whatsapp}
• Email: ${DTE_RAJASTHAN_DATA.contactInformation.studentHelpdesk.email}

Please ask your question again or inquire about any of the topics mentioned above.`
    };

    return responses[this.state.currentLanguage] || responses.en;
  }

  getGeneralResponse(intent) {
    const generalResponses = {
      general: {
        hi: `नमस्ते! मैं राजस्थान तकनीकी शिक्षा निदेशालय का AI असिस्टेंट हूं। मैं आपकी निम्नलिखित सहायता कर सकता हूं:

📚 **शैक्षणिक जानकारी:**
• ${DTE_RAJASTHAN_DATA.statistics.totalColleges} पॉलिटेक्निक कॉलेजों की संपूर्ण जानकारी
• इंजीनियरिंग और नॉन-इंजीनियरिंग कोर्स विवरण
• ${DTE_RAJASTHAN_DATA.institutionInfo.established} से निरंतर सेवा प्रदान कर रहे हैं

🎓 **प्रमुख सेवाएं:**
• डिप्लोमा कोर्स में प्रवेश सहायता
• विभिन्न छात्रवृत्ति योजनाओं की जानकारी
• शैक्षणिक कैलेंडर और परीक्षा समय सारणी
• फीस संरचना और भुगतान विकल्प

आज आप राजस्थान DTE के बारे में क्या जानना चाहेंगे?`,

        en: `Hello! I'm the AI Assistant for Rajasthan Directorate of Technical Education. I can help you with:

📚 **Academic Information:**
• Complete information about ${DTE_RAJASTHAN_DATA.statistics.totalColleges} polytechnic colleges
• Engineering and Non-Engineering course details
• Serving continuously since ${DTE_RAJASTHAN_DATA.institutionInfo.established}

🎓 **Key Services:**
• Diploma course admission assistance
• Various scholarship scheme information
• Academic calendar and exam schedules
• Fee structure and payment options

What would you like to know about Rajasthan DTE today?`
      }
    };

    return generalResponses.general[this.state.currentLanguage] || generalResponses.general.en;
  }

  // ==================== UI HELPERS ====================

  showTypingIndicator() {
    this.elements.typingIndicator?.classList.remove('hidden');
    this.state.isTyping = true;
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.elements.typingIndicator?.classList.add('hidden');
    this.state.isTyping = false;
  }

  scrollToBottom() {
    if (this.elements.chatMessages) {
      setTimeout(() => {
        this.elements.chatMessages.scrollTop = this.elements.chatMessages.scrollHeight;
      }, 100);
    }
  }

  autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  }

  // ==================== VOICE PROCESSING ====================

  handleVoiceInput() {
    if (this.voice.isListening) {
      this.voice.stopListening();
      return;
    }

    this.voice.startListening(this.state.currentLanguage, (result) => {
      if (result.error) {
        this.showVoiceError(result.error);
      } else if (result.transcript) {
        this.elements.chatInput.value = result.transcript;
        this.sendMessage();
      } else if (result.status === 'listening') {
        this.showVoiceListening();
      }
    });
  }

  toggleVoiceMode() {
    this.state.isVoiceMode = !this.state.isVoiceMode;
    
    const button = this.elements.voiceToggle;
    if (button) {
      button.classList.toggle('active', this.state.isVoiceMode);
      button.title = this.state.isVoiceMode ? 'Disable Voice Mode' : 'Enable Voice Mode';
    }
    
    this.state.logInteraction('voice_mode_toggle', { enabled: this.state.isVoiceMode });
  }

  speakMessage(text) {
    // Clean text for speech
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/[•★]/g, '');
    
    this.voice.speak(cleanText, this.state.currentLanguage, {
      rate: this.state.userPreferences.voiceSpeed,
      onStart: () => this.state.logInteraction('voice_output_start'),
      onEnd: () => this.state.logInteraction('voice_output_end')
    });
  }

  showVoiceListening() {
    // Visual feedback for voice input
    const button = this.elements.voiceInput;
    if (button) {
      button.classList.add('listening');
      button.innerHTML = '🔴'; // Recording indicator
    }
  }

  showVoiceError(error) {
    console.warn('Voice input error:', error);
    
    const errorMessages = {
      'not-allowed': 'माइक्रोफोन की अनुमति नहीं मिली',
      'no-speech': 'कोई आवाज़ नहीं सुनाई दी',
      'network': 'नेटवर्क कनेक्शन में समस्या'
    };
    
    const message = errorMessages[error] || 'आवाज़ इनपुट में त्रुटि हुई';
    this.addMessage('bot', `⚠️ ${message}। कृपया टाइप करके पूछें।`);
  }

  // ==================== ADVANCED FEATURES ====================

  generateInputSuggestions(input) {
    if (!input || input.length < 2) {
      this.clearSuggestions();
      return;
    }

    const suggestions = this.state.getContextSuggestions();
    const filtered = suggestions.filter(s => 
      s.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 3);

    this.displaySuggestions(filtered);
  }

  displaySuggestions(suggestions) {
    if (!this.elements.inputSuggestions || suggestions.length === 0) {
      this.clearSuggestions();
      return;
    }

    this.elements.inputSuggestions.innerHTML = suggestions
      .map(suggestion => `<button class="suggestion-chip">${suggestion}</button>`)
      .join('');

    // Add click handlers
    this.elements.inputSuggestions.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this.elements.chatInput.value = chip.textContent;
        this.sendMessage();
      });
    });
  }

  clearSuggestions() {
    if (this.elements.inputSuggestions) {
      this.elements.inputSuggestions.innerHTML = '';
    }
  }

  updateContextualSuggestions(intent) {
    const suggestions = this.nlp.generateSuggestions(intent, this.state.currentLanguage);
    this.displaySuggestions(suggestions);
  }

  handleFileAttachment() {
    // Future enhancement for document processing
    this.addMessage('bot', 'फ़ाइल अपलोड सुविधा जल्द ही उपलब्ध होगी। कृपया अपना प्रश्न टाइप करें।');
  }

  // ==================== ACCESSIBILITY ====================

  adjustFontSize(delta) {
    const sizes = ['small', 'medium', 'large', 'x-large'];
    const currentIndex = sizes.indexOf(this.state.userPreferences.fontSize);
    const newIndex = Math.max(0, Math.min(sizes.length - 1, currentIndex + delta));
    
    this.state.userPreferences.fontSize = sizes[newIndex];
    document.documentElement.style.setProperty('--base-font-size', 
      `${14 + (newIndex * 2)}px`);
    
    this.saveUserPreferences();
  }

  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    this.state.userPreferences.highContrast = document.body.classList.contains('high-contrast');
    this.saveUserPreferences();
  }

  handleKeyboardShortcuts(event) {
    // Ctrl/Cmd + Enter to send message
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      this.sendMessage();
    }
    
    // Escape to close modals
    if (event.key === 'Escape') {
      if (!this.elements.languageModal?.classList.contains('hidden')) {
        this.closeLanguageModal();
      }
    }
    
    // Ctrl/Cmd + M to toggle voice mode
    if ((event.ctrlKey || event.metaKey) && event.key === 'm') {
      event.preventDefault();
      this.toggleVoiceMode();
    }
  }
}

// ==================== APPLICATION INITIALIZATION ====================

// Initialize the application when DOM is ready
function initializeDTEChatbot() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DTERajasthanChatbot());
  } else {
    new DTERajasthanChatbot();
  }
}

// Start the application
initializeDTEChatbot();

// Global error handling
window.addEventListener('error', (event) => {
  console.error('DTE Chatbot Error:', event.error);
});

// Performance monitoring
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`🚀 DTE Rajasthan Chatbot loaded in ${loadTime.toFixed(2)}ms`);
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DTERajasthanChatbot, DTE_RAJASTHAN_DATA, LANGUAGE_SYSTEM };
}