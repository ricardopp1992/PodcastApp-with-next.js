'use strict'

const routes = require('next-routes')
                                                
module.exports = routes()                          
.add('index')                                      
.add('channels', '/:slug.:id', 'channels')                        
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')