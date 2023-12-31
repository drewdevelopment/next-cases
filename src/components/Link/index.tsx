"use client"
import { NextLink } from "@/styles/components/link"

interface Link {
  children: string;
  href: string;
}

export default function Link({ children, href, ...props }: Link) {
  return <NextLink href={href} {...props}>{children}</NextLink>
}
