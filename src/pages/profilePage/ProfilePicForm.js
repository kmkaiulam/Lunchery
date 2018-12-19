import React from 'react';
import { reduxForm , Field } from 'redux-form';
import Input from '../../components/Input';

// ----- action -----
//import { uploadProfilePicture } from '../../../modules/auth';
import { hasFile} from '../../utils/validators';

export class ProfilePicForm extends React.Component {
    onSubmit(value) {
        const formData = new FormData();
        const fileField = value.profilePicture[0];
        formData.append('profilePicture', fileField);
        Object.defineProperty(formData, 'isFormData', { value: true });
       // this.props.dispatch(uploadProfilePicture(formData));
    };
    render() {
        const { submitting, handleSubmit, pristine, invalid } = this.props;
        return (
            <form 
                onSubmit={handleSubmit(value => this.onSubmit(value))}
                className="upload-pic-form"
                >
                <Field 
                    component={Input}
                    type="file"
                    name="profilePicture"
                    id="profilePicture"
                    disabled={submitting}
                    label="Upload a picture"
                    validate={hasFile}
                />
                <button type="submit" disabled={invalid || pristine}>Submit</button>
            </form>
        )
    }
}

export default reduxForm ({
    form: 'uploadPicture'
})(ProfilePicForm)