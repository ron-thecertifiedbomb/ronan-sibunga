import React from "react";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ExternalLink,

  GraduationCap,
  Layers,
  Terminal,
  Cpu,
  FileText,
  Bot,
  Workflow
} from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import ContactForm from "@/app/components/ContactForm";
import profile from "@/data/portfolio.json";



export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 relative z-10">

      {/* Header / Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-zinc-900 bg-black/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center h-full">
            <div className="relative h-10 w-10 flex items-center">
              <Image
                src="/portfolio.png"
                alt="RS logo"
                width={112}
                height={48}
                priority
                className="object-contain h-auto max-h-full w-auto"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#services" className="hover:text-zinc-200 transition-colors">Solutions</a>
            <a href="#experience" className="hover:text-zinc-200 transition-colors">Timeline</a>
            <a href="#contact" className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-4">

        {/* Hero Section */}
        <section className="py-6 md:py-10 flex flex-col items-start gap-6 border-b border-zinc-900">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono tracking-wide">
                        ⚙️ SYSTEMS ONLINE // AI & AUTOMATION AGENTS POWERED
                    </div> */}

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-5xl leading-tight">
            Engineering intelligent <span className="text-zinc-400">Mobile Apps, AI Orchestration, & System Automation.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
            Hi, I&apos;m <span className="text-zinc-100 font-semibold">{profile.personal.name}</span>. {profile.personal.summary}
          </p>

          {/* Headline Keywords */}
          {/* <div className="flex flex-wrap gap-2 pt-2 max-w-4xl">
                        {profile.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded bg-zinc-900/40 border border-zinc-800/60 text-xs font-mono text-zinc-500">
                                #{tag}
                            </span>
                        ))}
                    </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-zinc-100 text-black font-semibold hover:bg-zinc-200 shadow-md transition-all">
              Initiate Project Request
            </a>

            <a
              href="/Ronan-Sibunga-Resume.pdf"
              download="Ronan-Sibunga-Resume.pdf"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <FileText size={18} className="text-zinc-400" /> Download CV / Resume
            </a>

            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black border border-zinc-900 font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
              <IconBrandGithub size={18} /> View Source
            </a>
          </div>
        </section>

        {/* Services Block / Solutions Matrix */}
        <section id="services" className="py-16 border-b border-zinc-900">
          <div className="flex flex-col gap-2 mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Terminal className="text-zinc-400" size={22} /> Core Competencies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1. Mobile Architectures */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all">
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">React Native Mobile Engineering</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Cross-platform mobile development natively built via React Native and Expo frameworks. Seamless device hardware provisioning, robust state management, and optimized viewport rendering layout patterns.
              </p>
            </div>

            {/* 2. AI Orchestration */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all">
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center mb-4">
                <Bot size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">AI Orchestration & Agentic Tools</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Deploying production LLM connections, multi-agent frameworks, and vector embedding pipelines using Python and LangChain solutions. Injecting runtime cognitive functionality into standard applications safely.
              </p>
            </div>

            {/* 3. Setup Automation */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all">
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center mb-4">
                <Workflow size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">Infrastructure & Setup Automation</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Scripting end-to-end cloud environment setups, configuration deployments, and CI/CD pipelines. Minimizing repetitive task overhead through targeted Python automations and infrastructure tooling.
              </p>
            </div>

            {/* 4. Fullstack Engines */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all group">
              <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">Backend Services (Node.js & Python)</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                Building fast server microservices in Node.js and Python. Managing complex schema routing pipelines across MongoDB and PostgreSQL database backends.
              </p>
              <a href={profile.contact.website} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1">
                Lizard Interactive Online <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack Checklist */}
        <section id="stack" className="py-16 border-b border-zinc-900">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-8">
            <Cpu className="text-zinc-400" size={22} /> Production Ecosystem
          </h2>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <div key={skill} className="px-4 py-2 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span className="text-sm font-medium text-zinc-400">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional History */}
        <section id="experience" className="py-16 border-b border-zinc-900">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-12">
            <Briefcase className="text-zinc-400" size={22} /> Experience Timeline
          </h2>

          <div className="relative border-l border-zinc-900 ml-4 flex flex-col gap-10">
            {profile.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 group">
                <div className="absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-black border-2 border-zinc-500" />
                <span className="text-xs font-mono text-zinc-500 block mb-1">{exp.period}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-sm font-semibold text-zinc-400 mb-3">{exp.company}</h4>
                <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Credentials */}
        <section className="py-16 border-b border-zinc-900">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-6">
            <GraduationCap className="text-zinc-400" size={22} /> Education Credentials
          </h2>
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-200">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-zinc-500">Systems Technology Institute</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 self-start sm:self-auto">
              2013
            </span>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Let&apos;s talk scope.</h2>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                Have an automation workflow target or mobile app launch timeline? Reach out directly using my verified contact channels.
              </p>

              <div className="flex flex-col gap-3 pt-4 text-sm text-zinc-400">
                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors">
                  <Mail size={16} className="text-zinc-400" />
                  <span>{profile.contact.email}</span>
                </a>
                <a
                  href={`https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <Phone size={16} className="text-zinc-400" />
                  <span>{profile.contact.phone}</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-500">
                  <MapPin size={16} className="text-zinc-400 shrink-0" />
                  <span className="text-xs leading-normal">{profile.contact.address}</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-zinc-950 border border-zinc-900 relative">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer Ecosystem */}
      <footer className="border-t border-zinc-900 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono">
          <div>© {new Date().getFullYear()} Ronan Ramos Sibunga. All systems operational.</div>
          <div className="flex items-center gap-6">
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-400 inline-flex items-center gap-1">
              <IconBrandLinkedin size={12} /> LinkedIn <ExternalLink size={10} />
            </a>
            <a href={profile.contact.website} target="_blank" rel="noreferrer" className="hover:text-zinc-400 inline-flex items-center gap-1">
              Lizard Interactive <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
