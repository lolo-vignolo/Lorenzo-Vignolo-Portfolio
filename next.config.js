const {PHASE_DEVELOPMENT_SERVER} = require("next/constants")


module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
  }

module.exports = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER){
    return{
      env:{
        mongodb_username:"Portfolio-Lorenzo",
        mongodb_password:"CKu6GRDw1ZILNkxR",
        mongodb_clustername:"cluster0",
        mongodb_collection:"myBlog_dev"
      }
    }

  }
  

  return {
    env:{
      mongodb_username:"Portfolio-Lorenzo",
      mongodb_password:"CKu6GRDw1ZILNkxR",
      mongodb_clustername:"cluster0",
      mongodb_collection:"myBlog"
    }
  }
}