import { AboutMe } from "@/components/sections/about-me"
import { ContactMe } from "@/components/sections/contact-me"
import { Hackathons } from "@/components/sections/hackathons"
import { ProfileHeader } from "@/components/sections/profile-header"
import { Projects } from "@/components/sections/projects"
import { WorkExperience } from "@/components/sections/work-experience"

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      <ProfileHeader name="Faiz Mustansar" username="faizm10" isActive={true} />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Hackathons />
      <ContactMe />
      </section>
  )
}
