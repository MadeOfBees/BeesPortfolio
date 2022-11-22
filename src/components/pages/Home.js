import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <h1>About Bee:</h1>
      <p>
        Hi, i'm Bee and this is my portfolio, I don't really know what to write here so here's some sample text.
      </p>
      <div class="container text-center">
        <div class="row">
          <div class="col">
          <a href="https://github.com/MadeOfBees"><BsGithub />Github: MadeOfBees</a>
          </div>
          <div class="col">
            <a href="mailto: xronsredstone@gmail.com"><MdOutlineMail />Email: xronsredstone@gmail.com</a>
          </div>
          <div class="col">
            <BsLinkedin />
            Linkdin: None yet
          </div>
        </div>
      </div>
    </div >
  );
}
