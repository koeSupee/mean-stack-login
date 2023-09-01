import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Hero() {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card
          className="p-5 d-flex flex-column align-items-center 
        hero-card bg-light w-75"
        >
          <h1 className="text-center mb-4"> ระบบการยืนยันตัวตน</h1>
          <p className="text-center mb-4">
            นี่คือแพลตฟอร์มที่ใช้เทคโนโลยีแบบ MEAN Stack ที่เก็บ JWT ใน
            HTTP-Only Cookie และส่วนของหน้าบ้านใช้ Redux Toolkit และ React
            Bootstrap ในการพัฒนา เป็น Mini Project
            เพื่อใช้อ้างอิงและเอาไว้ต่อยอดในการพัฒนาโปรเจคต่อๆไป.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Sign Up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Hero;
