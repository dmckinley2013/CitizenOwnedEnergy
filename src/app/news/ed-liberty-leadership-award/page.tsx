import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import Header from '../../../components/Header'

export default function EdLibertyAwardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-yellow-50 via-white to-amber-50 py-16">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}></div>
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group">
              <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-semibold text-sm mb-6">
              🏆 National Leadership Award
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-['Playfair_Display'] mb-6">
              City of Lake Worth Beach&apos;s Ed Liberty Honored with National Leadership Award
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 10, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>New Orleans, Louisiana</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Rebecca Seelig, Public Information Officer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Featured Image */}
          <div className="relative mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/ed-liberty.avif" 
                alt="Ed Liberty receives Mark Crisson Leadership Award"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-semibold text-gray-900">Ed Liberty receives the Mark Crisson Leadership Award</p>
                  <p className="text-sm text-gray-600">American Public Power Association National Conference • New Orleans, LA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl leading-8 text-gray-700 font-medium mb-8">
              <strong>LAKE WORTH BEACH, Florida</strong> – The City of Lake Worth Beach is proud to announce that Ed Liberty, Director of Electric Utilities, has been selected as the recipient of the prestigious Mark Crisson Leadership and Managerial Excellence Award from the American Public Power Association (APPA).
            </p>

            <p className="mb-6">
              This national award recognizes outstanding public power utility and association managers who elevate their organizations through exemplary leadership, innovation, and dedication to operational excellence. Liberty was presented with the award on Tuesday, June 10, 2025, during a special ceremony at APPA&apos;s National Conference in New Orleans, Louisiana.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 bg-blue-50 p-6 rounded-r-lg">
              "Ed Liberty&apos;s leadership has been instrumental in advancing the City of Lake Worth Beach&apos;s electric utility operations, ensuring reliability, efficiency and innovation in service delivery. His commitment to excellence has not only benefited our residents and businesses but has also set a standard for public power utilities nationwide."
              <footer className="text-gray-600 mt-2 not-italic font-medium">— Mayor Betty Resch</footer>
            </blockquote>

            <p className="mb-6">
              Since joining the City of Lake Worth Beach, Liberty has spearheaded key initiatives that have strengthened the city&apos;s electric infrastructure, enhanced customer service, and positioned the utility for long-term sustainability. His ability to lead by example and inspire his team has made a significant impact on the community and the broader public power sector.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl my-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ed Liberty&apos;s Leadership Roles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>President-elect of FMEA (Florida Municipal Electric Association)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Previously served as FMEA vice president and secretary-treasurer</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Board of Directors member for Florida Municipal Power Agency (FMPA)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Board of Directors member for Florida Gas Utility</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-gray-700 bg-green-50 p-6 rounded-r-lg">
              "Ed has transformed the City of Lake Worth Beach utility during his tenure. His efforts reduced emissions as desired by the city council and reduced costs, which residents feel through significantly lower rates. The successful completion of the utility&apos;s new interconnection demonstrates his understanding of the need for significant reliability and generation improvements while keeping rates competitive."
              <footer className="text-gray-600 mt-2 not-italic font-medium">— Jacob Williams, FMPA General Manager and CEO</footer>
            </blockquote>

            <p className="mb-6">
              Williams continued, "Ed is dedicated to his local community, engaging and informing stakeholders, successfully changing their view about lowering costs, reducing emissions and improving reliability simultaneously."
            </p>

            <p className="mb-8">
              The City of Lake Worth Beach congratulates Ed Liberty on this well-deserved recognition and celebrates his dedication to public power and the city&apos;s continued progress.
            </p>

            <div className="bg-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Lake Worth Beach</h3>
              <p className="text-gray-700">
                Lake Worth Beach is a dynamic coastal city located in Palm Beach County, Florida, known for its vibrant arts scene, historic charm, and beautiful coastline. Committed to fostering a sustainable and inclusive community, Lake Worth Beach is dedicated to enhancing the quality of life for all its residents. For more information on the City of Lake Worth Beach visit{' '}
                <a href="https://lakeworthbeachfl.gov" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                  lakeworthbeachfl.gov
                </a>.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <h4 className="font-bold text-gray-900 mb-2">Media Contact:</h4>
              <p className="text-gray-700">
                Rebecca Seelig, Public Information Officer<br />
                City of Lake Worth Beach<br />
                <a href="tel:5615861631" className="text-blue-600 hover:text-blue-700">(561) 586-1631</a><br />
                <a href="mailto:rseelig@lakeworthbeachfl.gov" className="text-blue-600 hover:text-blue-700">rseelig@lakeworthbeachfl.gov</a>
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Learn More About Our Leadership</h3>
              <p className="text-blue-100 mb-6">Discover how our award-winning team continues to innovate and serve our community.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/rates" className="btn-secondary">
                  View Our Rates
                </Link>
                <Link href="/reports" className="btn-secondary">
                  Annual Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}