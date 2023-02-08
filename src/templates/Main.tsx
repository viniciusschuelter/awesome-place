import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const colorsStats =
  'hidden bg-green-500 bg-lime-500 bg-yellow-500 bg-amber-500 bg-orange-500 bg-red-500 text-green-500 text-lime-500 text-yellow-500 text-amber-500 text-orange-500 text-red-500';

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className={colorsStats} />

    <div className="mx-auto">
      <div className="mx-auto border-b border-gray-300">
        <div className="py-8 text-center">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex max-w-screen-md flex-wrap text-xl ">
            <li className="mr-6">
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Top Overall
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/cost/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Top Cost
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/internet/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Top Internet
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/fun/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Top Fun
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/safety/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Top Safety
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
    </div>
  </div>
);

export { Main };
