import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import appStylesHref from "./app.css?url";
import { createContext, useState } from "react";
import { SettingsProvider } from "~/components/hooks/UseSettings";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export const SettingsContext = createContext({
  showHint: true,
  shuffle: false,
});

export default function App() {
  const [settings, setSettings] = useState({
    showHint: true,
    shuffle: false,
  });
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <div>
            <p>タイピングゲーム</p>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={`play`}
                >
                  ゲーム
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={`watch`}
                >
                  時こく
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                  to={`settings`}
                >
                  せってい
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <SettingsProvider>
          <div id="detail">
            <Outlet />
          </div>
        </SettingsProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
