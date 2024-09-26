import { getDataFromBlock, getPlainTextFromBlock } from "@/utils/NotionFormatter"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import classNames from "classnames"
import Link from "next/link"

export interface SingleEventCardProps{
    event: PageObjectResponse
    className?: string
}



const SingleEventCard : React.FC<SingleEventCardProps> = ({event, className}) =>{

    return <Link href={"/events/"+getPlainTextFromBlock(event.properties["slug"])} className={classNames(className, "group flex cursor-pointer flex-col gap-2 rounded-md border text-white p-4 transition-all duration-300 hover:-translate-y-1.5")}>
        <div className="flex w-full justify-between gap-3 flex-row items-start">
            <p className="font-semibold">{getPlainTextFromBlock(event.properties["Name"])}</p>
            <div className="text-white whitespace-nowrap">{getDataFromBlock(event.properties["Date"])}</div>
        </div>
            <p className="truncate">
                {getPlainTextFromBlock(event.properties["Description"])}
            </p>
            
    </Link>
}

export default SingleEventCard