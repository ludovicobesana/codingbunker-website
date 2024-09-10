import NotionApiClient from "@/apiClient/NotionApiClient"
import SingleEventCard from "@/components/SingleEventCard"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Events | Coding bunker',
  description: 'Coding Bunker Events',
}

export default async function Page() {

    const pageData = await NotionApiClient().fetchEvents()

    return <>
      <h1 className="text-4xl font-bold mb-8">Tutti i nostri eventi</h1>

      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
        {pageData.results.map((event : any) => (
            <SingleEventCard
              event={event as PageObjectResponse}
              key={event.id}
            />
          ))}
      </article>
    </>
  }