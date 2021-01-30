import React,{ Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import ScrollingDeptos from '../../components/ScrollingDeptos/ScrollingDeptos'
import SearchDeptoHBar from '../../components/SearchDeptoHBar/SearchDeptoHBar'
import NavbarSpace from '../../components/UI/Navbar/NavbarSpace/NavbarSpace'
import axios from '../../axios'


class Departamentos extends Component{
    constructor(props){
        super(props)
        this.searchBar=React.createRef()
    }
    state={
        pagination:{
            currentPage:1,
            nextPage:2,
            prevPage:0,
            maxPage:1,
            itemsPerPage:5
        },
        loading:true,
        loadedDeptos:null
    }
    componentDidMount(){
        if(this.props.landingSearchParams){
            this.loadDeptos(true,this.props.landingSearchParams)
        }
        const lastStateStored=JSON.parse(localStorage.getItem('lastState'))
        console.log(lastStateStored)
        if(lastStateStored){
            console.log('Seting last state')
            return this.setState({...lastStateStored,loading:false})
        }
    }
    loadDeptos=(goToFirsPage,landingSearchParams)=>{
        this.scrollUp()
        if(goToFirsPage){
            this.goToFirstPage()
        }
        const searchParams=this.searchBar.current.getSearchParams()
        this.searchDeptos(searchParams,landingSearchParams)
    }
    scrollUp=()=>{
        const navbar=document.querySelector('.navbar')
        navbar.scrollIntoView({behavior:'smooth'})
    }
    nextPage=async ()=>{
        if(this.state.pagination.currentPage<this.state.pagination.maxPage){
            const switchPage=this.state.pagination.currentPage+1
            const prevPaginationState=this.state.pagination
            await this.setState({pagination:{...prevPaginationState,currentPage:switchPage}})
            this.loadDeptos()
        }
    }
    prevPage=async ()=>{
        if(this.state.pagination.currentPage>1){
            const switchPage=this.state.pagination.currentPage-1
            const prevPaginationState=this.state.pagination
            await this.setState({pagination:{...prevPaginationState,currentPage:switchPage}})
            this.loadDeptos()
        }
    }
    goToPage=async (page)=>{
        if(this.state.pagination.currentPage!==parseInt(page)){
            const prevPaginationState=this.state.pagination
            await this.setState({pagination:{...prevPaginationState,currentPage:+page}})
            this.loadDeptos()
        }
    }
    goToFirstPage=async()=>{
        const prevPaginationState=this.state.pagination
        await this.setState({pagination:{...prevPaginationState,currentPage:1}})
    }
    searchDeptos=(searchParams,landingSearchParams)=>{
        // Landing search params
        searchParams.landingSearch=landingSearchParams
        // Dates
        const startDate=document.getElementById('start_date_id').value
        const endDate=document.getElementById('end_date_id').value
        searchParams.dates={startDate:startDate,endDate:endDate}
        this.setState({loading:true})

        // Cache stuff
        for(let prop in searchParams){
            if(searchParams[prop]===undefined){
                searchParams[prop]=''
            }
        }
        const cachedHits= localStorage.getItem('oceanicSearch').trim()
        const searchParamsString=JSON.stringify(searchParams).trim()

        if(cachedHits===searchParamsString){
            const lastState=JSON.parse(localStorage.getItem('lastState'))
            console.log('lastState page: ',lastState.pagination.currentPage)
            console.log('current state page: ',this.state.pagination.currentPage)
            if(lastState.pagination.currentPage===this.state.pagination.currentPage){
                this.setState({...JSON.parse(localStorage.getItem('lastState')),loading:false})
                return;
            }
        }
        localStorage.setItem('oceanicSearch',searchParamsString)

        // API call
        const endpoint=`/search-deptos?page=${this.state.pagination.currentPage}&itemsPerPage=${this.state.pagination.itemsPerPage}`
        axios.post(endpoint,searchParams)
        .then(deptos=>{
            console.log(deptos.data.deptos)
            const prevStatePagination={...this.state.pagination}
            this.setState({
                loadedDeptos:deptos.data.deptos,
                pagination:{
                    ...prevStatePagination,
                    maxPage:Math.ceil(
                        deptos.data.totalSearchedDeptos/this.state.pagination.itemsPerPage
                        )
                },
                loading:false})
            localStorage.setItem('lastState',JSON.stringify(this.state))
        })
    }
    render(){
        return(
            <div>
                <NavbarSpace/>
                    <Row>
                        <Col md={4}>
                            <SearchDeptoHBar 
                                ref={this.searchBar}
                                loadDeptos={this.loadDeptos} />
                        </Col>
                        <Col md={8}>
                            <ScrollingDeptos 
                                ref={this.scrollingDeptos}
                                loadedDeptos={this.state.loadedDeptos}
                                totalSearchedDeptos={this.state.totalSearchedDeptos}
                                loading={this.state.loading}
                                pagination={this.state.pagination}
                                nextPage={this.nextPage}
                                prevPage={this.prevPage}
                                goToPage={this.goToPage}
                                />
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Departamentos