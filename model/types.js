/**
 * @bootstrapp/light/model: type declarations. Public types are reachable via
 * `import("@bootstrapp/light/model").Foo`.
 */

                                                                              
                                            
                                                       

// ---------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------

/**
 * The keys of a schema that are not fields:
 * - `$hooks`: lifecycle callbacks
 * - `$adapter`: the adapter this model lives in
 * - `$extension`: the extension that owns the model; the store routes it to the database named `ext:<id>`
 * - `$heavy`: fields an adapter leaves out of a list read; a `get` by `where`
 *   reads such a row again by its id, whole
 * - `$shadow`: the adapter (today `"indexeddb"`) that also keeps a device-local
 *   store of this model, under the model's own name and indexes, for a
 *   decorator to read and write; the store itself never routes to it
 *
 * A host or a storage package augments this interface with the directives
 * its own adapter or hooks read.
 */
                                        
                          
                    
                   
                      
                    
 

/**
 * A field of a schema as the model reads it: a `T.*` descriptor's data. The
 * descriptor's functions (`validate`, `getter`, `customValidator`, a
 * function `format`, ...) and nested descriptors (`props`, `itemType`,
 * `types`, `args`, `returns`) are in the index signature, so a schema built
 * in JavaScript, which reaches a native build as a checked value, converts
 * into this shape. Every descriptor `T` builds is one.
 */
                                         
                       
                                                                                                                                                
   
                         
 

/** Model field definitions plus the directives above. */
                                                                             

                             
                     
                    
                      
                     
                        
                       
 

                                                                                 

/**
 * A schema's `$hooks`: each hook by name, a `HookFn` (`ModelHooks` spells
 * their signatures). Held as values, so a schema built in JavaScript converts
 * into it; the store calls a hook that is a function.
 */
                                                                   

/** What a hook sees: the model, the store to read and write through, and the operation. */
                              
                
               
                                       
               
                      
 

/**
 * What a write carries past the pipeline to the adapter. `importing` marks a
 * seed, `direct` a caller that bypasses whatever a decorator would do with
 * the write (the admin, a dev path); `patch` is the normalised patch of an
 * edit, beside the merged row the adapter stores.
 */
                               
                      
                   
              
 

/** The write options a client may send over the wire. */
                                                              

// ---------------------------------------------------------------------
// Rows and queries
// ---------------------------------------------------------------------

/** A stored record: any object with an `id`. Rows are plain objects on every runtime. */
                                                                     

                           
                           
               
                   
                     
                    
                             
        

                                                                                                        

                                                                                                                                          

                            
                
                                             
 

                                        
                         
                                                                                          
                               
                 
                                                                                                                                                                       
                  
                  
                   
                      
                                              
                                                                         
                  
                           
 

/** What `query()` answers: the page and the size of the whole match. */
                                     
            
                
 

/** The in-memory pipeline's answer (`buildQueryResult`); adapters map it onto a `QueryPage`. */
                              
               
                
                
                 
                 
                         
 

                                                                 

/** What a registered query hook sees: the model, its schema and the caller's options. */
                                   
                
                                  
                     
 

/** A `registerQueryHook` callback: answer the options to use, or nothing to keep them. */
                                                                       

/** The upload provider `setFileStorage` installs; the store sends `T.file()` blobs through it. */
                              
                                                                                       
 

// ---------------------------------------------------------------------
// Change events
// ---------------------------------------------------------------------

/**
 * The `model:changed` payload the store emits after every write. A `sync`
 * carries no row: the whole collection changed and every follower re-reads.
 * A `remove` carries the stored row when the model declares a remove hook,
 * `{ id }` otherwise: the store reads nothing it does not need.
 */
                                        
                
                                             
          
 

                                                                       

/** One `onChange` follower: the matcher its `where` compiled to, and its callback. */
                                   
                                                   
                     
 

// ---------------------------------------------------------------------
// The per-model api
// ---------------------------------------------------------------------

/** A schema key that is a field: not `id`, which every row has, and not a `$` directive. */
                                                             

/** The options a field's descriptor was declared with, as its factory's type kept them. */
                                                                                         

/** Whether every stored row holds the field: declared `required`, or given a default the store fills on add. */
                                                                  
                                                                                                          

/** The value a field holds, read off its descriptor, with `null` when its default is `null`. */
                                                                                                                                          

