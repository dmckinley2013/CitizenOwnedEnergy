import Header from '../../components/Header'

export default function NewsPage() {
  const newsArticles = [
    {
      date: "August 7, 2025",
      title: "Clean Energy Tax Credits: CETY Maintains Full 30% ITC While Competitors Face New Limits",
      excerpt: "Clean Energy Technologies announces continued eligibility for federal clean energy tax incentives under the newly passed One Big Beautiful Bill Act (OBBBA), maintaining competitive advantage in the clean energy sector.",
      category: "Policy",
      readTime: "4 min read"
    },
    {
      date: "July 30, 2025",
      title: "The Future of US Grid: Decentralized Management, AI, and Private Microgrids",
      excerpt: "Analysis shows the U.S. electric grid is undergoing massive transformation as data centers drive 35-50% demand surge by 2040, with microgrids and decentralized solutions emerging as key strategies.",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      date: "July 26, 2023",
      title: "Five Organizations Turning Community Solar into Savings for Low-Income Americans",
      excerpt: "U.S. Department of Energy recognizes five organizations through Sunny Awards for Equitable Community Solar, highlighting innovative approaches that save $4.3 million on subscribers' energy bills.",
      category: "Community",
      readTime: "6 min read"
    },
    {
      date: "August 2, 2025",
      title: "Public Hearing for 5,600-Acre, 300 Megawatt Solar Project Near Keo",
      excerpt: "Lonoke County officials to discuss potential $700 million solar facility that could provide power for over 100,000 homes, representing one of Arkansas's largest solar developments.",
      category: "Development",
      readTime: "3 min read"
    },
    {
      date: "July 14, 2025",
      title: "Oregon Legislature Passes First-in-Nation Microgrid Framework",
      excerpt: "Oregon lawmakers pass bipartisan bills creating regulatory framework for community-owned and private microgrids, setting example for other states facing grid reliability challenges.",
      category: "Policy",
      readTime: "5 min read"
    },
    {
      date: "July 24, 2025",
      title: "Constellation's Deal With Calpine Approved by Federal Energy Regulatory Commission",
      excerpt: "FERC approval advances Constellation's plan to establish leading provider of energy products and services, strengthening position as America's largest producer of emissions-free energy.",
      category: "Business",
      readTime: "3 min read"
    }
  ]

  const categoryColors: Record<string, string> = {
    "Policy": "bg-blue-100 text-blue-800",
    "Technology": "bg-purple-100 text-purple-800",
    "Community": "bg-green-100 text-green-800",
    "Development": "bg-orange-100 text-orange-800",
    "Business": "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Energy <span className="text-blue-600">News & Updates</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest developments in community energy, 
                renewable technology, and policy changes affecting our industry.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white mb-16">
              <div className="max-w-4xl">
                <div className="flex items-center mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Featured
                  </span>
                  <span className="text-blue-200">August 7, 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Clean Energy Sector Maintains Strong Federal Support Despite Policy Changes
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  While many renewable energy sectors face new limitations under recent legislation, 
                  established clean energy technologies continue to benefit from substantial federal 
                  incentives, positioning the industry for continued growth.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                
                <div className="space-y-8">
                  {newsArticles.map((article, index) => (
                    <article key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${categoryColors[article.category]}`}>
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                        <span className="text-gray-300 mx-2">•</span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                        Read More 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Load More Articles
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Get the latest energy news and updates delivered to your inbox.
                  </p>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-3">
                    {Object.entries(categoryColors).map(([category, colorClass]) => (
                      <button 
                        key={category}
                        className="flex items-center justify-between w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClass}`}>
                          {category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {Math.floor(Math.random() * 20) + 5}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="/rates" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Current Energy Rates
                    </a>
                    <a href="/solar" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Solar Programs
                    </a>
                    <a href="/reports" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Financial Reports
                    </a>
                    <a href="/contact" className="block text-blue-600 hover:text-blue-700 font-medium">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Insights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h2>
              <p className="text-xl text-gray-600">Key trends shaping the future of energy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Grid Modernization</h3>
                <p className="text-gray-600">
                  The U.S. grid is undergoing massive transformation to handle AI-driven demand increases 
                  and integrate renewable energy sources.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Solar Growth</h3>
                <p className="text-gray-600">
                  Community solar programs are expanding rapidly, providing clean energy access 
                  to renters and homeowners without suitable roofs.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Innovation</h3>
                <p className="text-gray-600">
                  States are leading with innovative policies like Oregon&apos;s microgrid framework 
                  to enhance energy resilience and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}