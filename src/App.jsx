import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Post from "./components/Post/Post";
import Log from "./components/Auth/Log";
import Sign from "./components/Auth/Sign";

import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Items} />
          <Route path="/post/:id" component={Post} />
        </Switch>
        <Route path="/login" component={Log} />
        <Route path="/sign-up" component={Sign} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
