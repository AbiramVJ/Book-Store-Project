import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

function ContentContainer() {
  return (
    <div>
        <Row style={{ backgroundColor:"white",margin:"10px" ,padding:"10px"}}>
           <Row style={{margin:"0px" , padding:"0px" ,backgroundColor:"white"}}>
                    <Col className="shadow" xs={3} md={4} lg={6} style={{margin:"10px", border:"2px" ,backgroundColor:"white"}}><p>Docter<br/> Movie</p></Col>
                    <Col className="shadow" style={{margin:"10px", border:"px",backgroundColor:"white"}}> <p>Entertaiment<br/> It Happened One Night (1934)</p></Col>
                    <Col className="shadow"  xs={6} md={4} lg={3} style={{margin:"10px", border:"2px",backgroundColor:"white"}}> <p> Money Hegist <br/>Mission: Impossible - Fallout (2018)</p></Col>
                    <Col className="shadow" style={{margin:"10px", border:"2px",backgroundColor:"white"}}><p> Valimai <br/>Mokka Padam (2022)</p></Col>
                    <Col className="shadow" xs={6} md={4} lg={3} style={{margin:"10px", border:"2px",backgroundColor:"white"}}><p> Beasts <br/>Vera level padam Padam (2022)</p></Col>
             </Row>
                    
               <Row style={{margin:"0px" ,padding:"0px" ,backgroundColor:"white"}}>
                    <Col className="shadow"  style={{margin:"10px", border:"2px",backgroundColor:"white" }}><p>Docter<br/> Movie</p></Col>
                    <Col className="shadow" xs={6} md={4} lg={3} style={{margin:"10px", border:"2px",backgroundColor:"white" }}><p> Movie <br/>Get Out (2017)</p></Col>
                    <Col className="shadow"  style={{margin:"10px", border:"2px",backgroundColor:"white"}}><p>Book<br/> Movie Mission: Impossible</p></Col>
                    <Col className="shadow" xs={6} md={4} lg={3} style={{margin:"10px", border:"2px",backgroundColor:"white" }}><p>Web sereies<br/> Movie thuppakki</p></Col>
               </Row>

              <Row md={4} style={{margin:"0px" ,padding:"0px" , backgroundColor:"white" }}>
                    <Col className="shadow" xs={6} md={4} lg={3} style={{ margin:"10px", border:"2px",backgroundColor:"white" }}><p>Docter<br/> Movie</p></Col>

              </Row>
              
            
        </Row>

        
    </div>
  );
}

export default ContentContainer;
