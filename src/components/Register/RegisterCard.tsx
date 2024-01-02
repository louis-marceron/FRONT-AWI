import { Card, Image,Input , Button  } from '@mantine/core';
import "./RegisterCard.css"
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <Card className='register' shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image className='image-logo'
          src="https://www.festivaldujeu-montpellier.org/wp-content/uploads/2019/11/cropped-logo_FJM_FINAL_160.png"
          alt="logo"
        />
      </Card.Section>

      <div className="input-section"> 
      <div className='title'>Register </div>
          <Input.Wrapper
          id="email"
          withAsterisk
          label="Email adress"
          description="Please enter your email adress"
          error="Your email doesn't exist"
          >
          <Input id="Email" placeholder="Email" />
        </Input.Wrapper>

        <Input.Wrapper
          id="password"
          withAsterisk
          label="Password"
          description="Please enter your Password"
          error="Wrong password"
          >
          <Input id="Password" placeholder="Password" />
        </Input.Wrapper>

          <Button color="blue" fullWidth mt="md" radius="md">
            Register
          </Button>
          <Link to="/">
            <Button color="blue" fullWidth mt="md" radius="md">
              Already have an account ?
            </Button>
          </Link>
      </div>
        </Card>
   
  );
}
