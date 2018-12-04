import Formsy from 'formsy-react';
import React from 'react';
import MyInput from './TextInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = { canSubmit: false };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit(model) {
        console.log(model)
    }

    render() {
        return (
            <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <MyInput
                    label="Offered food"
                    name="food"
                    validations="isExisty"
                    validationError="This is not a valid address"
                    required
                />
                <MyInput
                    label="email"
                    name="email"
                    validations="isEmail"
                    validationError="This is not a valid address"
                    required
                />
                <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
            </Formsy>
        );
    }
}
