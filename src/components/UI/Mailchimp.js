import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "@emotion/styled";
import {css, jsx} from '@emotion/react';
import React from "react"
import IcArrowRight from '../../vectors/IcArrowRight.svg'


const OuterWrapper = styled("div")`
width: ${props => props.mobile
    ? "100%"
    : "30vw"};
max-width: 700px;
`
const EmailFieldWrapper = styled("div")`
width: 100%;
display: flex;
height: 30px;
`
const EmailField = styled("input")`
width: 100%;
height: 100%;
border: none;
outline: none;
font-size: 2.5rem;

&:focus {
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: transparent;
} 
}


&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
color: black;
}
`

const SendButton = styled("button")`
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
`

const Hr = styled("div")`
background: ${props => props.bg
    ? props.bg
    : "black"};
height: 1px;
margin-top: 10px;
`

export default class MailChimpForm extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            result: null,
            visible: true
        }

    }
    _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        this.setState({
            visible: this.state.result.result !== "success"
        })
    }
    handleChange = event => {
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this._handleSubmit}
                    css={css `display: ${this.state.visible
                    ? "auto"
                    : "none"};`}>
                    <OuterWrapper mobile={this.props.mobile}>
                        <EmailFieldWrapper>
                            <EmailField
                                label="Email"
                                type="email"
                                placeholder="E-Mail"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleChange}/>
                            <SendButton variant="contained" color="primary" label="Submit" type="submit">
                                <IcArrowRight css={css ``}/>
                            </SendButton>
                        </EmailFieldWrapper>

                        <Hr/>
                    </OuterWrapper>

                    <br/>

                </form>

                <h3
                    css={css `display: ${this.state.visible
                    ? "none"
                    : "auto"};`}>{this.state.result && this.state.result.msg}
                </h3>
            </div>
        )
    }
}