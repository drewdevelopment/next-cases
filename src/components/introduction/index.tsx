import { CTA, Introduction } from "@/styles/pages/app"
import Image from "next/image"
import Logo from "@/assets/next-icon.png"

export default function IntroductionSection() {
  const currentRoute = window.location.pathname
  const isHome = currentRoute === "/"

  return (
    <Introduction>
      <header>
        <Image
          src={Logo}
          alt="Next Icon"
          width={100}
          height={100}
        />
      </header>

      <span>
        <CTA isActive={isHome} >Whats new?</CTA>
        <CTA isActive={!isHome} >Check out the main questions</CTA>
      </span>

      <h1>Next Cases</h1>
      <p>
        Here you will have access to the advanced discussion: the main decisions about system architecture and design. 
        Learn through the breakthroughs facing top tech companies!
      </p>

      <p>Want to test it before everyone else?</p>

      <section>
        <input type="email" placeholder="Write your e-mail..." />
        <button>Register</button>
      </section>
    </Introduction>
  )
}