import Layouts from "../components/layout";
import Head from "next/head";
import styled from "@emotion/styled";

const ResumeLayout = styled.div`
  text-align: center;
`;
const ContactMe = styled.table`
  margin-left: auto;
  margin-right: auto;
`;
const TableDiv = styled.td`
  padding: 5px;
`;
export default function ResumePage() {
  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>
      <Layouts>
        <ResumeLayout>
          <h2>Emily Pepke</h2>
          <ContactMe>
            <tbody>
              <tr>
                <TableDiv>724-961-0339</TableDiv>
                <TableDiv>elpepke41@gmail.com</TableDiv>
              </tr>
              <tr>
                <TableDiv>
                  <a href="https://github.com/pepke41">GitHub</a>
                </TableDiv>
                <TableDiv>
                  <a href="emilypepke.com">Personal Website</a>
                </TableDiv>
              </tr>
            </tbody>
          </ContactMe>
        </ResumeLayout>
        <h3>Work Experience</h3>
        <hr />
        <h5>Prudential Financial: Customer Office</h5>
        <p>Software Engineer, May 2017-Present</p>
        <ul>
          <li>
            Contributed to Salesforce web application to improve productivity of
            customer service agents
          </li>
          <ul>
            <li>
              Extended Salesforce functionality through JavaScript and Apex
            </li>
            <li>Used Protractor with Typescript to write automated tests</li>
          </ul>
          <li>
            Worked with the front-end team on the customer facing application
          </li>
          <ul>
            <li>
              Used Angular2, Typescript and Sass to assit in feature work and
              fixing bugs
            </li>
          </ul>
        </ul>
        <h5>Verizon Wireless</h5>
        <p>Software Developer Intern: MyVerizon, June-August 2016</p>
        <ul>
          <li>
            Created a deployment dashboard web application for view infomration
            about builds and deployment: Artifactory, two Jenkins pages, and
            pages from our support team
          </li>
          <li>Worked with Java, JSP, HTML/CSS, Bootstrap, and Javascript</li>
        </ul>
        <h3>Academics</h3>
        <hr />
        <h5>University of Pittsburgh</h5>
        <ul>
          <li>Bachelors of Science: May 2017</li>
          <li>Major: Computer Science</li>
          <li>GPA Overall: 3.786 CS: 3.481</li>
        </ul>
        <h3>Skills</h3>
        <hr />
        <ul>
          <li>
            Experience in: JavaScript and Typescript, Sass and CSS, React and
            Next.js, Angular2, Ember.js, Java and Python
          </li>
        </ul>
        <h3>Projects</h3>
        <hr />
        <h5>
          <a href="https://pepke41.github.io/dnd-companion">
            Dungeons And Dragons Companion
          </a>
        </h5>
        <ul>
          <li>Single page application built with Ember.js</li>
          <li>Used Firebase for storing data and authentication</li>
          <li>Set up static site hosting through Github Pages</li>
        </ul>
        <h5>
          <a href="https://github.com/pepke41/imposter.me">Imposter.me</a>
        </h5>
        <ul>
          <li>Hackathon project using Ruby on Rails and Polymer</li>
          <li>
            Built a fully functioning web application in two days contributing
            to the front-end
          </li>
          <li>Used JavaScript, HTML/CSS, and Materialize</li>
          <li>Hosted on Heroku</li>
        </ul>
        <h5>
          <a href="https://github.com/pepke41/cathedral_climber">
            Cathedral Climber
          </a>
        </h5>
        <ul>
          <li>Text based game built in python</li>
          <li>Game was created using Test Driven Development</li>
        </ul>
        <h5>
          <a href="https://github.com/pepke41/pepke41.github.io">
            emilypepke.com
          </a>
        </h5>
        <ul>
          <li>Personal Website built using React, Next.js and Emotion</li>
        </ul>
        <h3>Activities</h3>
        <hr />
        <h5>NCWiT: Member</h5>
        <ul>
          <li>Attended Grace Hopper and meet ups with fellow NCWiT members</li>
          <li>
            Contributed to Facebook group giving advice and suggestions to other
            young women
          </li>
        </ul>
      </Layouts>
    </div>
  );
}
