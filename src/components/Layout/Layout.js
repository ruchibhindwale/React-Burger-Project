import React, {Fragment, Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    toggleSideDrawerHandler = (toggleVal) => {
        this.setState((prevState) => {
            return {showSideDrawer : toggleVal ? toggleVal : !prevState.showSideDrawer}
        })
    }

    render () {
        return (
        <Fragment>
            <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
            <SideDrawer click={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} closed={() => this.sideDrawerClosedHandler(false)}/>
            <main className={classes.Content}>{this.props.children}</main>
        </Fragment>
        )
    }
}

export default Layout;