
const API = 'https://rickandmortyapi.com/api/character/'

const getData = async(id) => {
   const apiUrl = id ? `${API}${id}` : API;
   try {
       const resp = await fetch(apiUrl);
       const data = await resp.json();
       return data;
   } catch (error){
       console.log(error)
   }
};

export default getData;