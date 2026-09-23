import '../src/index.css';

export const metadata = {
  title: 'Passionate Cooling & Heating LLC | 24/7 HVAC & Plumbing Las Vegas, NV',
  description: 'When Your A/C Don’t Sing, Give Passionate A Ring! 24/7 emergency AC repair, heating, tankless water heaters & ductwork across Clark County & Mesquite, NV. 45-min avg arrival. Lic. #0088935. Call (702) 858-1211.',
  keywords: [
    'Passionate Cooling and Heating',
    'HVAC Las Vegas',
    'AC Repair Las Vegas',
    '24/7 emergency AC',
    'Boulder Highway HVAC',
    'plumbing Las Vegas',
    'tankless water heater Las Vegas',
    'Mesquite HVAC',
    'Clark County AC contractor'
  ],
  openGraph: {
    title: 'Passionate Cooling & Heating | 24/7 Emergency HVAC & Plumbing',
    description: '5.0-Star Rated (200+ Google Reviews). When desert heat hits 115°F+, we dispatch in under 45 minutes with 100% upfront pricing. NV Lic. #0088935.',
    url: 'https://passionatehvaclv.com/',
    siteName: 'Passionate Cooling & Heating LLC',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-red-200 selection:text-slate-900 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
