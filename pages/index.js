import Head from 'next/head'
import styles from '../styles/Home.module.css'
import stylesown from '../styles/Landing.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link';

import $ from 'jquery';
import { findDOMNode } from 'react-dom';



function nextCard() {

  // const card1=findDOMNode(this.ref.car)
  // var card1=document.getElementById("resultCard1");
  const card1 = $('#resultCard1');
  const card2 = $('#resultCard2');
  const card3 = $('#resultCard3');
  card1.attr('id', 'resultCard2');
  card2.attr('id', 'resultCard3');
  card3.attr('id', 'resultCard1');

  $('#resultCardContainer1').empty();
  $('#resultCardContainer2').empty();
  $('#resultCardContainer3').empty();

  $('#resultCardContainer1').append(card3);
  $('#resultCardContainer2').append(card1);
  $('#resultCardContainer3').append(card2);



}

function backCard() {
  const card1 = $('#resultCard1');
  const card2 = $('#resultCard2');
  const card3 = $('#resultCard3');
  card1.attr('id', 'resultCard3');
  card2.attr('id', 'resultCard1');
  card3.attr('id', 'resultCard2');

  $('#resultCardContainer1').empty();
  $('#resultCardContainer2').empty();
  $('#resultCardContainer3').empty();

  $('#resultCardContainer1').append(card2);
  $('#resultCardContainer2').append(card3);
  $('#resultCardContainer3').append(card1);
}

