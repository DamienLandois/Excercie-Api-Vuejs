import api from 'axios'

export default{ 
    async apiGetData(endUrl){
        return await api.get(`https://jsonplaceholder.typicode.com/${endUrl}`,
        {
            headers:{
            "Content-Type": 'application/json' 
            }
        });
    }
}