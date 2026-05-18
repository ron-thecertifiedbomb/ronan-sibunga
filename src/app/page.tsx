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


import profile from "@/data/portfolio.json";
import ContactForm from "@/src/components/ContactForm";
import NavBar from "@/src/components/NavBar";

const iconMap = {
  "End-to-End Product Engineering": Layers,
  "Distributed Systems & Backend Architecture": Cpu,
  "AI Orchestration & Intelligent Automation": Bot,
  "React Native Mobile Ecosystems": Workflow,
  "Cloud Infrastructure & DevOps": Terminal,
};

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
      <NavBar
        servicesRef={servicesRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />

      <main className="mx-auto max-w-6xl px-6 py-4">
        <HeroSection scrollToContact={scrollToContact} />
        <ServicesSection ref={servicesRef} />
        <StackSection />
        <ExperienceSection ref={experienceRef} />
        <EducationSection />
        <ContactSection ref={contactRef} />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection({
  scrollToContact,
}: {
  scrollToContact: () => void;
}) {
  return (
    <section className="flex flex-col items-start gap-6 border-b border-zinc-900 py-10 md:py-16">
      <div className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
          Distributed Systems • AI Orchestration • Platform Engineering
        </p>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Designing scalable{" "}
          <span className="text-zinc-400">
            software systems across AI, mobile, backend, and cloud
            infrastructure.
          </span>
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-zinc-500 md:text-xl">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-zinc-100">
            {profile.personal.name}
          </span>
          . {profile.personal.summary}
        </p>
      </div>

      <div className="flex w-full flex-wrap items-center gap-4 pt-4 sm:w-auto">
        <button
          onClick={scrollToContact}
          className="w-full rounded-xl bg-white px-6 py-3 text-center font-semibold text-black transition-all hover:bg-zinc-200 sm:w-auto"
        >
          Initiate Project Request
        </button>

        <a
          href="/Ronan-Sibunga-Resume.pdf"
          download="Ronan-Sibunga-Resume.pdf"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-900 hover:text-white sm:w-auto"
        >
          <FileText size={18} />
          Download Resume
        </a>

        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-900 bg-black px-6 py-3 font-medium text-zinc-500 transition-all hover:text-zinc-300 sm:w-auto"
        >
          <IconBrandGithub size={18} />
          View Source
        </a>
      </div>
    </section>
  );
}

const ServicesSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-mt-24 border-b border-zinc-900 py-20"
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
          Systems Expertise
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Building Modern Distributed Applications
        </h2>

        <p className="mt-4 text-base leading-relaxed text-zinc-500">
          Focused on scalable systems engineering, AI orchestration,
          infrastructure automation, and production-grade application
          ecosystems across mobile, backend, and cloud-native platforms.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {profile.competencies.map((service) => {
          const Icon =
            iconMap[
            service.title as keyof typeof iconMap
            ] || Layers;

          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-zinc-900 bg-zinc-950/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-black text-zinc-300">
                <Icon size={22} />
              </div>

              <h3 className="mb-3 text-lg font-semibold tracking-tight text-white">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-500">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

function StackSection() {
  return (
    <section className="border-b border-zinc-900 py-20">
      <div className="mb-10">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
          Production Systems Stack
        </p>

        <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-white">
          <Cpu className="text-zinc-400" size={24} />
          Infrastructure & Engineering Ecosystem
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2 transition-all hover:border-zinc-700"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="text-sm font-medium text-zinc-400">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const ExperienceSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-mt-24 border-b border-zinc-900 py-20"
    >
      <div className="mb-12">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
          Engineering Timeline
        </p>

        <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-white">
          <Briefcase className="text-zinc-400" size={24} />
          Professional Experience
        </h2>
      </div>

      <div className="relative ml-4 flex flex-col gap-10 border-l border-zinc-900">
        {profile.experience.map((exp, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-black" />

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
  );
});

ExperienceSection.displayName = "ExperienceSection";

function EducationSection() {
  return (
    <section className="border-b border-zinc-900 py-20">
      <div className="mb-8">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
          Academic Foundation
        </p>

        <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-white">
          <GraduationCap className="text-zinc-400" size={24} />
          Education
        </h2>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-zinc-900 bg-zinc-950 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold text-zinc-200">
            {profile.education.degree}
          </h3>

          <p className="text-sm text-zinc-500">
            {profile.education.school}
          </p>
        </div>

        <span className="self-start rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-mono text-zinc-400 sm:self-auto">
          {profile.education.year}
        </span>
      </div>
    </section>
  );
}

const ContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="scroll-mt-24 py-20 md:py-28">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
            Contact & Collaboration
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s build scalable systems together.
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-zinc-500">
            Need AI orchestration, mobile platform engineering,
            distributed backend systems, or workflow automation?
            Reach out through verified communication channels below.
          </p>

          <div className="flex flex-col gap-3 pt-4 text-sm text-zinc-400">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-950 p-4 transition-all hover:border-zinc-700"
            >
              <Mail size={16} />
              <span>{profile.contact.email}</span>
            </a>

            <a
              href={`https://wa.me/${profile.contact.phone.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-950 p-4 transition-all hover:border-zinc-700"
            >
              <Phone size={16} />
              <span>{profile.contact.phone}</span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-900 bg-zinc-950 p-4 text-zinc-500">
              <MapPin size={16} className="shrink-0" />

              <span className="text-xs leading-normal">
                {profile.contact.address}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div className="text-center leading-relaxed md:text-left">
          <p>
            © {new Date().getFullYear()} Ronan Ramos Sibunga.
          </p>

          <p className="mt-1 text-xs text-zinc-700">
            Distributed systems • AI orchestration • platform engineering
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:gap-6 md:justify-end">
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-300"
          >
            <IconBrandLinkedin size={14} />
            LinkedIn
            <ExternalLink size={10} />
          </a>

          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-300"
          >
            <IconBrandGithub size={14} />
            GitHub
            <ExternalLink size={10} />
          </a>

          <a
            href={profile.contact.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-300"
          >
         lizardinteractive.online
            <ExternalLink size={10} />
          </a>
          <a
            href={profile.contact.companyWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-300"
          >
            rondev.com.ph
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}