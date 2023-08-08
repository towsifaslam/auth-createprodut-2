 import {MDBCol,MDBContainer,MDBRow,MDBTypography} from'mdb-react-ui-kit'
 import {useDispatch,useSelector} from'react-redux'
 import {Link}from'react-router-dom'
 import { getTour } from '../redux/features/tourSlice'
import { useEffect } from 'react'
import CartTour from '../component/CartTour'
 export default function Home() {
  const {tours,loading} = useSelector((state)=>({...state.tour}))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTour())
  },[])
  console.log()
  if(loading){
    return <h2>Loading ........ </h2>
  }
  return (
    <div
    style={{margin:'auto',
            padding:'15px',
            maxWidth:'1000px',
            alignContent:'center',
            marginTop:'120px'
           }}>
        <MDBRow className='mt-5'>
          {
            tours.length === 0 &&(
              <MDBTypography className='text-center mb-0'>
                No Tours Found
              </MDBTypography>
            )
          }
          <MDBCol>
            <MDBContainer>
              <MDBRow className='row-cols-1 row-cols-md-3 g-2'>
                {
                  tours.tours && tours.tours.map((item,index)=> <CartTour key={index} {...item}/> )
                }
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
    </div>
  )
}
