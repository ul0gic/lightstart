/**
 * @bootstrapp/light/native/desktop: the types of the bridge. An app declares one contract (its
 * methods) and one events map, and both the page and the backend import them: the page's `call`
 * is the contract with every method returning a Promise, the backend's handlers receive the
 * arguments as `unknown[]` and narrow them, since a native build checks nothing it did not parse.
 */

/** The backend's methods: an interface whose members are functions. */
                              

/** The contract as the page sees it: every method, called with its arguments, answers a Promise of its result. */
                                          
                                                                                                           
  

/** Events in one direction, backend to page or page to backend: an interface from event name to the value it carries. */
                            

/** Register a listener; answers the function that removes it. */
                                                                                                                      

                                                                                                                  

                                                                                                

/**
 * What `connect()` answers in the page: `C` the backend's methods, `E` the events it emits,
 * `P` the events the page emits to it.
 */
                                                                                           
                  
                
                                            
                  
                   
                                                                                                
                                                                        
                                                                           
                                                  
                                                                    
                         
 

/** A backend handler: the page's arguments, parsed from JSON, and the value to answer. */
                                                            

                                       
                 
                 
                  
     
                                                                                               
                                                                                                  
                                                                                                   
                          
     
                      
     
                                                                                                  
                                                                                             
     
                       
                                           
                  
                                                             
                  
 

                                                              
                                                                                                       
               
 

export { DesktopApp, Listener, Route, arr, bool, num, str } from "./host.js";
export { DesktopWindow } from "./window.js";
export { connect } from "./client.js";
