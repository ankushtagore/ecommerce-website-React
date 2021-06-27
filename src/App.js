import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

import Homepage from "./Pages/homepage/Homepage.component";
import SignUp from "./components/sign-up/sign-up.component";
import ShopPage from "./Pages/shop/Shop.component";
import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import DesignerYourOutfit from "./Pages/All-Pages/Design-outfit/designoutfit"
import Accessories from "./Pages/All-Pages/Accessories/accesories"
import DesignerAtHome from "./Pages/All-Pages/Designer-at-Home/designerAtHome"
import Jewellery from "./Pages/All-Pages/Jewellery/jewellery"
import Jutti from "./Pages/All-Pages/Jutti/jutti"
import MakeupHair from "./Pages/All-Pages/Makeup-Hair/makeupHair"
import RawFabric from "./Pages/All-Pages/Raw-Fabric/rawfabric"
import StreetWear from "./Pages/All-Pages/Street-Wear/streetWear"
import TailoringService from "./Pages/All-Pages/Tailoring-Service/tailoringService"
import Product from "./Pages/All-Pages/Product/product"
import SendReference from "./Pages/All-Pages/Send-A-Reference/SendReference"
import ThriftStore from "./Pages/All-Pages/Thrift-Store/thriftStore"
import MakeupOptions from "./Pages/All-Pages/Makeup-Hair/makeupOptions";
import Appointment from "./Pages/All-Pages/Makeup-Hair/Appointment";
import ThriftConfirmation from "./Pages/All-Pages/Send-A-Reference/ThriftConfirmation";



class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={SignUp} />

          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />

          <Route path="/designoutfit" component={DesignerYourOutfit} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/tailoring" component={TailoringService} />
          <Route path="/indianjutti" component={Jutti} />
          <Route path="/makeuphair" component={MakeupHair} />
          <Route path="/rawfabric" component={RawFabric} />
          <Route path="/streetwear" component={StreetWear} />
          <Route path="/jewellery" component={Jewellery} />
          <Route path="/designathome" component={DesignerAtHome} />
          <Route path="/product" component={Product} />
          <Route path="/thriftstore" component={ThriftStore} />
          <Route path="/makeupoptions" component={MakeupOptions} />
          <Route path="/appointment" component={Appointment } />
          <Route path="/thriftconfirmation" component={ThriftConfirmation} />
          <Route path="/sendref" component={SendReference} />
          

          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
