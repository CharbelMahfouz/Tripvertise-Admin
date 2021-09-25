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
  })
  const [confirm_alert, setconfirm_alert] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_description, setdynamic_description] = useState("")
  const [alertTitle, setAlertTitle] = useState("Are You Sure?")
  const [confirmBtnText, setConfirmBtnText] = useState("")

  const [activeTab, setActiveTab] = useState("1")
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
                          <CardText className="mb-0">
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney's organic lomo retro
                            fanny pack lo-fi farm-to-table readymade. Messenger
                            bag gentrify pitchfork tattooed craft beer, iphone
                            skateboard locavore carles etsy salvia banksy hoodie
                            helvetica. DIY synth PBR banksy irony. Leggings
                            gentrify squid 8-bit cred pitchfork. Williamsburg
                            banh mi whatever gluten-free, carles pitchfork
                            biodiesel fixie etsy retro mlkshk vice blog.
                            Scenester cred you probably haven't heard of them,
                            vinyl craft beer blog stumptown. Pitchfork
                            sustainable tofu synth chambray yr.
                          </CardText>
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
                      Accept
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
