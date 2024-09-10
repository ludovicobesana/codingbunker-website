import NotionApiClient from "@/apiClient/NotionApiClient"
import { getPlainTextFromBlock } from "@/utils/NotionFormatter"
import Image from "next/image"

const TeamMember : React.FC<any> =(props) =>{
  
  
  return <div className="group flex flex-col gap-2 rounded-md border text-white p-4">
      <div className="text-center flex-1 flex justify-center">
      <Image className="rounded-full" height={200} width={200} src={props?.properties?.["Profile Image"]?.files?.[0]?.file?.url} alt={getPlainTextFromBlock(props?.properties?.["Name"]) || ""} />
      </div>
      <p className="font-bold text-xl">{getPlainTextFromBlock(props?.properties?.["Name"])}</p>
      <p>{getPlainTextFromBlock(props?.properties?.["Description"])}</p>
  </div>
}

export default async function Page() {

    const teamData = await NotionApiClient().fetchCrew()

    return <article className="flex flex-row gap-6 flex-col gap-12">
        <h1 className="text-3xl font-bold">Crew</h1>
        {teamData && 
          <div className="grid grid-cols-3 gap-4">
          {teamData.results.map(teamMember => <TeamMember key={teamMember.id} {...teamMember} />)}
          </div>
        }
      </article>
  }