import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DeptoCard from '../../components/DeptoCard/DeptoCard'
import ScrollingDeptos from '../../components/ScrollingDeptos/ScrollingDeptos'
import SearchDeptoHBar from '../../components/SearchDeptoHBar/SearchDeptoHBar'
import NavbarSpace from '../../components/UI/Navbar/NavbarSpace/NavbarSpace'

class Departamentos extends Component{
    
    render(){
        return(
            <div>
                <NavbarSpace/>
                    <Row>
                        <Col md={4}>
                            <SearchDeptoHBar />
                        </Col>
                        <Col md={8}>
                            <ScrollingDeptos/>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Departamentos