/**
 * The row a schema declares. A field declared `required: true` or given a
 * default (`T.boolean({ defaultValue: false })`, `T.number(0)`) is on every
 * stored row, since the store fills defaults on every add whatever the
 * adapter; any other field may be absent; a `null` default adds `null` to
 * the value. `id` is the declared `id` descriptor's type (`id: T.number()`
 * for an auto-incremented key), else the string the store assigns. `$`
 * directives are not fields.
 */
                        
                                                                                     
     
                                                                                      
                                                                                  

/** The row a model's api answers, as `defineModel` or a host's typings bound it: `type Todo = ModelRow<typeof todos>`. */
                                                                                           

/** The eleven methods of a model's api; `defineModel` or a host's generated typings bind `R`; a model `defineModel` declares always has its schema. */
                                                                                                             
                                      
                              
                        
                            
                     
                                                               
                                                                                              
                                               
                                                       
                                                 
                                                   
                                                                          
                                                                                        
                                                                                                      
                                                                                      
                                                                                                                                                                                                                      
                                                                           
                                                     
 

/**
 * What a `MODEL:*` command carries beside the model's name: each command
 * reads its own fields (`id` and `opts` for a get, `row` for an add, `id`
 * and `patch` for an edit, `where` for an exists or a removeAll). `opts` is
 * the query's options (`QueryOptions`) on a read and the write options
 * (`ClientWriteOptions`) on a write; each handler reads it as its own kind.
 */
                               
                       
                 
                      
                    
            
               
              
 

/** A `MODEL:*` command as a store's handler receives it. */
                                                    
                
 

/** What `createModelHandlers` holds under each `MODEL:*` command. */
                                                                       

/** How a model's api reaches the store: the store itself in the same runtime, or a port to a worker that holds one. */
                                                                                                       

// ---------------------------------------------------------------------
// Storage adapters and the store
// ---------------------------------------------------------------------

/**
 * What a storage adapter implements. It stores and answers rows; the store
 * runs hooks, defaults, validation, uploads and change events around it.
 * `query` answers a page and the size of the whole match, and honours
 * `where`, `order`, `limit`, `offset` and `fields` itself (a local adapter
 * borrows `buildQueryResult` from `@bootstrapp/light/model/adapter`).
 */
                                 
                
                                       
                
                            
                           
                                                                                                    
                                                               
                                                                     
                                                                     
                                                                                    
                                                             
                            
                                                                               
                                                                                      
                                   
                                                                                           
                                                    
                                                                
                                                                                       
                                             
                                               
                                                                                                 
                                                            
                           
 

/** What a decorator factory receives beside the adapter it wraps. */
                                          
                
                                  
               
                                                                      
                                
                                                  
 

/**
 * A `registerAdapterDecorator` factory: answers the adapter the store uses for
 * one model whose schema declares the decorator's directive, over the routed
 * `base`. It delegates method by method; the base keeps its own state.
 */
                                                                                                      

/** How the JSONL adapter reaches its files: whole texts, synchronously. */
                          
                                                        
                                    
                                                                         
                                           
                                                                                       
                                          
 

/** One model's file as the JSONL adapter holds it: its rows, and how many of its lines no longer hold one. */
                             
               
                         
                
 

/** The JSONL adapter as `createAdapter("jsonl", { name, dir, io })` makes it. */
                                             
                                                                   
              
              
                                  
  

/** A reader the relation loader needs: the store satisfies it. */
                            
                                                                                                                
                                                             
 

                              
                                      
                                             
                          
                                                                                      
                                                            
 

/** The store: every model's reads and writes over the adapter that holds it. */
                                          
                                      
                                            
                         
                                                                                                                                  
                                            
                                                     
                                                
                                                
                                                  
                                                           
                                                       
                                                             
                                                                
                                                             
                                                               
                                                                                      
                                                                      
                                                                              
                                                                                             
                                                                                       
                                                                 
                                         
                                                      
                                               
                                                         
                         
 

// ---------------------------------------------------------------------
// Relationships
// ---------------------------------------------------------------------

                                                            
                                                            
                                 
                            
                 
                    
                        
              
 

/** The bus the model emits its warnings, its logs and `model:changed` on; see `configureModel`. */
                           
                                                              
                                             
 

/** `modelQuery()`'s answer: the resource, and the size of the whole match. */
                                                              
                      
 

/** `modelQuery()` options: a model query plus the resource knobs. */
                                                                                                                               
                
                  
                                                                    
 

                                         
                         
                    
   
 

export * from "./index.js";
