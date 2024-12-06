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
            width={300}
            height={300}
            className="mx-auto -mb-6"
          />
          <Image
            src="/text.png"
            alt="Motus Experience Logo"
            width={500}
            height={300}
            className="mx-auto mb-16"
          />
          {/* <h1 className="md:text-2xl text-2xl  font-bold tracking-wider text-pink-500 mb-8 uppercase">Experience</h1> */}
          
          <div className="mb-12 uppercase md:text-xl text-lg">
            <p className="">February 28 - March 2, 2025</p>
            <p className="">Guadalajara, Mexico</p>
          </div>

          <p className="md:text-2xl text-xl max-w-3xl mx-auto lowercase">
            JOIN US FOR 3 DAYS OF UNPARALLELED EXCITEMENT, GROWTH, AND INSPIRATION!
          </p>


        {/* CTA Section */}

        </div>
      </section>


      {/* About Section */}
      <section className="py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="md:text-2xl text-lg text-center">
            MOTUS is a global dance company designed to train and elevate artists through intense dance training. Created by Diana Matos, this program focuses on personal growth, quality of movement,
            and street styles techniques.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
  <section id='pricing' className="py-16 ">
    <div className="container mx-auto px-4">
    {/* <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-500 tracking-wide">
      Pricing Options
    </h2> */}
    <section className="flex py-16 justify-center">
      <div className="bg-pink-500 text-white md:text-3xl text-2xl w-auto px-8 py-4 rounded uppercase">
        <p>Register</p>
      </div>
  </section>

  {/* cards */}
  <div id='pricing' className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto perspective-1000">
      {/* Card 1 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="md:text-3xl text-2xl font-bold text-pink-500 mb-6 text-center">
            Early Bird
          </h3>
          <div className="space-y-4">
            
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
              <Link href='https://buy.stripe.com/test_00g8yzaKU0Kv8r6144'>
                <p className="text-lg font-medium text-gray-300">Adults</p>
                <p className="md:text-3xl text-2xl font-bold">$350</p>
              </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_3cs1676uEctd7n2001'>
              <p className="text-lg font-medium text-gray-300">Kids</p>
              <p className="md:text-3xl text-2xl font-bold">$300</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
              <p className="text-md font-bold text-gray-300">Price till January 15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="md:text-3xl text-2xl font-bold text-pink-500 mb-6 text-center">
            2nd Stage
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_6oEbKL7yI9h1bDibIL'>
              <p className="text-lg font-medium text-gray-300">Adults</p>
              <p className="md:text-3xl text-2xl font-bold">$375</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://buy.stripe.com/test_9AQbKLg5e78TbDi3cg'>
              <p className="text-lg font-medium text-gray-300">Kids</p>
              <p className="md:text-3xl text-2xl font-bold">$325</p>
            </Link>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
              <p className="text-md font-bold text-gray-300">Price from January 15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="md:text-3xl text-2xl font-bold text-pink-500 mb-6 text-center">
            Mentorships
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            {/* <Link href='https://buy.stripe.com/test_9AQdST6uEctd5eU9AG'> */}
              <p className="text-lg font-medium text-gray-300">Adults Diana Matos Mentorship </p>
              <p className="md:text-3xl text-2xl font-bold">$150</p>
            {/* </Link> */}
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            {/* <Link href='https://buy.stripe.com/test_00g1675qA78T0YE9AH'> */}
              <p className="text-lg font-medium text-gray-300">Kids Ivan Koumaev Mentorship </p>
              <p className="md:text-3xl text-2xl font-bold">$100</p>
            {/* </Link> */}
            </div>
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
              <p className="text-md font-medium text-gray-300">Additional payment will be processed after audition if selected</p>
            </div>
            {/* <p className="text-md font-medium text-gray-300">audition scheduled for the first day of the weekend</p> */}
          </div>
        </div>
      </div>
      <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl transform transition-transform duration-700 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover:translate-z-10">
        <div className="relative p-6 text-white">
          <h3 className="md:text-3xl text-2xl font-bold text-pink-500 mb-6 text-center">
            Showcase
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-inner hover:bg-gray-700 transition">
            <Link href='https://forms.gle/ADDyx7gY26LrTCSr5'>
              <p className="text-lg font-medium text-gray-300">Register now</p>
              <p className="md:text-3xl text-2xl font-bold">$70 per participant</p>
            </Link>
            </div>
            <p className="text-sm text-gray-300">An amount will be charged if piece is selected</p>
          </div>
        </div>
      </div>
  <div className='flex items-center justify-center '>
          <Link
            href="https://www.instagram.com/fulloutexperience/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white cursor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 text-white"
            >
              <path
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.35-3.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"
              />
            </svg>
        </Link>
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