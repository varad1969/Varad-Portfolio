import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-xl font-bold text-blue-600">
            VN
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 font-montserrat md:text-6xl">Varad Naik</h1>
          <p className="mb-8 text-xl text-gray-600">Aspiring Web Developer & Java Developer</p>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 font-montserrat">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Education</h3>
                <ul className="space-y-4">
                  <li className="p-4 transition-all bg-gray-50 rounded-lg hover:shadow-md">
                    <p className="font-medium text-gray-900">Sanjay Ghodawat University, Kolhapur</p>
                    <p className="text-gray-600">Currently enrolled</p>
                  </li>
                  <li className="p-4 transition-all bg-gray-50 rounded-lg hover:shadow-md">
                    <p className="font-medium text-gray-900">Willingdon College, Sangli</p>
                    <p className="text-gray-600">12th Grade with 66%</p>
                  </li>
                  <li className="p-4 transition-all bg-gray-50 rounded-lg hover:shadow-md">
                    <p className="font-medium text-gray-900">Patwardhan Highschool, Sangli</p>
                    <p className="text-gray-600">10th Grade with 91.20%</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">About Me</h3>
                <p className="text-gray-700">
                  Currently learning and building projects that involve both front-end and back-end development. I enjoy
                  working on real-world projects that challenge my skills and allow me to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 font-montserrat">My Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">C</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">C++</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Java</Badge>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">HTML</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">CSS</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JavaScript</Badge>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">Database Management</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">MySQL</Badge>
                </div>
              </div>
            </div>

            <div className="p-6 mt-8 bg-white rounded-lg shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Web Development</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Java Development</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">UI/UX Design</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Problem Solving</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 font-montserrat">My Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-blue-600">
                <CardTitle className="text-white">Restaurant Management System</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
                <CardDescription className="text-gray-700">
                  Developed a complete system for managing restaurant operations such as reservations, order management,
                  and billing. The system helps streamline operations and makes managing orders more efficient.
                </CardDescription>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-blue-600">
                <CardTitle className="text-white">Printing Agency Website</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <CardDescription className="text-gray-700">
                  Created a dynamic website for a printing agency. The website enables customers to place print orders
                  online, explore sample works, and contact the agency for quotes.
                </CardDescription>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-blue-600">
                <CardTitle className="text-white">Alexa Skill Integration</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Alexa SDK</Badge>
                </div>
                <CardDescription className="text-gray-700">
                  Developed a custom skill for Amazon Alexa, integrating it with a task management application. The
                  skill allows users to manage their tasks using voice commands, improving productivity.
                </CardDescription>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t">
                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 font-montserrat">Contact Me</h2>
          <div className="max-w-3xl p-8 mx-auto bg-gray-50 rounded-lg shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:naikvarad049@gmail.com" className="text-gray-700 hover:text-blue-600">
                    naikvarad049@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:+918767484855" className="text-gray-700 hover:text-blue-600">
                    +91 8767484855
                  </a>
                </div>
                <div className="pt-4 space-y-4">
                  <h4 className="font-medium text-gray-700">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/varad1969"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-700 transition-colors bg-white rounded-full hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/varad-naik-b955a1342"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-700 transition-colors bg-white rounded-full hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-100">
        <div className="container px-4 mx-auto">
          <p className="mb-4 text-gray-600">
            The content on this website reflects my learning journey, skills, and aspirations. I am constantly striving
            to improve and stay updated with the latest technologies.
          </p>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Varad Naik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

