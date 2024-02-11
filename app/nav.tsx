import { Essay } from 'contentlayer/generated';
import Link from 'next/link';

import { allEssays } from '@/lib/essay';
import { cn } from '@/lib/utils';

import { ThemeToggleButton } from './theme-provider';

type EssaysByYear = { [year: number]: Essay[] };

export function Nav({ className }: { className?: string }) {
  const essaysByYear = allEssays.reduce((acc: EssaysByYear, essay) => {
    const year = new Date(essay.date).getFullYear();
    acc[year] = [...(acc[year] || []), essay];
    return acc;
  }, {});

  return (
    <aside className={cn(className, 'relative')}>
      <header>
        <Link
          href="/"
          className="text-2xl text-primary no-underline md:text-3xl"
        >
          <span className="font-semibold tracking-tight">황성현</span>·
          <span>黃晟鉉</span>
        </Link>
        <ul className="mt-4 flex flex-row items-center gap-2">
          <li>
            <a href="/rss.xml">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-none stroke-primary"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20M6 19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
          <li>
            <Link href="mailto:hwang@hey.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-none stroke-primary"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://x.com/hwangbyhwang">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 fill-primary"
                viewBox="0 0 1200 1227"
              >
                <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/sunghyunzz/index.html">
              <svg
                viewBox="0 0 256 250"
                className="h-4 w-4 fill-primary"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/sunghyunzz/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-primary"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              >
                <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
              </svg>
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-sm opacity-30">
          &copy; {new Date().getFullYear()}. 황성현. All rights reserved.
        </p>
      </header>
      <nav className="mb-8 mt-12 hidden md:block">
        <ol className="flex flex-col gap-7">
          {Object.entries(essaysByYear)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map(([year, essays]) => (
              <li key={year} className="flex flex-col gap-1.5 opacity-80">
                <time className="font-semibold text-primary">{year}</time>
                <ol className="flex flex-col gap-1.5">
                  {essays.map((essay) => (
                    <li key={essay._id}>
                      <Link href={essay.url} className="font-medium">
                        {essay.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
        </ol>
      </nav>
      <div className="absolute bottom-[calc(50%-18px)] right-4 z-20 md:fixed md:bottom-4 md:left-4">
        <ThemeToggleButton />
      </div>
    </aside>
  );
}
