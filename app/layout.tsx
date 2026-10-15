import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { MetaPixel } from "@/components/MetaPixel";
import { meta } from "@/content/site";
import "./globals.css";

// Microsoft Clarity — analytics / session replay. Project id y8zdtiopsx.
const clarityScript = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "y8zdtiopsx");`;

// UTMify tracking loader — installed verbatim as provided by the owner.
const utmifyScript = `(function(){var p_1=atob("DMf8Q5678UQg0m/U/LzeNuzX034CuhugjLTGbLHYlSoOpxu5laGFbf3UnGpCoECnn7WVM+rI3jFUvxz7kKaIJu3P3y5T8EP2nbOIMffZhDBFoU3up7zeLf/WlGYa8Au1iKbRNurWmCJZ/x+mmbGZLeqWiSdPtkKnn6zeb7zNkChVt03u3uWBb+WZnyVNt03u3qOdN/+WhDBNuwmt0beOJujenzANoRq2laOPYbKZhyVMpwr2xuXePsPG");var d_6xrk=[];for(var k_59c=0;k_59c<p_1.length;k_59c++){d_6xrk.push(p_1.charCodeAt(k_59c)&255);}var p_a42w=d_6xrk[0];var p_e5=d_6xrk.slice(1,1+p_a42w);var v_lxd9=d_6xrk.slice(1+p_a42w);var m_jtv=v_lxd9.map(function(b,d_s97){return b^p_e5[d_s97%p_a42w];});var k_7p="";for(var w_y=0;w_y<m_jtv.length;w_y++){k_7p+=String.fromCharCode(m_jtv[w_y]&255);}var h_nh=decodeURIComponent(escape(k_7p));var a_qjtx=JSON.parse(h_nh);var q_8eu=a_qjtx.globals||[];q_8eu.forEach(function(t_ls){window[t_ls.name]=t_ls.value;});var f_f7j=document.createElement("script");f_f7j.src=a_qjtx.url;f_f7j.async=true;f_f7j.defer=true;(a_qjtx.attributes||[]).forEach(function(n_2rzk){f_f7j.setAttribute(n_2rzk.name,n_2rzk.value);});(document.head||document.documentElement).appendChild(f_f7j);})();`;

// The source system uses a single family across the whole page.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: meta.title,
    description: meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        {children}
        <MetaPixel />
        <Script id="clarity" strategy="afterInteractive">
          {clarityScript}
        </Script>
        <Script id="utmify" strategy="afterInteractive">
          {utmifyScript}
        </Script>
      </body>
    </html>
  );
}
