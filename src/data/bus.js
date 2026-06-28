export const busTerminals = {
  south: {
    name: 'South Bus Terminal',
    address: 'Natalio Bacalso Ave, Cebu City',
    mapsUrl: 'https://maps.google.com/?q=South+Bus+Terminal+Cebu+City',
    tip: 'Take a jeepney labeled "SRP" or "Tabunok" from downtown Cebu, or Grab.',
    routes: [
      { id: 's-moalboal',  destination: 'Moalboal',       duration: '~2.5 hrs', fare: '₱100–₱130', type: 'Air-con & Ordinary', note: 'Diving and beach destination.' },
      { id: 's-oslob',     destination: 'Oslob',          duration: '~3.5 hrs', fare: '₱150–₱180', type: 'Air-con & Ordinary', note: 'Whale shark watching site.' },
      { id: 's-badian',    destination: 'Badian',         duration: '~3 hrs',   fare: '₱140–₱160', type: 'Air-con & Ordinary', note: 'Kawasan Falls canyoneering.' },
      { id: 's-dalaguete', destination: 'Dalaguete',      duration: '~2.5 hrs', fare: '₱100–₱130', type: 'Air-con & Ordinary', note: 'Mountain vegetables and scenic views.' },
      { id: 's-barili',    destination: 'Barili',         duration: '~2 hrs',   fare: '₱90–₱110',  type: 'Air-con & Ordinary', note: 'Mountain town, Mantayupan Falls nearby.' },
      { id: 's-alcoy',     destination: 'Alcoy',          duration: '~3 hrs',   fare: '₱130–₱150', type: 'Ordinary',           note: 'Southernmost town of Cebu.' },
      { id: 's-santander', destination: 'Santander (Lilo-an)', duration: '~3.5 hrs', fare: '₱160–₱200', type: 'Air-con & Ordinary', note: 'Ferry port to Sibulan, Negros Oriental.' },
    ],
  },
  north: {
    name: 'North Bus Terminal',
    address: 'A.S. Fortuna St, Mandaue City',
    mapsUrl: 'https://maps.google.com/?q=North+Bus+Terminal+Mandaue+Cebu',
    tip: 'Take a jeepney labeled "Ayala-SM North" or Grab to Mandaue.',
    routes: [
      { id: 'n-danao',    destination: 'Danao City',        duration: '~1.5 hrs', fare: '₱60–₱80',   type: 'Air-con & Ordinary', note: 'Port for Camiguin-bound passengers via Bohol.' },
      { id: 'n-carmen',   destination: 'Carmen',            duration: '~1.5 hrs', fare: '₱65–₱85',   type: 'Air-con & Ordinary', note: 'Near Chocolate Hills view. Ferry to Bohol here.' },
      { id: 'n-sogod',    destination: 'Sogod',             duration: '~2 hrs',   fare: '₱90–₱110',  type: 'Ordinary',           note: 'Access to Malapascua Island via Bogo then Maya.' },
      { id: 'n-bogo',     destination: 'Bogo City',         duration: '~2 hrs',   fare: '₱90–₱110',  type: 'Air-con & Ordinary', note: 'Northern Cebu city.' },
      { id: 'n-maya',     destination: 'Maya (Daanbantayan)', duration: '~3.5 hrs', fare: '₱140–₱160', type: 'Air-con & Ordinary', note: 'Jump-off point for Malapascua Island.' },
      { id: 'n-hagnaya',  destination: 'Hagnaya (San Remigio)', duration: '~3 hrs', fare: '₱130–₱150', type: 'Air-con & Ordinary', note: 'Ferry to Santa Fe, Bantayan Island.' },
      { id: 'n-medellin', destination: 'Medellin',          duration: '~2.5 hrs', fare: '₱110–₱130', type: 'Ordinary',           note: 'North Cebu municipality.' },
    ],
  },
};

export const busTips = [
  'Air-conditioned buses cost slightly more but are more comfortable for longer routes',
  'First trips usually start at 4–5 AM, last trips around 7–8 PM — confirm at the terminal',
  'Keep your ticket — inspectors check it during the trip',
  'For Oslob and Moalboal, book a morning bus to arrive early and beat the crowds',
  'Buses leave when full, not on a fixed schedule for most ordinary buses',
];
