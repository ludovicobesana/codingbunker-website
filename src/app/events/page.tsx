import NotionApiClient from "@/apiClient/NotionApiClient"
import SingleEventCard from "@/components/SingleEventCard"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Events | Coding bunker',
  description: 'Coding Bunker Events',
}

export default async function Page() {

    const pageData = await NotionApiClient().fetchPastEvents()
    const nextEvent = await NotionApiClient().fetchNextEvent();

    return <>
      <h1 className="text-4xl font-bold mb-8">I nostri eventi</h1>
      {nextEvent && 
          <header className="flex flex-col justify-between gap-2 mt-5 mb-20">
            <h3 className="text-lg font-bold">Registrati al prossimo evento</h3>
            <SingleEventCard
                  className="border-4"
                  event={nextEvent as PageObjectResponse}
                />
          </header>
      }
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
        {pageData.map((event : any) => (
            <SingleEventCard
              event={event as PageObjectResponse}
              key={event.id}
            />
          ))}
      </article>
    </>
  }