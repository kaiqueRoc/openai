
import { ChatGPTAPI } from 'chatgpt'

try{
    const api = new ChatGPTAPI({
        apiKey: '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'
      })
    
      const res = await api.sendMessage('quantos anos tem o brasil?')
      console.log(res.text)  
}catch(error)
{
    console.log(error, 'erro')
}