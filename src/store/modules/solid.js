//import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
  webId : null,
  logged: false,
  storage : "",
  chatPath : "",
  messages : ["one", "two"]
})

// getters
const getters = {}

// actions
const actions = {

  send (context, message) {
    console.log("in action", message, context.state.chatPath)
    let date =  new Date()
    let d = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+("0" + date.getDate()).slice(-2)
    console.log(d, context.state.webId)
  //  context.commit('send', message)
    let path = context.state.chatPath+d+".ttl"
    console.log(path, context.state.webId)
    context.commit('send', message)
    //await solid[]
  }

  /*  getAllProducts ({ commit }) {
  shop.getProducts(products => {
  commit('setProducts', products)
})
}*/
}

// mutations
const mutations = {
  setWebId (state, webId) {
    state.webId = webId
  },
  setLogged (state, logged) {
    state.logged = logged
  },
  setChatPath (state, path) {
    state.chatPath = path
  },
  send(state, message){
    state.messages.push(message)
    console.log(state.messages)
    // eslint-disable-next-line
    console.log( "LDFLEX",solid)

  },
  setStorage (state, st) {
    state.storage = st
  },
  /*  setProducts (state, products) {
  state.all = products
},

decrementProductInventory (state, { id }) {
const product = state.all.find(product => product.id === id)
product.inventory--
}*/
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
