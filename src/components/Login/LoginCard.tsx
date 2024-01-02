import { Card, Image,Input , Button  } from '@mantine/core';
import "./LoginCard.css"
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <Card className='login' shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image className='image-logo'
          src="https://www.festivaldujeu-montpellier.org/wp-content/uploads/2019/11/cropped-logo_FJM_FINAL_160.png"
          alt="logo"
        />
      </Card.Section>

      <div className="input-section"> 
        <div className='title'>Login </div>
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
            Login
          </Button>
          <Link to="/register">
            <Button color="blue" fullWidth mt="md" radius="md">
              Don't have an account ?
            </Button>
          </Link>
      </div>
        </Card>
   
  );
}