export default function Home() {


  return (

    <div >
      <Head>
        <title>Mano Group</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <div className="position-absolute top-0 start-0">
        <img src="/img/background hero section 1.png" className="absolute"></img>
      </div>

      <div className="position-absolute top-0 end-0 d-none d-sm-none d-md-block d-lg-block ">
        <img src="/img/background hero section 2.png" className="absolute"></img>
      </div>

      <Container fluid id="home">
        <div className={stylesown.herosection} >
          <header>
            <img src="/img/logo.png"></img>


            <Navbar collapseOnSelect expand="lg" className={stylesown.heroSectionNavbar}>

              <div className={stylesown.menuButtonCollapsed} >
                <div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
              </div>
              <Navbar.Collapse id="responsive-navbar-nav" className={stylesown.menuList}>
                <Nav defaultActiveKey="#home" as="ul" fixed="top">
                  <Nav.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#services">Services</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#expertise">Expertise</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#implementation">Implementation</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#stratergy">Stratergy</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#result">Result</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#partners">Partners</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="#about">About</Nav.Link>
                    <hr />
                  </Nav.Item>
                  <Nav.Item as="li">
                    <button>Contact us</button>
                  </Nav.Item>

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <Container fluid className={stylesown.carousel}  >
            <div className=" position-relative">
              <img src="/img/ciculoCarousel1.svg" className={stylesown.carouselCircle1}></img>
            </div>
            <div className=" position-relative d-none d-sm-none d-md-none d-lg-block">
              <img src="/img/ciculoCarousel2.svg" className={stylesown.carouselCircle2}></img>
            </div>
            <div className=" position-relative d-none d-sm-none d-md-none d-lg-block">
              <img src="/img/ciculoCarousel3.svg" className={stylesown.carouselCircle3}></img>
            </div>
            <Carousel control="false" className={stylesown.carouselIndicator}>
              <Carousel.Item>
                <Row>
                  <Col sm={{ span: 10, offset: 1 }} md={{ span: 5 }} lg={{ span: 5 }}>
                    <img
                      className="img-fluid"
                      src="/img/illustration.png"
                      alt="Fast Cloud Migrations"
                    />
                  </Col>
                  <Col sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }} >
                    <div >
                      <h1><span>Fast</span> Cloud Migration 1</h1>
                      <p>
                        We provides advance solutions to migrate and <br />
                      manage operations on AWS
                    </p>
                      <button>Get Starter</button>
                    </div>

                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col sm={{ span: 10, offset: 1 }} md={{ span: 5 }} lg={{ span: 5 }}>
                    <img
                      className="img-fluid"
                      src="/img/illustration.png"
                      alt="Fast Cloud Migrations"
                    />
                  </Col>
                  <Col sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <div >
                      <h1><span>Fast</span> Cloud Migration 2</h1>
                      <p>
                        We provides advance solutions to migrate and <br />
                      manage operations on AWS
                    </p>
                      <button>Get Starter</button>
                    </div>

                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col sm={{ span: 10, offset: 1 }} md={{ span: 5 }} lg={{ span: 5 }}>
                    <img
                      className="img-fluid"
                      src="/img/illustration.png"
                      alt="Fast Cloud Migrations"
                    />
                  </Col>
                  <Col sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <div >
                      <h1><span>Fast</span> Cloud Migration 3</h1>
                      <p>
                        We provides advance solutions to migrate and <br />
                      manage operations on AWS
                    </p>
                      <button>Get Starter</button>
                    </div>

                  </Col>
                </Row>
              </Carousel.Item>


            </Carousel>
          </Container>

        </div>
      </Container>

      <Container fluid className={stylesown.servicessection} id="services">
        <Row className={stylesown.title}>

          <Col className="mt-5">
            <span className={stylesown.generaltitle}>Services</span>
            <p>Our Best <span>Services</span></p>
          </Col>
        </Row>
        <Container className={stylesown.servicescards}>
          <Row>

            <Col sm={12} md={4} className="mt-4 ">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a1.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Cloud Migrations</Card.Title>
                  <Card.Text>
                    Run your software semalessly on AWS, getting performance and optimizing cost.
              </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mt-4">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a2.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Security and Compliance</Card.Title>
                  <Card.Text>
                    Security is our highest priority, you could scale and innovate, while maintaining a secure environment.
                  </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mt-4">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a3.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Dev Environments</Card.Title>
                  <Card.Text>
                    Automate your local development environment using docker. Onboard quickly new developers and speed up the software development process.
                  </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>

          </Row>
          <Row>

            <Col sm={12} md={4} className="mt-4">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a4.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Site Reliability Engineering</Card.Title>
                  <Card.Text>
                    Monitor your resources, collect, aggregate and report on operational logs from all services.
                  </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mt-4">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a5.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Scale Testing</Card.Title>
                  <Card.Text>
                    You can scale to meet demand. We have great experience and good practices for this.
                  </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mt-4">
              <Card className="h-100">
                <div>
                  <Card.Img variant="top" src="/img/icon a6.svg" />
                </div>
                <Card.Body>
                  <Card.Title>Release Engineering</Card.Title>
                  <Card.Text>
                    We help you to automate your processes to integrate and deploy your apps faster than ever.
                  </Card.Text>

                </Card.Body>
                <div className="p-3" >
                  <Link href="/services">
                    <a>Request services ></a>
                  </Link>
                </div>
              </Card>
            </Col>

          </Row>
        </Container>
      </Container>

      <Container fluid id="expertise">
        <div className=" position-relative">
          <img src="/img/imgExpertise.svg" className={stylesown.experticeImg1}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/cicleExpertice.svg" className={stylesown.cexperticeCircle2}></img>
        </div>
        <Container fluid className={stylesown.expertise}>
          <Row className={stylesown.title}>

            <Col className="mt-5">
              <span className={stylesown.generaltitle}>Expertise</span>
              <p>We have our <span>Expertise</span></p>
            </Col>
          </Row>
          <Container className={stylesown.expertice}>
            <Row>

              <Col sm={12} md={6} lg={3} className="mt-4 ">
                <Card className="position-relative h-100">
                  <div className="p-4" className={stylesown.experticeImgHeight}>
                    <Card.Img className="img-fluid" variant="top" src="/img/amazon.png" />
                  </div>
                  <Card.Body>
                    <Card.Title>AWS</Card.Title>
                    <Card.Text className="p-2">
                      AWS provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. With data center locations around the world.
              </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="mt-4">
                <Card className="position-relative h-100">
                  <div className="p-4" className={stylesown.experticeImgHeight}>
                    <Card.Img className="img-fluid" variant="top" src="/img/docker-logo.png" />
                  </div>
                  <Card.Body>
                    <Card.Title>DOCKER</Card.Title>
                    <Card.Text className="p-2">
                      Replaces the traditional Virtual Machines with a light weight alternative ideally suited for micro services. Container platform that allow you create, share and run applications without problems anywhere.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="mt-4">
                <Card className="position-relative h-100">
                  <div className="p-4 " className={stylesown.experticeImgHeight}>
                    <Card.Img className="img-fluid" variant="top" src="/img/Kubernetes-Logo.wine.png" />
                  </div>
                  <Card.Body>
                    <Card.Title>KUBERNETES</Card.Title>
                    <Card.Text className="p-2">
                      Replaces the traditional Virtual Machines with a light weight alternative ideally suited for micro services. Container platform that allow you create, share and run applications without problems anywhere.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={3} className="mt-4">
                <Card className="position-relative h-100">
                  <div className="p-4" className={stylesown.experticeImgHeight}>
                    <Card.Img className="img-fluid" variant="top" src="/img/terraform.png" />
                  </div>
                  <Card.Body>
                    <Card.Title>TERRAFORM</Card.Title>
                    <Card.Text className="p-2">
                      Terraform is a tool for developing, changing and versioning infrastructure safely and efficiently. It allow you manage your infraestructure as a code, with a simple syntax that provide easy modularity and works against multi-cloud.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>
        </Container>
      </Container>

      <Container fluid id="implementation">
        <div className=" position-relative">
          <img src="/img/implementationImg.svg" className={stylesown.implementationsImg1}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/imlementacionCircle.svg" className={stylesown.implementationsCircle}></img>
        </div>


        <Container fluid className={stylesown.implementationcards} >
          <Row className={stylesown.title}>

            <Col className="mt-5">
              <span className={stylesown.generaltitle}>Implementation</span>
              <p>See the Steps of <span>Implementation</span></p>
            </Col>
          </Row>
          <Container fluid className="position-relative">
            {/* <div className={stylesown.implementationsArrowContainerHorizontal}
              
            >
              
                <img src="/img/implementationArrow.svg" className={stylesown.implementationsArrowHorizontal} ></img>
                <hr className={stylesown.implementationsArrowLineHorizontal} />
                <img src="/img/implementationArrowCircle.png" className={stylesown.implementationsArrowCircle1Horizontal}></img>
              
            </div>
            <div className={stylesown.implementationsArrowContainerVertical}
                
            >
              <img src="/img/implementationArrowAbajo.svg" className={stylesown.implementationsArrowVertical} ></img>
              <div className={stylesown.implementationsArrowLineVertical} ></div>
              <img src="/img/implementationArrowCircle.png" className={stylesown.implementationsArrowCircle1Vertical}></img>

            </div> */}


            <Container className={stylesown.implementationcards} >
              <Row >
                <Col sm={12} md={12} lg={3} className="mt-4 ml-5">
                  <Card className="h-100">
                    <Card.Header as="h5" className="p-4 bg-dark ">Build and Deploy Automation</Card.Header>
                    <Card.Body>

                      <Card.Text>
                        We implement automation tools supporting Continuous Delivery and DevOps capabilities along with automation improvements.
                  </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={12} lg={3} className="mt-4 ">
                  <Card className="h-100">
                    <Card.Header as="h5" className="p-4 bg-dark ">Organizational DevOps Change</Card.Header>
                    <Card.Body>

                      <Card.Text>
                        We built an IT Operating Model, based on DevOps principles, into the organization through workshops, training and working alongside with the teams
                  </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={12} lg={3} className="mt-4 ">
                  <Card className="h-100" >
                    <Card.Header as="h5" className="p-4 bg-dark ">DevOps Tooling Platform</Card.Header>
                    <Card.Body>

                      <Card.Text>
                        We run and operate the automated tooling platform, helping select the right blend of tools and infrastructure solutions to meet the organization’s needs.
                  </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={12} lg={3} className="mt-4  md-5">
                  <Card className="h-100">
                    <Card.Header as="h5" className="p-4 bg-dark ">Infrastructure as Code</Card.Header>
                    <Card.Body>

                      <Card.Text>
                        We develope and versioning infrastructure safely and efficiently. Allowing to manage your infrastructure as a code, with a simple syntax that provide easy modularity
                  </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>


              </Row>
            </Container>
          </Container>
        </Container>
      </Container>

      <Container fluid id="stratergy">
        <div className=" position-relative">
          <img src="/img/stratergyImg.png" className={stylesown.stratergyImg}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/stratergyCircle1.svg" className={stylesown.stratergyCircle1}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/stratergyCircle2.svg" className={stylesown.stratergyCircle2}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/stratergyCircle3.svg" className={stylesown.stratergyCircle3}></img>
        </div>
        <Container className={stylesown.stratergy}>
          <Row className="justify-content-md-center">

            <Col xs={{ span: 12, order: 3 }} sm={{ span: 12, order: 3 }} md={{ span: 12, order: 3 }} lg={{ span: 3, order: 1 }} className="mt-4  " className={stylesown.stratergycolumone}>
              <div className="mb-5 d-none d-sm-none d-md-none d-lg-block">
                <img
                  className="img-fluid"
                  src="/img/bi_arrow-90deg-down.svg"

                />
              </div>
              <Card className="p-3 mt-4">
                <div  >
                  <div className={stylesown.stratergyimg1} >
                    <Card.Img variant="top" src="/img/monitor.svg" />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Value Case for Change</Card.Title>
                  <Card.Text className="mt-4 mb-4">
                    Based on closing maturity gaps, we create a value case, including velocity, productivity and quality
                  </Card.Text>

                </Card.Body>
              </Card>
              <div className="mt-5 d-none d-sm-none d-md-none d-lg-block">
                <img
                  className="img-fluid"
                  src="/img/bi_arrow-90deg-down2.svg"

                />
              </div>

            </Col>
            <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 3, order: 2 }} className="mt-4 ">
              <Card className="p-3">
                <div  >
                  <div className={stylesown.stratergyimg2} >
                    <Card.Img variant="top" src="/img/lupa.svg" />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Diagnostics</Card.Title>
                  <Card.Text className="mt-4 mb-4">
                    We assess existing software delivery maturity and provide insights into the opportunities that DevOps will help realize
                  </Card.Text>

                </Card.Body>
              </Card>
              <Card className="mt-4 p-3">
                <div  >
                  <div className={stylesown.stratergyimg3} >
                    <Card.Img variant="top" src="/img/check.svg" />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Modern Engineering Capabilities Blueprint</Card.Title>
                  <Card.Text className="mt-4 mb-4">
                    Based on the best practices and recommendations, we work to support an IT Operating Model based on DevOps principles.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col xs={{ span: 12, order: 'first' }} sm={{ span: 12, order: 'first' }} md={{ span: 12, order: 'first' }} lg={{ span: 3, order: 3 }} className="mt-4 " className={stylesown.stratergytitleparent}>
              <div className="p-2">

                <span className={stylesown.generaltitle}>Stratergy</span>
                <p className={stylesown.stratergytitle}>Our Best <span>Stratergy</span></p>
                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.</p>
              </div>

            </Col>

          </Row>
        </Container>
      </Container>
      <Container fluid>
        <div className=" position-relative">
          <img src="/img/teamImgBk.png" className={stylesown.teamImg}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/teamCircle1.svg" className={stylesown.teamCircle1}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/teamCircle2.svg" className={stylesown.teamCircle2}></img>
        </div>


        <Container className={stylesown.implementationcards} >
          <Row className={stylesown.title}>

            <Col className="mt-5" >
              <span className={stylesown.generaltitle}>Team</span>
              <p>Meet our Great <span>Team</span></p>
            </Col>
          </Row>
          <Container className={stylesown.implementationcards}>
            <Row className="justify-content-md-center">

              <Col sm={12} md={12} lg={3} className="mb-3">
                <Card className="mb-4 h-100">
                  <Card.Header className={stylesown.teamheader}>
                    <div className={stylesown.teamimgparent}>
                      <Card.Img className={stylesown.teamimg1} variant="top" src="/img/daniel.jpg" />
                    </div>
                    <Card.Title className={stylesown.teamtitle}>Daniel Ch&aacute;vez</Card.Title>
                    <Card.Text>Programmer</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className={stylesown.teamtext}>
                      We implement automation tools supporting Continuous Delivery and DevOps capabilities along with automation improvements.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={12} lg={3} className="mb-3">
                <Card className="mb-4 h-100">
                  <Card.Header className={stylesown.teamheader}>
                    <div className={stylesown.teamimgparent}>
                      <Card.Img className={stylesown.teamimg1} variant="top" src="/img/daniel.jpg" />
                    </div>
                    <Card.Title className={stylesown.teamtitle}>Daniel Ch&aacute;vez</Card.Title>
                    <Card.Text>Programmer</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className={stylesown.teamtext}>
                      We implement automation tools supporting Continuous Delivery and DevOps capabilities along with automation improvements.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={12} lg={3} className="mb-3">
                <Card className="mb-4 h-100">
                  <Card.Header className={stylesown.teamheader}>
                    <div className={stylesown.teamimgparent}>
                      <Card.Img className={stylesown.teamimg1} variant="top" src="/img/daniel.jpg" />
                    </div>
                    <Card.Title className={stylesown.teamtitle}>Daniel Ch&aacute;vez</Card.Title>
                    <Card.Text>Programmer</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className={stylesown.teamtext}>
                      We implement automation tools supporting Continuous Delivery and DevOps capabilities along with automation improvements.
                  </Card.Text>

                  </Card.Body>
                </Card>
              </Col>


            </Row>
          </Container>
        </Container>
      </Container>


      <Container fluid id="result" className="mt-5">
        <div className=" position-relative">
          <img src="/img/resultImgBk.png" className={stylesown.resultImg}></img>
        </div>
        <Container >
          <Row className="justify-content-md-center">
            <Col sm={12} md={12} lg={3} className="mt-4 " className={stylesown.stratergytitleparent}>
              <div className="p-2">

                <span className={stylesown.generaltitle}>results</span>
                <p className={stylesown.stratergytitle}>Client  <span>Result</span></p>
                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.</p>
              </div>

            </Col>

            <Col sm={12} md={12} lg={9} className="mt-4 " className={stylesown.resultparent}>
              <Row>

                <div className={stylesown.resultCardGroup} >
                  <Col className="d-none d-sm-none d-md-block d-lg-block " id="resultCardContainer1" className={stylesown.resultCard1}>
                    <Card className="p-3" className={stylesown.resultcard} id="resultCard1">
                      <div className={stylesown.resultcardimgparent}>

                        <Card.Img variant="top" src="/img/omedym.png" className="img-fluid p-5" />

                      </div>
                      <Card.Body>
                        <Card.Title>Omedym 1</Card.Title>
                        <Card.Text className="mt-4 mb-4">
                          Based on closing maturity gaps, we create a value case, including velocity, productivity and quality
                        </Card.Text>
                        <Button className={stylesown.resultButton}>More details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col id="resultCardContainer2">
                    <Card className="p-3" className={stylesown.resultcard} id="resultCard2">
                      <div className={stylesown.resultcardimgparent}>

                        <Card.Img variant="top" src="/img/omedym.png" className="img-fluid p-5" />

                      </div>
                      <Card.Body>
                        <Card.Title>Omedym 2</Card.Title>
                        <Card.Text className="mt-4 mb-4">
                          Based on closing maturity gaps, we create a value case, including velocity, productivity and quality
                        </Card.Text>
                        <Button className={stylesown.resultButton}>More details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="d-none d-sm-none d-md-block d-lg-block" id="resultCardContainer3" className={stylesown.resultCard3}>
                    <Card className="p-3" className={stylesown.resultcard} id="resultCard3">
                      <div className={stylesown.resultcardimgparent}>

                        <Card.Img variant="top" src="/img/omedym.png" className="img-fluid p-5" />

                      </div>
                      <Card.Body>
                        <Card.Title>Omedym 3</Card.Title>
                        <Card.Text className="mt-4 mb-4">
                          Based on closing maturity gaps, we create a value case, including velocity, productivity and quality
                        </Card.Text>
                        <Button className={stylesown.resultButton}>More details</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                </div>
              </Row>
              <div className="mt-3">
                <Button className={stylesown.resultButtonNext} onClick={backCard}>&#60;  </Button>
                <Button className={stylesown.resultButtonNext} onClick={nextCard}>&#62; </Button>
              </div>
            </Col>


          </Row>
        </Container>
      </Container>

      <Container fluid id="partners">
        <div className=" position-relative">
          <img src="/img/partnerImgBk.png" className={stylesown.partnerImg}></img>
        </div>

        <Container className="mt-5 pt-5" >
          <Row className="justify-content-center">
            <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 4, order: 1 }} className="mt-4 " className={stylesown.parnershipparent}>
              <div >
                <Card className="p-3" className={stylesown.partnershipcard}>
                  <hr />
                  <div className={stylesown.resultcardimgparent}>
                    <Row>
                      <Col sm={12} md={12} lg={6}>
                        <Card.Img src="/img/amazon.png" className="img-fluid " className={stylesown.partnershipimg} />
                      </Col>
                      <Col sm={12} md={12} lg={6}>
                        <Card.Subtitle className={stylesown.resultcardsubtitle}>partner <br />network</Card.Subtitle>
                      </Col>
                    </Row>


                  </div>
                  <Card.Body>
                    <Card.Title className={stylesown.resultTitle}>Select</Card.Title>
                    <Card.Subtitle className={stylesown.resultcardsubtitle2}>Consulting Partner</Card.Subtitle>

                  </Card.Body>
                </Card>
              </div>

            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 2 }} className="mt-4 " className={stylesown.stratergytitleparent}>
              <div className="p-2 m-4">

                <span className={stylesown.generaltitle}>Partners</span>
                <p className={stylesown.stratergytitle}>Our <span>Partnership</span></p>
                <p>Focused on helping AWS customers take full advantage of all the business and technical benefits that AWS offers. And with deep expertise on AWS, we help our customers in any stage of cloud adoption jurney and achive they business objetives.</p>
              </div>

            </Col>


          </Row>
        </Container>
      </Container>

      <Container fluid id="about">

        <div className=" position-relative ">
          <img src="/img/aboutCircle1.svg" className={stylesown.aboutCircle1}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/aboutCircle2.svg" className={stylesown.aboutCircle2}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/aboutCircle3.svg" className={stylesown.aboutCircle3}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/aboutCircle4.svg" className={stylesown.aboutCircle4}></img>
        </div>
        <div className=" position-relative ">
          <img src="/img/aboutCircle5.svg" className={stylesown.aboutCircle5}></img>
        </div>

        <Container className="mt-5">

          <Row className="justify-content-md-center">
            <Col sm={12} md={6} className="mt-4 " className={stylesown.stratergytitleparent}>
              <div className="p-5 mr-5">

                <span className={stylesown.generaltitle}>about us</span>
                <p className={stylesown.stratergytitle}><span>Who</span> We Are</p>
                <p>We’re a DevOps professional services company, expert in cloud architects and seasoned software engineers who get this stuff. We’ll take time to understand both your business needs and technology requirements, allowing us to deliver exactly what you need. Let us solve your headaches.</p>
              </div>

            </Col>

            <Col sm={12} md={6} className="mt-4 " className={stylesown.resultparent}>
              <img className="img-fluid" src="/img/aboutus.svg" alt="About Us" />
            </Col>


          </Row>
        </Container>
      </Container>

      <Container fluid className={stylesown.contactContainer}>


        <Row className="justify-content-center pt-5">
          <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }} >
            <div >
              <Form className={stylesown.contactForm}>
                <Form.Group controlId="exampleForm.ControlInput1">

                  <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">

                  <Form.Control type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">

                  <Form.Control as="textarea" rows={3} placeholder="Tell us something" />
                </Form.Group>
                <div className={stylesown.contactFormButton}>
                  <Button type="submit" >
                    Send Message
                </Button>
                </div>

              </Form>
            </div>

          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 4, order: 2 }} className={stylesown.contactTextGroup}>
            <div className="p-2 m-4">

              <span className={stylesown.generaltitle}>Contact us</span>
              <p className={stylesown.contactTitle}>Get In Touch</p>
              <p>We'd love to hear from you</p>
            </div>

          </Col>


        </Row>
      </Container>





      <footer >
        <Container className={stylesown.footer}>

          <Container>
            <Row className="justify-content-md-center mb-5">

              <Col sm={12} md={3} className="mt-4 " className={stylesown.footerColumnOne}>
                <div className={stylesown.footerLogo}>
                  <img className="img-fluid" src="/img/logo_footer.svg" />

                </div>
                <div className={stylesown.footerSocial}>
                  <Link href='http://twiter.com'><a className={stylesown.socialTwitter}></a></Link>
                  <Link href='http://facebook.com'><a className={stylesown.socialFacebook}></a></Link>
                  <Link href='http://instagram.com'><a className={stylesown.socialIntagram}></a></Link>
                  <Link href='http://linkedin.com'><a className={stylesown.socialLinkedin}></a></Link>
                </div>
              </Col>

              <Col sm={12} md={2} className="mt-4 ">
                <h5>Quick Links</h5>
                <Nav defaultActiveKey="/home" as="ul" fixed="top" className="flex-column">
                  <Nav.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Services</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Expertise</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Implementation</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Stratergy</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Result</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Partners</Nav.Link>

                  </Nav.Item>



                </Nav>
              </Col>
              <Col sm={12} md={2} className="mt-4 ">
                <h5>Company</h5>
                <Nav defaultActiveKey="/home" as="ul" fixed="top" className="flex-column">
                  <Nav.Item as="li">
                    <Nav.Link href="#home">About</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Careers</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Customer Support</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">FAQ</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Term & Conditions</Nav.Link>

                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>

                  </Nav.Item>



                </Nav>
              </Col>
              <Col sm={12} md={2} className="mt-4 ">
                <h5>Our Address</h5>
                <div className={stylesown.footerMenuP}>
                  <p>Incididunt duis tempor ullamco et voluptate voluptate. Amet non ipsum laborum culpa tempor irure amet est exercitation esse ullamco ea.
                  </p>
                </div>

              </Col>
              <Col sm={12} md={3} className="mt-4 ">
                <h5>Newsletter</h5>
                <div className={stylesown.footerMenuP}>
                  <p>
                    Subscribe our newsletters to get update and many more.
                  </p>
                </div>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter your email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary"> <img className="img-fluid" src="/img/flecha.svg" /> </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <hr />
              <div className={stylesown.footerCopyright}>
                <p >
                  Copyright © 2021 by ManoGroup • All Rights Reserved
              </p>
              </div>

            </Row>
          </Container>
        </Container>



      </footer>
    </div>
  )
}
