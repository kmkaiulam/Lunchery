import React from 'react';
import { reduxForm , Field } from 'redux-form';
import FileUpload from '../../components/FileUpload';

// ----- action -----
import { uploadProfileImage } from '../../modules/auth';
import { hasFile} from '../../utils/validators';

export class ProfileImageForm extends React.Component {
    onSubmit(value) {
        const formData = new FormData();
        const fileField = value.profileImage[0];
        formData.append('profileImage', fileField);
        Object.defineProperty(formData, 'isFormData', { value: true });
        this.props.dispatch(uploadProfileImage(formData));
    };
    render() {
        const { submitting, handleSubmit, pristine, invalid } = this.props;
        return (
            <form 
                onSubmit={handleSubmit(value => this.onSubmit(value))}
                className="profile-image-form"
                >
                <Field 
                    component={FileUpload}
                    type="file"
                    name="profileImage"
                    id="profileImage"
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
    form: 'profileImage'
})(ProfileImageForm)