import Link from 'next/link'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  SunIcon,
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import SmoothScroll from '../components/SmoothScroll'

const stats = [
  { name: 'Customers Served', value: '28,000+', icon: UserGroupIcon },
  { name: 'Rate Ranking in FL', value: '8th Lowest', icon: CurrencyDollarIcon },
  { name: 'Credit Rating', value: 'A1 Moody\'s', icon: ShieldCheckIcon },
  { name: 'Solar Goal 2027', value: '1.2kW per Customer', icon: SunIcon },
]

const features = [
  {
    name: 'Community Owned',
    description: 'As a non-profit, citizen-owned utility, we prioritize community benefit over profit.',
    icon: UserGroupIcon,
  },
  {
    name: 'Financial Excellence',
    description: 'Recently upgraded to Moody\'s A1 rating, reflecting strong financial management.',
    icon: ChartBarIcon,
  },
  {
    name: 'Clean Energy Future',
    description: 'Committed to 1.2kW solar capacity per customer by 2027 at zero construction cost.',
    icon: SunIcon,
  },
  {
    name: 'Competitive Rates',
    description: '8th lowest electric rates in Florida among 37 municipal and investor-owned utilities.',
    icon: CurrencyDollarIcon,
  },
]

const achievements = [
  {
    title: 'Moody\'s A1 Rating Upgrade',
    description: 'Recent upgrade reflecting our strong financial management and operational excellence.',
    date: 'May 2025',
    image: '/images/moodys-rating.jpg'
  },
  {
    title: 'Rice Creek Solar Energy Center',  
    description: 'Now receiving 75 MWac of carbon-free electricity from our newest solar facility.',
    date: 'January 2025',
    image: '/images/solar-power.jpg'
  },
]

export default function Home() {
  return (
    <div className="mesh-gradient min-h-screen scroll-smooth">
      <SmoothScroll />
      {/* Hero section */}
      <section id="hero" className="relative isolate overflow-hidden h-screen flex items-center">
        <div className="hero-gradient absolute inset-0 opacity-95"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl"></div>
          <div className="floating-animation absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" style={{animationDelay: '-2s'}}></div>
          <div className="floating-animation absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 rounded-full blur-lg" style={{animationDelay: '-4s'}}></div>
        </div>
        
        <div className="relative w-full flex justify-center items-center px-6 lg:px-8">
          <div className="max-w-6xl w-full">
            <div className="text-center">
              {/* Premium Badge */}
              <div className="mb-12 flex justify-center">
                <div className="glass-card inline-flex items-center px-6 py-3 text-sm font-medium text-white glow-effect">
                  <ShieldCheckIcon className="mr-3 h-5 w-5 text-purple-300" />
                  <span className="gradient-text font-semibold">Moody&apos;s A1 Rated</span>
                  <span className="mx-3 text-white/60">•</span>
                  <span className="gradient-text">8th Lowest Rates in Florida</span>
                </div>
              </div>
              
              {/* Hero Title */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 font-['Playfair_Display'] leading-tight">
                <span className="block text-shadow">Citizen Owned</span>
                <span className="block text-yellow-400 pb-3 text-shadow-lg">Energy</span>
              </h1>
              
              {/* Subtitle */}
              <p className="mt-8 text-xl leading-8 text-blue-100 max-w-3xl mx-auto font-medium text-shadow">
                Lake Worth Beach Electric Utility - A non-profit, citizen-owned utility providing 
                reliable, low-cost, and clean energy to <span className="text-white font-semibold">28,000+ customers</span> while giving back to our community.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/rates" className="btn-primary group inline-flex items-center">
                  <span>View Our Rates</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/solar" className="btn-secondary group inline-flex items-center">
                  <span>Explore Solar Options</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section id="stats" className="relative h-screen flex items-center overflow-hidden snap-start">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="section-divider absolute top-0"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-['Playfair_Display'] mb-4">
                Trusted by Our Community
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
              <p className="mt-6 text-xl leading-8 text-gray-600 font-medium">
                Our commitment to excellence is reflected in our performance metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.name} className="relative group" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Single Fancy Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-white/50 h-60 flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl glow-effect group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <dd className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{stat.value}</dd>
                    <dt className="text-sm font-semibold leading-6 text-gray-500 uppercase tracking-wide">{stat.name}</dt>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ed Liberty Award Feature */}
      <section id="award-feature" className="relative h-screen flex items-center overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-amber-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-semibold text-sm mb-6">
                🏆 National Leadership Award
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-['Playfair_Display'] mb-6">
                Ed Liberty Honored with Prestigious APPA Award
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-blue-600 mb-6 rounded-full"></div>
              <p className="text-xl leading-8 text-gray-600 font-medium mb-8">
                Our Director of Electric Utilities has been selected as the recipient of the prestigious Mark Crisson Leadership and Managerial Excellence Award from the American Public Power Association.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Recognized for outstanding leadership in strengthening electric infrastructure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Successfully reduced emissions and costs while improving reliability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Positioned utility for long-term sustainability and innovation</p>
                </div>
              </div>
              <div className="flex justify-start">
                <Link href="/news/ed-liberty-leadership-award" className="btn-primary group inline-flex items-center">
                  <span>Read Full Story</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-1 border border-white/50">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/images/ed-liberty.avif" 
                    alt="Ed Liberty receives Mark Crisson Leadership Award"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900">Ed Liberty</p>
                      <p className="text-xs text-gray-600">Director of Electric Utilities</p>
                      <p className="text-xs text-blue-600 font-medium">June 10, 2025 • New Orleans, LA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="relative h-screen flex items-center overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 25%)`
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm mb-4">
              ⚡ Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Playfair_Display'] mb-4">
              Community-Focused Energy Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg leading-7 text-gray-600 font-medium">
              As a citizen-owned utility, we combine the best of community ownership with professional 
              management to deliver exceptional value and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative group" style={{animationDelay: `${index * 200}ms`}}>
                {/* Fancy Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl glow-effect group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-bold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent achievements */}
      <section id="achievements" className="relative h-screen flex items-center overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-['Playfair_Display'] mb-4">Recent Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg leading-7 text-gray-600 font-medium">
              Our continued commitment to excellence and innovation drives us forward.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 justify-items-center">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="relative group" style={{animationDelay: `${index * 200}ms`}}>
                  {/* Fancy Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <article className="relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 border border-white/50 h-full max-w-md">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <time dateTime={achievement.date} className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {achievement.date}
                        </time>
                        <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-md">
                          Achievement
                        </span>
                      </div>
                      <div className="group relative">
                        <h3 className="text-lg font-bold leading-6 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Discover how our community-owned approach delivers reliable, affordable, and clean energy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/rates" className="btn-secondary">
                View Rates
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors flex items-center">
                Contact Us <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}