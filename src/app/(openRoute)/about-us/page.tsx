import Link from 'next/link';
import Image from 'next/image';
import plasticWaste from '@/assets/about-usbanner.jpeg';

const AboutUsPage = () => {
  return (
    <div className="md:mx-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        About EcoRoots
      </h1>
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src={plasticWaste}
          alt="Plastic Waste"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      <p className="text-lg dark:text-white text-justify py-4">
        Welcome to{' '}
        <Link href="/" className="font-semibold text-green-500 hover:underline">
          EcoRoots
        </Link>
        — your go-to hub for discovering and sharing innovative eco-friendly solutions.
        Were here to support a community focused on meaningful sustainability practices that truly make a difference.
      </p>

      <div className="space-y-8">
        {/* Our Mission */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">Our Mission</h2>
          <p className="dark:text-white text-justify">
            EcoRoots is dedicated to promoting sustainable living by connecting environmentally conscious individuals.
            Our platform serves as a collaborative environment where users can exchange ideas, explore green innovations,
            and implement practical actions—from cutting waste to embracing renewable technologies.
          </p>
        </section>

        {/* Our Impact – NEW */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">Our Impact</h2>
          <p className="dark:text-white text-justify">
            Since our launch, EcoRoots has helped thousands of people adopt sustainable habits, supported dozens of eco-projects,
            and inspired a growing movement focused on environmental responsibility. From community cleanups to solar initiatives,
            our members are turning ideas into measurable change.
          </p>
        </section>

        {/* Why Choose Us? */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            Why Choose EcoRoots?
          </h2>
          <ul className="list-disc list-inside dark:text-white space-y-3 text-justify">
            <li>
              <span className="font-semibold">Curated Content:</span> Every submission is reviewed to ensure it meets our standards for impact and innovation.
            </li>
            <li>
              <span className="font-semibold">Community Support:</span> Engage with a network of individuals passionate about protecting our planet.
            </li>
            <li>
              <span className="font-semibold">Wide-Ranging Topics:</span> Explore eco-ideas across diverse fields like clean energy, waste reduction, and sustainable travel.
            </li>
            <li>
              <span className="font-semibold">Earn While You Contribute:</span> Content creators can monetize their verified sustainability projects.
            </li>
          </ul>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">Our Values</h2>
          <p className="dark:text-white text-justify">
            At EcoRoots, we’re guided by these core principles:
          </p>
          <ul className="list-disc list-inside dark:text-white space-y-3 mt-3 text-justify">
            <li>
              <span className="font-semibold">Environmental Commitment:</span> Every idea contributes to a cleaner, greener world.
            </li>
            <li>
              <span className="font-semibold">Collaboration:</span> The best solutions are built through teamwork and shared knowledge.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span> We celebrate fresh thinking and creative solutions to sustainability challenges.
            </li>
          </ul>
        </section>

        {/* Join the EcoRoots Community */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold py-4">
            Join the Sustainability Movement
          </h2>
          <p className="dark:text-white text-justify">
            Whether youre here to discover new eco-friendly ideas or share your own,
            EcoRoots connects you with a passionate community working toward a sustainable future.
          </p>
          <p className="dark:text-white mt-4">
            Ready to get involved?{' '}
            <Link
              href="/ideas"
              className="text-blue-500 font-semibold hover:underline"
            >
              Explore ideas
            </Link>{' '}
            or{' '}
            <Link
              href="/register"
              className="text-blue-500 font-semibold hover:underline"
            >
              create an account
            </Link>{' '}
            to start contributing.
          </p>
        </section>
      </div>
    </div>


  );
};

export default AboutUsPage;
