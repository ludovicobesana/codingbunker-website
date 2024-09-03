export const getPlainTextFromBlock = (block: any) : string | undefined => {
    if(!block?.type) return ""
    if(block.type == "rich_text"){
        return block?.rich_text?.[0]?.plain_text
    }else if(block.type == "title"){
        return block?.title?.[0]?.plain_text
    }else if(block.type == "date"){
        return block?.date?.start
    }
}

export const getUrl = (block: any) : string | undefined => {
    return block.url
}