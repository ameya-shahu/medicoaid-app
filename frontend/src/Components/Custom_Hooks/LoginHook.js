import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/userActions';

const useFormLogin = (callback, validate) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) { 
            event.preventDefault(); 
            dispatch(loginUserAction(values.email, values.password)); 
        }
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useFormLogin;
