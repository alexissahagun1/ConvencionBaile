import Image from 'next/image'
import Link from 'next/link'


export default function MotusExperience() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpeg')] bg-cover text-white ">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 ">
        </div>
        <div className="container mx-auto px-4 pt-20 pb-12 text-center relative z-10">
          <Image
            src="/logo.png"
            alt="Motus Experience Logo"
            width={200}
            height={100}
            className="mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold tracking-wider text-pink-500 mb-8 uppercase">Motus Experience</h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl">February 28 - March 2, 2025</p>
            <p className="text-xl">Guadalajara, Mexico</p>
          </div>

          <p className="text-2xl max-w-3xl mx-auto mb-8 lowercase">
            JOIN US FOR 3 DAYS OF UNPARALLELED EXCITEMENT, GROWTH, AND INSPIRATION!
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto lowercase">
            GET READY FOR AN EXHILARATING, ONCE-IN-A-LIFETIME DANCE EXPERIENCE!
          </p>

        {/* CTA Section */}
          <section className="py-16 text-center">
            <Link href="#pricing" 
            className="bg-pink-500 hover:bg-pink-600 text-white text-3xl px-8 py-4 rounded">
              Register Now
            </Link>
          </section>
        </div>
      </section>


      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-2xl text-center">
            Motus is a global dance program designed to elevate artists through intense training.
            Created by Diana Matos, this program focuses on personal growth, quality of movement,
            and street styles techniques.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className="py-16 ">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-500 tracking-wide">
      Pricing Options
    </h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto perspective-1000">
      {/* Card 1 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="text-3xl font-bold text-pink-500 mb-6 text-center">
            Early Bird
          </h3>
          <div className="space-y-4">
            
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
              <Link href='https://buy.stripe.com/test_00g8yzaKU0Kv8r6144'>
                <p className="text-lg font-medium text-gray-300">Adults</p>
                <p className="text-3xl font-bold">$350</p>
              </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_3cs1676uEctd7n2001'>
              <p className="text-lg font-medium text-gray-300">Kids</p>
              <p className="text-3xl font-bold">$300</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_8wMbKL3is9h18r63ce'>
              <p className="text-lg font-bold text-gray-300">Motus Members</p>
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="text-3xl font-bold text-pink-500 mb-6 text-center">
            2nd Stage
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_6oEbKL7yI9h1bDibIL'>
              <p className="text-lg font-medium text-gray-300">Adults</p>
              <p className="text-3xl font-bold">$375</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_9AQbKLg5e78TbDi3cg'>
              <p className="text-lg font-medium text-gray-300">Kids</p>
              <p className="text-3xl font-bold">$325</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_8wMbKL3is9h18r63ce'>
              <p className="text-lg font-bold text-gray-300">Motus Members</p>
              
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="text-3xl font-bold text-pink-500 mb-6 text-center">
            Special Programs
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_cN28yz06g0KvePu28d'>
              <p className="text-lg font-medium text-gray-300">Showcase</p>
              <p className="text-3xl font-bold">$70 per participant</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_9AQdST6uEctd5eU9AG'>
              <p className="text-lg font-medium text-gray-300">Adults Mentoring Diana Matos</p>
              <p className="text-3xl font-bold">$530</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_00g1675qA78T0YE9AH'>
              <p className="text-lg font-medium text-gray-300">Kids Mentoring Ivan</p>
              <p className="text-3xl font-bold">$490</p>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-4 space-y-2 text-center text-white font-bold">
          <p>&copy; 2024 Motus Experience. All rights reserved.</p>
          <p>experience@motusthecompany.com</p>
          <p>+52 33 1672 7742</p>
        </div>
      </footer>
    </div>
  )
}