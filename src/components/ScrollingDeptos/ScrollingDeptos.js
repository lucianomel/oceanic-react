import React,{ Component, Fragment } from "react";
import MyPagination from '../UI/Pagination/Pagination'
import DeptoCard from "../DeptoCard/DeptoCard";
import ScreenSpinner from "../UI/FitParentSpinner/FitParentSpinner";

class ScrollingDeptos extends Component{
    // fetchDeptos=()=>{
    //     axios.get(`/deptos?page=${this.state.currentPage}&itemsPerPage=${this.state.itemsPerPage}`)
    //     .then(deptos=>{
    //         console.log(deptos)
    //         this.setState(
    //         {
    //             loadedDeptos:deptos.data.deptos,
    //             totalDeptos:deptos.data.totalDeptos, 
    //             loading:false,
    //             maxPage:Math.ceil(deptos.data.totalDeptos/this.state.itemsPerPage)
    //         })
    //     })
    // }
    render(){
        let searchedDeptos
        if(!this.props.loading){
            searchedDeptos=this.props.loadedDeptos.map(depto=>{
                    return <DeptoCard key={depto._id} depto={depto}/>
                    })
        }
        const notFoundDeptos=<h4>
            No se encontraron departamentos con esas opciones de busqueda. Intente denuevo con otras.
            </h4>
        return(
                <Fragment>
                    {!this.props.loading? 
                        searchedDeptos.length!==0?
                        <Fragment>
                            {searchedDeptos}
                            <MyPagination 
                                currentPage={this.props.pagination.currentPage} 
                                maxPage={this.props.pagination.maxPage}
                                nextPage={this.props.nextPage}
                                prevPage={this.props.prevPage}
                                goToPage={this.props.goToPage} />
                        </Fragment>
                        :
                        notFoundDeptos
                     :
                     <ScreenSpinner/>
                     }
                </Fragment>
            
        )
    }
}

export default ScrollingDeptos



// API rest call, pass current page as parameter to limit input with offset of   currentPage
        // return [
        //     {
        //         _id:'1',
        //         title:'El cabrero',
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:false,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_2.jpg','/cabrero_3.jpg'],
        //         price:500,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe',
        //                 rating:3.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 2',
        //                 rating:3,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     },
        //     {
        //         _id:'2',
        //         title:'El cabrero',
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:true,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_3.jpg'],
        //         price:700,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe 3',
        //                 rating:5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 4',
        //                 rating:2.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     },
        //     {
        //         _id:'3',
        //         title:'El cabrero',
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:true,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_3.jpg'],
        //         price:700,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe 3',
        //                 rating:5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 4',
        //                 rating:2.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     },
        //     { 
        //         _id:'4',
        //         title:'El cabrero', 
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus.',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:true,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_3.jpg'],
        //         price:700,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe 3',
        //                 rating:5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 4',
        //                 rating:2.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     },
        //     {
        //         _id:'5',
        //         title:'El cabrero',
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:true,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_3.jpg'],
        //         price:700,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe 3',
        //                 rating:5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 4',
        //                 rating:2.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     },
        //     {
        //         _id:'6',
        //         title:'El cabrero',
        //         subtitle:'Un lugar unico para vacacionar',
        //         introDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidu',
        //         fullDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo',
        //         amenities:['Wifi','Aire acondicionado','Cocina','estacionamiento'],
        //         super:true,
        //         ambientes:['3 huespedes','2 dormitorio','2 camas','1 baño'],
        //         address:'Avenída Santandér # 42-70, Cartagena 12345, Colombia',
        //         images:['/cabrero_1.jpg','/cabrero_3.jpg'],
        //         price:700,
        //         reviews:[
        //             {
        //                 author:'Pepe pepe 3',
        //                 rating:5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             },
        //             {
        //                 author:'Pepe pepe 4',
        //                 rating:2.5,
        //                 comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo'
        //             }
        //         ],
        //         rating:3
        //     }
        // ]