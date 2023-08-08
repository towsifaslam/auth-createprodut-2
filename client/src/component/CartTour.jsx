import React from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBCardGroup}
from'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export default function CartTour({_id,title,description,name,tags,imageFile,createdAt,likeCount}) {
  const exerpt =(str)=>{
    if(str.length > 45){
      str = str.substring(0, 45) + '...'
    }
    return str
  }
  return (
    <MDBCardGroup>
    <MDBCard className='h-100 mt-2 d-sm-flex ' style={{maxWidth:'20rem'}}>
      <MDBCardImage src={imageFile}
        alt={title}
        position='top'
        style={{maxWidth:'100%',height:'100px'}}
       />
       <div className='top-left'>{name}</div>
       <MDBCardBody>
        <MDBCardTitle className='text-start'>{title}</MDBCardTitle>
        <MDBCardText className='text-start'>{exerpt(description)}
        <Link to={`/tour/${_id}`}>Read more</Link>
        </MDBCardText>
       </MDBCardBody>
    </MDBCard>
    </MDBCardGroup>
  )
}
