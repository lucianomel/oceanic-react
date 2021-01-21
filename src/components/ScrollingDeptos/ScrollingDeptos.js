import { Component } from "react";
import DeptoCard from "../DeptoCard/DeptoCard";

class ScrollingDeptos extends Component{

    fetchDeptos=()=>{
        return [
            {
                _id:'1',
                title:'El cabrero',
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:false,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_2.jpg','/cabrero_3.jpg'],
                price:500,
                reviews:[
                    {
                        author:'Pepe pepe',
                        rating:3.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 2',
                        rating:3,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            },
            {
                _id:'2',
                title:'El cabrero',
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:true,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_3.jpg'],
                price:700,
                reviews:[
                    {
                        author:'Pepe pepe 3',
                        rating:5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 4',
                        rating:2.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            },
            {
                _id:'2',
                title:'El cabrero',
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:true,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_3.jpg'],
                price:700,
                reviews:[
                    {
                        author:'Pepe pepe 3',
                        rating:5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 4',
                        rating:2.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            },
            { 
                _id:'2',
                title:'El cabrero', 
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus.',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:true,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_3.jpg'],
                price:700,
                reviews:[
                    {
                        author:'Pepe pepe 3',
                        rating:5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 4',
                        rating:2.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            },
            {
                _id:'2',
                title:'El cabrero',
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:true,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_3.jpg'],
                price:700,
                reviews:[
                    {
                        author:'Pepe pepe 3',
                        rating:5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 4',
                        rating:2.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            },
            {
                _id:'2',
                title:'El cabrero',
                subtitle:'Un lugar unico para vacacionar',
                introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
                fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
                amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
                super:true,
                ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
                address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
                images:['/cabrero_1.jpg','/cabrero_3.jpg'],
                price:700,
                reviews:[
                    {
                        author:'Pepe pepe 3',
                        rating:5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    },
                    {
                        author:'Pepe pepe 4',
                        rating:2.5,
                        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
                    }
                ]
            }
        ]
    }
    render(){
        return(
               this.fetchDeptos().map(depto=>{
                    return <DeptoCard key={depto._id} depto={depto}/>
                })
            
        )
    }
}

export default ScrollingDeptos