"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SiGithub, SiGoogle, SiMicrosoft } from "react-icons/si";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <section className="flex h-screen w-screen justify-between bg-gray-900">
        <div className="flex w-1/5 flex-row items-center justify-center p-5 align-middle">
          <Image src="/logo.png" width={50} height={50} alt="Commentify" />
          <p>Commentify!</p>
        </div>
        <div className="relative flex h-full w-4/5 flex-col items-center justify-center bg-background">
          <div className="flex w-1/3 flex-col items-center justify-center gap-2">
            <p className="mb-4 text-4xl font-bold text-foreground">
              Create your account!
            </p>
            <Label htmlFor="email" className="self-start">
              Email address
            </Label>
            <Input id="email" placeholder="user@commentify.dev" />

            <Link href="/commentify">
              <Button className="mt-5 w-48">Sign Up</Button>
            </Link>
            <div className="flex gap-2">
              <p className="text-sm">Already have an account?</p>
              <Link href="/login" className="text-sm text-[#D36A7B]">
                Log In
              </Link>
            </div>
            <div className="my-10 flex items-center">
              <div className="h-0 w-56 border" />
              <p className="mx-4 text-muted-foreground">or</p>
              <div className="h-0 w-56 border" />
            </div>
            <div className="flex flex-col gap-4">
              <Button className="justify-start gap-2">
                <SiGoogle />
                Continue with Google
              </Button>
              <Button className="justify-start gap-2">
                <SiGithub />
                Continue with GitHub
              </Button>
              <Button className="justify-start gap-2">
                <SiMicrosoft />
                Continue with Microsoft Account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
