import WelcomeMessage from './components/WelcomeMessage.jsx'
import MainContent from './components/MainContent.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'



function App() {
        return(
        <>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <UserProfile name = "Buhle" age = {40} bio = "I am a innovator in Software " />
          <Footer />


        </>
        );

}

export default App
