// src/components/section/LocationsSection.tsx
import { Globe, MapPin } from 'lucide-react'

const locations = [
  {
    state: 'NJ',
    city: 'Nutley',
    zip: '07110-4707',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241264875!2d-74.159377684593!3d40.822546979317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254f8e5b8b3b7%3A0x5b8b3b7e5b8b3b7!2sNutley%2C%20NJ%2007110!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus",
  },
  {
    state: 'AL',
    city: 'Hoover',
    zip: '35244-7001',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.123456789!2d-86.811987!3d33.405387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a5b5f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sHoover%2C%20AL%2035244!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus",
  },
  {
    state: 'FL',
    city: 'Miami',
    zip: '33131-2176',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.123456789!2d-80.193658!3d25.774172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6b5f5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sMiami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus",
  },
  {
    state: 'PA',
    city: 'Philadelphia',
    zip: '19103-7334',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.123456789!2d-75.165222!3d39.952583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c63e5f5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sPhiladelphia%2C%20PA%2019103!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus",
  },
]

export default function LocationsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* <div className="inline-flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              LOCATIONS
            </h2>
          </div> */}

          <p className="text-2xl md:text-3xl font-serif text-foreground/90 italic mb-3">
            Virtual Office Hours – Pull up a comfy chair and chat with me!
          </p>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We offer secure, confidential virtual sessions across multiple states. 
            Connect from anywhere — no travel required.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {locations.map((loc) => (
            <div
              key={loc.state}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row"
            >
              {/* Map – Left on lg+, full width on mobile */}
              <div className="relative w-full lg:w-3/5 h-64 lg:h-auto overflow-hidden flex-shrink-0">
                <div className="absolute inset-0">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${loc.city}, ${loc.state}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 lg:group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Info – Right on lg+, below map on mobile */}
              <div className="p-6 lg:p-8 flex flex-col justify-center text-center lg:text-left flex-grow space-y-4 lg:space-y-5">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Virtual Only {loc.state}
                  </h3>
                </div>

                <p className="text-lg font-medium text-foreground">
                  {loc.city}, {loc.state} {loc.zip}
                </p>

                <p className="text-base text-foreground/70 italic">
                  Secure virtual sessions available
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 text-sm italic max-w-2xl mx-auto">
            All services are provided virtually through a secure, HIPAA-compliant video platform. 
            Your comfort and privacy are our top priority.
          </p>
        </div>
      </div>
    </section>
  )
}