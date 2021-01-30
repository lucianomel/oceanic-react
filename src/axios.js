import axios from 'axios'

const instance=axios.create({
    baseURL:'http://localhost:8080'
})

instance.defaults.headers.common['Authorization']='AUTH TOKEN FROM INSTANCE'

export default instance