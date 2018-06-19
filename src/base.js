const config = {
    apiKey: "AIzaSyAJye-nsCOa_EucHKwI2FuWfDwjdgnau2g",
    authDomain: "mercadodev-3fdc8.firebaseapp.com",
    databaseURL: "https://mercadodev-3fdc8.firebaseio.com",
    projectId: "mercadodev-3fdc8",
    storageBucket: "mercadodev-3fdc8.appspot.com",
    messagingSenderId: "933238368219"
  }

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export default base