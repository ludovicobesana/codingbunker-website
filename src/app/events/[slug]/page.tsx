import NotionApiClient from "@/apiClient/NotionApiClient"
import VideoPlayer from "@/components/VideoPlayer"
import { getPlainTextFromBlock, getUrl } from "@/utils/NotionFormatter"
import Link from "next/link"



export default async function SingleEvent({
    params: { slug },
  }: {
    params: { slug: string }
  }) {

    const pageData = await NotionApiClient().fetchSingleEvent(slug)

    const videoUrl = getUrl(pageData?.properties?.["Video Url"])
    const registrationLink = getUrl(pageData?.properties["Registration Link"]) 

    console.log(pageData?.properties)
    return <>
      <h1>{getPlainTextFromBlock(pageData?.properties["Name"])}</h1>
      <p>{getPlainTextFromBlock(pageData?.properties["Description"])}</p>
      <p>{getPlainTextFromBlock(pageData?.properties["Speaker Description"])}</p>
      <p>{getPlainTextFromBlock(pageData?.properties["Venue"])}</p>

      <p>{getPlainTextFromBlock(pageData?.properties["Date"])}</p>

      <p>{getPlainTextFromBlock(pageData?.properties["Venue Map Link"])}</p>

      {videoUrl && 
        <VideoPlayer src={videoUrl} />
      }

      {registrationLink &&
        <Link href={registrationLink} >Registrati qui</Link>
      }
    </>
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