import logo from './logo.svg';
import './App.css';
import profilePic from './components/Image/unnamed.jpg'
import contactPic from './components/Image/contact.png'
import aboutPic from './components/Image/about.png'
import skilltPic from './components/Image/skill.jpg'
// import profilePic from './components/profilePic';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item-left">
          <div className="profileLogoAndDescription">
            <img src={profilePic}  alt='Avatar'/>
            <br></br>
            <text className='myname'><strong><i>Somnath</i></strong></text><br></br>
            <text>Front End Developer</text>
          </div>
          <div className='aboutLogoAndDescription'>
            <img className="aboutLogo" src={aboutPic} alt='Avatar'/>
            <text className='aboutLogoDescription'><strong>About</strong></text>
          </div>
          <div className='aboutDescription'>
            <text>I am a skilled web developer with experience in HTML, CSS, JavaScript. <br></br>I have knowledge of popular frameworks such as
  React and Bootstrap.</text>
          </div>
          <div className='contactLogoAndDescription'>
            <img className="aboutLogo" src={contactPic} alt='Avatar'/>
            <text className='aboutLogoDescription'><strong>Contact</strong></text>
          </div>
          <div  className='contactDescription'>
            <ol>
              <li><a href="https://www.linkedin.com/in/somnath-yadav-9a48881b9/">LinkedIn</a> </li>
              <li><a href="https://github.com/ysom85">GitHub</a></li>
              <li><a href="https://www.hackerrank.com/somnath85?hr_r=1">HackerRank</a></li>
              <li>Mobile no. 9453658871</li>
            </ol>
          </div>
          <div className='skillLogoAndDescription'>
            <img className="aboutLogo" src={skilltPic} alt='Avatar'/>
            <text className='aboutText'><strong>Skills</strong></text>
          </div>
          <div className='skillDescription'>
          <ol>
              <li>HTML, CSS, Javascript</li>
              <li>ReactJS, Bootstrap</li>
              <li>MongoDB, SQL</li>
              <li>C, C++, Python</li>

            </ol>
          </div>
        </div>
        <div className="flex-item-right">
          <div className="flex-container">  
            <div className='flex-item-up'>
              <div className='projectAndDescription'>
                <text className='aboutText'>Project</text>
              </div>
              <ol>
                <li>Sports Oriented Website using React.js</li> 
                  <div className='aboutSprtsProject'>
                    <ul>
                      <li>Designed and developed a clean and modern website using HTML, CSS and Javascript</li>
                      <li>Mainly worked on video tutorial website page having mainly categorised a set of videos to watch and video turorial dashboard.</li>
                      <li>Utilized reponsive design to ensure compatibility across all devices.</li>
                    </ul>
                  </div>
                <li>Educatinal Institute Website using React.Js</li>
                  <div className='aboutEducationProject'>
                    <ul>
                      <li>I have worked as front end developer in the website Designed for educaion Institute(UMEED).</li>
                      <li>Worked With HTML, CSS, Javascript with React Library.</li>
                      <li>Deployed on GitHub pages via GitHub Actions.</li>
                    </ul>
                  </div>
                <li>Traffic Signs Detector using Python</li>
                  <div className='aboutTrafficProject'>
                    <ul>
                      <li>In Vehicle, To alert a driver for a traffic control symbols if he/she skipped it anyhow.</li>
                      <li>Mainly worked on computer vision technology to generate the body gestures like corners and colours. </li>
                      <li>Utilized responsive design to ensure compatibility across all devices.</li>
                      <li>Deployed on Github pages via github Actions.</li>
                    </ul>
                  </div>
              </ol>
            </div>
            <div className='flex-item-down'>
              <div className='experienceAndDescription'>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
     
  );
    // <div className="App">

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

export default App;
