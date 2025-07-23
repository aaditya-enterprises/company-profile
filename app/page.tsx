import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Building2,
  Wrench,
  Truck,
  Calendar,
  Shield,
  Users,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Aaditya Enterprises Logo" className="h-20 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">AADITYA ENTERPRISES</h1>
                <p className="text-sm text-gray-600">Professional Outsourcing Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </Link>
              <Link href="#industries" className="text-gray-700 hover:text-orange-600 transition-colors">
                Industries
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Partner in
              <span className="block text-orange-100">Professional Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Comprehensive outsourcing solutions for AC AMC, Civil Works, Government Supplies, and Event Management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 9873457729
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Aaditya Enterprises is a professionally managed, multi-disciplinary outsourcing and service firm
                offering a comprehensive suite of solutions across Air Conditioning Annual Maintenance Contracts (AC
                AMC), Civil & Infrastructure services, Supply of equipment to Government agencies, and Event and
                Conference Management for a broad spectrum of clients, including Government departments, Embassies, and
                Corporates.
              </p>
              <p className="text-lg leading-relaxed">
                Since our inception, we have remained committed to delivering cost-effective, reliable, and high-quality
                technical and logistical services tailored to the evolving needs of residential, commercial, industrial,
                and institutional sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To emerge as a leading integrated outsourcing partner in India by delivering sustainable, innovative,
                  and superior service solutions—from AMC and civil work to strategic Government procurement and
                  high-profile event execution—driven by quality, transparency, and excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Offer dependable and timely AC and civil maintenance services
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Build long-term, trust-based relationships through performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Serve Government and corporate clients with tailored solutions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Continuously upgrade workforce, safety practices, and technology
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Integrity", desc: "Transparent dealings and ethical business practices" },
              {
                icon: Award,
                title: "Quality Service",
                desc: "Delivered through skilled manpower and top-grade materials",
              },
              { icon: Users, title: "Customer Focus", desc: "Solutions tailored to operational requirements" },
              { icon: CheckCircle, title: "Safety First", desc: "Full compliance with safety norms and regulations" },
              { icon: Building2, title: "Innovation", desc: "Adoption of modern tools and industry best practices" },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Portfolio</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AC Services */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Air Conditioning Services (AMC)</CardTitle>
                <CardDescription>Complete lifecycle management of AC systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Comprehensive & Non-Comprehensive AMC</li>
                  <li>• Installation, relocation & commissioning</li>
                  <li>• Gas refilling & coil cleaning</li>
                  <li>• Emergency repair support</li>
                  <li>• HVAC performance audits</li>
                  <li>• All AC types: Window, Split, VRV/VRF, Central HVAC</li>
                </ul>
              </CardContent>
            </Card>

            {/* Civil Work */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Civil Work & Infrastructure</CardTitle>
                <CardDescription>Complete civil and structural projects</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Building repairs & structural strengthening</li>
                  <li>• Plastering, brickwork & concrete work</li>
                  <li>• Flooring, false ceilings & waterproofing</li>
                  <li>• Fire safety & plumbing infrastructure</li>
                  <li>• Interior finishing & fit-out works</li>
                  <li>• Facility refurbishment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Government Supplies */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Government Supplies & Procurement</CardTitle>
                <CardDescription>Reliable partner for government agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Electrical components & HVAC equipment</li>
                  <li>• Civil materials & interior items</li>
                  <li>• Adherence to GEM, GFR, CPWD norms</li>
                  <li>• Tender-based & direct orders</li>
                  <li>• Approved brands & genuine materials</li>
                  <li>• Complete documentation & compliance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Event Management */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Event & Conference Management</CardTitle>
                <CardDescription>High-level events for government & corporates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Government conferences & seminars</li>
                  <li>• Corporate product launches & AGMs</li>
                  <li>• Embassy diplomatic events</li>
                  <li>• End-to-end services: venue, AV, branding</li>
                  <li>• Protocol standards compliance</li>
                  <li>• Logistics & manpower management</li>
                </ul>
              </CardContent>
            </Card>

            {/* Facility Management */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Integrated Facility Management</CardTitle>
                <CardDescription>Comprehensive facility operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Trained technical personnel deployment</li>
                  <li>• HVAC techs, electricians, plumbers</li>
                  <li>• Health & safety audits</li>
                  <li>• MEP AMC management</li>
                  <li>• Building infrastructure maintenance</li>
                  <li>• Operational efficiency optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Central & State Government Departments",
              "Embassies and Diplomatic Missions",
              "Corporate Offices & IT Parks",
              "Hospitals & Healthcare Facilities",
              "Educational Institutions & Universities",
              "PSUs and Autonomous Bodies",
              "Housing Societies & Retail Chains",
              "Industrial Plants",
            ].map((industry, index) => (
              <Badge key={index} variant="secondary" className="p-3 text-center justify-center">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Aaditya Enterprises?</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Multi-Service Expertise",
                desc: "From AMC to civil work, supply logistics, and events",
              },
              { icon: Shield, title: "Government-Certified", desc: "Compliant with tender and procurement frameworks" },
              {
                icon: CheckCircle,
                title: "End-to-End Delivery",
                desc: "One-stop solution for infrastructure and facility needs",
              },
              { icon: Users, title: "Skilled Manpower", desc: "Highly trained and experienced technical staff" },
              { icon: Clock, title: "24x7 Support", desc: "Prompt emergency response and service uptime assurance" },
              {
                icon: Award,
                title: "Transparent Engagement",
                desc: "Clear pricing, documented work, and strong reporting",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-orange-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+91 9873457729</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@aadityaenterprisesind.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-center">Second Floor, WA-117, Shakarpur, East Delhi, Delhi - 110092</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/logo.png" alt="Aaditya Enterprises Logo" className="h-16 w-auto" />
              <div>
                <h3 className="font-bold">AADITYA ENTERPRISES</h3>
                <p className="text-sm text-gray-600">Professional Outsourcing Solutions</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Aaditya Enterprises. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
