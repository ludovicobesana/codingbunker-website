import { getPlainTextFromBlock } from "@/utils/NotionFormatter"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Link from "next/link"

export interface SingleEventCardProps{
    event: PageObjectResponse
}



const SingleEventCard : React.FC<SingleEventCardProps> = ({event}) =>{

    return <Link href={"/events/"+getPlainTextFromBlock(event.properties["slug"])} className="group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-4 transition-all duration-300 hover:-translate-y-1.5">
        <div className="flex w-full justify-between gap-3 flex-row items-start">
            <p className="font-semibold">{getPlainTextFromBlock(event.properties["Name"])}</p>
            <div className="text-white whitespace-nowrap">{getPlainTextFromBlock(event.properties["Date"])}</div>
        </div>
            <p className="truncate">
                {getPlainTextFromBlock(event.properties["Description"])}
            </p>
            
    </Link>
}

export default SingleEventCard