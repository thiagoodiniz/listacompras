
import axios from 'axios'

export const services = {
    getImage: (product) => {
        const params = {
            key:'AIzaSyAY52tjvM6SXowO0-p-vZgsNMnDFgjrArc',
            cx:'010180696582922568310:8hbstyldgmi',
            searchType: 'image',
            Ir: 'pt-br',
            num: '1',
            q: product,
        }
        console.log(params)
        return axios.get('https://www.googleapis.com/customsearch/v1', {params})
            .then( resp => resp.data.items[0].link)
            .catch( err => err)
    }
}