import Image from "next/image"
import NextCases from "@/assets/next-cases.png"
import { Container } from "@/styles/pages/home"

export default function Home() {
  return (
    <Container>
      <Image
        src={NextCases}
        alt="Next Cases"
        width={1280}
        height={720}
      />
    </Container>
  )
}
