import Header from '../../components/Header'

export default function ReportsPage() {
  const financialReports = [
    {
      year: "2024",
      title: "Annual Financial Report",
      description: "Comprehensive overview of financial performance, community impact, and operational achievements.",
      size: "2.4 MB",
      date: "March 15, 2025",
      type: "PDF"
    },
    {
      year: "2024",
      title: "Community Impact Summary",
      description: "Detailed analysis of energy savings delivered to customers and environmental benefits achieved.",
      size: "1.8 MB",
      date: "February 28, 2025",
      type: "PDF"
    },
    {
      year: "2024",
      title: "Q4 Financial Statement",
      description: "Fourth quarter financial results including revenue, expenses, and customer growth metrics.",
      size: "1.2 MB",
      date: "January 30, 2025",
      type: "PDF"
    },
    {
      year: "2023",
      title: "Annual Financial Report",
      description: "Complete financial overview including audited statements and performance analysis.",
      size: "2.6 MB",
      date: "March 20, 2024",
      type: "PDF"
    },
    {
      year: "2023",
      title: "Energy Efficiency Report",
      description: "Analysis of energy efficiency programs and their impact on customer savings.",
      size: "1.5 MB",
      date: "April 10, 2024",
      type: "PDF"
    },
    {
      year: "2023",
      title: "Regulatory Compliance Report",
      description: "Documentation of compliance with state and federal energy regulations.",
      size: "900 KB",
      date: "February 15, 2024",
      type: "PDF"
    }
  ]

  const performanceMetrics = [
    {
      metric: "Total Customer Savings",
      value: "$12.5M",
      period: "2024",
      change: "+18%",
      positive: true
    },
    {
      metric: "Active Customers",
      value: "45,600",
      period: "Current",
      change: "+12%",
      positive: true
    },
    {
      metric: "Renewable Energy %",
      value: "87%",
      period: "2024 Avg",
      change: "+5%",
      positive: true
    },
    {
      metric: "Customer Satisfaction",
      value: "4.6/5",
      period: "2024",
      change: "+0.3",
      positive: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
                📊 Financial Transparency
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-['Playfair_Display']">
                Financial <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transparency</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Access our comprehensive financial reports, performance metrics, and community impact data. 
                We believe in complete transparency with our customers and stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-6">
                📊 Live Performance
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">Performance Dashboard</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600">Real-time insights into our operational excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((item, index) => (
                <div key={index} className="relative group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Consistent Fancy Border for all tiles */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{item.metric}</h3>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        item.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      } shadow-md`}>
                        {item.change}
                      </span>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{item.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{item.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Reports</h2>
              <p className="text-lg text-gray-600">
                Download our latest financial statements, annual reports, and performance analyses.
              </p>
            </div>

            <div className="grid gap-6">
              {financialReports.map((report, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                          {report.year}
                        </span>
                        <span className="text-gray-500 text-sm">{report.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600 mb-4">{report.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        {report.type} • {report.size}
                      </div>
                    </div>
                    
                    <button className="ml-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Principles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Transparency</h2>
              <p className="text-xl text-gray-600">
                We believe our customers deserve complete visibility into our operations and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accurate Reporting</h3>
                <p className="text-gray-600">
                  All financial data is independently audited and reported according to industry standards 
                  and regulatory requirements.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m13 0h-6m-2 0H4a2 2 0 01-2-2V6a2 2 0 012-2h3.93a2 2 0 011.664.89l.812 1.22A2 2 0 0010.07 7H16a2 2 0 012 2v9a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Open Access</h3>
                <p className="text-gray-600">
                  Financial reports and performance data are freely available to all customers 
                  and community members without restrictions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Updates</h3>
                <p className="text-gray-600">
                  Regular quarterly and annual reports ensure stakeholders have current information 
                  about our financial health and performance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
                <p className="text-gray-600">
                  Clear key performance indicators track our success in delivering value 
                  to customers and the community.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Disclosure</h3>
                <p className="text-gray-600">
                  Comprehensive disclosure of operational and financial risks provides 
                  complete transparency about potential challenges.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h3>
                <p className="text-gray-600">
                  Detailed reporting on community benefits, environmental impact, 
                  and social responsibility initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Request Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Additional Information?</h2>
            <p className="text-xl text-gray-600 mb-8">
                              Can&apos;t find what you&apos;re looking for? Contact our transparency team 
              for specific reports or detailed financial information.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Transparency Team
              </button>
              <button className="w-full sm:w-auto bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}