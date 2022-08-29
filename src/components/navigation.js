import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false
        }

        this.onNavbarToggleClick = this.onNavbarToggleClick.bind(this)
        this.onHistoryChange = this.onHistoryChange.bind(this)
    }

    onHistoryChange() {
        this.setState({
            showNav: false
        })
    }

    componentDidMount() {
        const { history } = this.props
        this.historyUnlisten = history.listen(this.onHistoryChange)
    }

    componentWillUnmount() {
        if (this.historyUnlisten) {
            this.historyUnlisten()
        }
    }

    toggleShowNav() {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    onNavbarToggleClick() {
        this.toggleShowNav()
    }

    render() {
        let collapseClass = 'collapse navbar-collapse'
        if (this.state.showNav) {
            collapseClass += ' show'
        }

        console.log(this.state);

        return (
            <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
                <Link className="navbar-brand" to={'/'}>Zach Quintana</Link>
                <button className="navbar-toggler"
                        type="button"
                        onClick={this.onNavbarToggleClick}
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={collapseClass}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>
                                Contact
                            </Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to={'/twitter'}>*/}
                        {/*        Twitter*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="http://www.quintana.tech/portfolio" target="_blank">*/}
                        {/*        Portfolio*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        )
    }
}

Navigation.propTypes = {
    history: PropTypes.object
}

const mapStateToProps = state => {
    return {
        showNav: false
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
