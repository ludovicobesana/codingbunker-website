import NotionDatabaseEventsQueryProperties from '@/types/NotionDatabaseEventsQueryProperties'
import NotionDatabaseQueryType from '@/types/NotionDatabaseQueryType'
import axios, { AxiosRequestConfig } from 'axios'



const NotionApiClient = () =>{

    //<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>
    const request = (config: AxiosRequestConfig): Promise<any> =>{
        return axios.request({
            baseURL: "https://api.notion.com",
            headers: {
                "Authorization": "Bearer " + process.env.NOTION_TOKEN,
                "Notion-Version": "2022-06-28"
            },
            ...config
        })
    }

    const fetchSingleEvent = async (slug: string) : Promise<NotionDatabaseEventsQueryProperties> =>{
        const response = await request({
            url: `v1/databases/${process.env.NOTION_EVENTS_DATABASE}/query`,
            method: "POST",
            data:{
                "filter": {
                    "property": "slug",
                    "rich_text": {
                        "equals": slug
                    }
                }
            }
        })

        return response.data?.results?.[0]
    }

    const fetchEvents = async () : Promise<NotionDatabaseQueryType<NotionDatabaseEventsQueryProperties>> => {
        const response = await request({
            url: `v1/databases/${process.env.NOTION_EVENTS_DATABASE}/query`,
            method: "POST"
        })

        return response.data
    }


    const fetchCrew = async () => {
        const response = await request({
            url: `v1/databases/${process.env.NOTION_CREW_DATABASE}/query`,
            method: "POST"
        })

        return response.data 
    }

    const addSubscriber = async (email : string) => {
        const response = await request({
            url: `v1/databases/${process.env.NOTION_SUBSCRIBERS_DATABASE}/query`,
            method: "POST"
        })

        return response.data
    }


    return {
        fetchEvents,
        fetchSingleEvent,
        fetchCrew,
        addSubscriber
    }

}


export default NotionApiClient