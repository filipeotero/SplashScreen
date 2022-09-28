
import React from 'react';
import PropTypes from "prop-types";
import './Static.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { warningIcon, checkMarkIcon } from './encodedImages';
/*global chrome*/

const importStatusEnum = {
    none: 1,
    error: 2,
    success: 3
}

class Static extends React.Component {

    constructor() {
        super();

        this.state = {
            importStatus: importStatusEnum.none,
            importSettingsTitle: "Import settings"
        }

        window.setImportStatus = this.setImportStatus.bind(this)
    }

    render() {
        return (
            <Container className='pr-3'>
                <Row className='mt-3'>
                    <button className='primaryButton' onClick={this.signIn}>{this.props.signInTitle}</button>
                </Row>
                <Row className='mt-3'>
                    <button className='secondaryButton' onClick={this.launchDynamo}>{this.props.launchTitle}</button>
                </Row>
                <Row className='mt-3'>
                    <label className='primaryButton px-1'>
                        <input type="file" className='primaryButton' onChange={(e) => this.readFile(e)} />
                        <div className='buttonLabel'>
                            <img src={warningIcon} alt='' hidden={this.state.importStatus !== importStatusEnum.error}></img>
                            <img src={checkMarkIcon}  alt='' hidden={this.state.importStatus !== importStatusEnum.success}></img>
                            <div className='importSettingsText'><span >{this.state.importSettingsTitle}</span></div>
                        </div>
                    </label>
                </Row>
                <Row className='mt-3'>
                    <label className='p-0 checkboxShowScreenAgain '>
                        <input type="checkbox" className='checkBoxStyle' />
                        <span className="checkmark"> {this.props.showScreenAgainLabel}  </span>
                    </label>
                </Row>
            </Container>
        )
    }

    signIn() {
        window.open("https://accounts.autodesk.com/", "_blank");
    }

    launchDynamo() {
        if (chrome.webview !== undefined) {
            chrome.webview.hostObjects.scriptObject.LaunchDynamo();
        }
    }

    readFile(event) {
        let file = event.target.files[0];
        if (file) {
            if (chrome.webview !== undefined) {
                chrome.webview.hostObjects.scriptObject.ImportSettings(file);
            }
        }
    }

    setImportStatus(importStatus) {
        this.setState({
            importStatus: importStatus.status,
            importSettingsTitle: importStatus.description
        });
    }
}

Static.defaultProps = {
    signInTitle: "Sign in",
    launchTitle: "Launch Dynamo",
    showScreenAgainLabel: "Don’t show this screen again"
}

Static.propTypes = {
    signInTitle: PropTypes.string,
    launchTitle: PropTypes.string,
    showScreenAgainLabel: PropTypes.string
};

export default Static;