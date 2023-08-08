import React, { useEffect } from 'react'
import { MDBCard,MDBCardBody,MDBCardText,MDBCardImage,MDBContainer,MDBIcon } from 'mdb-react-ui-kit'
import {useDispatch,useSelector} from'react-redux'
import {useParams} from'react-router-dom'
import moment from'moment';
import { getTou } from '../redux/features/tourSlice';
export default function SingleTour() {
  const dispatch = useDispatch()
  const {tour} = useSelector((state)=>({...state.tour}))
  const {id} = useParams()
  console.log(tour)
  useEffect(()=>{
    dispatch(getTou(id))
  },[id])
  console.log(1)
  return (
    <div style={{marginTop:'120px'}}>
    <MDBContainer>
      <MDBCard className='mb-3 mt-2'>
        <MDBCardImage position='top'
                style={{width:'100%',maxHeight:'600px'}}
                src={tour?.imageFile}
                alt={tour?.title}
        />
        <MDBCardBody>
          <h3>{tour?.title}</h3>
          <span>
            <p className='text-start tourName'>createby:{tour?.name}</p>
          </span>
        <br />

            <MDBCardText className='text-start mt-2'>
             <MDBIcon  style={{float:'left',margin:'5px'}} far icon='calendar-alt' size='lg'/>

             <small className='text-muted'>{moment(tour?.createdAt).fromNow()}</small>
            </MDBCardText>
            <MDBCardText className='lead mb-0 text-start'>
              {
                tour?.description
              }
            </MDBCardText>
        </MDBCardBody>

      </MDBCard>
    </MDBContainer>
    </div>
  )
}
