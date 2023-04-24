import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Container from './components/Container';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// middleware that attaches JWT token to every request
const authLink = setContext((_, { headers }) => {

    // grabs token from local storage
    const token = localStorage.getItem('id_token');
  
    // return the headers
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
})
  
  // variable for graphql endpoint
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const client = new ApolloClient({
    
    // use authLink middleware 
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
