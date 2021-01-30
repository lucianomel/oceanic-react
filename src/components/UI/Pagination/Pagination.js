import { Fragment } from "react"
import {Pagination} from 'react-bootstrap'

const MyPagination=props=>{
    const currentPage=+props.currentPage
    const prevPage=currentPage-1
    const nextPage=currentPage+1
    const maxPage=props.maxPage
    return(
        <Fragment>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev onClick={props.prevPage} />
                {currentPage!==1&&prevPage!==1?
                <Pagination.Item onClick={()=>props.goToPage(1)} >{1}</Pagination.Item>
                :null
                }
                {currentPage>3?
                <Pagination.Ellipsis /> 
                :null}
                {currentPage!==1?
                <Pagination.Item onClick={()=>props.goToPage(prevPage)} >{prevPage}</Pagination.Item>
                :null}
                <Pagination.Item 
                    onClick={()=>props.goToPage(currentPage)} 
                    active>{currentPage}
                </Pagination.Item>
                {currentPage!==maxPage?
                <Pagination.Item onClick={()=>props.goToPage(nextPage)}>{nextPage}</Pagination.Item>
                :null}
                {currentPage<maxPage-2?
                <Pagination.Ellipsis />
                :null}
                {maxPage>nextPage?
                <Pagination.Item onClick={()=>props.goToPage(maxPage)} >{maxPage}</Pagination.Item>
                :null}
                <Pagination.Next onClick={props.nextPage} />
                <Pagination.Last />
            </Pagination>
        </Fragment>
    )
}

export default MyPagination