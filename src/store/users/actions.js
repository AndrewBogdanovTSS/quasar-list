import axios from 'axios'

export async function get ({ commit }) {
  let { data } = await axios.get('https://randomuser.me/api/?results=10&inc=name,location,email,picture,location,phone&noinfo')
  console.log(data.results)
  commit('set', data.results)
}
