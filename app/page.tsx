import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Trophy, Users, Code, Zap, Building2 } from "lucide-react"
import CursorTrail from "@/components/cursor-trail"

export default function HackathonPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CursorTrail />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
              <img src="/images/unstoppable.svg" alt="Unstoppable Hackathon Logo" className="w-8 h-8" />
              <h1 className="text-xl font-bold text-primary">The Unstoppable Hackathon</h1>
            </div>

            <div className="hidden md:flex space-x-6">
              <a href="#prizes" className="text-foreground hover:text-primary transition-colors">
                Prizes
              </a>
              <a href="#sponsors" className="text-foreground hover:text-primary transition-colors">
                Sponsors
              </a>
              <a href="#register" className="text-foreground hover:text-primary transition-colors">
                Register
              </a>
              <a href="#venue" className="text-foreground hover:text-primary transition-colors">
                Venue
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">
              The <br />
              <span className="text-primary">Unstoppable</span>
              <br /> Hackathon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              48 hours of innovation, coding, and creativity, <br />
              building decentralized unstoppable projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <div className="flex items-center gap-2 text-foreground">
                <CalendarDays className="w-5 h-5 text-primary" />
                <span>12th of December, 14:00 - 14th of December, 14:00</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>LNM IIT, Jaipur, India</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-12">
              Co-located with the{" "}
              <a
                href="https://workshop.stability.nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                1st Stability Workshop
              </a>{" "}
              on the 15th of December.
            </p>
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section id="prizes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              Prize <span className="text-primary">Pool</span>
            </h2>
            <p className="text-xl text-muted-foreground">Compete for amazing rewards and recognition</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-primary/20 shadow-2xl shadow-primary/10 mb-8">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Trophy className="w-16 h-16 text-primary" />
                </div>
                <CardTitle className="text-6xl md:text-8xl font-black text-primary mb-2">9,000 USD</CardTitle>
                <p className="text-xl text-foreground/70">Total Prize Pool</p>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background border-primary/20 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">7500 USD</div>
                  <div className="text-lg font-semibold mb-2 text-foreground">As Spring of Code Stipends</div>
                  <p className="text-sm text-foreground/70">
                    5 winners will be selected for The Stable Order's Spring of Code program.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-secondary/20 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">1500 USD</div>
                  <div className="text-lg font-semibold mb-2 text-foreground">As Pull Request Prizes</div>
                  <p className="text-sm text-foreground/70">
                    Distributed to participants based on quality and quantity of merged PRs made to the repos of the
                    sponsoring organizations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                * The Spring of Code will run for 12 weeks, and winners will be mentored by members of The Stable Order.
              </p>
              <p className="text-xs text-muted-foreground">
                * Stipends will be transferred when projects are completed.
              </p>
              <p className="text-xs text-muted-foreground">
                * Prizes and stipends will be paid in liquid cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              Proudly <span className="text-secondary">Sponsored</span> By
            </h2>
            <p className="text-xl text-muted-foreground">Amazing partners making this event possible</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Alliance Sponsor */}
            <a
              href="https://alliance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center p-6 hover:border-primary/50 transition-colors group"
            >
              <img
                src="/images/alliance-logo.png"
                alt="Alliance"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* AOSSIE Sponsor */}
            <a
              href="https://aossie.org"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center p-6 hover:border-primary/50 transition-colors group"
            >
              <img
                src="/images/aossie-logo.png"
                alt="AOSSIE - Australian Open Source Software Innovation and Education"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Stability Nexus Sponsor */}
            <a
              href="https://stabilitynexus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center p-6 hover:border-primary/50 transition-colors group"
            >
              <img
                src="/images/stability-nexus-logo.png"
                alt="Stability Nexus"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Become a Sponsor Button */}
            <a
              href="mailto:sponsors@unstoppablehackathon.com"
              className="aspect-square bg-transparent border-dashed border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-primary font-semibold text-lg flex flex-col items-center justify-center gap-2 rounded-lg transition-colors"
            >
              <span className="text-2xl">+</span>
              <span className="text-center leading-tight">Become a Sponsor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
              Ready to <span className="text-primary">Participate</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of developers, designers, and innovators <br /> for 48 hours of intense coding and
              creativity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Code className="w-12 h-12 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Code</h3>
                <p className="text-sm text-muted-foreground">Build amazing projects</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Collaborate</h3>
                <p className="text-sm text-muted-foreground">Work with talented teams</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-12 h-12 text-accent mb-3" />
                <h3 className="font-semibold mb-2">Innovate</h3>
                <p className="text-sm text-muted-foreground">Create the future</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-lg font-semibold shadow-lg shadow-primary/25"
              asChild
            >
              <a href="https://forms.gle/9Goc7nS95HNLUgE98" target="_blank" rel="noopener noreferrer">
                Apply to Participate
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Registration closes on December 10, 2025 <br /> or when the maximum capacity is reached. <br /> Hurry up!
            </p>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              Event <span className="text-secondary">Venue</span>
            </h2>
            <p className="text-xl text-muted-foreground">Located at the heart of Jaipur's tech ecosystem</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    LNM Institute of Information Technology
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Rupa ki Nangal, Post-Sumel, Via-Jamdoli, Jaipur, Rajasthan 302031
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarDays className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Event Duration</p>
                      <p className="text-muted-foreground">48 hours of continuous hacking</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Facilities</p>
                      <p className="text-muted-foreground">High-speed internet, power outlets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Organizers</p>
                      <p className="text-muted-foreground">Sarthak Dengre, Raj Shah, Dr. Bruno Woltzenlogel Paleo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-96 bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=The%20LNM%20Institute%20of%20Information%20Technology,%20Via%20Jamdoli,%20Jaipur&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LNM Institute of Information Technology Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">The Unstoppable Hackathon</h3>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://x.com/StabilityNexus" className="text-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/stability-nexus/"
                className="text-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a href="https://t.me/StabilityNexus" className="text-foreground hover:text-primary transition-colors">
                Telegram
              </a>
              <a href="https://discord.gg/fuuWX4AbJt" className="text-foreground hover:text-primary transition-colors">
                Discord
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 The Unstoppable Hackathon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
