 
import
 {MDBCard,MDBCardBody,MDBCardFooter,MDBValidation,MDBBtn,MDBSpinner, MDBInput}
 from'mdb-react-ui-kit'
 import FileBase from'react-file-base64';
 import {toast} from'react-toastify'
 import {useNavigate} from'react-router-dom'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector}from'react-redux'
import {crateTour}from'../redux/features/tourSlice'
 const initialState = {
  title:'',
  description:'',
  tags:[]
 }
export default function AddEditTour() {
  const [tourData,setTourData] = useState(initialState);
  const {error,loading} = useSelector((state)=>({...state.tour}))
  const {user} = useSelector((state)=>({...state.auth}))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {title,description,tags} = tourData;
  useEffect(()=>{
    error&&  toast.error(error)
  },[error])
  const handleSubmit = (e)=>{
   e.preventDefault()
    if(title&&description){
      const updateTourData = {...tourData, name:user?.result?.name}
     dispatch(crateTour({updateTourData,navigate,toast}))
    }
  };
  const onInputChange = (e)=>{
    const {name,value} = e.target
     setTourData({...tourData,[name]:value})

    }
  const handleAddTag = (tag)=>{
    setTourData({...tourData,tags:[...tag.tag,tag]})
  }
  const handleDeleteTag = (deleteTag) =>{
    setTourData({
      ...setTourData,
      tags:tourData.tags.filter((tag)=> tag !== deleteTag)
    })
  }
  const handlClear =()=>{
    setTourData({title:'',description:'',tags:[]})
  }
  return (
    <div
    style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "450px",
      alignContent: "center",
      marginTop: "120px",
    }}
    className="container"
  >
    <MDBCard alignment="center">
      <h5>Add Tour</h5>
      <MDBCardBody>
        <MDBValidation  className="row g-3" noValidate onSubmit={handleSubmit}>
          <div className="col-md-12">
            <MDBInput
              placeholder="Enter Title"
              type="text"
              value={title}
              name="title"
              onChange={onInputChange}
              className="form-control"
              required
              invalid
              validation="Please provide title"
            />
          </div>
          <div className="col-md-12">
            <MDBInput
              placeholder="Enter Description"
              type="text"
              value={description}
              name="description"
               onChange={onInputChange}
              className="form-control"
              required
              invalid
              textarea
              rows={4}
              validation="Please provide description"
            />
          </div>
          
          <div className="d-flex justify-content-start">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setTourData({ ...tourData, imageFile: base64 })
              }
            />
          </div>
          <div className="col-12">
            <MDBBtn style={{ width: "100%" }}>
            "Update"
            </MDBBtn>
            <MDBBtn
              style={{ width: "100%" }}
              className="mt-2"
              color="danger"
            onClick={handlClear}
            >
              Clear
            </MDBBtn>
          </div>
        </MDBValidation>
      </MDBCardBody>
    </MDBCard>
  </div>
  )
}
