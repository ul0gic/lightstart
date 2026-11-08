/**
 * @lightstart/light/theme/classes: the shapes of the engine. A class parsed,
 * a rule compiled, the engine and its options, the scales a theme gives it.
 * Nothing of a document: the browser runtime's shapes are `../runtime-types.ts`.
 */

                              
              
                     
                     
                    
               
               
                          
 

                               
              
                   
                   
                 
                  
                
                     
                     
 

                                 
              
                    
                    
 

/** A theme scale: utility names to CSS values. A name the scale lacks reads as undefined. */
                                                          

/** A scale whose entries may be lists: a font size with its line height. */
                                                                          

/** The scales `buildTheme` answers: utility names to CSS values, a colour to its shades where it has them, and a font size to its size and line height. */
                        
                 
                     
                        
                              
                          
                 
                       
                    
                    
                      
                   
                    
                    
                       
              
                
                  
                                  
 

                         
                                                
                                                           
                                               
               
 

                                
                
                      
 

/** A colour's shades by name: `DEFAULT`, `dark`, `100`, ... */
                                                           

/** A colour scale: a name to a colour, or to its shades. */
                                                                        

                                                                             

/** What a rule answers for a match: the declarations alone, or with the child selector a `space-*`/`divide-*` rule adds and the keyframes an animation needs. */
                                                                                                                       

/** A rule matched to a class: its declarations, the child selector and keyframes when it has them, and its place in the table. */
                              
                  
                               
                           
                
 

/** The function of a dynamic rule: what a match compiles to. */
                                                         

                              
                     
                                    
                      
                            
  

export * from "./index.js";
