import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Talha Tarique</p>
              <p className="grid-subtext">
                With 2+ years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  { lat: 23.8103, lng: 90.4125, text: 'Dhaka, Bangladesh', color: 'white', size: 40 },
                  { lat: 40.7128, lng: -74.006, text: 'New York, USA', color: 'white', size: 15 },
                  { lat: 51.5074, lng: -0.1278, text: 'London, UK', color: 'white', size: 15 },
                  { lat: 35.6895, lng: 139.6917, text: 'Tokyo, Japan', color: 'white', size: 15 },
                  { lat: -33.8688, lng: 151.2093, text: 'Sydney, Australia', color: 'white', size: 15 },
                  { lat: 48.8566, lng: 2.3522, text: 'Paris, France', color: 'white', size: 15 },
                  { lat: 28.6139, lng: 77.209, text: 'New Delhi, India', color: 'white', size: 15 },
                  { lat: 55.7558, lng: 37.6173, text: 'Moscow, Russia', color: 'white', size: 15 },
                  { lat: 39.9042, lng: 116.4074, text: 'Beijing, China', color: 'white', size: 15 },
                  { lat: -23.5505, lng: -46.6333, text: 'São Paulo, Brazil', color: 'white', size: 15 },
                  { lat: 34.0522, lng: -118.2437, text: 'Los Angeles, USA', color: 'white', size: 15 },
                  { lat: 37.7749, lng: -122.4194, text: 'San Francisco, USA', color: 'white', size: 15 },
                  { lat: 19.076, lng: 72.8777, text: 'Mumbai, India', color: 'white', size: 15 },
                  { lat: -1.2921, lng: 36.8219, text: 'Nairobi, Kenya', color: 'white', size: 15 },
                  { lat: 45.4642, lng: 9.19, text: 'Milan, Italy', color: 'white', size: 15 },
                  { lat: 52.5200, lng: 13.4050, text: 'Berlin, Germany', color: 'white', size: 15 },
                  { lat: 41.9028, lng: 12.4964, text: 'Rome, Italy', color: 'white', size: 15 },
                  { lat: -22.9068, lng: -43.1729, text: 'Rio de Janeiro, Brazil', color: 'white', size: 15 },
                  { lat: 31.2304, lng: 121.4737, text: 'Shanghai, China', color: 'white', size: 15 },
                  { lat: 6.5244, lng: 3.3792, text: 'Lagos, Nigeria', color: 'white', size: 15 },
                  { lat: 1.3521, lng: 103.8198, text: 'Singapore, Singapore', color: 'white', size: 15 },
                  { lat: 35.6762, lng: 139.6503, text: 'Kyoto, Japan', color: 'white', size: 15 },
                  { lat: -26.2041, lng: 28.0473, text: 'Johannesburg, South Africa', color: 'white', size: 15 },
                  { lat: 13.7563, lng: 100.5018, text: 'Bangkok, Thailand', color: 'white', size: 15 },
                  { lat: -34.6037, lng: -58.3816, text: 'Buenos Aires, Argentina', color: 'white', size: 15 },
                  { lat: 25.276987, lng: 55.296249, text: 'Dubai, UAE', color: 'white', size: 15 },
                  { lat: 19.4326, lng: -99.1332, text: 'Mexico City, Mexico', color: 'white', size: 15 },
                  { lat: 59.3293, lng: 18.0686, text: 'Stockholm, Sweden', color: 'white', size: 15 },
                  { lat: -37.8136, lng: 144.9631, text: 'Melbourne, Australia', color: 'white', size: 15 },
                  { lat: 60.1695, lng: 24.9354, text: 'Helsinki, Finland', color: 'white', size: 15 },
                  { lat: 43.651070, lng: -79.347015, text: 'Toronto, Canada', color: 'white', size: 15 },
                  { lat: 41.8781, lng: -87.6298, text: 'Chicago, USA', color: 'white', size: 15 },
                  { lat: 30.0444, lng: 31.2357, text: 'Cairo, Egypt', color: 'white', size: 15 },
                  { lat: 33.4484, lng: -112.074, text: 'Phoenix, USA', color: 'white', size: 15 },
                  { lat: -12.0464, lng: -77.0428, text: 'Lima, Peru', color: 'white', size: 15 },
                  { lat: 37.5665, lng: 126.9780, text: 'Seoul, South Korea', color: 'white', size: 15 },
                  { lat: 41.3851, lng: 2.1734, text: 'Barcelona, Spain', color: 'white', size: 15 },
                  { lat: 50.1109, lng: 8.6821, text: 'Frankfurt, Germany', color: 'white', size: 15 },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Dhaka, Bangladesh and open to remote work worldwide.</p>
              <a href="https://github.com/TalhaT298" target="_blank" rel="noopener noreferrer">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <a href="https://github.com/TalhaT298" target="_blank" rel="noopener noreferrer">
                <p className="grid-subtext text-center">Contact me</p>
              </a>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  mdtalha2008@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
