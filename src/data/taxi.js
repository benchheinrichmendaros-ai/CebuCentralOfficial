export const rideProviders = [
  {
    id: 'grab',
    name: 'Grab',
    type: 'App-based',
    coverage: 'Metro Cebu, Lapu-Lapu, Mandaue, Talisay',
    description: 'The dominant ride-hailing app in Cebu. Fixed fare shown before you book, cashless payment, and a trip receipt. Best for tourists and anyone who wants a predictable price.',
    pros: ['Fixed price — no meter haggling', 'Cashless via GrabPay or card', 'Driver details and tracking', 'Available 24/7 in Metro Cebu'],
    cons: ['Surge pricing during rush hours and rain', 'Pickup may take 5–10 min in busy areas'],
    bookingUrl: 'https://www.grab.com/ph/',
    appStore: 'https://apps.apple.com/ph/app/grab/id647268330',
    playStore: 'https://play.google.com/store/apps/details?id=com.grabtaxi.passenger',
    tip: 'Set your pickup pin carefully — the map can drift. Confirm the driver before getting in.',
  },
  {
    id: 'micab',
    name: 'Micab',
    type: 'App-based (Local)',
    coverage: 'Cebu City and Metro Cebu',
    description: 'Cebu\'s own local ride-hailing app. Connects passengers with metered taxis rather than private vehicles. Good alternative when Grab is unavailable or surging.',
    pros: ['Uses licensed metered taxis', 'Often available when Grab is busy', 'Supports local Cebu drivers'],
    cons: ['Smaller driver pool than Grab', 'Cash payment mainly'],
    bookingUrl: 'https://www.micab.ph',
    appStore: 'https://apps.apple.com/ph/app/micab/id984017820',
    playStore: 'https://play.google.com/store/apps/details?id=ph.micab.passenger',
    tip: 'Good backup app to have installed alongside Grab.',
  },
];

export const yellowTaxiTips = [
  'Always insist the driver use the meter — refuse if they won\'t',
  'Flag down yellow taxis at the roadside or outside malls and hotels',
  'Flag-down rate is approximately ₱40, then ₱13.50 per 300m',
  'Avoid taxis soliciting passengers near airports or ports — use Grab instead',
  'Keep small bills ready — many drivers claim they have no change',
];
