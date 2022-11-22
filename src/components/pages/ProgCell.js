import React from 'react';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
const page1 = "{currentPage === 'Proj1' ? 'nav-link active' : 'nav-link'}"
const page2 = "{currentPage === 'Proj2' ? 'nav-link active' : 'nav-link'}"
const page3 = "{currentPage === 'Proj3' ? 'nav-link active' : 'nav-link'}"
const page4 = "{currentPage === 'Proj4' ? 'nav-link active' : 'nav-link'}"
const page5 = "{currentPage === 'Proj5' ? 'nav-link active' : 'nav-link'}"
const page6 = "{currentPage === 'Proj6' ? 'nav-link active' : 'nav-link'}"
const page7 = "{currentPage === 'Proj7' ? 'nav-link active' : 'nav-link'}"


export default function ProjCell({ currentPage, handlePageChange }) {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Image
          src="https://user-images.githubusercontent.com/9198297/201371225-a8b36224-6e2c-43a3-b66f-da3140a7a096.jpg"
          alt="SQL Store"
          onClick={() => handlePageChange('Proj1')}
          className={`d-block w-100 h-30 ${page1}`}
        />
        <Carousel.Caption>
          <h5>SQL Store</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Proj2')}
          className={`d-block w-100 h-30 ${page2}`}
          src="https://user-images.githubusercontent.com/9198297/190828203-2adb4546-0e32-43f5-a163-07e28f079d48.png"
          alt="PasswordGen"
        />
        <Carousel.Caption>
          <h5>PasswordGen</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Proj3')}
          className={`d-block w-100 h-30 ${page3}`}
          src="https://i.redd.it/i0h9ke187tk31.png"
          alt="Readme generator"
        />
        <Carousel.Caption>
          <h5>Readme generator</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Proj4')}
          className={`d-block w-100 h-30 ${page4}`}
          src="https://user-images.githubusercontent.com/9198297/197867296-86436430-632b-4173-83d9-51cb3783512b.png"
          alt="Weather app"
        />
        <Carousel.Caption>
          <h5>Weather app</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Proj5')}
          className={`d-block w-100 h-30 ${page5}`}
          src="https://i.redd.it/i0h9ke187tk31.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>ArrayGun</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Prog6')}
          className={`d-block w-100 h-30 ${page6}`}
          src="https://user-images.githubusercontent.com/9198297/190828201-4c425bc6-afbb-478d-9ced-a84e829e34c3.png"
          alt="Fibonacci generator"
        />
        <Carousel.Caption>
          <h5>Fibonacci generator</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          onClick={() => handlePageChange('Proj7')}
          className={`d-block w-100 h-30 ${page7}`}
          src="https://user-images.githubusercontent.com/9198297/200918630-01c4f4fd-d28e-4ce9-99c0-1ba52a8e63f4.jpg"
          alt="Team Maker"
        />
        <Carousel.Caption>
          <h5>TeamMaker</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

