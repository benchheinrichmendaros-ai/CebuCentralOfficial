export const ferryRoutes = [
  {
    id: 'bohol',
    destination: 'Bohol',
    port: 'Tagbilaran Port',
    category: 'Fast Craft',
    duration: '1.5 – 2 hrs',
    fareRange: '₱650 – ₱900',
    popular: true,
    operators: [
      { name: 'Oceanjet',    type: 'Fast craft', duration: '~1.5 hrs', fareFrom: '₱700', bookingUrl: 'https://www.oceanjet.net/booking' },
      { name: '2GO Travel',  type: 'Fast ferry', duration: '~2 hrs',   fareFrom: '₱650', bookingUrl: 'https://travel.2go.com.ph' },
      { name: 'Lite Ferries',type: 'Ferry',      duration: '~2 hrs',   fareFrom: '₱600', bookingUrl: 'https://www.liteferries.com' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 1, Cebu City Port',
        'Arrive at least 45 minutes before departure',
        'Book online in advance during holidays — seats sell out fast',
        'Pay terminal fee (~₱30) at the pier entrance',
        'Take a Grab or taxi from downtown Cebu (15–20 min)',
      ],
      toCebu: [
        'Departs from Tagbilaran Port, Bohol',
        'Arrives at Pier 1, Cebu City Port',
        'Book your return trip in advance during peak season',
        'Grab or jeepney available outside the port on arrival',
      ],
    },
    note: 'Most popular day trip from Cebu. Multiple trips daily.',
  },
  {
    id: 'ormoc',
    destination: 'Ormoc, Leyte',
    port: 'Ormoc Port',
    category: 'Fast Ferry',
    duration: '~4 hrs',
    fareRange: '₱550 – ₱800',
    popular: false,
    operators: [
      { name: 'FastCat',    type: 'RoPax ferry', duration: '~4 hrs', fareFrom: '₱550', bookingUrl: 'https://www.fastcat.com.ph' },
      { name: '2GO Travel', type: 'Ferry',        duration: '~4 hrs', fareFrom: '₱600', bookingUrl: 'https://travel.2go.com.ph' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 3, Cebu City Port',
        'Arrive at least 1 hour before departure',
        'FastCat is the most frequent operator on this route',
      ],
      toCebu: [
        'Departs from Ormoc Port, Leyte',
        'Multiple trips daily — check FastCat schedule',
        'Arrives at Pier 3, Cebu City Port',
      ],
    },
    note: 'Gateway to Eastern Visayas.',
  },
  {
    id: 'cdo',
    destination: 'Cagayan de Oro',
    port: 'Agora Port, CDO',
    category: 'Overnight Ferry',
    duration: '8 – 10 hrs',
    fareRange: '₱900 – ₱3,500',
    popular: false,
    operators: [
      { name: '2GO Travel',   type: 'Overnight ferry', duration: '~8 hrs',  fareFrom: '₱900',  bookingUrl: 'https://travel.2go.com.ph' },
      { name: 'Trans-Asia',   type: 'Overnight ferry', duration: '~10 hrs', fareFrom: '₱850',  bookingUrl: 'https://www.transasiashipping.com' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 4, Cebu City Port — mostly evening departures',
        'Book a cabin if overnight for a better rest',
        'Bring food — dining on board is available but limited',
        'Arrive 1–1.5 hours before departure',
      ],
      toCebu: [
        'Departs from Agora Port, Cagayan de Oro',
        'Evening departure arrives Cebu early morning',
        'Take a Grab or taxi from Pier 4 to your destination',
      ],
    },
    note: 'Gateway to Mindanao. Mostly overnight trips.',
  },
  {
    id: 'manila',
    destination: 'Manila',
    port: 'North Harbor, Manila',
    category: 'Long-haul Ferry',
    duration: '22 – 26 hrs',
    fareRange: '₱1,200 – ₱6,000',
    popular: false,
    operators: [
      { name: '2GO Travel', type: 'Passenger liner', duration: '~22 hrs', fareFrom: '₱1,200', bookingUrl: 'https://travel.2go.com.ph' },
      { name: 'Starlite',   type: 'Passenger ferry', duration: '~26 hrs', fareFrom: '₱1,100', bookingUrl: 'https://www.starliteferries.com' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 4, Cebu City Port',
        'Book economy bunk or cabin — suite for more comfort',
        'Meals sometimes included depending on class — verify when booking',
        'Flying is usually faster and often cheaper — compare first',
      ],
      toCebu: [
        'Departs from North Harbor, Manila (Pier 2 or 4)',
        'Arrives at Pier 4, Cebu City Port',
        'Check 2GO schedule — sailings are a few times per week',
      ],
    },
    note: 'Consider flying — often faster and similar cost.',
  },
  {
    id: 'davao',
    destination: 'Davao',
    port: 'Sasa Port, Davao',
    category: 'Overnight Ferry',
    duration: '30 – 34 hrs',
    fareRange: '₱1,500 – ₱5,000',
    popular: false,
    operators: [
      { name: '2GO Travel', type: 'Passenger liner', duration: '~30 hrs', fareFrom: '₱1,500', bookingUrl: 'https://travel.2go.com.ph' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 4, Cebu City Port',
        'Multi-day journey — book a cabin for comfort',
        'Flying from MCIA to Davao is significantly faster (1.5 hrs)',
      ],
      toCebu: [
        'Departs from Sasa Port, Davao City',
        'Arrives at Pier 4, Cebu City Port',
        'Check 2GO for schedules — limited trips per week',
      ],
    },
    note: 'Long journey — check if flying is more practical.',
  },
  {
    id: 'surigao',
    destination: 'Surigao',
    port: 'Surigao Port',
    category: 'Overnight Ferry',
    duration: '10 – 12 hrs',
    fareRange: '₱900 – ₱2,500',
    popular: false,
    operators: [
      { name: '2GO Travel', type: 'Overnight ferry', duration: '~10 hrs', fareFrom: '₱900', bookingUrl: 'https://travel.2go.com.ph' },
      { name: 'Trans-Asia', type: 'Overnight ferry', duration: '~12 hrs', fareFrom: '₱850', bookingUrl: 'https://www.transasiashipping.com' },
    ],
    tips: {
      fromCebu: [
        'Departs from Pier 4, Cebu City Port — evening trips',
        'Gateway to Siargao Island (1.5 hr van + ferry from Surigao)',
        'Arrive port 1 hour before departure',
      ],
      toCebu: [
        'Departs from Surigao Port',
        'Arrives early morning at Pier 4, Cebu City',
        'Take Grab or taxi to your hotel from the port',
      ],
    },
    note: 'Popular route for Siargao Island travelers.',
  },
];
