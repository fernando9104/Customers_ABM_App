export const apiGet = (url) => fetch(url).then(v => v.json());
export const apiPut = (url, id, obj) => fetch( `${url}/${id}`, 
                                                {   method: 'PUT',
                                                    body: JSON.stringify(obj),
                                                    headers: 
                                                        {
                                                            'Content-type': 'application/json; charset=UTF-8',
                                                            'Access-Control-Allow-Origin':'*'
                                                        }
                                                }
                                            ).then( v => v.json() );