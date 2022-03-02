import axios from 'axios'

const raccoonApi = async () => {
    const answer = (await axios.get('https://some-random-api.ml/animal/raccoon')).data
    return answer
}

const myAPI = async (url) => {
    const answer = (await axios.get('https://raccoon-project.herokuapp.com/'+url)).data
    console.log(answer)
    return answer
}

export const raccoonFact = async () =>{
    return raccoonApi().fact
}

export const singleRaccoon = async () =>{
    return (await myAPI('coon')).image
}

export const multipleRaccoons = async () => {
    const raccoonList = [...(await myAPI('coons'))]
    raccoonList.map(raccoon => raccoon.image)
}