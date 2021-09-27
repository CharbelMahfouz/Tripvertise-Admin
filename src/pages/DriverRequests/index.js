import React, { useEffect, useState } from "react"
import { MetaTags } from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { getDriverRequests } from "store/actions"
import { Link } from "react-router-dom"
import {useLocation} from "react-router-dom";

const DriverRequests = () => {
 
  const {search} = useLocation();
  const statusId = new URLSearchParams(search).get('statusId');
  const dispatch = useDispatch()
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])

  const { requests, loading } = useSelector(state => state.DriverRequests)
  console.log(requests)
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 270,
      },
      {
        label: "Phone Number",
        field: "phone",
        sort: "asc",
        width: 200,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 100,
      },
      {
        label: "Car Brand",
        field: "car",
        sort: "asc",
        width: 150,
      },
      {
        label: "Car Color",
        field: "color",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plate Number",
        field: "plate",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "profile",
        width: 100,
      },
      // {
      //   label: "Front Picture",
      //   field: "front",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Rear Picture",
      //   field: "rear",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Left Side Picture",
      //   field: "left",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Right Side Picture",
      //   field: "right",
      //   sort: "asc",
      //   width: 100,
      // },
    ],
    rows: rows,
  }
  const fetchDriverRequests = (id) => {
    dispatch(getDriverRequests(id))
  }

  useEffect(() => {
    fetchDriverRequests(statusId)
  }, [statusId])

  // useEffect(() => {
  //   requests && setColumns(requests.map(column => Object.entries(column)))
  // }, [requests])

  useEffect(() => {
    requests &&
      setRows(
        requests.map(req => {
          return {
            name: req.driverName,
            email: req.email,
            phone: req.phoneNumber,
            city: req.cityName,
            car: req.carMake,
            color: req.carColor,
            plate: req.plateNumber,
            profile: <Link to={`/driverprofile/${req.id}`}>View Profile</Link>,
          }
        })
      )
  }, [requests])

  return (
    <>
      <div className="page-content">
        <MetaTags>
          <title>Admin - Driver Requests</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Admin"
            title="Driver Requests"
            breadcrumbItem={statusId == 0 ? "Pending Requests": statusId == 2 ? "Approved Requests" : "Rejected Requests"}
          />

          <Row>
            <Col className="col-12">
              
              <Card>
                <CardBody>

                {loading ? <Spinner className="ms-2" color="warning" /> : (
                  <div>
                    <CardTitle className="h4">{statusId == 0 ? "Pending Requests": statusId == 2 ? "Approved Requests" : "Rejected Requests"} </CardTitle>
  
                    <MDBDataTable responsive striped bordered hover data={data} />
                    </div>
                )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default DriverRequests
