import axios from 'axios'

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '84cb3886f5msh261211f898b08acp173b73jsn61d76e4a3942'
          }
    })

    return data
}