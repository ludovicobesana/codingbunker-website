import NotionApiClient from "@/apiClient/NotionApiClient"

export default async function Page() {

    const pageData = await NotionApiClient().fetchEvents()

    return <h1>Hello, Next.js!</h1>
  }