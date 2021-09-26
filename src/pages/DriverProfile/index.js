import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import classnames from "classnames"
import { MetaTags } from "react-meta-tags"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import SweetAlert from "react-bootstrap-sweetalert"

import Breadcrumbs from "../../components/Common/Breadcrumb"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const DriverProfile = () => {
  const { id } = useParams()
  const { requests } = useSelector(state => state.DriverRequests)
  const [driver, setDriver] = useState({
    id: "",
    carColor: "",
    carMake: "",
    city: "",
    driverName: "",
    email: "",
    phoneNumber: "",
    plateNumber: "",
    frontPicture: "",
    rearPicture: "",
    rightSidePicture: "",
    leftSidePicture: "",
  })
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_description, setdynamic_description] = useState("")
  const [alertTitle, setAlertTitle] = useState("Are You Sure?")
  const [confirmBtnText, setConfirmBtnText] = useState("")
  const [photoIndex, setphotoIndex] = useState(0)
  const [isGallery, setisGallery] = useState(false)
  const [activeTab, setActiveTab] = useState("1")

  const images = [
    {
      src: driver.frontPicture,
      label: "Front Picture",
    },
    {
      src: driver.rearPicture,
      label: "Rear Picture",
    },
    {
      src: driver.leftSidePicture,
      label: "Left Side Picture",
    },
    {
      src: driver.rightSidePicture,
      label: "Right Side Picture",
    },
  ]

  function toggle(tab) {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  useEffect(() => {
    requests && setDriver(requests.filter(request => request.id == id)[0])
  }, [requests])

  return (
    <>
      <div className="page-content">
        <MetaTags>
          <title>Driver Profile | {driver.driverName}</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            title="Driver Profile"
            breadcrumbItem={driver.driverName}
          />
          {isGallery ? (
            <Lightbox
              mainSrc={images[photoIndex].src}
              nextSrc={images[(photoIndex + 1) % images.length].src}
              prevSrc={
                images[(photoIndex + images.length - 1) % images.length].src
              }
              enableZoom={true}
              onCloseRequest={() => {
                setisGallery(false)
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + images.length - 1) % images.length)
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length)
              }}
              imageCaption={images[photoIndex].label}
            />
          ) : null}
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1")
                        }}
                      >
                        Driver
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2")
                        }}
                      >
                        Car
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3")
                        }}
                      >
                        Car Images
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab} className="p-3 text-muted">
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <Row className="mt-3">
                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="driverName">Name</label>
                                <input
                                  type="text"
                                  name="driverName"
                                  className="form-control"
                                  value={driver.driverName}
                                  readOnly
                                />
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  value={driver.email}
                                  readOnly
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="phoneNumber">
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  className="form-control"
                                  value={driver.phoneNumber}
                                  readOnly
                                />
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="city">City</label>
                                <input
                                  type="text"
                                  name="city"
                                  className="form-control"
                                  value={driver.city}
                                  readOnly
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <Row className="mt-3">
                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="carMake">Car Model</label>
                                <input
                                  type="text"
                                  name="carMake"
                                  className="form-control"
                                  value={driver.carMake}
                                  readOnly
                                />
                              </div>
                            </Col>

                            <Col md="6">
                              <div className="form-group form-group-default">
                                <label htmlFor="city">Car Color</label>
                                <input
                                  type="text"
                                  name="carColor"
                                  className="form-control"
                                  value={driver.carColor}
                                  readOnly
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col md="12">
                              <div className="form-group form-group-default">
                                <label htmlFor="plateNumber">
                                  Plate Number
                                </label>
                                <input
                                  type="text"
                                  name="plateNumber"
                                  className="form-control"
                                  value={driver.plateNumber}
                                  readOnly
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12">
                          <div className="popup-gallery d-flex flex-wrap">
                            {images.map((img, index) => {
                              return (
                                <div
                                  key={index}
                                  className="img-fluid float-left"
                                >
                                  <img
                                    src={img.src}
                                    onClick={() => {
                                      setisGallery(true)
                                      setphotoIndex(index)
                                    }}
                                    alt={img.label}
                                    width="120"
                                  />
                                </div>
                              )
                            })}
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  <div className="text-right mt-3 mb-3">
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                      onClick={() => {
                        setAlertTitle(
                          `Are You Sure You Want To Approve ${driver.driverName}?`
                        )
                        setConfirmBtnText(`Yes, Accept ${driver.driverName}`)
                        setconfirm_alert(true)
                        setdynamic_description(
                          `${driver.driverName} has been approved!`
                        )
                        setdynamic_title("Approved")
                      }}
                      id="sa-success"
                    >
                      Approve
                    </Button>
                    <Button
                      color="danger"
                      className="btn btn-danger waves-effect waves-light"
                      onClick={() => {
                        setAlertTitle(
                          `Are You Sure You Want To Reject ${driver.driverName}?`
                        )
                        setConfirmBtnText(`Yes, Reject ${driver.driverName}`)
                        setconfirm_alert(true)
                        setdynamic_description(
                          `${driver.driverName} has been rejected!`
                        )
                        setdynamic_title("Rejected")
                      }}
                    >
                      Reject
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Col xl={3} lg={4} sm={6} className="mb-2">
            {success_dlg ? (
              <SweetAlert
                success
                title={dynamic_title}
                onConfirm={() => {
                  setsuccess_dlg(false)
                }}
              >
                {dynamic_description}
              </SweetAlert>
            ) : null}

            {confirm_alert ? (
              <SweetAlert
                title={alertTitle}
                warning
                showCancel
                confirmButtonText="Yes, delete it!"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  setconfirm_alert(false)
                  setsuccess_dlg(true)
                }}
                onCancel={() => setconfirm_alert(false)}
              >
                You Can Change It Later
              </SweetAlert>
            ) : null}
          </Col>
        </Container>
      </div>
    </>
  )
}

export default DriverProfile
