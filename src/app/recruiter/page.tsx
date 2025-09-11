import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Download, Mail, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruiter Info",
  description: "Simple info for recruiters about Faiz Mustansar",
};

const BLUR_FADE_DELAY = 0.04;

export default function RecruiterPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      {/* Header */}
      <section>
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">For Recruiters</h1>
              <p className="text-muted-foreground">Simple info about me</p>
            </div>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex gap-3 justify-center">
              <a href="/resume/MustansarFaizResume.pdf" target="_blank">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
              <a href={`mailto:${DATA.contact.email}`}>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Summary */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-4">Summary</h2>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {DATA.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium">School</p>
                <p className="text-muted-foreground">University of Guelph</p>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Brampton, ON</p>
              </div>
              <div>
                <p className="font-medium">Available</p>
                <p className="text-muted-foreground">2026 Winter</p>
              </div>
              <div>
                <p className="font-medium">Experience</p>
                <p className="text-muted-foreground">3+ years coding</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Contact */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Email</p>
              <a href={`mailto:${DATA.contact.email}`} className="text-muted-foreground hover:text-primary">
                {DATA.contact.email}
              </a>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <a href={`tel:${DATA.contact.tel}`} className="text-muted-foreground hover:text-primary">
                {DATA.contact.tel}
              </a>
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                linkedin.com/in/faizmustansar
              </a>
            </div>
            <div>
              <p className="font-medium">GitHub</p>
              <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                github.com/faizm10
              </a>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        </BlurFade>
        
        <div className="space-y-6">
  {/* Custom Work Experience - Filled with your summarized roles */}
  <BlurFade delay={BLUR_FADE_DELAY * 8}>
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">Software Engineer (Intern)</h3>
          <p className="text-sm text-muted-foreground">Brown & Beatty AI • Toronto, ON</p>
        </div>
        <span className="text-sm text-muted-foreground">May 2025 – Present</span>
      </div>
      {/* <p className="text-sm text-muted-foreground">
        Full-stack ownership across Next.js/TypeScript, Prisma + PostgreSQL, and AWS uploads.
        Partnered with non-technical admins, turned loose requirements into shippable features,
        and kept teams unblocked with clear updates. Delivered cleaner data models and faster APIs,
        cutting routine admin time and improving reliability. Comfortable with auth (OAuth-style sessions),
        testing basics, and lightweight docs to keep everyone aligned.
      </p> */}
    </div>
  </BlurFade>

  {/* Additional Custom Work - Filled with your U of G role */}
  <BlurFade delay={BLUR_FADE_DELAY * 9}>
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">Full-Stack Developer (Intern)</h3>
          <p className="text-sm text-muted-foreground">University of Guelph • Guelph, ON</p>
        </div>
        <span className="text-sm text-muted-foreground">May 2025 – Aug 2025</span>
      </div>
      {/* <p className="text-sm text-muted-foreground">
        Built student-facing tools and internal dashboards that replaced manual workflows.
        Collaborated directly with stakeholders to scope MVPs, wrote simple REST endpoints,
        and wired Supabase/Postgres for secure data access. Shipped booking + notifications
        and a streamlined review process, reducing back-and-forth and helping teams move faster.
        Tech comfort zone: TypeScript, React/Next.js, Tailwind, REST, Postgres/Supabase.
      </p> */}
    </div>
  </BlurFade>
</div>

      </section>

      {/* References */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold mb-4 space-y-4">References</h2>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="space-y-6">
            <div className="relative flex items-center gap-3 p-4 border rounded-lg">
              {/* Coming Soon Badge */}
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md transform rotate-12 shadow-md">
                Coming Soon
              </div>
              
              <FileText className="w-6 h-6 text-muted-foreground" />
              <div className="flex-1">
                <h3 className="font-medium text-muted-foreground">Reference Letter</h3>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer Intern - Mary-Anne Moroz
                </p>
              </div>
              <Button variant="outline" size="sm" disabled>
                <Download className="w-4 h-4 mr-2" />
                View PDF
              </Button>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <FileText className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <h3 className="font-medium">Reference Letter</h3>
                <p className="text-sm text-muted-foreground">
                  Undergraduate Research Assistant - Nicole Mccallum
                </p>
              </div>
              <a 
                href="/resume/FaizMustansarReference.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  View PDF
                </Button>
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
