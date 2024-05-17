/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NN6GXB92MCu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import weTen from "./images/weTendies.png";
import sw17 from "./images/sw17.png";
import sw12 from "./images/sw12.png";
import sw14 from "./images/sw14.png";
import sw16 from "./images/sw16.png";
import sw7 from "./images/sw7.png";
import s8 from "./images/s8.png";
import sw11 from "./images/sw11.png";
import gib from "./images/gib.png";
import box0 from "./images/boxer/box0.png";
import box3 from "./images/boxer/box3.png";
import box4 from "./images/boxer/box4.png";
import box5 from "./images/boxer/box5.png";

export function Landing() {
  return (
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <CatIcon className="h-6 w-6 text-pink-500" />
          <span className="sr-only">Catgirl Land</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-pink-500"
            href="https://twitter.com/CatgirlSweeney"
          >
            X (Twitter)
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-pink-500"
            href="https://t.me/CatgirlSweeney"
          >
            Telegram
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-10 md:py-20 lg:py-20 flex items-center justify-center">
          <div className="container flex items-center justify-center">
            <div className="grid items-center">
              <div className="flex flex-col">
                <div className="flex flex-col justify-center items-left p-4 sm:p-10">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pink-500">
                    Finally,
                  </h1>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pink-500">
                    A Catgirl Version of Sydney Sweeney
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 pt-3">
                    Tokenized on soylana only for you senpai!
                  </p>
                  <p className="max-w-[600px] text-gray-500 text-xs sm:text-sm dark:text-gray-400 pt-2">
                    CA: BAcgDDddFrgMPpLR1wmNrqgJxiFrnzSRsPHmx9N7sCp9
                  </p>
                </div>
                <div className="flex flex-col min-[400px]:flex-row justify-center items-center p-10">
                  {/* <Link
                    className="inline-flex h-10 items-center justify-center rounded-full bg-pink-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Buy now at pumpdotfun
                  </Link> */}
                  <Link
                    className="inline-flex h-12 items-center justify-center border-green-500 bg-white px-10 text-lg font-medium text-pink-500 shadow-sm transition-colors hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                    href="https://www.pump.fun/BAcgDDddFrgMPpLR1wmNrqgJxiFrnzSRsPHmx9N7sCp9"
                  >
                    Buy now at pumpdotfun
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  alt="Catgirl"
                  className="mx-auto aspect-contain overflow-hidden object-contain object-top"
                  height={900}
                  src={weTen.src}
                  width={900}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-10 md:py-24 lg:py-32 bg-pink-50 dark:bg-pink-900 flex items-center justify-center">
          <div className="container grid items-center justify-center  px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-500 pb-5">
                $CGS
              </h2>
              {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover a collection of adorable catgirl illustrations.
              </p> */}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw17.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw12.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw14.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw16.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw7.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={s8.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={sw11.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={gib.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={box0.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={box3.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={box4.src}
                width={250}
              />
              <img
                alt="Catgirl"
                className="overflow-hidden object-contain"
                height={250}
                src={box5.src}
                width={250}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          CatgirSweeney is not affiliated with Sydney Sweeney but is a tribute
          to the beloved queen.
        </p>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CatgirlSweeny. All rights reserved.
          </p>
          {/* <Link
            className="text-xs hover:underline underline-offset-4 text-pink-500"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-pink-500"
            href="#"
          >
            Privacy
          </Link> */}
        </nav>
      </footer>
    </div>
  );
}

function CatIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  );
}
