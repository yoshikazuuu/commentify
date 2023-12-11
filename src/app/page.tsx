"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function LoginPage() {
  const arrayOfText = ["faster", "with ease", "effortlessly", "beautifully"];
  const [text, setText] = useState(arrayOfText[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % arrayOfText.length;
        setText(arrayOfText[newIndex]);
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <>
      <section className="flex h-screen w-screen justify-between bg-[#D36A7B]">
        <div className="flex flex-col justify-between p-5">
          <Image src="/logo.png" width={50} height={50} alt="Commentify" />
          <h1 className="w-[500px] text-8xl font-black tracking-tighter">
            Document your code {text}
          </h1>
          <p>Commentify!</p>
        </div>
        <div className="relative flex h-full w-[500px] flex-col items-center justify-center bg-background">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-foreground">Get Started</h1>
            <div className="flex gap-4">
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
              <Link href="/login">
                <Button>Log In</Button>
              </Link>
            </div>
          </div>
          <div className="relative top-[25%] flex flex-col items-center">
            <div className="flex">
              <Image src="/logo.png" width={25} height={25} alt="Commentify" />
              <p className="text-lg">Commentify</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger className="text-sm text-muted-foreground">
                About
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>About</AlertDialogTitle>
                  <AlertDialogDescription>
                    Welcome to Commentify, your go-to tool for automated code
                    documentation.
                    <br />
                    <br />
                    Whether you're a junior or senior developer, our innovative
                    solution simplifies the documentation process, providing a
                    straightforward and efficient interface.
                    <br />
                    <br />
                    Commentify supports a variety of programming languages,
                    recognizing the diverse needs of projects.
                    <br />
                    <br />
                    We believe in making quality tools accessible, and
                    Commentify comes at an affordable price, ensuring that the
                    benefits of automated documentation are within reach for all
                    developers.
                    <br />
                    <br />
                    With Commentify, you can say goodbye to manual
                    documentation. Our tool generates clear and structured
                    comments for your code, designed to be easily understood by
                    developers of all levels.
                    <br />
                    <br />
                    Integration with commonly used development tools ensures
                    seamless alignment with your workflow.
                    <br />
                    <br />
                    Join the Commentify community and elevate your development
                    productivity. Experience a positive shift in how you
                    document code – choose Commentify!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>
    </>
  );
}
