"use client";

import React, { useRef } from "react";

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
  Workflow,
} from "lucide-react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import ContactForm from "@/src/components/ContactForm";
import NavBar from "@/src/components/NavBar";

import profile from "@/data/portfolio.json";

export default function PortfolioPage() {
  const servicesRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative z-10 min-h-screen bg-black text-zinc-300">
      {/* Header */}
      <NavBar
        servicesRef={servicesRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-4">
        {/* Hero */}
        <section className="flex flex-col items-start gap-6 border-b border-zinc-900 py-6 md:py-10">
          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Engineering intelligent{" "}
            <span className="text-zinc-400">
              Mobile Apps, AI Orchestration, & System Automation.
            </span>
          </h1>

          <p className="max-w-3xl text-lg font-normal leading-relaxed text-zinc-400 md:text-xl">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-zinc-100">
              {profile.personal.name}
            </span>
            . {profile.personal.summary}
          </p>

          {/* CTA */}
          <div className="flex w-full flex-wrap items-center gap-4 pt-4 sm:w-auto">
            <button
              onClick={scrollToContact}
              className="w-full rounded-lg bg-zinc-100 px-6 py-3 text-center font-semibold text-black shadow-md transition-all hover:bg-zinc-200 sm:w-auto"
            >
              Initiate Project Request
            </button>

            <a
              href="/Ronan-Sibunga-Resume.pdf"
              download="Ronan-Sibunga-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-center font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:w-auto"
            >
              <FileText size={18} className="text-zinc-400" />
              Download CV / Resume
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-900 bg-black px-6 py-3 text-center font-medium text-zinc-500 transition-colors hover:text-zinc-300 sm:w-auto"
            >
              <IconBrandGithub size={18} />
              View Source
            </a>
          </div>
        </section>

        {/* Services */}
        <section
          ref={servicesRef}
          className="scroll-mt-24 border-b border-zinc-900 py-16"
        >
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <Terminal className="text-zinc-400" size={22} />
              Core Competencies
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-all hover:border-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                <Layers size={20} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-zinc-200">
                React Native Mobile Engineering
              </h3>

              <p className="text-sm leading-relaxed text-zinc-500">
                Cross-platform mobile development natively built via React
                Native and Expo frameworks. Seamless device hardware
                provisioning, robust state management, and optimized viewport
                rendering layout patterns.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-all hover:border-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                <Bot size={20} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-zinc-200">
                AI Orchestration & Agentic Tools
              </h3>

              <p className="text-sm leading-relaxed text-zinc-500">
                Deploying production LLM connections, multi-agent frameworks,
                and vector embedding pipelines using Python and LangChain
                solutions.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-all hover:border-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                <Workflow size={20} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-zinc-200">
                Infrastructure & Setup Automation
              </h3>

              <p className="text-sm leading-relaxed text-zinc-500">
                Scripting end-to-end cloud environment setups, configuration
                deployments, and CI/CD pipelines.
              </p>
            </div>

            <div className="group rounded-xl border border-zinc-900 bg-zinc-950 p-6 transition-all hover:border-zinc-800">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                <Cpu size={20} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-zinc-200">
                Backend Services (Node.js & Python)
              </h3>

              <p className="mb-3 text-sm leading-relaxed text-zinc-500">
                Building fast server microservices in Node.js and Python while
                managing complex schema routing pipelines across PostgreSQL and
                MongoDB.
              </p>

              <a
                href={profile.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white"
              >
                Lizard Interactive Online
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-b border-zinc-900 py-16">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <Cpu className="text-zinc-400" size={22} />
            Production Ecosystem
          </h2>

          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950 px-4 py-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

                <span className="text-sm font-medium text-zinc-400">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          ref={experienceRef}
          className="scroll-mt-24 border-b border-zinc-900 py-16"
        >
          <h2 className="mb-12 flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <Briefcase className="text-zinc-400" size={22} />
            Experience Timeline
          </h2>

          <div className="relative ml-4 flex flex-col gap-10 border-l border-zinc-900">
            {profile.experience.map((exp, index) => (
              <div key={index} className="group relative pl-8">
                <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-zinc-500 bg-black" />

                <span className="mb-1 block text-xs font-mono text-zinc-500">
                  {exp.period}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>

                <h4 className="mb-3 text-sm font-semibold text-zinc-400">
                  {exp.company}
                </h4>

                <p className="max-w-3xl text-sm leading-relaxed text-zinc-500">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-zinc-900 py-16">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <GraduationCap className="text-zinc-400" size={22} />
            Education Credentials
          </h2>

          <div className="flex flex-col justify-between gap-4 rounded-xl border border-zinc-900 bg-zinc-950 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-bold text-zinc-200">
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-sm text-zinc-500">
                Systems Technology Institute
              </p>
            </div>

            <span className="self-start rounded border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400 sm:self-auto">
              2013
            </span>
          </div>
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          className="scroll-mt-24 py-16 md:py-24"
        >
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Let&apos;s talk scope.
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-zinc-500">
                Have an automation workflow target or mobile app launch
                timeline? Reach out directly using my verified contact channels.
              </p>

              <div className="flex flex-col gap-3 pt-4 text-sm text-zinc-400">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3 transition-colors hover:border-zinc-800"
                >
                  <Mail size={16} className="text-zinc-400" />
                  <span>{profile.contact.email}</span>
                </a>

                <a
                  href={`https://wa.me/${profile.contact.phone.replace(
                    /[^0-9]/g,
                    "",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3 transition-colors hover:border-zinc-800"
                >
                  <Phone size={16} className="text-zinc-400" />
                  <span>{profile.contact.phone}</span>
                </a>

                <div className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-950 p-3 text-zinc-500">
                  <MapPin
                    size={16}
                    className="shrink-0 text-zinc-400"
                  />

                  <span className="text-xs leading-normal">
                    {profile.contact.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl border border-zinc-900 bg-zinc-950 p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-zinc-600 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Ronan Ramos Sibunga. All systems
            operational.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-400"
            >
              <IconBrandLinkedin size={12} />
              LinkedIn
              <ExternalLink size={10} />
            </a>

            <a
              href={profile.contact.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-400"
            >
              Lizard Interactive
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}