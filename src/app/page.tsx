import Image from "next/image";
import TeamImage from "../assets/team/team.png";
import NotionApiClient from "@/apiClient/NotionApiClient";
import SingleEventCard from "@/components/SingleEventCard";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

const Home = async () => {
  const lastEvents = await NotionApiClient().fetchLastEvents();
  console.log(lastEvents);

  return (
    <>
      <article className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex flex-col gap-6 my-auto max-w-md md:max-w-lg md:w-2/3">
          <h1 className="text-3xl font-bold">Benvenutə in Coding Bunker</h1>
          <h2 className="text-xl leading-6">
            La tua porta d'accesso ad una Community dinamica di appassionati e
            appassionate di programmazione e tecnologia!
          </h2>
          <p>
            Il nostro obiettivo è creare un ambiente inclusivo dove tutti, dai
            principianti agli esperti, possono trovare supporto, imparare e
            crescere insieme.
          </p>
          <p>
            Unisciti a noi per crescere, imparare e fare la differenza insieme!
          </p>
          <div className="custom-breadcrumbs">
            <ul>
              <li>
                <a
                  href="https://forms.gle/FPca5upst1VTGFP86"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Partnership
                </a>
              </li>
              <li>
                
                <a
                  href="https://forms.gle/okz6VZ9Uv8JcGTiS8"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Cfp
                </a>
              </li>
              <li>
                
                <a
                  href="https://github.com/Coding-Bunker"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Github
                </a>
              </li>
              <li>
                
                <a
                  href="https://discord.com/invite/9x4FqmTxDu"
                  rel="noreferrer"
                  target="_blank"
                >
                  
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:flex md:justify-end">
          <div className="avatar w-fit rounded overflow-hidden md:overflow-visible ">
            <Image
              src={TeamImage}
              className="w-full h-auto rounded transform transition duration-300 hover:scale-150"
              alt="Team"
            />
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-8">
        <header className="flex w-full flex-row justify-between gap-2">
          
          <h3 className="text-lg">Ultimi eventi</h3>
          <Link
            href="/events"
            className="text-sm text-white underline decoration-dashed underline-offset-8"
            rel="noreferrer"
          >
            Tutti i nostri eventi
          </Link>
        </header>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
          {lastEvents.map((event) => (
            <SingleEventCard
              event={event as PageObjectResponse}
              key={event.id}
            />
          ))}
        </section>
      </article>
    </>
  );
};

export default Home;
