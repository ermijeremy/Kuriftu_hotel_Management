import Image from "next/image"
import Link from "next/link"
import { Check, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#f8e0c0]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Kuriftu Resort Rooms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              Experience the Serenity of our Luxury Rooms
            </h1>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Room 1 */}
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Zen-Plus Lake View"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">Zen-Plus Lake View</h2>
                  <p className="text-[#5D4037] mt-1">Spacious room with panoramic lake views</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#8B4513]">$250</div>
                  <p className="text-sm text-[#5D4037]">per night</p>
                </div>
              </div>

              <Separator className="my-4 bg-[#D7CCC8]" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Room Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> King-sized bed
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Private balcony
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Air conditioning
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Free Wi-Fi
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Mini bar
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#8B4513] mb-2">Room Details</h3>
                    <p className="text-[#5D4037] mb-4">
                      Our premium lake view room offers stunning panoramic views, luxury amenities, and a spacious
                      layout perfect for couples or solo travelers seeking comfort and tranquility.
                    </p>
                  </div>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">Book Now</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Room 2 */}
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Zen-Plus Resort & Spa Benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">Zen-Plus Resort & Spa Benefits</h2>
                  <p className="text-[#5D4037] mt-1">Luxury room with exclusive spa access</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#8B4513]">$350</div>
                  <p className="text-sm text-[#5D4037]">per night</p>
                </div>
              </div>

              <Separator className="my-4 bg-[#D7CCC8]" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Room Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> King-sized bed
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Private balcony
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Air conditioning
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Free Wi-Fi
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Complimentary spa access
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#8B4513] mb-2">Room Details</h3>
                    <p className="text-[#5D4037] mb-4">
                      Indulge in luxury with our resort and spa package. This premium room includes exclusive access to
                      our spa facilities, daily treatments, and premium amenities for the ultimate relaxation
                      experience.
                    </p>
                  </div>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">Book Now</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Room 3 */}
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Zen-Plus Resort & Spa Private"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">Zen-Plus Resort & Spa Private</h2>
                  <p className="text-[#5D4037] mt-1">Premium suite with private spa facilities</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#8B4513]">$450</div>
                  <p className="text-sm text-[#5D4037]">per night</p>
                </div>
              </div>

              <Separator className="my-4 bg-[#D7CCC8]" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Room Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> King-sized bed
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Private terrace
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> In-room jacuzzi
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Free Wi-Fi
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Private spa treatments
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#8B4513] mb-2">Room Details</h3>
                    <p className="text-[#5D4037] mb-4">
                      Our most exclusive accommodation featuring a private spa area within your suite. Enjoy
                      personalized treatments, a private jacuzzi, and premium amenities for the ultimate luxury
                      experience.
                    </p>
                  </div>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">Book Now</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Room 4 */}
          <div className="bg-[#EDDCBE] rounded-lg overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Zen-Plus Beach Suite"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8B4513]">Zen-Plus Beach Suite</h2>
                  <p className="text-[#5D4037] mt-1">Beachfront suite with direct access to the shore</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#8B4513]">$550</div>
                  <p className="text-sm text-[#5D4037]">per night</p>
                </div>
              </div>

              <Separator className="my-4 bg-[#D7CCC8]" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#8B4513] mb-2">Room Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> King-sized bed
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Beachfront location
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Private deck
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Outdoor shower
                    </li>
                    <li className="flex items-center text-[#5D4037]">
                      <Check className="w-4 h-4 mr-2 text-green-600" /> Butler service
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#8B4513] mb-2">Room Details</h3>
                    <p className="text-[#5D4037] mb-4">
                      Our premium beachfront suite offers direct access to the lake shore, a private deck for
                      sunbathing, and exclusive amenities including dedicated butler service and customized dining
                      options.
                    </p>
                  </div>
                  <Button className="bg-[#8B4513] hover:bg-[#6D4C41] text-white self-end">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hyge Royal Resort</h3>
              <address className="not-italic">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Resort Avenue, Lake District</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 234 567 8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@hygeroyal.com</span>
                </div>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/african-village" className="hover:underline">
                    African Village
                  </Link>
                </li>
                <li>
                  <Link href="/lake-view" className="hover:underline">
                    Lake View
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="hover:underline">
                    Rooms & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for special deals and updates</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-black" />
                <Button className="bg-[#6D4C41] hover:bg-[#5D4037] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#A1887F] mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Hyge Royal Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

