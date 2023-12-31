import { Introduction } from "@/styles/pages/app"
import Image from "next/image"
import Logo from "@/assets/next-icon.png"

export default function IntroductionSection() {
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
    </Introduction>
  )
}