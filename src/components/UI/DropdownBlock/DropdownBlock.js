import classes from "./DropdownBlock.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { Col, Row,Container } from "react-bootstrap"
import { Component, useEffect,useState } from "react"
import {CSSTransition} from 'react-transition-group'
import './transitions.css'

class DropdownBlock extends Component{ 
    state={
        openedDropdown:false
    }
    toggleDropdown=()=>{
        this.setState((prevState,props)=>{
            return {openedDropdown:!prevState.openedDropdown}
        })
    }
    fetchImages(){
        // Fetch rest api
        return [
            {route:'/Images/manga_2.jpg',
            title:'some title some title some title1',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dui felis, eu auctor diam cursus in. Mauris convallis magna neque, et faucibus mi interdum id. Sed ac est nec sapien tempus fringilla nec ut magna. Donec condimentum auctor ex, sit amet semper risus pellentesque vel. Mauris ac eros nunc. Vestibulum molestie dui sed auctor egestas. Praesent non risus mollis, tincidunt dolor id, blandit nisl. Donec urna eros, maximus in pretium nec, imperdiet et nisi. Sed facilisis dolor felis, a dapibus mauris sollicitudin ut. Vestibulum pellentesque lacus at ultricies facilisis. Nullam faucibus est ac volutpat commodo.'
            },
            {route:'/Images/manga_2.jpg',
            title:'some title some title some title2',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dui felis, eu auctor diam cursus in. Mauris convallis magna neque, et faucibus mi interdum id. Sed ac est nec sapien tempus fringilla nec ut magna. Donec condimentum auctor ex, sit amet semper risus pellentesque vel. Mauris ac eros nunc. Vestibulum molestie dui sed auctor egestas. Praesent non risus mollis, tincidunt dolor id, blandit nisl. Donec urna eros, maximus in pretium nec, imperdiet et nisi. Sed facilisis dolor felis, a dapibus mauris sollicitudin ut. Vestibulum pellentesque lacus at ultricies facilisis. Nullam faucibus est ac volutpat commodo.'
            },
            {route:'/Images/manga_2.jpg',
            title:'some title some title some title3',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dui felis, eu auctor diam cursus in. Mauris convallis magna neque, et faucibus mi interdum id. Sed ac est nec sapien tempus fringilla nec ut magna. Donec condimentum auctor ex, sit amet semper risus pellentesque vel. Mauris ac eros nunc. Vestibulum molestie dui sed auctor egestas. Praesent non risus mollis, tincidunt dolor id, blandit nisl. Donec urna eros, maximus in pretium nec, imperdiet et nisi. Sed facilisis dolor felis, a dapibus mauris sollicitudin ut. Vestibulum pellentesque lacus at ultricies facilisis. Nullam faucibus est ac volutpat commodo.'
            }
        ]
    }
    render(){
        return (
            <section style={{display:'flex',justifyContent:'center',flexWrap:"wrap"}} >
                <Row className={classes.DropdownBlock}>
                    <Col xs={9}>
                        <p className={classes.TextBlock}>{this.props.dropdownTitle}</p>
                    </Col>
                    <Col xs={3}>
                        <FontAwesomeIcon 
                        onClick={this.toggleDropdown} 
                        icon={faPlus} 
                        className={classes.PlusIcon}/>
                    </Col>
                </Row>
                {this.state.openedDropdown? 
                    this.fetchImages().map(img=>{
                        return(
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={3000}
                            classNames="translate" >
                            <Container 
                                className={classes.DropdownContent} 
                                key={img.title}>
                                <Row className={classes.DropdownContentCard}>
                                    <Col lg={6} style={{display:'flex',alignItems:'center'}}>
                                        <img src={img.route} className={classes.ImageBlock}>
                                        </img>
                                    </Col>
                                    <Col lg={6}>
                                        <h3 className={classes.DropdownContentTitle}>{img.title}</h3>
                                        <hr></hr>
                                        <p>{img.content}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </CSSTransition>
                        )
                    })
                :null}
            </section>
        )
    }
}

export default DropdownBlock