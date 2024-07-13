import NotionApiClient from "@/apiClient/NotionApiClient"



export default async function SingleEvent({
    params: { slug },
  }: {
    params: { slug: string }
  }) {

    const pageData = await NotionApiClient().fetchSingleEvent(slug)

    //console.log(pageData)
    return <h1>{JSON.stringify(pageData)}Hello, Singleenver.js!</h1>
  }



export async function generateStaticParams() : Promise<any[]> {
    try{
        const talks = await NotionApiClient().fetchEvents()
        const out =  talks.results.map(single =>{
            return {
                slug: single?.properties?.slug?.rich_text?.[0]?.plain_text
            }
        }).filter(e => e.slug)
        return out
    }catch(e){
        console.log(e)
        return []
    }
}