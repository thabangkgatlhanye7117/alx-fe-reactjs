import WelcomeMessage from './components/WelcomeMessage.jsx'
import MainContent from './components/MainContent.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx'



function App() {
        return(
        <>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <Counter/>
          <Footer />


        </>
        );

}

export default App

