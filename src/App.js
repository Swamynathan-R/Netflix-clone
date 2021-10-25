// import axios from './axios';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';
import requests from './requests';
import './App.css'

function App() {

  
  return (
    <div className="app">
    <Nav/>
     <Banner/>
    <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title={"Trending Now"} fetchUrl={requests.fetchTrending}/>    
    <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>    
    <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>    
    <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}/>    
    <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}/>    
    <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}/>    
    <Row title={"Documentries"} fetchUrl={requests.fetchDocumentries}/>
       
    </div>
  );
}

export default App;
