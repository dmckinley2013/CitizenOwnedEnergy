import { CheckCircleIcon, CurrencyDollarIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const residentialRates = [
  { item: 'Customer Charge', rate: '$11.97/month', description: 'Fixed monthly service charge' },
  { item: 'Base Energy (First 1,000 kWh)', rate: '$0.07825/kWh', description: 'Energy usage up to 1,000 kWh' },
  { item: 'Base Energy (Additional kWh)', rate: '$0.10093/kWh', description: 'Energy usage over 1,000 kWh' },
  { item: 'Power Cost Adjustment (First 1,000 kWh)', rate: '$0.03179/kWh', description: 'Variable fuel cost adjustment' },
  { item: 'Power Cost Adjustment (Additional kWh)', rate: '$0.04179/kWh', description: 'Variable fuel cost adjustment' },
  { item: 'Storm Fund Surcharge', rate: '$5.00/month', description: 'Storm recovery fund (effective Dec 1, 2024)' },
]

const totalRates = [
  { tier: 'First 1,000 kWh', rate: '$0.11004/kWh', highlight: true },
  { tier: 'Additional kWh', rate: '$0.14272/kWh', highlight: true },
  { tier: 'Minimum Bill', rate: '$40.00/month', highlight: false },
]

const commercialRates = [
  { item: 'Customer Charge', rate: '$19.28/month' },
  { item: 'Base Energy Charge', rate: '$0.09866/kWh' },
  { item: 'Power Cost Adjustment', rate: '$0.03389/kWh' },
  { item: 'Total Energy Charges', rate: '$0.13255/kWh', highlight: true },
  { item: 'Minimum Bill (Single Phase)', rate: '$57.00/month' },
  { item: 'Minimum Bill (Poly Phase)', rate: '$113.00/month' },
]

const highlights = [
  {
    icon: CurrencyDollarIcon,
    title: '8th Lowest in Florida',
    description: 'Among 37 municipal and investor-owned utilities',
  },
  {
    icon: CheckCircleIcon,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with clear rate structure',
  },
  {
    icon: LightBulbIcon,
    title: 'Clean Energy Focus',
    description: 'Investing in renewable energy for your future',
  },
]

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-semibold text-sm mb-6">
              💰 Competitive Rates
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-['Playfair_Display'] mb-6">
              Electric Rates
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="mt-6 text-xl leading-8 text-gray-600 font-medium">
              Effective March 1, 2025. Lake Worth Beach Electric Utility provides some of the lowest rates in Florida.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-16">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="relative group" style={{animationDelay: `${index * 200}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-200">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl glow-effect group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-700 text-sm">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rates Tables Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-white to-blue-50/20 -z-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Residential Rates */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 font-['Playfair_Display']">Residential Service Rates</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">Rate Component</h3>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">Rate</h3>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">Description</h3>
                  </div>
                </div>
                  {residentialRates.map((rate, index) => (
                    <div key={rate.item} className={`grid grid-cols-3 gap-4 px-6 py-4 hover:bg-blue-50/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                      <div className="text-sm font-semibold text-gray-900">{rate.item}</div>
                      <div className="text-sm font-bold text-blue-700">{rate.rate}</div>
                      <div className="text-sm text-gray-700">{rate.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* Total Rates Summary */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Energy Charges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {totalRates.map((total) => (
                <div key={total.tier} className={`p-4 rounded-lg ${total.highlight ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                  <div className="text-sm font-medium mb-1">{total.tier}</div>
                  <div className="text-xl font-bold">{total.rate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commercial Rates */}
        <div className="mx-auto mt-24 max-w-4xl relative z-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-['Playfair_Display'] force-black-text">Commercial Service Rates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-2xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">Rate Component</h3>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">Rate</h3>
                </div>
              </div>
              {commercialRates.map((rate, index) => (
                <div key={rate.item} className={`grid grid-cols-2 gap-4 px-6 py-4 hover:bg-blue-50/50 transition-colors duration-200 ${rate.highlight ? 'bg-blue-50' : index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                  <div className="text-sm font-semibold text-gray-900">{rate.item}</div>
                  <div className={`text-sm font-bold ${rate.highlight ? 'text-blue-700' : 'text-gray-900'}`}>{rate.rate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Power Cost Adjustment Explanation */}
        <div className="mx-auto mt-24 max-w-4xl">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-2xl"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Your Bill</h3>
              <div className="space-y-4 text-gray-700">
              <p>
                <strong>Power Cost Adjustment (PCA):</strong> This reflects the variable cost of purchasing wholesale 
                energy, primarily influenced by natural gas prices. The PCA is calculated quarterly using the formula: 
                PCA = (A + B + C) / D, where:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A = Projected purchased power costs for the period</li>
                <li>B = True-up amount from prior period over/under recovery</li>
                <li>C = Rate Stabilization Fund transfers</li>
                <li>D = Projected total retail sales in MWh</li>
              </ul>
              <p>
                <strong>Rate Stabilization Fund:</strong> We maintain a $3.5 million fund to help protect customers 
                from rapid increases in wholesale energy costs, demonstrating our commitment to stable, affordable rates.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-24 max-w-2xl text-center force-black-text relative z-20">
          <h3 className="text-2xl font-bold tracking-tight">Questions About Your Bill?</h3>
          <p className="mt-4 text-lg">
            Our customer service team is here to help you understand your rates and find ways to save energy.
          </p>
          <div className="mt-8">
            <a href="/contact" className="btn-primary">
              Contact Customer Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}